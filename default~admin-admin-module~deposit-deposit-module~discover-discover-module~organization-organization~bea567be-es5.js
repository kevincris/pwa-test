(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~deposit-deposit-module~discover-discover-module~organization-organization~bea567be"], {
    /***/
    "O0R6":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/payment/payment-confirmation/payment-confirmation.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function O0R6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{ 'common.confirm' | translate }} {{ transaction.type }}</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"modal.dismiss()\">&times;</button>\n</div>\n<div class=\"modal-body e2e-confirm-payment\">\n    <ng-container *ngIf=\"!isSubmitted; else loader\">\n        <div class=\"mb-2 text-center\">\n            <span class=\"label label-success mb-1\">{{ buildActionLabel(transaction) }}</span>\n            <h2 class=\"text-primary mb-0\">\n                {{ calculateDeductableAmount(transaction) || '0.0' | amount: transaction.currency?.decimalPlaces }} {{ transaction.currency?.code }}\n            </h2>\n        </div>\n        <transaction-flow [transaction]=\"transaction\"></transaction-flow>\n        <table class=\"table table-borderless\">\n            <tbody>\n                <ng-container *ngIf=\"!isSgpmxMetalTransfer(); else metalTransferFees\">\n                    <tr>\n                        <th class=\"py-2 text-right font-weight-bold text-muted\">{{ 'common.service-fee' | translate }}</th>\n                        <td class=\"py-2 text-right text-muted\">\n                            <div>{{ calculateFee(transaction) | amount: transaction.currency?.decimalPlaces }} {{ transaction.currency?.code }}</div>\n                            <small\n                                >({{ transaction.fixedFee | amount }} {{ transaction.currency?.code }} +\n                                {{ toPercent(transaction.relativeFee) | number }}%)</small\n                            >\n                        </td>\n                    </tr>\n                </ng-container>\n                <ng-template #metalTransferFees>\n                    <tr>\n                        <th class=\"py-2 text-right font-weight-bold text-muted\">{{ 'common.service-fee' | translate }}</th>\n                        <td class=\"py-2 text-right text-muted\">{{ calculateFeeInUsd() | async | amount }} USD</td>\n                    </tr>\n                </ng-template>\n                <tr>\n                    <th class=\"py-2 text-right font-weight-bold\">\n                        <ng-container *ngIf=\"!transaction.card; else topupReceiver\">\n                            {{ 'common.recipient' | translate }} {{ (transaction.id ? 'common.got' : 'common.gets') | translate }}\n                        </ng-container>\n                        <ng-template #topupReceiver> {{ 'common.card-loaded-with' | translate }} </ng-template>\n                    </th>\n                    <td class=\"py-2 text-right text-primary\">\n                        {{ calculateCreditableAmount(transaction) | amount: transaction.currency?.decimalPlaces }} {{ transaction.currency?.code }}\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <form class=\"form-validation\" #passwordForm=\"ngForm\" (ngSubmit)=\"submit()\" novalidate>\n            <div class=\"alert alert-danger\" *ngIf=\"alert\">\n                {{ alert }}\n            </div>\n            <div class=\"form-group\" *ngIf=\"!showTwoFactorForm\">\n                <div class=\"input-group input-group-lg\">\n                    <span class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                            <fa-icon [icon]=\"faLockAlt\"></fa-icon>\n                        </span>\n                    </span>\n                    <input\n                        type=\"password\"\n                        class=\"form-control\"\n                        name=\"password\"\n                        [placeholder]=\"'common.enter-your-password' | translate\"\n                        [(ngModel)]=\"password\"\n                        [focus]=\"true\"\n                        required\n                    />\n                </div>\n            </div>\n            <div class=\"form-group\" *ngIf=\"showTwoFactorForm\">\n                <div class=\"input-group input-group-lg\">\n                    <span class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                            <fa-icon [icon]=\"faMobile\"></fa-icon>\n                        </span>\n                    </span>\n                    <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"twoFactorCode\"\n                        [placeholder]=\"'common.enter-2fa-code' | translate\"\n                        number\n                        [(ngModel)]=\"twoFactorCode\"\n                        [focus]=\"true\"\n                        required\n                    />\n                </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"!passwordForm.valid || isLoading\">\n                {{ 'common.confirm' | translate }}\n            </button>\n        </form>\n    </ng-container>\n    <ng-template #loader>\n        <div class=\"circle-loader\" [ngClass]=\"{ 'load-complete': isCompleted }\">\n            <div class=\"checkmark draw\"></div>\n        </div>\n        <h4 class=\"text-center text-primary\">\n            <ng-container *ngIf=\"!isCompleted\">\n                <ng-container [ngSwitch]=\"transaction.type\">\n                    <ng-container *ngSwitchCase=\"'deposit'\">{{ 'common.creating-deposit-request' | translate }}</ng-container>\n                    <ng-container *ngSwitchDefault>\n                        <ng-container [ngSwitch]=\"transaction.method\">\n                            <ng-container *ngSwitchCase=\"'card'\">{{ 'common.topping-up-card' | translate }}</ng-container>\n                            <ng-container *ngSwitchDefault>{{ 'common.sending-payment' | translate }}</ng-container>\n                        </ng-container>\n                    </ng-container>\n                </ng-container>\n            </ng-container>\n            <ng-container *ngIf=\"isCompleted\">\n                <ng-container [ngSwitch]=\"transaction.type\">\n                    <ng-container *ngSwitchCase=\"'deposit'\">{{ 'common.your-deposit-request-was-accepted' | translate }}</ng-container>\n                    <ng-container *ngSwitchCase=\"'transfer'\">{{ 'common.your-payment-was-successful' | translate }}</ng-container>\n                    <ng-container *ngSwitchDefault>{{ 'common.your-payment-has-been-accepted' | translate }}</ng-container>\n                </ng-container>\n            </ng-container>\n        </h4>\n        <button\n            type=\"button\"\n            class=\"btn btn-lg btn-block btn-primary-air\"\n            (click)=\"onViewTransactions.emit()\"\n            [disabled]=\"isSubmitted && !isCompleted\"\n        >\n            {{ (showInvoice ? 'common.view-proforma-invoice' : 'common.view-transaction') | translate }}\n        </button>\n    </ng-template>\n</div>\n";
      /***/
    },

    /***/
    "n93W":
    /*!***************************************************************************************!*\
      !*** ./src/app/common/payment/payment-confirmation/payment-confirmation.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: PaymentConfirmationComponent */

    /***/
    function n93W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentConfirmationComponent", function () {
        return PaymentConfirmationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_payment_confirmation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./payment-confirmation.component.html */
      "O0R6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/pro-light-svg-icons */
      "WE53");
      /* harmony import */


      var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/pro-regular-svg-icons */
      "uB96");
      /* harmony import */


      var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/pro-solid-svg-icons */
      "4Bjl");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _security_check_confirm_password_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../security-check/confirm-password.modal */
      "iO5V");
      /* harmony import */


      var _services_session_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../services/session.service */
      "6g7h");
      /* harmony import */


      var _services_sgpmx_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../services/sgpmx.service */
      "BqkS");
      /* harmony import */


      var _services_token_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../services/token.service */
      "JdTs");
      /* harmony import */


      var _transactions_mixins__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../transactions.mixins */
      "HiCw");

      var PaymentConfirmationComponent = /*#__PURE__*/function (_security_check_confi) {
        _inherits(PaymentConfirmationComponent, _security_check_confi);

        var _super = _createSuper(PaymentConfirmationComponent);

        function PaymentConfirmationComponent(modal, tokenService, session, sgpmxService, translate) {
          var _this;

          _classCallCheck(this, PaymentConfirmationComponent);

          _this = _super.call(this, modal, tokenService, session);
          _this.sgpmxService = sgpmxService;
          _this.translate = translate;
          _this.scope = 'banking';
          _this.onConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          _this.onViewTransactions = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          _this.isSubmitted = false;
          _this.isCompleted = false;
          _this.showInvoice = false;
          _this.calculateFee = _transactions_mixins__WEBPACK_IMPORTED_MODULE_16__["calculateFee"];
          _this.calculateCreditableAmount = _transactions_mixins__WEBPACK_IMPORTED_MODULE_16__["calculateCreditableAmount"];
          _this.calculateDeductableAmount = _transactions_mixins__WEBPACK_IMPORTED_MODULE_16__["calculateDeductableAmount"];
          _this.faMobile = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMobile"];
          _this.faLockAlt = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLockAlt"];
          _this.faEllipsisV = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEllipsisV"];
          _this.faShieldAlt = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faShieldAlt"];
          _this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].appName;
          return _this;
        }

        _createClass(PaymentConfirmationComponent, [{
          key: "buildActionLabel",
          value: function buildActionLabel(transaction) {
            if (transaction.type === 'deposit') {
              return 'Requesting';
            }

            if (transaction.type === 'investment') {
              return 'Investing';
            }

            return this.translate.instant('common.sending');
          }
        }, {
          key: "toPercent",
          value: function toPercent(value) {
            return new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(value || 0).times(100).toString();
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this2 = this;

            this.isSubmitted = true;
            this.grantTokenScope().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(function (error) {
              _this2.isSubmitted = false;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["throwError"])(error);
            })).subscribe(function () {
              _this2.onConfirm.emit();
            });
          }
        }, {
          key: "isSgpmxMetalTransfer",
          value: function isSgpmxMetalTransfer() {
            return this.appName === 'sgpmx' && this.transaction.type === 'transfer' && ['AU', 'AG'].includes(this.transaction.currency.code);
          }
        }, {
          key: "calculateFeeInUsd",
          value: function calculateFeeInUsd() {
            return this.sgpmxService.calculateFeeInUsd(this.transaction);
          }
        }]);

        return PaymentConfirmationComponent;
      }(_security_check_confirm_password_modal__WEBPACK_IMPORTED_MODULE_12__["ConfirmPasswordModalComponent"]);

      PaymentConfirmationComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]
        }, {
          type: _services_token_service__WEBPACK_IMPORTED_MODULE_15__["TokenService"]
        }, {
          type: _services_session_service__WEBPACK_IMPORTED_MODULE_13__["SessionService"]
        }, {
          type: _services_sgpmx_service__WEBPACK_IMPORTED_MODULE_14__["SgpmxService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }];
      };

      PaymentConfirmationComponent.propDecorators = {
        transaction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        onConfirm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        onViewTransactions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      PaymentConfirmationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'payment-confirmation',
        template: _raw_loader_payment_confirmation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PaymentConfirmationComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~admin-admin-module~deposit-deposit-module~discover-discover-module~organization-organization~bea567be-es5.js.map