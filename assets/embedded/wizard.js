(function () {
    var wizard = {}

    /**
     * Initialize kyc iframe
     */
    wizard.render = function(config) {
        var parent = document.querySelector(config.selector)
        if (!parent) {
            throw new Error('Element ' + config.selector + ' not found')
        }
        var host = config.host || 'https://app.aerapass.io/'
        var iframe = document.createElement('iframe')
        iframe.setAttribute('src', host + '/embedded/wizard')
        iframe.setAttribute('height', config.height || '775px')
        iframe.setAttribute('width', config.width || '500px')
        iframe.setAttribute('allow', 'camera')
        window.addEventListener('message', function(event) {
            if (event.origin !== host) {
                return
            }
            switch (event.data.type) {
                case 'aerapass.wizard.ready':
                    iframe.contentWindow.postMessage({ type: 'aerapass.wizard.token', token: config.token }, '*')
                    break
                case 'aerapass.wizard.complete':
                    if (config.onComplete && typeof config.onComplete === 'function' && event.data.status === 'complete') {
                        config.onComplete()
                    }
                    break
            }
        })
        parent.appendChild(iframe)
    }
    window.Aerapass = { Wizard: wizard }
})()
