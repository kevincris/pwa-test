(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["embedded-embedded-module"], {
    /***/
    "3bBb":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/embedded/wizard/embedded-wizard.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bBb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wizard-container\">\n    <a [routerLink]=\"['/']\">\n        <img class=\"logo\" src=\"/img/brand/logo-white-horizontal.svg\" />\n    </a>\n    <div id=\"bas-widget-container\" [style.visibility]=\"!running\"></div>\n</div>\n";
      /***/
    },

    /***/
    "6Vop":
    /*!****************************************************************!*\
      !*** ./src/app/embedded/wizard/embedded-wizard.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function Vop(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".wizard-container {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background-color: #3983ec;\n  height: 100%;\n}\n\n.logo {\n  width: 194px;\n  margin: 1.5rem 1.5rem auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VtYmVkZGVkLXdpemFyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoiZW1iZWRkZWQtd2l6YXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpemFyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk4M2VjO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDE5NHB4O1xuICBtYXJnaW46IDEuNXJlbSAxLjVyZW0gYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "c8qA":
    /*!*********************************************!*\
      !*** ./src/app/embedded/embedded.module.ts ***!
      \*********************************************/

    /*! exports provided: EmbeddedModule */

    /***/
    function c8qA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmbeddedModule", function () {
        return EmbeddedModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _common_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/common.module */
      "a6Df");
      /* harmony import */


      var _kyc_wizard_kyc_wizard_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../kyc-wizard/kyc-wizard.module */
      "QaUN");
      /* harmony import */


      var _embedded_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./embedded-routing.module */
      "w8wQ");
      /* harmony import */


      var _wizard_embedded_wizard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./wizard/embedded-wizard.component */
      "opFz");

      var EmbeddedModule = /*#__PURE__*/_createClass(function EmbeddedModule() {
        _classCallCheck(this, EmbeddedModule);
      });

      EmbeddedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_wizard_embedded_wizard_component__WEBPACK_IMPORTED_MODULE_5__["EmbeddedWizardComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _embedded_routing_module__WEBPACK_IMPORTED_MODULE_4__["EmbeddedRoutingModule"], _kyc_wizard_kyc_wizard_module__WEBPACK_IMPORTED_MODULE_3__["KycWizardModule"]]
      })], EmbeddedModule);
      /***/
    },

    /***/
    "opFz":
    /*!**************************************************************!*\
      !*** ./src/app/embedded/wizard/embedded-wizard.component.ts ***!
      \**************************************************************/

    /*! exports provided: EmbeddedWizardComponent */

    /***/
    function opFz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmbeddedWizardComponent", function () {
        return EmbeddedWizardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_embedded_wizard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./embedded-wizard.component.html */
      "3bBb");
      /* harmony import */


      var _embedded_wizard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./embedded-wizard.component.scss */
      "6Vop");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var js_base64__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! js-base64 */
      "52Kp");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_common_services_basis_id_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/common/services/basis-id.service */
      "yeWx");
      /* harmony import */


      var src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/common/services/confirmation.service */
      "fTmd");
      /* harmony import */


      var src_app_common_services_intercom_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/common/services/intercom.service */
      "rSOl");
      /* harmony import */


      var src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/common/services/session.service */
      "6g7h");

      var EmbeddedWizardComponent = /*#__PURE__*/function () {
        function EmbeddedWizardComponent(basisId, confirmation, http, intercom, session, translate) {
          _classCallCheck(this, EmbeddedWizardComponent);

          this.basisId = basisId;
          this.confirmation = confirmation;
          this.http = http;
          this.intercom = intercom;
          this.session = session;
          this.translate = translate;
          this.running = false;
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
        }

        _createClass(EmbeddedWizardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!!this.session.user) {
              this.session.logout();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            window.addEventListener('message', function (event) {
              if (!event.data.token) {
                return;
              }

              if (event.data.type === 'aerapass.wizard.token') {
                var payload = _this.parseToken(event.data.token);

                _this.token = event.data.token;
                _this.verificationId = payload.verificationId;

                _this.initBasisId(payload.userID);
              }
            });
            window.parent.postMessage({
              type: 'aerapass.wizard.ready'
            }, '*');
            this.intercom.shutdown();
            this.subscriptions.add(this.basisId.onSuccess.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(function () {
              return _this.http.post("/verifications/".concat(_this.verificationId, "/set-completed"), {
                completed: true
              }, {
                headers: {
                  Authorization: "Bearer ".concat(_this.token)
                }
              });
            })).subscribe(function () {
              window.parent.postMessage({
                type: 'aerapass.wizard.complete',
                status: 'complete'
              }, '*');
            }));
            this.subscriptions.add(this.basisId.onError.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(function () {
              return _this.confirmation.show({
                type: 'warning',
                text: _this.translate.instant('common.there-was-a-problem-in-verification'),
                showCancel: false,
                confirmText: _this.translate.instant('common.relaod-page')
              });
            })).subscribe(function () {
              location.reload();
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "initBasisId",
          value: function initBasisId(userId) {
            var _this2 = this;

            this.basisId.init().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(function () {
              return _this2.http.post("/verifications", {
                user: {
                  id: userId
                }
              }, {
                headers: {
                  Authorization: "Bearer ".concat(_this2.token)
                }
              });
            })).subscribe(function (verification) {
              _this2.running = true;

              _this2.basisId.loadWidget({
                key: verification.user.type === 'business' ? window.BASIS_ID_KYB_KEY : window.BASIS_ID_KYC_KEY,
                formToken: verification.formToken
              });
            });
          }
        }, {
          key: "parseToken",
          value: function parseToken(token) {
            return JSON.parse(js_base64__WEBPACK_IMPORTED_MODULE_6__["Base64"].decode(token.split('.')[1]));
          }
        }]);

        return EmbeddedWizardComponent;
      }();

      EmbeddedWizardComponent.ctorParameters = function () {
        return [{
          type: src_app_common_services_basis_id_service__WEBPACK_IMPORTED_MODULE_9__["BasisIdService"]
        }, {
          type: src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmationService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: src_app_common_services_intercom_service__WEBPACK_IMPORTED_MODULE_11__["IntercomService"]
        }, {
          type: src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_12__["SessionService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      };

      EmbeddedWizardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'embedded-wizard',
        template: _raw_loader_embedded_wizard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_embedded_wizard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EmbeddedWizardComponent);
      /***/
    },

    /***/
    "w8wQ":
    /*!*****************************************************!*\
      !*** ./src/app/embedded/embedded-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: EmbeddedRoutingModule */

    /***/
    function w8wQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmbeddedRoutingModule", function () {
        return EmbeddedRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _wizard_embedded_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./wizard/embedded-wizard.component */
      "opFz");

      var routes = [{
        path: 'wizard',
        component: _wizard_embedded_wizard_component__WEBPACK_IMPORTED_MODULE_3__["EmbeddedWizardComponent"]
      }];

      var EmbeddedRoutingModule = /*#__PURE__*/_createClass(function EmbeddedRoutingModule() {
        _classCallCheck(this, EmbeddedRoutingModule);
      });

      EmbeddedRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EmbeddedRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=embedded-embedded-module-es5.js.map