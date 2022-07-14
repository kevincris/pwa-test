(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~user-spot-trading-user-spot-trading-module~user-trades-user-trades-module"], {
    /***/
    "z+xu":
    /*!***************************************************************************!*\
      !*** ./node_modules/ngx-countdown/__ivy_ngcc__/fesm2015/ngx-countdown.js ***!
      \***************************************************************************/

    /*! exports provided: CountdownComponent, CountdownGlobalConfig, CountdownModule, CountdownStatus, CountdownTimer */

    /***/
    function zXu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountdownComponent", function () {
        return CountdownComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountdownGlobalConfig", function () {
        return CountdownGlobalConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountdownModule", function () {
        return CountdownModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountdownStatus", function () {
        return CountdownStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountdownTimer", function () {
        return CountdownTimer;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CountdownComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.i.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function CountdownComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          $implicit: a0
        };
      };

      var CountdownStatus;

      (function (CountdownStatus) {
        CountdownStatus[CountdownStatus["ing"] = 0] = "ing";
        CountdownStatus[CountdownStatus["pause"] = 1] = "pause";
        CountdownStatus[CountdownStatus["stop"] = 2] = "stop";
        CountdownStatus[CountdownStatus["done"] = 3] = "done";
      })(CountdownStatus || (CountdownStatus = {}));

      var CountdownTimer = /*#__PURE__*/function () {
        function CountdownTimer(ngZone) {
          _classCallCheck(this, CountdownTimer);

          this.ngZone = ngZone;
          this.fns = [];
          this.commands = [];
          this.nextTime = 0;
          this.ing = false;
        }

        _createClass(CountdownTimer, [{
          key: "start",
          value: function start() {
            var _this = this;

            if (this.ing === true) {
              return;
            }

            this.ing = true;
            this.nextTime = +new Date();
            this.ngZone.runOutsideAngular(function () {
              _this.process();
            });
          }
        }, {
          key: "process",
          value: function process() {
            var _this2 = this;

            while (this.commands.length) {
              this.commands.shift()();
            }

            var diff = +new Date() - this.nextTime;
            var count = 1 + Math.floor(diff / 100);
            diff = 100 - diff % 100;
            this.nextTime += 100 * count;

            for (var i = 0, len = this.fns.length; i < len; i += 2) {
              var frequency = this.fns[i + 1]; // 100/s

              if (0 === frequency) {
                this.fns[i](count); // 1000/s
              } else {
                // 先把末位至0，再每次加2
                frequency += 2 * count - 1;
                var step = Math.floor(frequency / 20);

                if (step > 0) {
                  this.fns[i](step);
                } // 把末位还原成1


                this.fns[i + 1] = frequency % 20 + 1;
              }
            }

            if (!this.ing) {
              return;
            }

            setTimeout(function () {
              return _this2.process();
            }, diff);
          }
        }, {
          key: "add",
          value: function add(fn, frequency) {
            var _this3 = this;

            this.commands.push(function () {
              _this3.fns.push(fn);

              _this3.fns.push(frequency === 1000 ? 1 : 0);

              _this3.ing = true;
            });
            return this;
          }
        }, {
          key: "remove",
          value: function remove(fn) {
            var _this4 = this;

            this.commands.push(function () {
              var i = _this4.fns.indexOf(fn);

              if (i !== -1) {
                _this4.fns.splice(i, 2);
              }

              _this4.ing = _this4.fns.length > 0;
            });
            return this;
          }
        }]);

        return CountdownTimer;
      }();

      CountdownTimer.ɵfac = function CountdownTimer_Factory(t) {
        return new (t || CountdownTimer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      CountdownTimer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CountdownTimer,
        factory: CountdownTimer.ɵfac
      });

      CountdownTimer.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownTimer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, null);
      })(); // tslint:disable: no-inferrable-types


      var CountdownGlobalConfig = /*#__PURE__*/_createClass(function CountdownGlobalConfig(locale) {
        var _this5 = this;

        _classCallCheck(this, CountdownGlobalConfig);

        this.locale = locale;
        this.demand = false;
        this.leftTime = 0;
        this.format = 'HH:mm:ss';
        this.timezone = '+0000';

        this.formatDate = function (_ref) {
          var date = _ref.date,
              formatStr = _ref.formatStr,
              timezone = _ref.timezone;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(date), formatStr, _this5.locale, timezone || _this5.timezone || '+0000');
        };
      });

      CountdownGlobalConfig.ɵfac = function CountdownGlobalConfig_Factory(t) {
        return new (t || CountdownGlobalConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]));
      };

      CountdownGlobalConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function CountdownGlobalConfig_Factory() {
          return new CountdownGlobalConfig(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]));
        },
        token: CountdownGlobalConfig,
        providedIn: "root"
      });

      CountdownGlobalConfig.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownGlobalConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }]
          }];
        }, null);
      })();

      var CountdownComponent = /*#__PURE__*/function () {
        function CountdownComponent(locale, timer, defCog, cdr, ngZone) {
          _classCallCheck(this, CountdownComponent);

          this.locale = locale;
          this.timer = timer;
          this.defCog = defCog;
          this.cdr = cdr;
          this.ngZone = ngZone;
          this.frequency = 1000;
          this._notify = {};
          this.status = CountdownStatus.ing;
          this.isDestroy = false;
          this.i = {};
          this.left = 0;
          this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(CountdownComponent, [{
          key: "config",
          get: function get() {
            return this._config;
          }
          /**
           * Start countdown, you must manually call when `demand: false`
           */
          ,
          set: function set(i) {
            if (i.notify != null && !Array.isArray(i.notify) && i.notify > 0) {
              i.notify = [i.notify];
            }

            this._config = i;
          }
        }, {
          key: "begin",
          value: function begin() {
            this.status = CountdownStatus.ing;
            this.callEvent('start');
          }
          /**
           * Restart countdown
           */

        }, {
          key: "restart",
          value: function restart() {
            if (this.status !== CountdownStatus.stop) {
              this.destroy();
            }

            this.init();
            this.callEvent('restart');
          }
          /**
           * Stop countdown, must call `restart` when stopped, it's different from pause, unable to recover
           */

        }, {
          key: "stop",
          value: function stop() {
            if (this.status === CountdownStatus.stop) {
              return;
            }

            this.status = CountdownStatus.stop;
            this.destroy();
            this.callEvent('stop');
          }
          /**
           * Pause countdown, you can use `resume` to recover again
           */

        }, {
          key: "pause",
          value: function pause() {
            if (this.status === CountdownStatus.stop || this.status === CountdownStatus.pause) {
              return;
            }

            this.status = CountdownStatus.pause;
            this.callEvent('pause');
          }
          /**
           * Resume countdown
           */

        }, {
          key: "resume",
          value: function resume() {
            if (this.status === CountdownStatus.stop || this.status !== CountdownStatus.pause) {
              return;
            }

            this.status = CountdownStatus.ing;
            this.callEvent('resume');
          }
        }, {
          key: "callEvent",
          value: function callEvent(action) {
            this.event.emit({
              action: action,
              left: this.left,
              status: this.status,
              text: this.i.text
            });
          }
        }, {
          key: "init",
          value: function init() {
            var _this6 = this;

            var locale = this.locale,
                defCog = this.defCog;
            var config = this.config = Object.assign(Object.assign(Object.assign({}, new CountdownGlobalConfig(locale)), defCog), this.config); // tslint:disable-next-line: no-bitwise

            var frq = this.frequency = ~config.format.indexOf('S') ? 100 : 1000;
            this.status = config.demand ? CountdownStatus.pause : CountdownStatus.ing;
            this.getLeft(); // bind reflow to me

            var _reflow = this.reflow;

            this.reflow = function () {
              var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
              var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
              return _reflow.apply(_this6, [count, force]);
            };

            if (Array.isArray(config.notify)) {
              config.notify.forEach(function (time) {
                if (time < 1) {
                  throw new Error("The notify config must be a positive integer.");
                }

                time = time * 1000;
                time = time - time % frq;
                _this6._notify[time] = true;
              });
            }

            this.timer.add(this.reflow, frq).start();
            this.reflow(0, true);
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.timer.remove(this.reflow);
            return this;
          }
          /**
           * 更新时钟
           */

        }, {
          key: "reflow",
          value: function reflow() {
            var _this7 = this;

            var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (this.isDestroy) {
              return;
            }

            var status = this.status,
                config = this.config,
                _notify = this._notify;

            if (!force && status !== CountdownStatus.ing) {
              return;
            }

            var value = this.left = this.left - this.frequency * count;

            if (value < 1) {
              value = 0;
            }

            this.i = {
              value: value,
              text: config.formatDate({
                date: value,
                formatStr: config.format,
                timezone: config.timezone
              })
            };

            if (typeof config.prettyText === 'function') {
              this.i.text = config.prettyText(this.i.text);
            }

            this.cdr.detectChanges();

            if (config.notify === 0 || _notify[value]) {
              this.ngZone.run(function () {
                _this7.callEvent('notify');
              });
            }

            if (value === 0) {
              this.ngZone.run(function () {
                _this7.status = CountdownStatus.done;

                _this7.destroy();

                _this7.callEvent('done');
              });
            }
          }
          /**
           * 获取倒计时剩余帧数
           */

        }, {
          key: "getLeft",
          value: function getLeft() {
            var config = this.config,
                frequency = this.frequency;
            var left = config.leftTime * 1000;
            var end = config.stopTime;

            if (!left && end) {
              left = end - new Date().getTime();
            }

            this.left = left - left % frequency;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();

            if (!this.config.demand) {
              this.begin();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.isDestroy = true;
            this.destroy();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!changes.config.firstChange) {
              this.restart();
            }
          }
        }]);

        return CountdownComponent;
      }();

      CountdownComponent.ɵfac = function CountdownComponent_Factory(t) {
        return new (t || CountdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CountdownTimer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CountdownGlobalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      CountdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CountdownComponent,
        selectors: [["countdown"]],
        hostVars: 2,
        hostBindings: function CountdownComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("count-down", true);
          }
        },
        inputs: {
          config: "config",
          render: "render"
        },
        outputs: {
          event: "event"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 5,
        consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]],
        template: function CountdownComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CountdownComponent_ng_container_0_Template, 2, 1, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CountdownComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.render);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.render)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.i));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]],
        encapsulation: 2,
        changeDetection: 0
      });

      CountdownComponent.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
          }]
        }, {
          type: CountdownTimer
        }, {
          type: CountdownGlobalConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      CountdownComponent.propDecorators = {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        render: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'countdown',
            template: "\n    <ng-container *ngIf=\"!render\">\n      <span [innerHTML]=\"i.text\"></span>\n    </ng-container>\n    <ng-container *ngTemplateOutlet=\"render; context: { $implicit: i }\"></ng-container>\n  ",
            host: {
              '[class.count-down]': 'true'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }]
          }, {
            type: CountdownTimer
          }, {
            type: CountdownGlobalConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          render: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var CountdownModule = /*#__PURE__*/_createClass(function CountdownModule() {
        _classCallCheck(this, CountdownModule);
      });

      CountdownModule.ɵfac = function CountdownModule_Factory(t) {
        return new (t || CountdownModule)();
      };

      CountdownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CountdownModule
      });
      CountdownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [CountdownTimer],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CountdownModule, {
          declarations: function declarations() {
            return [CountdownComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [CountdownComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            providers: [CountdownTimer],
            declarations: [CountdownComponent],
            exports: [CountdownComponent]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-countdown.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~admin-admin-module~user-spot-trading-user-spot-trading-module~user-trades-user-trades-module-es5.js.map