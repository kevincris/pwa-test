(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~embedded-embedded-module~kyc-wizard-kyc-wizard-module"], {
    /***/
    "+CvB":
    /*!************************************************************!*\
      !*** ./src/app/stripe-payment/stripe-payment-component.ts ***!
      \************************************************************/

    /*! exports provided: StripePaymentComponent */

    /***/
    function CvB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StripePaymentComponent", function () {
        return StripePaymentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_stripe_payment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./stripe-payment.component.html */
      "8Ech");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _stripe_stripe_js_pure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @stripe/stripe-js/pure */
      "dBlp");
      /* harmony import */


      var _stripe_stripe_js_pure__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js_pure__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/services/session.service */
      "6g7h");
      /* harmony import */


      var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/services/toastr.service */
      "N/y2");

      var StripePaymentComponent = /*#__PURE__*/function () {
        function StripePaymentComponent(http, session, toastr, translate) {
          _classCallCheck(this, StripePaymentComponent);

          this.http = http;
          this.session = session;
          this.toastr = toastr;
          this.translate = translate;
          this.isCardEmpty = true;
          this.isLoading = false;
          this.stripeState = 'loading';
          this.onSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        }

        _createClass(StripePaymentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (window.STRIPE_PUBLIC_KEY) {
                        _context.next = 3;
                        break;
                      }

                      this.stripeState = 'not-configured';
                      return _context.abrupt("return");

                    case 3:
                      this.stripeState = 'loaded';
                      _context.next = 6;
                      return Object(_stripe_stripe_js_pure__WEBPACK_IMPORTED_MODULE_5__["loadStripe"])(window.STRIPE_PUBLIC_KEY);

                    case 6:
                      this.stripe = _context.sent;
                      this.subscriptions.add(this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])(function (user) {
                        return _this.http.post("/users/".concat(user.id, "/start-account-opening-payment"), {});
                      })).subscribe(function (_ref) {
                        var clientSecret = _ref.clientSecret;

                        var _a;

                        _this.clientSecret = clientSecret;
                        var elements = (_a = _this.stripe) === null || _a === void 0 ? void 0 : _a.elements();
                        _this.card = elements === null || elements === void 0 ? void 0 : elements.create('card');

                        _this.card.mount('#card-element');

                        _this.card.on('change', function (event) {
                          var _a;

                          _this.isCardEmpty = event.empty;
                          _this.cardError = (_a = event.error) === null || _a === void 0 ? void 0 : _a.message;
                        });
                      }));

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "submit",
          value: function submit() {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var result;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.isLoading = true;
                      _context2.prev = 1;
                      _context2.next = 4;
                      return (_a = this.stripe) === null || _a === void 0 ? void 0 : _a.confirmCardPayment(this.clientSecret, {
                        payment_method: {
                          card: this.card
                        }
                      });

                    case 4:
                      result = _context2.sent;

                      if (!(result === null || result === void 0 ? void 0 : result.error)) {
                        _context2.next = 8;
                        break;
                      }

                      this.toastr.error(result.error.message || 'An error has occured');
                      return _context2.abrupt("return");

                    case 8:
                      this.toastr.success(this.translate.instant('stripe-payment.payment-successful'));
                      this.onSuccess.emit();

                    case 10:
                      _context2.prev = 10;
                      this.isLoading = false;
                      return _context2.finish(10);

                    case 13:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[1,, 10, 13]]);
            }));
          }
        }]);

        return StripePaymentComponent;
      }();

      StripePaymentComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]
        }, {
          type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }];
      };

      StripePaymentComponent.propDecorators = {
        onSuccess: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      StripePaymentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'stripe-payment',
        template: _raw_loader_stripe_payment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], StripePaymentComponent);
      /***/
    },

    /***/
    "16yb":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kyc-wizard/ubo-wizard-completed-modal.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-body text-center my-2\">\n    <img src=\"/img/icons/file.svg\" class=\"img-md mb-3\" />\n    <h4 class=\"text-primary mb-3\">Verification Complete</h4>\n    <p class=\"mb-4\">\n        Thank you for verifying your identity! The information provided will be reviewed for completeness and eligibility. This process usually takes\n        <span class=\"text-primary\">1-3 business days</span>. We will notify you if we are missing any details or once the account is approved.\n    </p>\n    <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"closeWindow()\">Close window</button>\n</div>\n";
      /***/
    },

    /***/
    "59Zp":
    /*!************************************************!*\
      !*** ./src/app/common/logged-in.auth-guard.ts ***!
      \************************************************/

    /*! exports provided: LoggedInAuthGuard */

    /***/
    function Zp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoggedInAuthGuard", function () {
        return LoggedInAuthGuard;
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


      var _services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/session.service */
      "6g7h");

      var LoggedInAuthGuard = /*#__PURE__*/function () {
        function LoggedInAuthGuard(session, router) {
          _classCallCheck(this, LoggedInAuthGuard);

          this.session = session;
          this.router = router;
        }

        _createClass(LoggedInAuthGuard, [{
          key: "canActivate",
          value: function canActivate(_, state) {
            if (!this.session.isAuthenticated()) {
              return this.router.parseUrl('/login?redirect=' + state.url);
            }

            return true;
          }
        }]);

        return LoggedInAuthGuard;
      }();

      LoggedInAuthGuard.ctorParameters = function () {
        return [{
          type: _services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      LoggedInAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoggedInAuthGuard);
      /***/
    },

    /***/
    "7+RW":
    /*!*************************************************!*\
      !*** ./src/app/stripe-payment/stripe.module.ts ***!
      \*************************************************/

    /*! exports provided: StripeModule */

    /***/
    function RW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StripeModule", function () {
        return StripeModule;
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


      var _stripe_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./stripe-payment-component */
      "+CvB");

      var StripeModule = /*#__PURE__*/_createClass(function StripeModule() {
        _classCallCheck(this, StripeModule);
      });

      StripeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_stripe_payment_component__WEBPACK_IMPORTED_MODULE_3__["StripePaymentComponent"]],
        exports: [_stripe_payment_component__WEBPACK_IMPORTED_MODULE_3__["StripePaymentComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      })], StripeModule);
      /***/
    },

    /***/
    "7myI":
    /*!*****************************************************!*\
      !*** ./src/app/kyc-wizard/kyc-wizard.auth-guard.ts ***!
      \*****************************************************/

    /*! exports provided: KycWizardAuthGuard */

    /***/
    function myI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KycWizardAuthGuard", function () {
        return KycWizardAuthGuard;
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


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/services/session.service */
      "6g7h");

      var KycWizardAuthGuard = /*#__PURE__*/function () {
        function KycWizardAuthGuard(session, router) {
          _classCallCheck(this, KycWizardAuthGuard);

          this.session = session;
          this.router = router;
        }

        _createClass(KycWizardAuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            if (this.session.user.approvedAt) {
              return this.router.parseUrl('/dashboard');
            }

            return true;
          }
        }]);

        return KycWizardAuthGuard;
      }();

      KycWizardAuthGuard.ctorParameters = function () {
        return [{
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      KycWizardAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], KycWizardAuthGuard);
      /***/
    },

    /***/
    "8Ech":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stripe-payment/stripe-payment.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ech(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"stripeState === 'loaded'\">\n    <div id=\"card-element\"></div>\n    <button\n        *ngIf=\"card\"\n        type=\"button\"\n        class=\"btn btn-primary my-2\"\n        [ngClass]=\"{ loading: isLoading }\"\n        [disabled]=\"isLoading || isCardEmpty || cardError\"\n        (click)=\"submit()\"\n    >\n        {{ 'common.pay-now' | translate }}\n    </button>\n    <p *ngIf=\"cardError\" class=\"alert alert-danger\">{{ cardError }}</p>\n</div>\n<div *ngIf=\"stripeState === 'loading'\" class=\"text-center\">{{ 'common.loading' | translate }}...</div>\n<div *ngIf=\"stripeState === 'not-configured'\" class=\"alert alert-danger\">{{ 'common.stripe-is-not-configured' | translate }}</div>\n";
      /***/
    },

    /***/
    "Iy0P":
    /*!********************************************************************!*\
      !*** ./src/app/kyc-wizard/key-wizard-completed-modal.component.ts ***!
      \********************************************************************/

    /*! exports provided: KycWizardCompletedModalComponent */

    /***/
    function Iy0P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KycWizardCompletedModalComponent", function () {
        return KycWizardCompletedModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_kyc_wizard_completed_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./kyc-wizard-completed-modal.component.html */
      "aq+B");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var KycWizardCompletedModalComponent = /*#__PURE__*/_createClass(function KycWizardCompletedModalComponent(modal) {
        _classCallCheck(this, KycWizardCompletedModalComponent);

        this.modal = modal;
      });

      KycWizardCompletedModalComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
        }];
      };

      KycWizardCompletedModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'kyc-wizard-completed-modal',
        template: _raw_loader_kyc_wizard_completed_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], KycWizardCompletedModalComponent);
      /***/
    },

    /***/
    "LK1W":
    /*!****************************************************!*\
      !*** ./src/app/kyc-wizard/kyc-wizard.component.ts ***!
      \****************************************************/

    /*! exports provided: KycWizardComponent */

    /***/
    function LK1W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KycWizardComponent", function () {
        return KycWizardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_kyc_wizard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./kyc-wizard.component.html */
      "hS8c");
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


      var _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/pro-duotone-svg-icons */
      "IIzM");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _common_services_basis_id_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/services/basis-id.service */
      "yeWx");
      /* harmony import */


      var _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../common/services/confirmation.service */
      "fTmd");
      /* harmony import */


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../common/services/session.service */
      "6g7h");
      /* harmony import */


      var _key_wizard_completed_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./key-wizard-completed-modal.component */
      "Iy0P");

      var KycWizardComponent = /*#__PURE__*/function () {
        function KycWizardComponent(basisId, http, router, confirmation, session, translate, ngbModal) {
          _classCallCheck(this, KycWizardComponent);

          this.basisId = basisId;
          this.http = http;
          this.router = router;
          this.confirmation = confirmation;
          this.session = session;
          this.translate = translate;
          this.ngbModal = ngbModal;
          this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].appName;
          this.accountOpeningFeeEnabled = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].accountOpeningFeeEnabled;
          this.accountOpeningFee = '0.00';
          this.running = false;
          this.isLoading = false;
          this.hasCompleted = false;
          this.isPaymentSuccessful = false;
          this.faSearch = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSearch"];
          this.faUserClock = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserClock"];
          this.faShieldCheck = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faShieldCheck"];
          this.faMoneyCheckEditAlt = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faMoneyCheckEditAlt"];
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
        }

        _createClass(KycWizardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            if (this.accountOpeningFeeEnabled) {
              this.subscriptions.add(this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(function (user) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])([_this2.http.get("/users/".concat(user.id)), _this2.http.get("/users/".concat(user.id, "/account-opening-fee"))]);
              })).subscribe(function (_ref2) {
                var _ref3 = _slicedToArray(_ref2, 2),
                    user = _ref3[0],
                    fee = _ref3[1];

                _this2.user = user;
                _this2.accountOpeningFee = fee.accountOpeningFee;
              }));
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.subscriptions.add(this.basisId.onSuccess.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(function () {
                        return _this3.http.post("/verifications/".concat(_this3.verification.id, "/set-completed"), {
                          completed: true
                        });
                      })).subscribe(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var _this4 = this;

                          var modal;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  modal = this.ngbModal.open(_key_wizard_completed_modal_component__WEBPACK_IMPORTED_MODULE_14__["KycWizardCompletedModalComponent"], {
                                    backdrop: 'static',
                                    keyboard: false,
                                    centered: true
                                  });
                                  _context3.next = 3;
                                  return modal.result.then(function () {
                                    return _this4.router.navigate(['/dashboard']);
                                  });

                                case 3:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      }));
                      this.subscriptions.add(this.basisId.onError.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(function () {
                        return _this3.confirmation.show({
                          type: 'warning',
                          text: _this3.translate.instant('common.there-was-a-problem-in-verification'),
                          showCancel: false,
                          confirmText: _this3.translate.instant('reload-page')
                        });
                      })).subscribe(function () {
                        location.reload();
                      }));
                      this.http.head("/users/".concat(this.session.user.id, "/verifications"), {
                        params: {
                          completed: JSON.stringify(true)
                        },
                        observe: 'response'
                      }).subscribe(function (response) {
                        var hasCompletedVerification = response && response.headers.has('x-total-count') ? ~~response.headers.get('x-total-count') : 0;
                        _this3.hasCompleted = hasCompletedVerification > 0;
                      });

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "startVerification",
          value: function startVerification() {
            var _this5 = this;

            this.isLoading = true;
            this.basisId.init().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(function () {
              return _this5.http.post("/verifications", {
                user: {
                  id: _this5.session.user.id
                }
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this5.isLoading = false;
            })).subscribe(function (verification) {
              if (window.DEBUG) {
                // eslint-disable-next-line no-console
                console.log('BasisID Hash:', verification.hash);
              }

              window.scroll(0, 0);
              _this5.running = true;

              _this5.basisId.loadWidget({
                key: _this5.session.user.type === 'business' ? window.BASIS_ID_KYB_KEY : window.BASIS_ID_KYC_KEY,
                formToken: verification.formToken
              });

              _this5.verification = verification;
            });
          }
        }, {
          key: "getLogo",
          value: function getLogo() {
            switch (src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].appName) {
              case 'birex':
              case 'usunpay':
              case 'etransfer':
                return '/img/brand/logo.svg';

              default:
                return '/img/brand/logo-white-horizontal.svg';
            }
          }
        }, {
          key: "getButtonClass",
          value: function getButtonClass() {
            switch (src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].appName) {
              case 'sgpmx':
                return 'btn-primary';

              default:
                return 'btn-secondary';
            }
          }
        }]);

        return KycWizardComponent;
      }();

      KycWizardComponent.ctorParameters = function () {
        return [{
          type: _common_services_basis_id_service__WEBPACK_IMPORTED_MODULE_11__["BasisIdService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmationService"]
        }, {
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_13__["SessionService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
        }];
      };

      KycWizardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'kyc-wizard',
        template: _raw_loader_kyc_wizard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], KycWizardComponent);
      /***/
    },

    /***/
    "QaUN":
    /*!*************************************************!*\
      !*** ./src/app/kyc-wizard/kyc-wizard.module.ts ***!
      \*************************************************/

    /*! exports provided: KycWizardModule */

    /***/
    function QaUN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KycWizardModule", function () {
        return KycWizardModule;
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


      var _stripe_payment_stripe_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../stripe-payment/stripe.module */
      "7+RW");
      /* harmony import */


      var _key_wizard_completed_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./key-wizard-completed-modal.component */
      "Iy0P");
      /* harmony import */


      var _kyc_wizard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./kyc-wizard-routing.module */
      "qEYS");
      /* harmony import */


      var _kyc_wizard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./kyc-wizard.component */
      "LK1W");
      /* harmony import */


      var _ubo_wizard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ubo-wizard.component */
      "RI5M");

      var KycWizardModule = /*#__PURE__*/_createClass(function KycWizardModule() {
        _classCallCheck(this, KycWizardModule);
      });

      KycWizardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_kyc_wizard_component__WEBPACK_IMPORTED_MODULE_6__["KycWizardComponent"], _key_wizard_completed_modal_component__WEBPACK_IMPORTED_MODULE_4__["KycWizardCompletedModalComponent"], _ubo_wizard_component__WEBPACK_IMPORTED_MODULE_7__["UboWizardComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _kyc_wizard_routing_module__WEBPACK_IMPORTED_MODULE_5__["KycWizardRoutingModule"], _stripe_payment_stripe_module__WEBPACK_IMPORTED_MODULE_3__["StripeModule"]],
        exports: [_key_wizard_completed_modal_component__WEBPACK_IMPORTED_MODULE_4__["KycWizardCompletedModalComponent"]]
      })], KycWizardModule);
      /***/
    },

    /***/
    "QtTN":
    /*!*****************************************************!*\
      !*** ./node_modules/@stripe/stripe-js/dist/pure.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function QtTN(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }

        return _typeof(obj);
      }

      var V3_URL = 'https://js.stripe.com/v3';
      var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
      var EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';

      var findScript = function findScript() {
        var scripts = document.querySelectorAll("script[src^=\"".concat(V3_URL, "\"]"));

        for (var i = 0; i < scripts.length; i++) {
          var script = scripts[i];

          if (!V3_URL_REGEX.test(script.src)) {
            continue;
          }

          return script;
        }

        return null;
      };

      var injectScript = function injectScript(params) {
        var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';
        var script = document.createElement('script');
        script.src = "".concat(V3_URL).concat(queryString);
        var headOrBody = document.head || document.body;

        if (!headOrBody) {
          throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
        }

        headOrBody.appendChild(script);
        return script;
      };

      var registerWrapper = function registerWrapper(stripe, startTime) {
        if (!stripe || !stripe._registerWrapper) {
          return;
        }

        stripe._registerWrapper({
          name: 'stripe-js',
          version: "1.32.0",
          startTime: startTime
        });
      };

      var stripePromise = null;

      var loadScript = function loadScript(params) {
        // Ensure that we only attempt to load Stripe.js at most once
        if (stripePromise !== null) {
          return stripePromise;
        }

        stripePromise = new Promise(function (resolve, reject) {
          if (typeof window === 'undefined') {
            // Resolve to null when imported server side. This makes the module
            // safe to import in an isomorphic code base.
            resolve(null);
            return;
          }

          if (window.Stripe && params) {
            console.warn(EXISTING_SCRIPT_MESSAGE);
          }

          if (window.Stripe) {
            resolve(window.Stripe);
            return;
          }

          try {
            var script = findScript();

            if (script && params) {
              console.warn(EXISTING_SCRIPT_MESSAGE);
            } else if (!script) {
              script = injectScript(params);
            }

            script.addEventListener('load', function () {
              if (window.Stripe) {
                resolve(window.Stripe);
              } else {
                reject(new Error('Stripe.js not available'));
              }
            });
            script.addEventListener('error', function () {
              reject(new Error('Failed to load Stripe.js'));
            });
          } catch (error) {
            reject(error);
            return;
          }
        });
        return stripePromise;
      };

      var initStripe = function initStripe(maybeStripe, args, startTime) {
        if (maybeStripe === null) {
          return null;
        }

        var stripe = maybeStripe.apply(undefined, args);
        registerWrapper(stripe, startTime);
        return stripe;
      }; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types


      var validateLoadParams = function validateLoadParams(params) {
        var errorMessage = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(params), "\n");

        if (params === null || _typeof(params) !== 'object') {
          throw new Error(errorMessage);
        }

        if (Object.keys(params).length === 1 && typeof params.advancedFraudSignals === 'boolean') {
          return params;
        }

        throw new Error(errorMessage);
      };

      var loadParams;
      var loadStripeCalled = false;

      var loadStripe = function loadStripe() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        loadStripeCalled = true;
        var startTime = Date.now();
        return loadScript(loadParams).then(function (maybeStripe) {
          return initStripe(maybeStripe, args, startTime);
        });
      };

      loadStripe.setLoadParameters = function (params) {
        if (loadStripeCalled) {
          throw new Error('You cannot change load parameters after calling loadStripe');
        }

        loadParams = validateLoadParams(params);
      };

      exports.loadStripe = loadStripe;
      /***/
    },

    /***/
    "RF+O":
    /*!********************************************************************!*\
      !*** ./src/app/kyc-wizard/ubo-wizard-completed-modal.component.ts ***!
      \********************************************************************/

    /*! exports provided: UboWizardCompletedModalComponent */

    /***/
    function RFO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UboWizardCompletedModalComponent", function () {
        return UboWizardCompletedModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ubo_wizard_completed_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ubo-wizard-completed-modal.component.html */
      "16yb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var UboWizardCompletedModalComponent = /*#__PURE__*/function () {
        function UboWizardCompletedModalComponent(modal) {
          _classCallCheck(this, UboWizardCompletedModalComponent);

          this.modal = modal;
        }

        _createClass(UboWizardCompletedModalComponent, [{
          key: "closeWindow",
          value: function closeWindow() {
            window.close();
          }
        }]);

        return UboWizardCompletedModalComponent;
      }();

      UboWizardCompletedModalComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
        }];
      };

      UboWizardCompletedModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ubo-wizard-completed-modal',
        template: _raw_loader_ubo_wizard_completed_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], UboWizardCompletedModalComponent);
      /***/
    },

    /***/
    "RI5M":
    /*!****************************************************!*\
      !*** ./src/app/kyc-wizard/ubo-wizard.component.ts ***!
      \****************************************************/

    /*! exports provided: UboWizardComponent */

    /***/
    function RI5M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UboWizardComponent", function () {
        return UboWizardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ubo_wizard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ubo-wizard.component.html */
      "dXVn");
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _common_services_basis_id_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/services/basis-id.service */
      "yeWx");
      /* harmony import */


      var _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/services/confirmation.service */
      "fTmd");
      /* harmony import */


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/services/session.service */
      "6g7h");
      /* harmony import */


      var _ubo_wizard_completed_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./ubo-wizard-completed-modal.component */
      "RF+O");

      var UboWizardComponent = /*#__PURE__*/function () {
        function UboWizardComponent(basisId, confirmation, ngbModal, route, router, session) {
          _classCallCheck(this, UboWizardComponent);

          this.basisId = basisId;
          this.confirmation = confirmation;
          this.ngbModal = ngbModal;
          this.route = route;
          this.router = router;
          this.session = session;
          this.year = new Date().getFullYear();
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        }

        _createClass(UboWizardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!!this.session.user) {
                        this.session.logout();
                      }

                      this.subscriptions.add(this.basisId.onSuccess.subscribe(function () {
                        _this6.ngbModal.open(_ubo_wizard_completed_modal_component__WEBPACK_IMPORTED_MODULE_11__["UboWizardCompletedModalComponent"], {
                          backdrop: 'static',
                          keyboard: false,
                          centered: true
                        });
                      }));
                      this.subscriptions.add(this.basisId.onError.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(function () {
                        return _this6.confirmation.show({
                          type: 'warning',
                          text: 'There was a problem in the verification process. Please try again.',
                          showCancel: false,
                          confirmText: 'Reload page'
                        });
                      })).subscribe(function () {
                        location.reload();
                      }));
                      this.basisId.init().subscribe(function () {
                        _this6.route.queryParamMap.subscribe(function (params) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                              while (1) {
                                switch (_context5.prev = _context5.next) {
                                  case 0:
                                    if (params.has('code')) {
                                      _context5.next = 4;
                                      break;
                                    }

                                    _context5.next = 3;
                                    return this.router.navigate(['/login']);

                                  case 3:
                                    return _context5.abrupt("return");

                                  case 4:
                                    this.basisId.loadWidget({
                                      key: window.BASIS_ID_KYB_KEY,
                                      invite: params.get('code')
                                    });

                                  case 5:
                                  case "end":
                                    return _context5.stop();
                                }
                              }
                            }, _callee5, this);
                          }));
                        });
                      });

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "getLogo",
          value: function getLogo() {
            switch (src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].appName) {
              case 'birex':
              case 'usunpay':
              case 'etransfer':
                return '/img/brand/logo.svg';

              default:
                return '/img/brand/logo-white-horizontal.svg';
            }
          }
        }]);

        return UboWizardComponent;
      }();

      UboWizardComponent.ctorParameters = function () {
        return [{
          type: _common_services_basis_id_service__WEBPACK_IMPORTED_MODULE_8__["BasisIdService"]
        }, {
          type: _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmationService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]
        }];
      };

      UboWizardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ubo-wizard',
        template: _raw_loader_ubo_wizard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], UboWizardComponent);
      /***/
    },

    /***/
    "aq+B":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kyc-wizard/kyc-wizard-completed-modal.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aqB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-body text-center my-2\">\n    <img src=\"/img/icons/file.svg\" class=\"img-md mb-3\" />\n    <h4 class=\"text-primary mb-3\">{{ 'common.verification-complete' | translate }}</h4>\n    <p class=\"mb-4\">\n        {{ 'common.thank-you-for-verifying' | translate }}\n        <span class=\"text-primary\">{{ 'common.one-to-three-days' | translate }}</span> {{ 'common.we-will-notify' | translate }}\n    </p>\n    <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"modal.close()\">{{ 'common.got-it' | translate }}</button>\n</div>\n";
      /***/
    },

    /***/
    "dBlp":
    /*!************************************************!*\
      !*** ./node_modules/@stripe/stripe-js/pure.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function dBlp(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! ./dist/pure.js */
      "QtTN");
      /***/
    },

    /***/
    "dXVn":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kyc-wizard/ubo-wizard.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function dXVn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"kyc-wizard fullscreen-bg-body\">\n    <a>\n        <img class=\"login-logo\" [src]=\"getLogo()\" />\n    </a>\n    <div id=\"bas-widget-container\"></div>\n    <div class=\"mb-5 text-center text-white\">&copy; 2005 - {{ year }} Aerapass Limited - All rights reserved.</div>\n</div>\n";
      /***/
    },

    /***/
    "hS8c":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kyc-wizard/kyc-wizard.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function hS8c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"kyc-wizard fullscreen-bg-body\">\n    <a [routerLink]=\"['/dashboard']\">\n        <img class=\"login-logo\" [src]=\"getLogo()\" />\n    </a>\n    <div class=\"card max-width-md\" *ngIf=\"!running\">\n        <div class=\"card-body\">\n            <div class=\"alert alert-primary\" role=\"alert\" *ngIf=\"hasCompleted\">\n                {{ 'common.thank-you-for-completing' | translate }}.\n                <a [routerLink]=\"['/dashboard']\">{{ 'common.proceed-to-dashboard' | translate }}</a>\n            </div>\n            <h2 class=\"text-primary mb-1\">{{ 'common.account-setup' | translate }}</h2>\n            <p class=\"mb-3\" *ngIf=\"appName === 'sgpmx'; else text\">\n                You will have the option to preview your account or complete registration of your Stacker Market account.\n            </p>\n            <ng-template #text>\n                <p class=\"mb-3\">{{ 'kyc-wizard.to-complete' | translate }}:</p>\n            </ng-template>\n            <ng-container *ngIf=\"appName === 'sgpmx'\">\n                <h5 class=\"text-primary font-weight-bold\">Option 1: PREVIEW ACCOUNT</h5>\n                <p>You may preview your dashboard and Stacker Market features by click below and skipping directly to your Account Dashboard.</p>\n                <button [routerLink]=\"['/dashboard']\" class=\"btn btn-primary btn-lg btn-block mb-4\">Click here to skip to Dashboard</button>\n                <h5 class=\"text-primary font-weight-bold\">Option 2: COMPLETE REGISTRATION</h5>\n                <p>Complete your full registration by following the steps below.</p>\n                <div class=\"callout callout-info bg-light mb-4\">\n                    <h5 class=\"font-weight-bold text-dark\">LIMITED TIME OFFER</h5>\n                    <p>\n                        By completing your registration and activating your Stacker Market Pro account with physical/virtual prepaid/debit card, you\n                        will receive 200.00 USD worth of silver in your account.\n                    </p>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"!accountOpeningFeeEnabled; else accountOpeningFeeFlow\">\n                <div class=\"icon-callout\">\n                    <div class=\"icon\">\n                        <fa-icon [icon]=\"faSearch\"></fa-icon>\n                    </div>\n                    <div class=\"ml-3\">\n                        <h5 class=\"text-secondary mb-0\">{{ 'kyc-wizard.step-one' | translate }}</h5>\n                        <p>\n                            {{ 'kyc-wizard.step-one-desc' | translate }}\n                        </p>\n                    </div>\n                </div>\n                <div class=\"icon-callout\">\n                    <div class=\"icon\">\n                        <fa-icon [icon]=\"faUserClock\"></fa-icon>\n                    </div>\n\n                    <div class=\"ml-3\">\n                        <h5 class=\"text-secondary mb-0\">{{ 'kyc-wizard.step-two' | translate }}</h5>\n                        <p>\n                            {{ 'kyc-wizard.step-two-desc' | translate }}\n                        </p>\n                    </div>\n                </div>\n            </ng-container>\n            <ng-template #accountOpeningFeeFlow>\n                <div class=\"icon-callout\">\n                    <div class=\"icon\">\n                        <fa-icon [icon]=\"faMoneyCheckEditAlt\"></fa-icon>\n                    </div>\n                    <div class=\"ml-3\">\n                        <h5 class=\"text-secondary mb-0\">{{ 'kyc-wizard.step-one-account' | translate }}</h5>\n                        <p>\n                            {{ 'kyc-wizard.step-one-account-desc' | translate }}\n                            <span class=\"font-weight-bold\">{{ accountOpeningFee | amount }} USD</span>\n                            {{ 'kyc-wizard.using-your-credit' | translate }}\n                        </p>\n                        <ng-container *ngIf=\"!!user\">\n                            <ng-container *ngIf=\"!user?.accountOpeningFeePaidAt && !isPaymentSuccessful; else feePaid\">\n                                <stripe-payment (onSuccess)=\"isPaymentSuccessful = true\"></stripe-payment>\n                            </ng-container>\n                            <ng-template #feePaid>\n                                <div class=\"alert alert-success\">{{ 'kyc-wizard.you-have-paid' | translate }}</div>\n                            </ng-template>\n                        </ng-container>\n                    </div>\n                </div>\n                <div class=\"icon-callout\">\n                    <div class=\"icon\">\n                        <fa-icon [icon]=\"faSearch\"></fa-icon>\n                    </div>\n                    <div class=\"ml-3\">\n                        <h5 class=\"text-secondary mb-0\">{{ 'kyc-wizard.step-two-account' | translate }}</h5>\n                        <p>\n                            {{ 'kyc-wizard.step-two-account-desc' | translate }}\n                        </p>\n                    </div>\n                </div>\n            </ng-template>\n            <div class=\"icon-callout\">\n                <div class=\"icon\">\n                    <fa-icon [icon]=\"faShieldCheck\"></fa-icon>\n                </div>\n                <div class=\"ml-3\">\n                    <ng-container *ngIf=\"appName === 'sgpmx'; else defaultText\">\n                        <h5 class=\"text-secondary mb-0\">{{ 'kyc-wizard.step-three-account' | translate }}</h5>\n                        <p>{{ 'kyc-wizard.step-three-account' | translate }}</p>\n                    </ng-container>\n                    <ng-template #defaultText>\n                        <h5 class=\"text-secondary mb-0\">{{ 'kyc-wizard.step-three-account-alt' | translate }}</h5>\n                        <p>{{ 'kyc-wizard.step-three-account-desc' | translate }}</p>\n                    </ng-template>\n                </div>\n            </div>\n            <ng-container *ngIf=\"session.userStream | async; let user\">\n                <div class=\"d-flex flex-column align-items-center mb-3\">\n                    <small class=\"text-muted mb-1\">{{ 'kyc-wizard.logged-in-as' | translate }}</small>\n                    <div class=\"account-info\">\n                        <user-display [user]=\"user\" [displayBadges]=\"false\" [disableLink]=\"true\"> </user-display>\n                    </div>\n                </div>\n            </ng-container>\n            <button\n                class=\"btn btn-block btn-lg\"\n                (click)=\"startVerification()\"\n                [ngClass]=\"getButtonClass() + (isLoading ? ' loading' : '')\"\n                [disabled]=\"isLoading || hasCompleted || (accountOpeningFeeEnabled && !user?.accountOpeningFeePaidAt && !isPaymentSuccessful)\"\n            >\n                {{ 'kyc-wizard.start-verification' | translate }}\n            </button>\n        </div>\n    </div>\n    <div id=\"bas-widget-container\" [hidden]=\"!running\"></div>\n    <div class=\"mb-5 text-center\">\n        <a [routerLink]=\"['/dashboard']\" class=\"text-white\">{{ 'kyc-wizard.no-documents' | translate }}</a>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "qEYS":
    /*!*********************************************************!*\
      !*** ./src/app/kyc-wizard/kyc-wizard-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: KycWizardRoutingModule */

    /***/
    function qEYS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KycWizardRoutingModule", function () {
        return KycWizardRoutingModule;
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


      var _common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/logged-in.auth-guard */
      "59Zp");
      /* harmony import */


      var _kyc_wizard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./kyc-wizard.auth-guard */
      "7myI");
      /* harmony import */


      var _kyc_wizard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./kyc-wizard.component */
      "LK1W");
      /* harmony import */


      var _ubo_wizard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ubo-wizard.component */
      "RI5M");

      var routes = [{
        path: '',
        component: _kyc_wizard_component__WEBPACK_IMPORTED_MODULE_5__["KycWizardComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"], _kyc_wizard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["KycWizardAuthGuard"]]
      }, {
        path: 'ubo',
        component: _ubo_wizard_component__WEBPACK_IMPORTED_MODULE_6__["UboWizardComponent"]
      }];

      var KycWizardRoutingModule = /*#__PURE__*/_createClass(function KycWizardRoutingModule() {
        _classCallCheck(this, KycWizardRoutingModule);
      });

      KycWizardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_kyc_wizard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["KycWizardAuthGuard"]]
      })], KycWizardRoutingModule);
      /***/
    },

    /***/
    "yeWx":
    /*!*****************************************************!*\
      !*** ./src/app/common/services/basis-id.service.ts ***!
      \*****************************************************/

    /*! exports provided: BasisIdService */

    /***/
    function yeWx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasisIdService", function () {
        return BasisIdService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var BasisIdService = /*#__PURE__*/function () {
        function BasisIdService() {
          _classCallCheck(this, BasisIdService);

          this.onSuccess = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.onError = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(BasisIdService, [{
          key: "init",
          value: function init() {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (subscriber) {
              if (!window.BAS) {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = true;
                script.src = "https://api.basisid.com/assets/js/widget.multi.js";
                script.addEventListener('load', function () {
                  subscriber.next();
                  subscriber.complete();
                });
                document.getElementsByTagName('head')[0].appendChild(script);
              } else {
                subscriber.next();
                subscriber.complete();
              }
            });
          }
        }, {
          key: "loadWidget",
          value: function loadWidget(options) {
            var _this7 = this;

            window.BAS.AS.initFrame({
              key: options.key,
              bas_gw: 'https://api.basisid.com/',
              container_id: 'bas-widget-container',
              ui: {
                width: '100%',
                height: '705px',
                style: '',
                mobile_height: 'auto'
              },
              options: options.invite ? {
                invite: options.invite
              } : {
                api_form_token: options.formToken
              },
              events: {
                onManualCheck: function onManualCheck(result) {
                  if (result.status === 'ok') {
                    _this7.onSuccess.next();
                  } else {
                    _this7.onError.next();
                  }
                }
              }
            });
            window.BAS.AS.showWidget();
          }
        }]);

        return BasisIdService;
      }();

      BasisIdService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], BasisIdService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~embedded-embedded-module~kyc-wizard-kyc-wizard-module-es5.js.map