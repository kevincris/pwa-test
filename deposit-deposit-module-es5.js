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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deposit-deposit-module"], {
    /***/
    "7Fps":
    /*!*******************************************************!*\
      !*** ./src/app/common/models/accounting/fee.model.ts ***!
      \*******************************************************/

    /*! exports provided: feeTypeMap, feeMethodMap, Fee, getFeeType */

    /***/
    function Fps(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "feeTypeMap", function () {
        return feeTypeMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "feeMethodMap", function () {
        return feeMethodMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Fee", function () {
        return Fee;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFeeType", function () {
        return getFeeType;
      });
      /* harmony import */


      var _core_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/user.model */
      "vk+e");
      /* harmony import */


      var _beneficiary_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./beneficiary.model */
      "OFFW");
      /* harmony import */


      var _currency_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./currency.model */
      "/e3T");

      var feeTypeMap = {
        'account-fee': 'Account Fee',
        'card-order': 'Card Order Fee',
        'fx-spread': 'Exchange Rate Spread',
        deposit: 'Deposit',
        withdrawal: 'Withdrawal',
        transfer: 'Transfer',
        conversion: 'Conversion',
        investment: 'Investment',
        trade: 'Trade',
        redeem: 'Redeem',
        service: 'Buy & Sell',
        gst: 'GST',
        payment: 'Payment'
      };
      var feeMethodMap = {
        internal: 'Internal',
        card: 'Topup Card',
        crypto: 'Crypto',
        local: 'LOCAL',
        swift: 'SWIFT'
      };

      var Fee = /*#__PURE__*/function () {
        function Fee(data) {
          _classCallCheck(this, Fee);

          if (data) {
            Object.assign(this, data);

            if (data.currency) {
              this.currency = new _currency_model__WEBPACK_IMPORTED_MODULE_2__["Currency"](data.currency);
            }

            if (data.user) {
              this.user = new _core_user_model__WEBPACK_IMPORTED_MODULE_0__["User"](data.user);
            }

            if (data.beneficiary) {
              this.beneficiary = new _beneficiary_model__WEBPACK_IMPORTED_MODULE_1__["Beneficiary"](data.beneficiary);
            }
          }
        }

        _createClass(Fee, [{
          key: "isGlobal",
          value: function isGlobal() {
            return this.user === null;
          }
        }, {
          key: "isFallback",
          value: function isFallback(currency) {
            return this.currency.code !== currency.code;
          }
        }, {
          key: "isAssociationFee",
          value: function isAssociationFee(user) {
            return !!this.user && !!user && this.user.id !== user.id;
          }
        }, {
          key: "hasFixedFee",
          value: function hasFixedFee() {
            return !['fx-spread', 'service', 'gst'].includes(this.type);
          }
        }, {
          key: "hasRelativeFee",
          value: function hasRelativeFee() {
            return !['account-fee'].includes(this.type);
          }
        }, {
          key: "hasMaxOrMin",
          value: function hasMaxOrMin() {
            return !['account-fee', 'fx-spread'].includes(this.type);
          }
        }, {
          key: "hasMinValue",
          value: function hasMinValue() {
            return ['transfer', 'deposit', 'withdrawal'].includes(this.type);
          }
        }]);

        return Fee;
      }();

      function getFeeType(transactionType) {
        var feeMap = {
          deposit: 'deposit',
          withdrawal: 'withdrawal',
          transfer: 'transfer',
          conversion: 'conversion',
          investment: 'investment',
          trade: 'trade',
          redeem: 'redeem',
          payment: 'payment',
          // Use transfer fee for invoice
          invoice: 'transfer',
          'invoice-p2p': 'transfer',
          'card-order': 'card-order',
          'account-fee': 'account-fee'
        };
        return feeMap[transactionType];
      }
      /***/

    },

    /***/
    "CQCb":
    /*!****************************************************************!*\
      !*** ./src/app/deposit/deposit-form/deposit-form.component.ts ***!
      \****************************************************************/

    /*! exports provided: DepositFormComponent */

    /***/
    function CQCb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DepositFormComponent", function () {
        return DepositFormComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_deposit_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./deposit-form.component.html */
      "Fxcq");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/pro-light-svg-icons */
      "WE53");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_common_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/common/models/accounting/currency.model */
      "/e3T");
      /* harmony import */


      var src_app_common_no_access_modal_no_access_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/common/no-access-modal/no-access-modal.component */
      "gZSw");
      /* harmony import */


      var src_app_common_payment_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/common/payment/payment-confirmation/payment-confirmation.component */
      "n93W");
      /* harmony import */


      var src_app_common_services_accounting_fee_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/common/services/accounting/fee.service */
      "le6r");
      /* harmony import */


      var src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/common/services/session.service */
      "6g7h");
      /* harmony import */


      var src_app_common_transaction_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/common/transaction/transaction-view/transaction-view.component */
      "vOIs");
      /* harmony import */


      var src_app_store_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/store/wallets/wallets.service */
      "hOWo");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _common_services_accounting_beneficiary_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../common/services/accounting/beneficiary.service */
      "bJu3");

      var DepositFormComponent = /*#__PURE__*/function () {
        function DepositFormComponent(session, ngbModal, http, walletsService, feeService, beneficiaryService, translate) {
          _classCallCheck(this, DepositFormComponent);

          this.session = session;
          this.ngbModal = ngbModal;
          this.http = http;
          this.walletsService = walletsService;
          this.feeService = feeService;
          this.beneficiaryService = beneficiaryService;
          this.translate = translate;
          this.files = [];
          this.isUploadCollapsed = true;
          this.faQuestionCircle = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faQuestionCircle"];
          this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].appName;
          this.purposeItems = ['Pre Funding Remittance Account', 'Pre Funding Card Top Up', 'Pre Funding Foreign Exchange Account', 'Purchase Sale of Goods', 'Payment of Interest/Fees/Charges', 'Refund/Rebate'];
          this.sourceOfFundItems = ['Business/Partnership Income', 'Employment Income', 'Social Security or Government Payments ', 'Retirement Income (Super Pensions or Annuities) ', 'Crowd Funding', 'Investment Income (Interest, Dividend, Rent)', 'Trust Fund Income', 'Foreign Income ', 'Prizes & Awards', 'Compensation or Insurance', 'Investment/Securities'];
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
          this.fetchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        }

        _createClass(DepositFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([this.fetchEvent, this.session.userStream]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  _ = _ref2[0],
                  user = _ref2[1];

              _this.transaction.counterWallet = {
                user: Object(lodash__WEBPACK_IMPORTED_MODULE_7__["pick"])(user, ['id', 'accountNumber', 'name'])
              };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  _ = _ref4[0],
                  user = _ref4[1];

              var _a, _b;

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])([_this.feeService.fetch({
                type: 'deposit',
                method: _this.transaction.method,
                user: {
                  id: user.id
                },
                currency: {
                  code: (_a = _this.transaction.currency) === null || _a === void 0 ? void 0 : _a.code
                }
              }), _this.beneficiaryService.fetchDepositInstruction(_this.transaction.method, (_b = _this.transaction.currency) === null || _b === void 0 ? void 0 : _b.code, user.id)]);
            })).subscribe(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  fee = _ref6[0],
                  depositInstruction = _ref6[1];

              var _a, _b;

              _this.fee = fee;
              Object.assign(_this.transaction, _this.feeService.determineFee(_this.transaction, fee));

              if (fee && fee.minValue) {
                _this.minAmount = src_app_common_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_10__["Currency"].convert(fee.minValue, fee.currency, _this.transaction.currency);
              }

              if (_this.transaction.method === 'crypto') {
                _this.transaction.beneficiary = {
                  accountNumber: src_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].cryptoDepositAddresses[(_a = _this.transaction.currency) === null || _a === void 0 ? void 0 : _a.code],
                  currency: {
                    code: (_b = _this.transaction.currency) === null || _b === void 0 ? void 0 : _b.code
                  },
                  method: 'crypto',
                  type: 'crypto-address'
                };
              } else {
                _this.transaction.beneficiary = depositInstruction;
              }
            }));
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.transaction) {
              this.reset();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this2 = this;

            if (this.depositForm && this.depositForm.invalid) {
              return;
            }

            if (this.session.user.accessErrors.length > 0) {
              Object(src_app_common_no_access_modal_no_access_modal_component__WEBPACK_IMPORTED_MODULE_11__["openNoAccessModal"])(this.ngbModal, this.session.user.accessErrors[0]);
              return;
            }

            var modal = this.ngbModal.open(src_app_common_payment_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_12__["PaymentConfirmationComponent"], {
              windowClass: 'modal-primary',
              backdrop: 'static'
            });
            var component = modal.componentInstance;
            component.transaction = this.transaction;
            component.onConfirm.subscribe(function () {
              _this2.createTransaction().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(function (err) {
                component.isSubmitted = false;
                component.reset();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(err);
              })).subscribe(function (transaction) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var transactionView, transactionViewModal;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          modal.close();
                          transactionView = this.ngbModal.open(src_app_common_transaction_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_15__["TransactionViewComponent"], {
                            windowClass: 'modal-primary',
                            backdrop: 'static'
                          });
                          transactionViewModal = transactionView.componentInstance;
                          transactionViewModal.transaction = transaction;
                          transactionViewModal.activeTab = 'beneficiary';
                          this.reset();
                          this.walletsService.fetch();
                          this.fetchEvent.next();

                        case 8:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              });
            });
          }
        }, {
          key: "createTransaction",
          value: function createTransaction() {
            var _this3 = this;

            return this.http.post('/transactions', this.transaction).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(function (transaction) {
              return _this3.files.length > 0 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(_this3.files.map(function (file) {
                return _this3.http.post("/transactions/".concat(transaction.id, "/files"), file, {
                  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'X-File-Name': encodeURIComponent(file.name),
                    'Content-Type': file.type
                  })
                });
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function () {
                return transaction;
              })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(transaction);
            }));
          }
        }, {
          key: "onCurrencyChange",
          value: function onCurrencyChange() {
            this.fetchEvent.next();
          }
        }, {
          key: "onAmountChange",
          value: function onAmountChange() {
            Object.assign(this.transaction, this.feeService.determineFee(this.transaction, this.fee));
          }
        }, {
          key: "reset",
          value: function reset() {
            this.files = [];
            this.minAmount = undefined;

            if (this.depositForm) {
              this.depositForm.resetForm({
                amount: undefined,
                purpose: undefined,
                sourceOfFunds: undefined,
                comment: undefined,
                'currency-select': this.transaction.currency
              });
            }
          }
        }]);

        return DepositFormComponent;
      }();

      DepositFormComponent.ctorParameters = function () {
        return [{
          type: src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_14__["SessionService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_store_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_16__["WalletsService"]
        }, {
          type: src_app_common_services_accounting_fee_service__WEBPACK_IMPORTED_MODULE_13__["FeeService"]
        }, {
          type: _common_services_accounting_beneficiary_service__WEBPACK_IMPORTED_MODULE_18__["BeneficiaryService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }];
      };

      DepositFormComponent.propDecorators = {
        transaction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        depositForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['depositForm']
        }]
      };
      DepositFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'deposit-form',
        template: _raw_loader_deposit_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], DepositFormComponent);
      /***/
    },

    /***/
    "Fxcq":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deposit/deposit-form/deposit-form.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Fxcq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"session.userStream | async; let user\">\n    <form\n        class=\"form-validation\"\n        #depositForm=\"ngForm\"\n        (ngSubmit)=\"submit()\"\n        [ngClass]=\"{ 'ng-submitted': depositForm.submitted }\"\n        autocomplete=\"false\"\n        novalidate\n    >\n        <div class=\"form-group\">\n            <label class=\"font-md\" for=\"currency\">{{ 'common.currency' | translate }}</label>\n            <currency-select\n                [(currency)]=\"transaction.currency\"\n                [user]=\"user\"\n                [isLarge]=\"true\"\n                [currencyTypes]=\"transaction.method === 'crypto' ? ['crypto'] : ['fiat']\"\n                [required]=\"true\"\n                [depositable]=\"true\"\n                [useFullName]=\"true\"\n                (currencyChange)=\"onCurrencyChange()\"\n                #currencySelect\n            >\n            </currency-select>\n        </div>\n        <div *ngIf=\"currencySelect.currencyInput.invalid && (depositForm.submitted || currencySelect.currencyInput.dirty)\" class=\"error-messages\">\n            <div class=\"form-control-feedback\" *ngIf=\"currencySelect.currencyInput?.errors?.required\">\n                {{ 'common.this-is-required' | translate }}\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"font-md\" for=\"amount\">{{ 'common.amount' | translate }}</label>\n            <fa-icon\n                class=\"text-primary ml-1\"\n                [icon]=\"faQuestionCircle\"\n                [ngbPopover]=\"'common.in-case-receiving' | translate\"\n                triggers=\"hover\"\n                container=\"body\"\n            >\n            </fa-icon>\n            <div class=\"input-group\">\n                <input\n                    type=\"number\"\n                    class=\"form-control form-control-lg\"\n                    id=\"amount\"\n                    name=\"amount\"\n                    placeholder=\"0.00\"\n                    [(ngModel)]=\"transaction.amount\"\n                    (ngModelChange)=\"onAmountChange()\"\n                    [min]=\"minAmount\"\n                    #amount=\"ngModel\"\n                    required\n                />\n                <div class=\"input-group-append\">\n                    <span class=\"input-group-text font-lg\">{{ transaction.currency?.code }}</span>\n                </div>\n            </div>\n            <div *ngIf=\"amount.invalid && (depositForm.submitted || amount.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"amount?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                <div class=\"form-control-feedback\" *ngIf=\"amount?.errors?.min\">\n                    Minimum amount is\n                    {{ minAmount + '' || '0' | amount: transaction.currency?.decimalPlaces }}\n                    {{ transaction.currency?.code }}.\n                </div>\n            </div>\n        </div>\n        <ng-container *ngIf=\"appName !== 'sgpmx'\">\n            <div class=\"form-group\">\n                <label class=\"font-md\" for=\"purpose\">{{ 'common.source-of-funds' | translate }}</label>\n                <ng-select\n                    class=\"ng-select-lg\"\n                    name=\"sourceOfFunds\"\n                    [(ngModel)]=\"transaction.sourceOfFunds\"\n                    [items]=\"sourceOfFundItems\"\n                    [clearable]=\"false\"\n                    [searchable]=\"false\"\n                    [required]=\"true\"\n                    dropdownPosition=\"bottom\"\n                    #sourceOfFundInput=\"ngModel\"\n                >\n                    <ng-template ng-label-tmp let-item=\"item\">\n                        {{ item }}\n                    </ng-template>\n                    <ng-template ng-option-tmp let-item=\"item\">\n                        {{ item }}\n                    </ng-template>\n                </ng-select>\n                <div *ngIf=\"sourceOfFundInput.invalid && (depositForm.submitted || sourceOfFundInput.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"sourceOfFundInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"font-md\" for=\"purpose\">{{ 'common.purpose' | translate }}</label>\n                <ng-select\n                    class=\"ng-select-lg\"\n                    name=\"purpose\"\n                    [(ngModel)]=\"transaction.purpose\"\n                    [items]=\"purposeItems\"\n                    [clearable]=\"false\"\n                    [required]=\"true\"\n                    [addTag]=\"true\"\n                    addTagText=\"Use\"\n                    dropdownPosition=\"bottom\"\n                    #purposeInput=\"ngModel\"\n                >\n                    <ng-template ng-label-tmp let-item=\"item\">\n                        {{ item }}\n                    </ng-template>\n                    <ng-template ng-option-tmp let-item=\"item\">\n                        {{ item }}\n                    </ng-template>\n                </ng-select>\n                <div *ngIf=\"purposeInput.invalid && (depositForm.submitted || purposeInput.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"purposeInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n        </ng-container>\n        <div class=\"form-group\">\n            <label class=\"font-md\" for=\"comment\"\n                >{{ 'common.comment' | translate }} <small class=\"text-muted\">({{ 'common.optional' | translate }})</small></label\n            >\n            <textarea\n                class=\"form-control form-control-lg\"\n                id=\"comment\"\n                name=\"comment\"\n                [(ngModel)]=\"transaction.comment\"\n                rows=\"3\"\n                emptyToNull\n            ></textarea>\n        </div>\n        <div class=\"form-group\">\n            <a href class=\"d-block mb-2\" (click)=\"isUploadCollapsed = !isUploadCollapsed; $event.preventDefault()\">\n                {{ isUploadCollapsed ? '+ Attach' : '- Remove' }} {{ 'common.file' | translate | lowercase }}\n            </a>\n            <dropzone [files]=\"files\" [ngbCollapse]=\"isUploadCollapsed\"></dropzone>\n        </div>\n        <access-errors [errors]=\"['VerificationRequiredError']\"></access-errors>\n        <div *ngIf=\"!transaction.beneficiary\" class=\"callout callout-danger e2e-deposit-not-config\">\n            {{ 'deposit-form.deposit-method-is-not-configured' | translate }}\n        </div>\n\n        <button\n            type=\"submit\"\n            class=\"btn btn-lg btn-block btn-primary mb-2\"\n            [disabled]=\"!transaction.beneficiary || user.accessErrors.includes('VerificationRequiredError')\"\n        >\n            {{ (transaction.method === 'crypto' ? 'common.request-address' : 'common.submit') | translate }}\n        </button>\n        <div *ngIf=\"transaction.method === 'crypto'\" class=\"small text-muted mb-2\">\n            <b>Disclaimer:</b> All services related to wallet, custody and currency exchange provided on this website are exclusively provided by\n            Aerapass' third party suppliers. Aerapass allows to its customers access on an 'as-is' basis.\n        </div>\n        <div class=\"small text-muted\">\n            {{ 'common.by-clicking-the-submit-button' | translate }} <br />\n            <a [routerLink]=\"['/terms']\" class=\"text-muted\" target=\"_blank\" rel=\"noopener\"\n                >{{ 'common.terms' | translate }} &amp; {{ 'common.conditions' | translate }}</a\n            >\n            {{ 'common.and' | translate }}\n            <a [routerLink]=\"['/privacy']\" class=\"text-muted\" target=\"_blank\" rel=\"noopener\">{{ 'common.data-privacy-notice' | translate }}</a\n            >.\n        </div>\n    </form>\n</ng-container>\n";
      /***/
    },

    /***/
    "IoOl":
    /*!***************************************************!*\
      !*** ./src/app/deposit/deposit-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: DepositRoutingModule */

    /***/
    function IoOl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DepositRoutingModule", function () {
        return DepositRoutingModule;
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


      var _common_payment_payment_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/payment/payment.guard */
      "yq7r");
      /* harmony import */


      var _deposit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./deposit.component */
      "YyyU");

      var routes = [{
        path: '',
        component: _deposit_component__WEBPACK_IMPORTED_MODULE_5__["DepositComponent"],
        data: {
          redirectTo: '/deposit'
        },
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"], _common_payment_payment_guard__WEBPACK_IMPORTED_MODULE_4__["PaymentGuard"]]
      }];

      var DepositRoutingModule = /*#__PURE__*/_createClass(function DepositRoutingModule() {
        _classCallCheck(this, DepositRoutingModule);
      });

      DepositRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DepositRoutingModule);
      /***/
    },

    /***/
    "NVIH":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deposit/deposit.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function NVIH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"session.userStream | async; let user\">\n    <div class=\"container pt-page e2e-deposit\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"payment-methods\">\n                    <a\n                        *ngIf=\"user.hasPermission('payment-swift')\"\n                        class=\"payment-methods-item\"\n                        [routerLink]=\"['/deposit']\"\n                        [queryParams]=\"{ method: null }\"\n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions]=\"{ exact: true }\"\n                    >\n                        <figure>\n                            <img class=\"img-fluid\" draggable=\"false\" src=\"/img/payment-methods/swift.svg\" />\n                        </figure>\n                        <span>Intl. {{ 'common.wire-transfer' | translate }}</span>\n                    </a>\n                    <a\n                        *ngIf=\"user.hasPermission('payment-local')\"\n                        class=\"payment-methods-item\"\n                        [routerLink]=\"['/deposit']\"\n                        [queryParams]=\"{ method: 'local' }\"\n                        routerLinkActive=\"active\"\n                    >\n                        <figure>\n                            <img class=\"img-fluid\" draggable=\"false\" src=\"/img/payment-methods/local.svg\" />\n                        </figure>\n                        <span>{{ 'deposit.local-transfer' | translate }}</span>\n                    </a>\n                    <a\n                        *ngIf=\"user.hasPermission('payment-crypto')\"\n                        class=\"payment-methods-item\"\n                        [routerLink]=\"['/deposit']\"\n                        [queryParams]=\"{ method: 'crypto' }\"\n                        routerLinkActive=\"active\"\n                    >\n                        <figure>\n                            <img class=\"img-fluid\" draggable=\"false\" src=\"/img/payment-methods/crypto.svg\" />\n                        </figure>\n                        <span>{{ 'common.crypto-currencies' | translate }}</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"row mb-3\">\n            <div class=\"col-lg-12\">\n                <section class=\"card mb-3\">\n                    <div class=\"card-header\">\n                        <h5 class=\"mb-0\">{{ 'common.deposit' | translate }}</h5>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"callout callout-info mt-0\" *ngIf=\"['swift', 'local'].includes(transaction.method!)\">\n                            <h6 class=\"text-info mb-0\">{{ 'common.deposit-instructions' | translate }}</h6>\n                            <p>{{ 'deposit.choose-your-desired-amount' | translate }}</p>\n                        </div>\n                        <div class=\"callout callout-info mt-0\" *ngIf=\"transaction.method === 'crypto'\">\n                            <h6 class=\"text-info mb-0\">{{ 'common.wallet-address' | translate }}</h6>\n                            <p>{{ 'common.enter-the-following' | translate }}</p>\n                        </div>\n                        <deposit-form [(transaction)]=\"transaction\"></deposit-form>\n                        <p class=\"small text-muted mt-2\" *ngIf=\"['swift'].includes(transaction.method!)\">\n                            {{ 'common.if-you-send' | translate }}\n                        </p>\n                    </div>\n                </section>\n                <p class=\"text-center text-muted\">\n                    <a [routerLink]=\"['/withdraw']\">{{ 'deposit.go-to-withdraw' | translate }} &#x203A;</a>\n                </p>\n            </div>\n            <div class=\"col-lg-12 d-none d-lg-block\">\n                <div class=\"transation-slip-container max-width-sm\">\n                    <transaction-slip [transaction]=\"transaction\"></transaction-slip>\n                    <p class=\"text-center text-muted pb-4\">\n                        {{ 'common.learn-more-about-our-fees' | translate }} <a [routerLink]=\"['/fees']\">{{ 'common.here' | translate }}</a>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>\n";
      /***/
    },

    /***/
    "YyyU":
    /*!**********************************************!*\
      !*** ./src/app/deposit/deposit.component.ts ***!
      \**********************************************/

    /*! exports provided: DepositComponent */

    /***/
    function YyyU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DepositComponent", function () {
        return DepositComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_deposit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./deposit.component.html */
      "NVIH");
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


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/services/session.service */
      "6g7h");

      var DepositComponent = /*#__PURE__*/function () {
        function DepositComponent(route, session) {
          _classCallCheck(this, DepositComponent);

          this.route = route;
          this.session = session;
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        }

        _createClass(DepositComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this.route.snapshot.queryParamMap.has('method')) {
                        this.resetTransaction(this.route.snapshot.queryParamMap.get('method'));
                      }

                      this.route.queryParamMap.subscribe(function (params) {
                        _this4.resetTransaction(params.get('method') || 'swift');
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "resetTransaction",
          value: function resetTransaction(method) {
            this.transaction = {
              type: 'deposit',
              method: method,
              baseWallet: {
                user: null
              }
            };
          }
        }]);

        return DepositComponent;
      }();

      DepositComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]
        }];
      };

      DepositComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'deposit',
        template: _raw_loader_deposit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], DepositComponent);
      /***/
    },

    /***/
    "fx87":
    /*!*******************************************!*\
      !*** ./src/app/deposit/deposit.module.ts ***!
      \*******************************************/

    /*! exports provided: DepositModule */

    /***/
    function fx87(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DepositModule", function () {
        return DepositModule;
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


      var _common_payment_payment_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/payment/payment.module */
      "qIFn");
      /* harmony import */


      var _common_transaction_transaction_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/transaction/transaction.module */
      "SRhG");
      /* harmony import */


      var _deposit_form_deposit_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./deposit-form/deposit-form.component */
      "CQCb");
      /* harmony import */


      var _deposit_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./deposit-routing.module */
      "IoOl");
      /* harmony import */


      var _deposit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./deposit.component */
      "YyyU");

      var DepositModule = /*#__PURE__*/_createClass(function DepositModule() {
        _classCallCheck(this, DepositModule);
      });

      DepositModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_deposit_component__WEBPACK_IMPORTED_MODULE_7__["DepositComponent"], _deposit_form_deposit_form_component__WEBPACK_IMPORTED_MODULE_5__["DepositFormComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _deposit_routing_module__WEBPACK_IMPORTED_MODULE_6__["DepositRoutingModule"], _common_payment_payment_module__WEBPACK_IMPORTED_MODULE_3__["PaymentFormModule"], _common_transaction_transaction_module__WEBPACK_IMPORTED_MODULE_4__["TransactionModule"]]
      })], DepositModule);
      /***/
    },

    /***/
    "le6r":
    /*!***********************************************************!*\
      !*** ./src/app/common/services/accounting/fee.service.ts ***!
      \***********************************************************/

    /*! exports provided: FeeService */

    /***/
    function le6r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeeService", function () {
        return FeeService;
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


      var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../models/accounting/currency.model */
      "/e3T");
      /* harmony import */


      var _models_accounting_fee_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../models/accounting/fee.model */
      "7Fps");
      /* harmony import */


      var _transactions_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../transactions.mixins */
      "HiCw");

      var FeeService = /*#__PURE__*/function () {
        function FeeService(http) {
          _classCallCheck(this, FeeService);

          this.http = http;
        }

        _createClass(FeeService, [{
          key: "fetch",
          value: function fetch(fee) {
            return this.http.post('/fees', {
              id: Math.round(Math.random() * 10000),
              jsonrpc: '2.0',
              method: 'findByPrimaryAttributes',
              params: {
                type: fee.type,
                method: fee.method,
                amount: fee.amount ? fee.amount : '1',
                currency: fee.currency,
                user: fee.user
              }
            }, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json-rpc'
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
              return response.result ? new _models_accounting_fee_model__WEBPACK_IMPORTED_MODULE_6__["Fee"](response.result) : null;
            }));
          }
        }, {
          key: "determineFee",
          value: function determineFee(currentTransaction, fee) {
            var transaction = currentTransaction;
            var fixedFee = fee && fee.fixed && transaction.currency ? _models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_5__["Currency"].convert(fee.fixed, fee.currency, transaction.currency) : '0';
            var relativeFee = fee && fee.relative ? fee.relative : '0';
            transaction.fixedFee = fixedFee || undefined;
            transaction.relativeFee = relativeFee || undefined;

            if (fee && fee.min) {
              var minFee = _models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_5__["Currency"].convert(fee.min, fee.currency, transaction.currency);

              if (new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(Object(_transactions_mixins__WEBPACK_IMPORTED_MODULE_7__["calculateFee"])(transaction)).isLessThan(minFee)) {
                transaction.fixedFee = minFee;
                transaction.relativeFee = '0';
              }
            }

            if (fee && fee.max) {
              var maxFee = _models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_5__["Currency"].convert(fee.max, fee.currency, transaction.currency);

              if (new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(Object(_transactions_mixins__WEBPACK_IMPORTED_MODULE_7__["calculateFee"])(transaction)).isGreaterThan(maxFee)) {
                transaction.fixedFee = maxFee;
                transaction.relativeFee = '0';
              }
            }

            return transaction;
          }
        }]);

        return FeeService;
      }();

      FeeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      FeeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], FeeService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=deposit-deposit-module-es5.js.map