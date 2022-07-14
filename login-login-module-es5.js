(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "+ztC":
    /*!***********************************************************************!*\
      !*** ./src/app/login/restore-password/restore-password.auth-guard.ts ***!
      \***********************************************************************/

    /*! exports provided: RestorePasswordAuthGuard */

    /***/
    function ztC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestorePasswordAuthGuard", function () {
        return RestorePasswordAuthGuard;
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

      var RestorePasswordAuthGuard = /*#__PURE__*/function () {
        function RestorePasswordAuthGuard(router) {
          _classCallCheck(this, RestorePasswordAuthGuard);

          this.router = router;
        }

        _createClass(RestorePasswordAuthGuard, [{
          key: "canActivate",
          value: function canActivate(route) {
            return route.queryParamMap.has('token') ? true : this.router.parseUrl('/login');
          }
        }]);

        return RestorePasswordAuthGuard;
      }();

      RestorePasswordAuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      RestorePasswordAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], RestorePasswordAuthGuard);
      /***/
    },

    /***/
    "99U3":
    /*!**********************************************************************!*\
      !*** ./src/app/login/restore-password/restore-password.component.ts ***!
      \**********************************************************************/

    /*! exports provided: RestorePasswordComponent */

    /***/
    function U3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestorePasswordComponent", function () {
        return RestorePasswordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_restore_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./restore-password.component.html */
      "nxSN");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/pro-light-svg-icons */
      "WE53");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var date_fns_isBefore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! date-fns/isBefore */
      "dndX");
      /* harmony import */


      var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! date-fns/parseISO */
      "4+6U");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _common_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../common/services/alert.service */
      "0ZVX");
      /* harmony import */


      var _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../common/services/core/user.service */
      "AxWo");
      /* harmony import */


      var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../common/services/toastr.service */
      "N/y2");
      /* harmony import */


      var _login_alerts_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../login-alerts.service */
      "A3rs");

      var RestorePasswordComponent = /*#__PURE__*/function () {
        function RestorePasswordComponent(http, userService, toastr, loginAlerts, alerts, route, router, translate) {
          _classCallCheck(this, RestorePasswordComponent);

          this.http = http;
          this.userService = userService;
          this.toastr = toastr;
          this.loginAlerts = loginAlerts;
          this.alerts = alerts;
          this.route = route;
          this.router = router;
          this.translate = translate;
          this.isLoading = false;
          this.requiredPasswordStrength = 60;
          this.passwordStrength = 0;
          this.faSyncAlt = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSyncAlt"];
          this.faLockAlt = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLockAlt"];
        }

        _createClass(RestorePasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParamMap.subscribe(function (params) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        // this state can only be activated if the token is set, so we can assume it's set
                        this.token = params.get('token');
                        this.http.get("/activations/".concat(this.token)).subscribe(function (activation) {
                          _this2.activation = activation;

                          if (_this2.activation.activated || Object(date_fns_isBefore__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(date_fns_parseISO__WEBPACK_IMPORTED_MODULE_8__["default"])(_this2.activation.expiryDate), new Date())) {
                            _this2.loginAlerts.disposables.add(_this2.alerts.add({
                              message: _this2.translate.instant('common.invalid-password-reset-token'),
                              severity: 'danger'
                            })); // eslint-disable-next-line @typescript-eslint/no-floating-promises


                            _this2.router.navigate(['/login']);
                          }
                        }, function (error) {
                          if (error.status === 404) {
                            _this2.loginAlerts.disposables.add(_this2.alerts.add({
                              message: _this2.translate.instant('common.password-reset-token-not-found'),
                              severity: 'danger'
                            })); // eslint-disable-next-line @typescript-eslint/no-floating-promises


                            _this2.router.navigate(['/login']);
                          }
                        });

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this3 = this;

            if (this.passwordForm.invalid) {
              return;
            }

            this.isLoading = true;
            this.userService.changePassword(this.activation.user.id, this.password, {
              'X-Activation-Token': this.token
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this3.isLoading = false;
            })).subscribe(function () {
              _this3.toastr.success(_this3.translate.instant('restore-password.you-can-now-login-using-your-new-password'), _this3.translate.instant('common.password-reset'));

              _this3.loginAlerts.disposables.add(_this3.alerts.add({
                message: "".concat(_this3.translate.instant('common.password-reset'), ". ").concat(_this3.translate.instant('restore-password.you-can-now-login-using-your-new-password')),
                severity: 'success'
              }));

              return _this3.router.navigate(['/login']);
            }, function () {
              _this3.loginAlerts.disposables.add(_this3.alerts.add({
                message: _this3.translate.instant('common.could-not-reset-password'),
                severity: 'danger'
              }));
            });
          }
        }]);

        return RestorePasswordComponent;
      }();

      RestorePasswordComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]
        }, {
          type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]
        }, {
          type: _login_alerts_service__WEBPACK_IMPORTED_MODULE_13__["LoginAlertsService"]
        }, {
          type: _common_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }];
      };

      RestorePasswordComponent.propDecorators = {
        passwordForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['passwordForm']
        }]
      };
      RestorePasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'restore-password',
        template: _raw_loader_restore_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], RestorePasswordComponent);
      /***/
    },

    /***/
    "A3rs":
    /*!***********************************************!*\
      !*** ./src/app/login/login-alerts.service.ts ***!
      \***********************************************/

    /*! exports provided: LoginAlertsService */

    /***/
    function A3rs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginAlertsService", function () {
        return LoginAlertsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoginAlertsService = /*#__PURE__*/_createClass(function LoginAlertsService() {
        _classCallCheck(this, LoginAlertsService);

        this.disposables = new Set();
      });

      LoginAlertsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], LoginAlertsService);
      /***/
    },

    /***/
    "D5hM":
    /*!*******************************************!*\
      !*** ./src/app/login/login.auth-guard.ts ***!
      \*******************************************/

    /*! exports provided: LoginAuthGuard */

    /***/
    function D5hM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginAuthGuard", function () {
        return LoginAuthGuard;
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


      var _common_services_activation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/services/activation.service */
      "OFnc");
      /* harmony import */


      var _common_services_login_redirect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/services/login-redirect.service */
      "KTeq");
      /* harmony import */


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/services/session.service */
      "6g7h");

      var LoginAuthGuard = /*#__PURE__*/function () {
        function LoginAuthGuard(session, activationService, redirectService, router) {
          _classCallCheck(this, LoginAuthGuard);

          this.session = session;
          this.activationService = activationService;
          this.redirectService = redirectService;
          this.router = router;
        }

        _createClass(LoginAuthGuard, [{
          key: "canActivate",
          value: function canActivate(route) {
            var _this4 = this;

            if (route.queryParamMap.has('userId') && route.queryParamMap.has('activationToken')) {
              this.activationService.activate(route.queryParamMap.get('userId'), route.queryParamMap.get('activationToken'), route.queryParamMap.get('email'));

              if (this.session.isAuthenticated()) {
                return this.router.parseUrl('/dashboard');
              } else {
                // // clear state params
                return this.router.parseUrl('/login');
              }
            } else if (this.session.isAuthenticated()) {
              return this.redirectService.redirect(route, true).toPromise() // errors are handled before, don't pass the error to router but proceed with app flow
              ["catch"](function () {
                return true;
              }).then(function () {
                return _this4.router.parseUrl('/dashboard');
              });
            }

            return true;
          }
        }]);

        return LoginAuthGuard;
      }();

      LoginAuthGuard.ctorParameters = function () {
        return [{
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]
        }, {
          type: _common_services_activation_service__WEBPACK_IMPORTED_MODULE_3__["ActivationService"]
        }, {
          type: _common_services_login_redirect_service__WEBPACK_IMPORTED_MODULE_4__["LoginRedirectService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      LoginAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], LoginAuthGuard);
      /***/
    },

    /***/
    "GAZt":
    /*!********************************************************************!*\
      !*** ./src/app/login/forgot-password/forgot-password.component.ts ***!
      \********************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function GAZt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "Q5JI");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/pro-light-svg-icons */
      "WE53");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _common_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../common/services/alert.service */
      "0ZVX");
      /* harmony import */


      var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../common/services/toastr.service */
      "N/y2");
      /* harmony import */


      var _login_alerts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../login-alerts.service */
      "A3rs");

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent(http, toastr, alerts, loginAlerts, router, translate) {
          _classCallCheck(this, ForgotPasswordComponent);

          this.http = http;
          this.toastr = toastr;
          this.alerts = alerts;
          this.loginAlerts = loginAlerts;
          this.router = router;
          this.translate = translate;
          this.isLoading = false;
          this.faEnvelope = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEnvelope"];
        }

        _createClass(ForgotPasswordComponent, [{
          key: "submit",
          value: function submit() {
            var _this5 = this;

            if (this.forgotPasswordForm.invalid) {
              return;
            }

            this.isLoading = true;
            this.http.post('/users', {
              id: Math.floor(Math.random() * 10000),
              jsonrpc: '2.0',
              method: 'resetPassword',
              params: {
                email: this.email
              }
            }, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json-rpc'
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this5.isLoading = false;
            })).subscribe(function () {
              _this5.toastr.success(_this5.translate.instant('common.instructions-sent'));

              _this5.loginAlerts.disposables.add(_this5.alerts.add({
                severity: 'success',
                message: _this5.translate.instant('common.check-your-mailbox')
              }));

              return _this5.router.navigate(['/login']);
            });
          }
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]
        }, {
          type: _common_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
        }, {
          type: _login_alerts_service__WEBPACK_IMPORTED_MODULE_10__["LoginAlertsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }];
      };

      ForgotPasswordComponent.propDecorators = {
        forgotPasswordForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['forgotPasswordForm']
        }]
      };
      ForgotPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'forgot-password',
        template: _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ForgotPasswordComponent);
      /***/
    },

    /***/
    "KTeq":
    /*!***********************************************************!*\
      !*** ./src/app/common/services/login-redirect.service.ts ***!
      \***********************************************************/

    /*! exports provided: RedirectStrategy, LoginRedirectService */

    /***/
    function KTeq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedirectStrategy", function () {
        return RedirectStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginRedirectService", function () {
        return LoginRedirectService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../welcome/welcome.component */
      "/olc");
      /* harmony import */


      var _session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./session.service */
      "6g7h");

      var RedirectStrategy;

      (function (RedirectStrategy) {
        RedirectStrategy["DASHBOARD"] = "dashboard";
        RedirectStrategy["PREVIOUS_STATE"] = "previous-state";
        RedirectStrategy["VERIFICATION"] = "verification";
      })(RedirectStrategy || (RedirectStrategy = {}));

      var LoginRedirectService = /*#__PURE__*/function () {
        function LoginRedirectService(router, session, ngbModal, http) {
          _classCallCheck(this, LoginRedirectService);

          this.router = router;
          this.session = session;
          this.ngbModal = ngbModal;
          this.http = http;
        }

        _createClass(LoginRedirectService, [{
          key: "redirect",
          value: function redirect(route) {
            var _this6 = this;

            var ignoreWelcome = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
              return !_this6.session.user.approvedAt ? RedirectStrategy.DASHBOARD : route && route.queryParamMap.has('redirect') && !['/', '/login'].includes(route.queryParamMap.get('redirect')) ? RedirectStrategy.PREVIOUS_STATE : RedirectStrategy.DASHBOARD;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(function (strategy) {
              switch (strategy) {
                case RedirectStrategy.PREVIOUS_STATE:
                  var targetState = route.queryParamMap.get('redirect');
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(_this6.router.navigate([targetState]));

                default:
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(_this6.router.navigate(['/dashboard'])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
                    if (!ignoreWelcome && (!_this6.session.user.approvedAt || _this6.session.user.status === 'pending')) {
                      _this6.ngbModal.open(_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"], {
                        windowClass: 'modal-primary'
                      });
                    }
                  }));
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
              return undefined;
            }));
          }
        }]);

        return LoginRedirectService;
      }();

      LoginRedirectService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      LoginRedirectService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], LoginRedirectService);
      /***/
    },

    /***/
    "OFnc":
    /*!*******************************************************!*\
      !*** ./src/app/common/services/activation.service.ts ***!
      \*******************************************************/

    /*! exports provided: ActivationService */

    /***/
    function OFnc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivationService", function () {
        return ActivationService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./alert.service */
      "0ZVX");
      /* harmony import */


      var _logout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./logout.service */
      "2kWO");
      /* harmony import */


      var _session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./session.service */
      "6g7h");
      /* harmony import */


      var _token_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./token.service */
      "JdTs");

      var ActivationService = /*#__PURE__*/function () {
        function ActivationService(http, alertService, router, session, logoutService, tokenService) {
          _classCallCheck(this, ActivationService);

          this.http = http;
          this.alertService = alertService;
          this.router = router;
          this.session = session;
          this.logoutService = logoutService;
          this.tokenService = tokenService;
        }

        _createClass(ActivationService, [{
          key: "activate",
          value: function activate(userId, activationToken, email) {
            var _this7 = this;

            var disposables = new Set();
            (this.session.isAuthenticated() && userId && this.session.user.id !== userId ? this.logoutService.logout() : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function () {
              return _this7.http.post(email ? "/users/".concat(userId, "/change-email") : "/users/".concat(userId, "/change-status"), email ? {
                email: email
              } : {
                status: 'active'
              }, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                  'X-Activation-Token': activationToken,
                  'Content-Type': 'application/json'
                })
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function () {
                return userId && _this7.session.hasValidRefreshToken() ? _this7.tokenService.refresh({
                  email: email
                }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
                  return undefined;
                })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
                disposables.add(_this7.alertService.add({
                  severity: 'success',
                  message: email ? 'You have successfully changed your email address.' : 'Your email is confirmed, please <b>login to continue</b> the account opening process.'
                }));
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                disposables.add(_this7.alertService.add({
                  severity: 'danger',
                  message: error.message
                }));
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined);
              }));
            })).subscribe(function () {
              // clear alerts
              _this7.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) {
                return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"];
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function () {
                var _iterator = _createForOfIteratorHelper(disposables),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var disposable = _step.value;
                    disposable.dispose();
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              });
            });
          }
        }]);

        return ActivationService;
      }();

      ActivationService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]
        }, {
          type: _logout_service__WEBPACK_IMPORTED_MODULE_7__["LogoutService"]
        }, {
          type: _token_service__WEBPACK_IMPORTED_MODULE_9__["TokenService"]
        }];
      };

      ActivationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], ActivationService);
      /***/
    },

    /***/
    "Q5JI":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/forgot-password/forgot-password.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Q5JI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card shadow b-a-0 e2e-forgot-password\">\n    <div class=\"card-body\">\n        <h3 class=\"text-primary mb-1\">{{ 'common.forgot-password' | translate }}</h3>\n        <p class=\"text-custom\">{{ 'common.enter-your-email-to-reset' | translate }}</p>\n        <form #forgotPasswordForm=\"ngForm\" class=\"form-validation\" (ngSubmit)=\"submit()\" novalidate>\n            <div class=\"form-group\">\n                <div class=\"input-group input-group-lg\">\n                    <span class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                            <fa-icon [icon]=\"faEnvelope\"></fa-icon>\n                        </span>\n                    </span>\n                    <input\n                        type=\"email\"\n                        class=\"form-control\"\n                        [placeholder]=\"'common.email' | translate\"\n                        [(ngModel)]=\"email\"\n                        autocomplete=\"email\"\n                        #emailInput=\"ngModel\"\n                        id=\"email\"\n                        name=\"email\"\n                        [email]=\"true\"\n                        required\n                    />\n                </div>\n                <div *ngIf=\"emailInput.invalid && (forgotPasswordForm.submitted || emailInput.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"emailInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                    <div class=\"form-control-feedback\" *ngIf=\"emailInput?.errors?.email\">{{ 'common.not-a-valid-email-address' | translate }}</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" [ngClass]=\"{ loading: isLoading }\" [disabled]=\"isLoading\">\n                    {{ 'common.reset-password' | translate }}\n                </button>\n            </div>\n            <div class=\"form-group text-center mb-0\">\n                <a class=\"px-0\" [routerLink]=\"['/login']\">{{ 'common.back-to-login' | translate }}</a>\n            </div>\n        </form>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "X3zk":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginModule */

    /***/
    function X3zk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
        return LoginModule;
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


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "GAZt");
      /* harmony import */


      var _login_alerts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login-alerts.service */
      "A3rs");
      /* harmony import */


      var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-form/login-form.component */
      "s2Wn");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login-routing.module */
      "euwS");
      /* harmony import */


      var _login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login.component */
      "vtpD");
      /* harmony import */


      var _restore_password_restore_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./restore-password/restore-password.component */
      "99U3");

      var LoginModule = /*#__PURE__*/_createClass(function LoginModule() {
        _classCallCheck(this, LoginModule);
      });

      LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"], _login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"], _restore_password_restore_password_component__WEBPACK_IMPORTED_MODULE_8__["RestorePasswordComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginRoutingModule"]],
        providers: [_login_alerts_service__WEBPACK_IMPORTED_MODULE_4__["LoginAlertsService"]]
      })], LoginModule);
      /***/
    },

    /***/
    "euwS":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginRoutingModule */

    /***/
    function euwS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
        return LoginRoutingModule;
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


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "GAZt");
      /* harmony import */


      var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login-form/login-form.component */
      "s2Wn");
      /* harmony import */


      var _login_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login.auth-guard */
      "D5hM");
      /* harmony import */


      var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.component */
      "vtpD");
      /* harmony import */


      var _restore_password_restore_password_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./restore-password/restore-password.auth-guard */
      "+ztC");
      /* harmony import */


      var _restore_password_restore_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./restore-password/restore-password.component */
      "99U3");

      var routes = [{
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_5__["LoginAuthGuard"]],
        children: [{
          path: '',
          component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__["LoginFormComponent"]
        }, {
          path: 'forgot-password',
          component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"]
        }, {
          path: 'restore-password',
          component: _restore_password_restore_password_component__WEBPACK_IMPORTED_MODULE_8__["RestorePasswordComponent"],
          canActivate: [_restore_password_restore_password_auth_guard__WEBPACK_IMPORTED_MODULE_7__["RestorePasswordAuthGuard"]]
        }]
      }];

      var LoginRoutingModule = /*#__PURE__*/_createClass(function LoginRoutingModule() {
        _classCallCheck(this, LoginRoutingModule);
      });

      LoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_5__["LoginAuthGuard"], _restore_password_restore_password_auth_guard__WEBPACK_IMPORTED_MODULE_7__["RestorePasswordAuthGuard"]]
      })], LoginRoutingModule);
      /***/
    },

    /***/
    "in5m":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function in5m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"login-page fullscreen-bg-body\">\n    <div class=\"login-box\">\n        <a [routerLink]=\"['/']\">\n            <img class=\"login-logo\" [src]=\"getLogo()\" />\n        </a>\n        <router-outlet></router-outlet>\n    </div>\n    <p class=\"text-center\">\n        <a class=\"text-white e2e-registration-link\" [routerLink]=\"['/register']\">{{ 'login.don-t-have-an-account-register-now' | translate }}</a>\n    </p>\n</div>\n";
      /***/
    },

    /***/
    "nYzX":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login-form/login-form.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nYzX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card shadow b-a-0 e2e-login-form\">\n    <div class=\"card-body\">\n        <img src=\"/img/icons/lock.svg\" draggable=\"false\" class=\"float-right\" />\n        <h2 class=\"text-primary mb-1\">{{ 'common.welcome' | translate }}</h2>\n        <p class=\"text-custom\">{{ 'common.log-in-using-your-id' | translate: { value: displayName } }}</p>\n        <alert-outlet></alert-outlet>\n        <form #loginForm=\"ngForm\" (ngSubmit)=\"submit()\" novalidate *ngIf=\"!showTwoFactorForm\">\n            <div class=\"form-group\">\n                <div class=\"input-group input-group-lg\">\n                    <span class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><fa-icon [icon]=\"faUser\" [fixedWidth]=\"true\"></fa-icon></span>\n                    </span>\n                    <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"email\"\n                        [placeholder]=\"'common.email' | translate\"\n                        autocomplete=\"username\"\n                        [(ngModel)]=\"credentials.email\"\n                        required\n                    />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"input-group input-group-lg\">\n                    <span class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><fa-icon [icon]=\"faLockAlt\" [fixedWidth]=\"true\"></fa-icon></span>\n                    </span>\n                    <input\n                        type=\"password\"\n                        class=\"form-control\"\n                        name=\"password\"\n                        [placeholder]=\"'common.password' | translate\"\n                        autocomplete=\"current-password\"\n                        [(ngModel)]=\"credentials.password\"\n                        required\n                    />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button\n                    type=\"submit\"\n                    class=\"btn btn-primary btn-lg btn-block e2e-login-btn\"\n                    [ngClass]=\"{ loading: isLoading }\"\n                    [disabled]=\"isLoading\"\n                >\n                    {{ 'common.log-in' | translate }}\n                </button>\n            </div>\n            <div class=\"form-group text-center mb-0\">\n                <a class=\"e2e-forgot-password-link\" [routerLink]=\"['/login/forgot-password']\">{{ 'common.forgot-password' | translate }}?</a>\n            </div>\n        </form>\n        <form name=\"formTwoFactor\" class=\"form-validation\" (ngSubmit)=\"submit()\" autocomplete=\"false\" novalidate *ngIf=\"showTwoFactorForm\">\n            <div class=\"alert alert-login alert-info\">\n                <b>{{ 'common.two-factor-is-enabled' | translate }}</b> {{ 'common.please-enter-the-current-code' | translate }}\n            </div>\n            <div class=\"form-group\">\n                <div class=\"input-group input-group-lg\">\n                    <span class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                            <fa-icon [icon]=\"faMobile\"></fa-icon>\n                        </span>\n                    </span>\n                    <input\n                        type=\"text\"\n                        minlength=\"6\"\n                        maxlength=\"6\"\n                        class=\"form-control\"\n                        name=\"twoFactorCode\"\n                        [placeholder]=\"'common.verification-code' | translate\"\n                        [(ngModel)]=\"twoFactorCode\"\n                        [focus]=\"true\"\n                        required\n                    />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" [ngClass]=\"{ loading: isLoading }\" [disabled]=\"isLoading\">\n                    {{ 'common.verify' | translate }}\n                </button>\n            </div>\n            <div class=\"form-group text-center mb-0\">\n                <a href (click)=\"revert(); $event.preventDefault()\">{{ 'common.back-to-login' | translate }}</a>\n            </div>\n        </form>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "nxSN":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/restore-password/restore-password.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nxSN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card shadow b-a-0\">\n    <div class=\"card-body\">\n        <h2 class=\"text-primary mb-1\">{{ 'common.restore-password' | translate }}</h2>\n        <p class=\"mb-3 text-gray\">{{ 'common.choose-new-password' | translate }}</p>\n        <form\n            #passwordForm=\"ngForm\"\n            class=\"form-validation\"\n            (ngSubmit)=\"submit()\"\n            [ngClass]=\"{ 'ng-submitted': passwordForm.submitted }\"\n            autocomplete=\"false\"\n            novalidate\n        >\n            <div class=\"form-group\">\n                <div class=\"input-group input-group-lg\">\n                    <span class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                            <fa-icon [icon]=\"faLockAlt\"></fa-icon>\n                        </span>\n                    </span>\n                    <input\n                        type=\"password\"\n                        class=\"form-control\"\n                        [placeholder]=\"'common.enter-new-password' | translate\"\n                        [(ngModel)]=\"password\"\n                        name=\"password\"\n                        autocomplete=\"new-password\"\n                        #passwordInput=\"ngModel\"\n                        [passwordStrength]=\"requiredPasswordStrength\"\n                        (onEntropyChange)=\"passwordStrength = $event\"\n                        required\n                    />\n                </div>\n                <div class=\"mt-2\">\n                    <password-strength-bar [requiredStrength]=\"requiredPasswordStrength\" [strength]=\"passwordStrength\"></password-strength-bar>\n                </div>\n                <div *ngIf=\"passwordInput.invalid && (passwordForm.submitted || passwordInput.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"passwordInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                    <div class=\"form-control-feedback\" *ngIf=\"passwordInput?.errors?.weakPassword\">\n                        {{ 'common.password-is-too-weak' | translate }}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"input-group input-group-lg\">\n                    <span class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                            <fa-icon [icon]=\"faSyncAlt\"></fa-icon>\n                        </span>\n                    </span>\n                    <input\n                        type=\"password\"\n                        class=\"form-control\"\n                        [placeholder]=\"'common.repeat-your-password' | translate\"\n                        [(ngModel)]=\"repeatedPassword\"\n                        name=\"repeatedPassword\"\n                        autocomplete=\"off\"\n                        #repeatedPasswordInput=\"ngModel\"\n                        [matchPassword]=\"password\"\n                        required\n                    />\n                </div>\n                <div *ngIf=\"repeatedPasswordInput.invalid && (passwordForm.submitted || repeatedPasswordInput.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"repeatedPasswordInput?.errors?.required\">\n                        {{ 'common.this-is-required' | translate }}\n                    </div>\n                    <div class=\"form-control-feedback\" *ngIf=\"repeatedPasswordInput?.errors?.matchPassword\">\n                        {{ 'common.password-do-not-match' | translate }}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" [ngClass]=\"{ loading: isLoading }\" [disabled]=\"isLoading\">\n                    {{ 'common.change-password' | translate }}\n                </button>\n            </div>\n            <div class=\"form-group text-center mb-0\">\n                <a class=\"px-0\" [routerLink]=\"['/login']\">{{ 'common.back-to-login' | translate }}</a>\n            </div>\n        </form>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "s2Wn":
    /*!**********************************************************!*\
      !*** ./src/app/login/login-form/login-form.component.ts ***!
      \**********************************************************/

    /*! exports provided: LoginFormComponent */

    /***/
    function s2Wn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function () {
        return LoginFormComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login-form.component.html */
      "nYzX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/pro-light-svg-icons */
      "WE53");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _sentry_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @sentry/browser */
      "WSEr");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _common_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../common/services/alert.service */
      "0ZVX");
      /* harmony import */


      var _common_services_login_redirect_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../common/services/login-redirect.service */
      "KTeq");
      /* harmony import */


      var _common_services_login_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../common/services/login.service */
      "rnZw");
      /* harmony import */


      var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../common/services/toastr.service */
      "N/y2");
      /* harmony import */


      var _login_alerts_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../login-alerts.service */
      "A3rs");

      var LoginFormComponent = /*#__PURE__*/function () {
        function LoginFormComponent(toastr, alertService, loginService, loginAlerts, redirectService, route, translate) {
          _classCallCheck(this, LoginFormComponent);

          this.toastr = toastr;
          this.alertService = alertService;
          this.loginService = loginService;
          this.loginAlerts = loginAlerts;
          this.redirectService = redirectService;
          this.route = route;
          this.translate = translate;
          this.credentials = {};
          this.isLoading = false;
          this.faLockAlt = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faLockAlt"];
          this.faUser = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUser"];
          this.faMobile = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMobile"];
          this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].displayName;
        }

        _createClass(LoginFormComponent, [{
          key: "submit",
          value: function submit() {
            var _this8 = this;

            var _a;

            this.isLoading = true;
            this.loginService.login(Object.assign(Object.assign({
              twoFactorCode: this.twoFactorCode
            }, this.credentials), {
              email: (_a = this.credentials.email) === null || _a === void 0 ? void 0 : _a.trim()
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(function () {
              return _this8.redirectService.redirect(_this8.route.snapshot, true);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (error) {
              var _iterator2 = _createForOfIteratorHelper(_this8.loginAlerts.disposables),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var disposable = _step2.value;
                  disposable.dispose();
                } // Two Factor auth is enabled

              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              if (error.status === 401 && error.name === 'Require2FACodeError') {
                // ask for 2f code and repeat submit
                _this8.showTwoFactorForm = true;
              } else {
                if (!_this8.showTwoFactorForm) {
                  _this8.credentials.password = '';
                }

                _this8.loginAlerts.disposables.add(_this8.alertService.add(error));
              }

              _this8.isLoading = false;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(error);
            })).subscribe(function () {
              _this8.toastr.success("".concat(_this8.translate.instant('login-form.your-login-has-been-approved')), "".concat(_this8.translate.instant('login-form.server-authentication')));

              if (window.SENTRY_DSN) {
                _sentry_browser__WEBPACK_IMPORTED_MODULE_6__["addBreadcrumb"]({
                  category: 'auth',
                  message: 'Authenticated user ' + _this8.credentials.email,
                  level: _sentry_browser__WEBPACK_IMPORTED_MODULE_6__["Severity"].Info
                });
              }
            });
          }
          /* Resets the form to initial state */

        }, {
          key: "revert",
          value: function revert() {
            if (this.isLoading) {
              return;
            }

            this.credentials = {};
            this.showTwoFactorForm = false;
          }
        }]);

        return LoginFormComponent;
      }();

      LoginFormComponent.ctorParameters = function () {
        return [{
          type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]
        }, {
          type: _common_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]
        }, {
          type: _common_services_login_service__WEBPACK_IMPORTED_MODULE_12__["LoginService"]
        }, {
          type: _login_alerts_service__WEBPACK_IMPORTED_MODULE_14__["LoginAlertsService"]
        }, {
          type: _common_services_login_redirect_service__WEBPACK_IMPORTED_MODULE_11__["LoginRedirectService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      };

      LoginFormComponent.propDecorators = {
        loginForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['loginForm']
        }]
      };
      LoginFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'login-form',
        template: _raw_loader_login_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LoginFormComponent);
      /***/
    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "in5m");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _login_alerts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login-alerts.service */
      "A3rs");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(loginAlerts) {
          _classCallCheck(this, LoginComponent);

          this.loginAlerts = loginAlerts;
          this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appName;
        }

        _createClass(LoginComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _iterator3 = _createForOfIteratorHelper(this.loginAlerts.disposables),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var disposable = _step3.value;
                disposable.dispose();
                this.loginAlerts.disposables["delete"](disposable);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }, {
          key: "getLogo",
          value: function getLogo() {
            switch (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appName) {
              case 'birex':
                return '/img/brand/logo-white-vertical.svg';

              default:
                return '/img/brand/logo-white-horizontal.svg';
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _login_alerts_service__WEBPACK_IMPORTED_MODULE_4__["LoginAlertsService"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LoginComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map