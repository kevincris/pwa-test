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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["withdraw-withdraw-module"], {
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
    "Rztx":
    /*!*****************************************************!*\
      !*** ./src/app/withdraw/withdraw-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: WithdrawRoutingModule */

    /***/
    function Rztx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WithdrawRoutingModule", function () {
        return WithdrawRoutingModule;
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


      var _withdraw_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./withdraw.component */
      "U68O");

      var routes = [{
        path: '',
        component: _withdraw_component__WEBPACK_IMPORTED_MODULE_5__["WithdrawComponent"],
        data: {
          redirectTo: '/withdraw'
        },
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"], _common_payment_payment_guard__WEBPACK_IMPORTED_MODULE_4__["PaymentGuard"]]
      }];

      var WithdrawRoutingModule = /*#__PURE__*/_createClass(function WithdrawRoutingModule() {
        _classCallCheck(this, WithdrawRoutingModule);
      });

      WithdrawRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WithdrawRoutingModule);
      /***/
    },

    /***/
    "U68O":
    /*!************************************************!*\
      !*** ./src/app/withdraw/withdraw.component.ts ***!
      \************************************************/

    /*! exports provided: WithdrawComponent */

    /***/
    function U68O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function () {
        return WithdrawComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_withdraw_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./withdraw.component.html */
      "wjTR");
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

      var WithdrawComponent = /*#__PURE__*/function () {
        function WithdrawComponent(route, session) {
          _classCallCheck(this, WithdrawComponent);

          this.route = route;
          this.session = session;
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        }

        _createClass(WithdrawComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this.route.snapshot.queryParamMap.has('method')) {
                        this.resetTransaction(this.route.snapshot.queryParamMap.get('method'));
                      }

                      this.route.queryParamMap.subscribe(function (params) {
                        _this.resetTransaction(params.get('method') || 'swift');
                      });

                    case 2:
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
          key: "resetTransaction",
          value: function resetTransaction(method) {
            this.transaction = {
              type: 'withdrawal',
              method: method,
              counterWallet: {
                user: null
              },
              beneficiary: {
                method: method
              }
            };
          }
        }]);

        return WithdrawComponent;
      }();

      WithdrawComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]
        }];
      };

      WithdrawComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'withdraw',
        template: _raw_loader_withdraw_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], WithdrawComponent);
      /***/
    },

    /***/
    "UFBq":
    /*!*******************************************************************!*\
      !*** ./src/app/withdraw/withdraw-form/withdraw-form.component.ts ***!
      \*******************************************************************/

    /*! exports provided: WithdrawFormComponent */

    /***/
    function UFBq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WithdrawFormComponent", function () {
        return WithdrawFormComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_withdraw_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./withdraw-form.component.html */
      "hMMK");
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


      var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_common_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/common/models/accounting/currency.model */
      "/e3T");
      /* harmony import */


      var src_app_common_no_access_modal_no_access_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/common/no-access-modal/no-access-modal.component */
      "gZSw");
      /* harmony import */


      var src_app_common_payment_beneficiary_book_beneficiary_book_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/common/payment/beneficiary-book/beneficiary-book.component */
      "oMaD");
      /* harmony import */


      var src_app_common_payment_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/common/payment/payment-confirmation/payment-confirmation.component */
      "n93W");
      /* harmony import */


      var src_app_common_services_accounting_fee_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/common/services/accounting/fee.service */
      "le6r");
      /* harmony import */


      var src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/common/services/session.service */
      "6g7h");
      /* harmony import */


      var src_app_common_transaction_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/common/transaction/transaction-view/transaction-view.component */
      "vOIs");
      /* harmony import */


      var src_app_store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/store/currencies/currencies.query */
      "4pv/");
      /* harmony import */


      var src_app_store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/store/wallets/wallets.query */
      "O9sj");
      /* harmony import */


      var src_app_store_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/app/store/wallets/wallets.service */
      "hOWo");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var WithdrawFormComponent = /*#__PURE__*/function () {
        function WithdrawFormComponent(session, ngbModal, http, feeService, walletsService, walletsQuery, router, currenciesQuery, translate) {
          _classCallCheck(this, WithdrawFormComponent);

          this.session = session;
          this.ngbModal = ngbModal;
          this.http = http;
          this.feeService = feeService;
          this.walletsService = walletsService;
          this.walletsQuery = walletsQuery;
          this.router = router;
          this.currenciesQuery = currenciesQuery;
          this.translate = translate;
          this.files = [];
          this.isUploadCollapsed = true;
          this.saveAsTemplate = true;
          this.inclusiveFee = true;
          this.faQuestionCircle = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faQuestionCircle"];
          this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].appName;
          this.purposeItems = ['Employment Income', 'Business Expenses', 'Tax Payment', 'License/Subscription Fee', 'Bill/Utilities Payment', 'Insurance Payment', 'Commission/Bonus Payment', 'Family Maintenance (Education, Medical, Travel)', 'Investment/Securities', 'Transport', 'Property Payment'];
          this.fee = null;
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"]();
          this.fetchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        }

        _createClass(WithdrawFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["combineLatest"])([this.fetchEvent, this.session.userStream]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  _ = _ref2[0],
                  user = _ref2[1];

              _this2.transaction.baseWallet = {
                user: Object(lodash__WEBPACK_IMPORTED_MODULE_9__["pick"])(user, ['id', 'accountNumber', 'name'])
              };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  _ = _ref4[0],
                  user = _ref4[1];

              var _a;

              return _this2.feeService.fetch({
                type: 'withdrawal',
                method: _this2.transaction.method,
                user: {
                  id: user.id
                },
                currency: {
                  code: (_a = _this2.transaction.currency) === null || _a === void 0 ? void 0 : _a.code
                }
              });
            })).subscribe(function (fee) {
              _this2.fee = fee;
              Object.assign(_this2.transaction, _this2.feeService.determineFee(_this2.transaction, fee));

              if (fee && fee.minValue) {
                _this2.minAmount = src_app_common_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_12__["Currency"].convert(fee.minValue, fee.currency, _this2.transaction.currency);
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
            var _this3 = this;

            if (this.beneficiaryDetailsForm) {
              this.beneficiaryDetailsForm.submit();

              if (!(this.beneficiaryDetailsForm.isValid() || this.beneficiaryDetailsForm.disabled)) {
                return;
              }
            }

            if (this.withdrawForm && this.withdrawForm.invalid) {
              return;
            }

            if (this.session.user.accessErrors.length > 0) {
              Object(src_app_common_no_access_modal_no_access_modal_component__WEBPACK_IMPORTED_MODULE_13__["openNoAccessModal"])(this.ngbModal, this.session.user.accessErrors[0]);
              return;
            }

            var modal = this.ngbModal.open(src_app_common_payment_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_15__["PaymentConfirmationComponent"], {
              windowClass: 'modal-primary',
              backdrop: 'static'
            });
            var component = modal.componentInstance;
            component.transaction = this.transaction;
            component.onConfirm.subscribe(function () {
              _this3.createTransaction().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])(function (err) {
                component.isSubmitted = false;
                component.reset();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["throwError"])(err);
              })).subscribe(function (transaction) {
                modal.close();

                var transactionView = _this3.ngbModal.open(src_app_common_transaction_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_18__["TransactionViewComponent"], {
                  windowClass: 'modal-primary',
                  backdrop: 'static'
                });

                var transactionViewModal = transactionView.componentInstance;
                transactionViewModal.transaction = transaction;

                _this3.reset();

                _this3.walletsService.fetch();

                _this3.fetchEvent.next();
              });
            });
          }
        }, {
          key: "createTransaction",
          value: function createTransaction() {
            var _this4 = this;

            if (this.saveAsTemplate && this.transaction.beneficiary && !this.transaction.beneficiary.id) {
              var wallet = this.transaction.baseWallet;

              if (wallet) {
                this.transaction.beneficiary.user = wallet.user;
              }
            }

            var body = Object.assign({}, this.transaction);

            if (!this.inclusiveFee) {
              body.amount = undefined;
              body.settledAmount = this.transaction.amount;
            }

            return this.http.post('/transactions', body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["mergeMap"])(function (transaction) {
              return _this4.files.length > 0 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["forkJoin"])(_this4.files.map(function (file) {
                return _this4.http.post("/transactions/".concat(transaction.id, "/files"), file, {
                  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'X-File-Name': encodeURIComponent(file.name),
                    'Content-Type': file.type
                  })
                });
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function () {
                return transaction;
              })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(transaction);
            }));
          }
        }, {
          key: "openBeneficiaryBook",
          value: function openBeneficiaryBook() {
            var _this5 = this;

            var modal = this.ngbModal.open(src_app_common_payment_beneficiary_book_beneficiary_book_component__WEBPACK_IMPORTED_MODULE_14__["BeneficiaryBookComponent"], {
              windowClass: 'modal-primary',
              size: 'lg'
            });
            modal.componentInstance.onSelect.subscribe(function (beneficiary) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (beneficiary.method === this.transaction.method) {
                          this.transaction.beneficiary = beneficiary;
                          this.saveAsTemplate = false;
                        } else {
                          this.beneficiary = beneficiary;
                          this.router.navigate(['/withdraw'], {
                            queryParams: {
                              method: beneficiary.method !== 'swift' ? beneficiary.method : null
                            }
                          });
                        }

                        modal.close();

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          }
        }, {
          key: "useMaxAmount",
          value: function useMaxAmount() {
            var _this6 = this;

            if (this.transaction.currency) {
              this.walletsQuery.balances$.subscribe(function (balances) {
                var _a;

                var found = balances.find(function (balance) {
                  return balance.currency.code === _this6.transaction.currency.code;
                });

                if (found) {
                  _this6.transaction.amount = found.availableBalance;

                  if (!_this6.inclusiveFee && _this6.fee) {
                    var maxFee = new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(src_app_common_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_12__["Currency"].convert(_this6.fee.max, _this6.fee.currency, _this6.transaction.currency));
                    var relativeFeeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(_this6.transaction.amount).times((_a = _this6.transaction.relativeFee) !== null && _a !== void 0 ? _a : 0);
                    var fee = new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(_this6.transaction.fixedFee || 0).plus(relativeFeeAmount);

                    if (fee.isGreaterThan(maxFee)) {
                      fee = maxFee;
                    }

                    _this6.transaction.amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(_this6.transaction.amount).minus(fee).toFixed(_this6.transaction.currency.decimalPlaces, 1);
                  }

                  if (new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(_this6.transaction.amount).isLessThan(0)) {
                    _this6.transaction.amount = '0';
                  }

                  _this6.transaction.amount = parseFloat(_this6.transaction.amount).toString();
                }
              });
            }
          }
        }, {
          key: "toggleInclusiveFee",
          value: function toggleInclusiveFee() {
            this.inclusiveFee = !this.inclusiveFee;
            this.transaction.settledAmount = !this.inclusiveFee ? this.transaction.amount : undefined;
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
            this.saveAsTemplate = true;
            this.inclusiveFee = true;
            this.minAmount = undefined;
            this.files = [];

            if (this.withdrawForm) {
              this.withdrawForm.resetForm({
                saveAsTemplate: true,
                inclusiveFee: true,
                amount: undefined,
                purpose: undefined,
                comment: undefined,
                'currency-select': this.transaction.currency
              });
            }

            if (this.beneficiaryDetailsForm) {
              this.beneficiaryDetailsForm.reset();
            }

            if (!this.beneficiary) {
              this.transaction.beneficiary = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["pick"])(this.transaction.beneficiary, ['currency', 'method']);
            } else {
              this.transaction.beneficiary = this.beneficiary;

              if (this.beneficiary.method === 'local') {
                this.transaction.currency = this.currenciesQuery.getEntity(this.beneficiary.currency.code);
              }

              this.beneficiary = undefined;
              this.saveAsTemplate = false;
            }
          }
        }]);

        return WithdrawFormComponent;
      }();

      WithdrawFormComponent.ctorParameters = function () {
        return [{
          type: src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_17__["SessionService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_common_services_accounting_fee_service__WEBPACK_IMPORTED_MODULE_16__["FeeService"]
        }, {
          type: src_app_store_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_21__["WalletsService"]
        }, {
          type: src_app_store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_20__["WalletsQuery"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_19__["CurrenciesQuery"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }];
      };

      WithdrawFormComponent.propDecorators = {
        transaction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        withdrawForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['withdrawForm']
        }],
        beneficiaryDetailsForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['beneficiaryDetailsForm']
        }]
      };
      WithdrawFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'withdraw-form',
        template: _raw_loader_withdraw_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], WithdrawFormComponent);
      /***/
    },

    /***/
    "VMFP":
    /*!*********************************************!*\
      !*** ./src/app/withdraw/withdraw.module.ts ***!
      \*********************************************/

    /*! exports provided: WithdrawModule */

    /***/
    function VMFP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WithdrawModule", function () {
        return WithdrawModule;
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


      var _withdraw_form_withdraw_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./withdraw-form/withdraw-form.component */
      "UFBq");
      /* harmony import */


      var _withdraw_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./withdraw-routing.module */
      "Rztx");
      /* harmony import */


      var _withdraw_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./withdraw.component */
      "U68O");

      var WithdrawModule = /*#__PURE__*/_createClass(function WithdrawModule() {
        _classCallCheck(this, WithdrawModule);
      });

      WithdrawModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_withdraw_component__WEBPACK_IMPORTED_MODULE_7__["WithdrawComponent"], _withdraw_form_withdraw_form_component__WEBPACK_IMPORTED_MODULE_5__["WithdrawFormComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _withdraw_routing_module__WEBPACK_IMPORTED_MODULE_6__["WithdrawRoutingModule"], _common_payment_payment_module__WEBPACK_IMPORTED_MODULE_3__["PaymentFormModule"], _common_transaction_transaction_module__WEBPACK_IMPORTED_MODULE_4__["TransactionModule"]]
      })], WithdrawModule);
      /***/
    },

    /***/
    "hMMK":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/withdraw/withdraw-form/withdraw-form.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hMMK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"session.userStream | async; let user\">\n    <div class=\"btn-view-templates\">\n        <a href (click)=\"$event.preventDefault(); openBeneficiaryBook()\" class=\"font-lg\">{{ 'withdraw-form.view-templates' | translate }} ›</a>\n    </div>\n    <form\n        class=\"form-validation\"\n        #withdrawForm=\"ngForm\"\n        (ngSubmit)=\"submit()\"\n        [ngClass]=\"{ 'ng-submitted': withdrawForm.submitted }\"\n        autocomplete=\"false\"\n        novalidate\n    >\n        <div class=\"form-group\">\n            <label class=\"font-md\" for=\"currency\">{{ 'common.currency' | translate }}</label>\n            <currency-select\n                [(currency)]=\"transaction.currency\"\n                [user]=\"user\"\n                [isLarge]=\"true\"\n                [currencyTypes]=\"transaction?.method === 'crypto' ? ['crypto'] : ['fiat']\"\n                [required]=\"true\"\n                [useFullName]=\"true\"\n                (currencyChange)=\"onCurrencyChange()\"\n                #currencySelect\n                [hideZeroBalance]=\"appName !== 'sgpmx'\"\n            >\n            </currency-select>\n        </div>\n        <div *ngIf=\"currencySelect.currencyInput.invalid && (withdrawForm.submitted || currencySelect.currencyInput.dirty)\" class=\"error-messages\">\n            <div class=\"form-control-feedback\" *ngIf=\"currencySelect.currencyInput?.errors?.required\">\n                {{ 'common.this-is-required' | translate }}\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"d-flex justify-content-between\">\n                <div class=\"d-flex\">\n                    <label class=\"font-md\"> {{ 'common.amount' | translate }} </label>\n                </div>\n                <a href (click)=\"useMaxAmount(); $event.preventDefault()\">{{ 'common.use-max' | translate }}</a>\n            </div>\n            <div class=\"input-group\">\n                <input\n                    type=\"number\"\n                    class=\"form-control form-control-lg\"\n                    id=\"amount\"\n                    name=\"amount\"\n                    placeholder=\"0.00\"\n                    [(ngModel)]=\"transaction.amount\"\n                    [min]=\"minAmount\"\n                    (ngModelChange)=\"onAmountChange()\"\n                    #amount=\"ngModel\"\n                    required\n                />\n                <div class=\"input-group-append\">\n                    <span class=\"input-group-text font-lg\">{{ transaction.currency?.code }}</span>\n                </div>\n            </div>\n            <div *ngIf=\"amount.invalid && (withdrawForm.submitted || amount.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"amount?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                <div class=\"form-control-feedback\" *ngIf=\"amount?.errors?.min\">\n                    {{ 'common.minimum-amount-is' | translate }}\n                    {{ minAmount + '' || '0' | amount: transaction.currency?.decimalPlaces }}\n                    {{ transaction.currency?.code }}.\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"appName !== 'sgpmx'\">\n            <label class=\"custom-control custom-checkbox\">\n                <input type=\"checkbox\" class=\"custom-control-input\" name=\"inclusiveFee\" (click)=\"toggleInclusiveFee()\" [ngModel]=\"inclusiveFee\" />\n                <span class=\"custom-control-label font-md\">\n                    {{ 'common.include-service-fee' | translate }}\n                    <fa-icon\n                        class=\"text-primary\"\n                        [icon]=\"faQuestionCircle\"\n                        [popoverTitle]=\"inclusiveFeeTitle\"\n                        [ngbPopover]=\"inclusiveFeeContent\"\n                        triggers=\"hover\"\n                        container=\"body\"\n                    >\n                    </fa-icon>\n                </span>\n            </label>\n        </div>\n        <beneficiary-details-form\n            [beneficiary]=\"transaction.beneficiary\"\n            [currency]=\"transaction.currency\"\n            [isLarge]=\"true\"\n            [disabled]=\"!!transaction.beneficiary?.id\"\n            #beneficiaryDetailsForm\n        >\n        </beneficiary-details-form>\n        <div class=\"form-group mb-4\">\n            <div class=\"d-flex justify-content-between align-items-center\">\n                <label class=\"custom-control custom-checkbox\">\n                    <input\n                        type=\"checkbox\"\n                        class=\"custom-control-input\"\n                        name=\"saveAsTemplate\"\n                        [(ngModel)]=\"saveAsTemplate\"\n                        [disabled]=\"!!transaction.beneficiary?.id\"\n                    />\n                    <span class=\"custom-control-label font-md\" [ngClass]=\"saveAsTemplate ? 'text-body' : 'text-muted'\">{{\n                        'withdraw-form.save-as-template' | translate\n                    }}</span>\n                </label>\n                <a href (click)=\"$event.preventDefault(); reset()\" *ngIf=\"transaction.beneficiary?.id\">{{ 'common.clear' | translate }}</a>\n            </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"appName !== 'sgpmx'\">\n            <label class=\"font-md\" for=\"purpose\">{{ 'common.purpose' | translate }}</label>\n            <ng-select\n                class=\"ng-select-lg\"\n                name=\"purpose\"\n                [(ngModel)]=\"transaction.purpose\"\n                [items]=\"purposeItems\"\n                [clearable]=\"false\"\n                [required]=\"true\"\n                [addTag]=\"true\"\n                addTagText=\"Use\"\n                dropdownPosition=\"bottom\"\n                #purposeInput=\"ngModel\"\n            >\n                <ng-template ng-label-tmp let-item=\"item\">\n                    {{ item }}\n                </ng-template>\n                <ng-template ng-option-tmp let-item=\"item\">\n                    {{ item }}\n                </ng-template>\n            </ng-select>\n            <div *ngIf=\"purposeInput.invalid && (withdrawForm.submitted || purposeInput.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"purposeInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"font-md\" for=\"comment\"\n                >{{ 'common.comment' | translate }} <small class=\"text-muted\">({{ 'common.optional' | translate }})</small></label\n            >\n            <textarea\n                class=\"form-control form-control-lg\"\n                id=\"comment\"\n                name=\"comment\"\n                [(ngModel)]=\"transaction.comment\"\n                rows=\"3\"\n                emptyToNull\n            ></textarea>\n        </div>\n        <div class=\"form-group\">\n            <a href class=\"d-block mb-2\" (click)=\"isUploadCollapsed = !isUploadCollapsed; $event.preventDefault()\">\n                {{ isUploadCollapsed ? '+ ' + ('common.attach' | translate) : '- ' + ('common.remove' | translate) }}\n                {{ 'common.file' | translate | lowercase }}\n            </a>\n            <dropzone [files]=\"files\" [ngbCollapse]=\"isUploadCollapsed\"></dropzone>\n        </div>\n        <access-errors [errors]=\"['VerificationRequiredError']\"></access-errors>\n        <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary mb-2\" [disabled]=\"user.accessErrors.includes('VerificationRequiredError')\">\n            {{ 'common.submit' | translate }}\n        </button>\n        <div class=\"small text-muted\">\n            {{ 'common.by-clicking-the-submit-button' | translate }} <br />\n            <a [routerLink]=\"['/terms']\" class=\"text-muted\" target=\"_blank\" rel=\"noopener\"\n                >{{ 'common.terms' | translate }} &amp; {{ 'common.conditions' | translate }}</a\n            >\n            {{ 'common.and' | translate }}\n            <a [routerLink]=\"['/privacy']\" class=\"text-muted\" target=\"_blank\" rel=\"noopener\">{{ 'common.data-privacy-notice' | translate }}</a\n            >.\n        </div>\n    </form>\n</ng-container>\n<ng-template #inclusiveFeeTitle> {{ 'common.include-service-fee' | translate }} </ng-template>\n<ng-template #inclusiveFeeContent>\n    <p>\n        {{ 'common.if' | translate }} <b>{{ 'common.checked' | translate }}</b\n        >, {{ 'common.checked-desc' | translate }}\n    </p>\n    <p>\n        {{ 'common.if' | translate }} <b>{{ 'common.unchecked' | translate }}</b\n        >, {{ 'common.unchecked-desc' | translate }}\n    </p>\n</ng-template>\n";
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
    },

    /***/
    "wjTR":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/withdraw/withdraw.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function wjTR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"session.userStream | async; let user\">\n    <div class=\"container pt-page e2e-withdraw\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"payment-methods\">\n                    <a\n                        *ngIf=\"user.hasPermission('payment-swift')\"\n                        class=\"payment-methods-item\"\n                        [routerLink]=\"['/withdraw']\"\n                        [queryParams]=\"{ method: null }\"\n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions]=\"{ exact: true }\"\n                    >\n                        <figure>\n                            <img class=\"img-fluid\" draggable=\"false\" src=\"/img/payment-methods/swift.svg\" />\n                        </figure>\n                        <span>{{ 'common.intl-wire-transfer' | translate }}</span>\n                    </a>\n                    <a\n                        *ngIf=\"user.hasPermission('payment-local')\"\n                        class=\"payment-methods-item\"\n                        [routerLink]=\"['/withdraw']\"\n                        [queryParams]=\"{ method: 'local' }\"\n                        routerLinkActive=\"active\"\n                    >\n                        <figure>\n                            <img class=\"img-fluid\" draggable=\"false\" src=\"/img/payment-methods/local.svg\" />\n                        </figure>\n                        <span>{{ 'withdraw.local-wire-transfer' | translate }}</span>\n                    </a>\n                    <a\n                        *ngIf=\"user.hasPermission('payment-crypto')\"\n                        class=\"payment-methods-item\"\n                        [routerLink]=\"['/withdraw']\"\n                        [queryParams]=\"{ method: 'crypto' }\"\n                        routerLinkActive=\"active\"\n                    >\n                        <figure>\n                            <img class=\"img-fluid\" draggable=\"false\" src=\"/img/payment-methods/crypto.svg\" />\n                        </figure>\n                        <span>{{ 'common.crypto-currencies' | translate }}</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"row mb-3\">\n            <div class=\"col-lg-12\">\n                <section class=\"card mb-3\">\n                    <div class=\"card-header\">\n                        <h5 class=\"mb-0\">{{ 'common.withdraw' | translate }}</h5>\n                    </div>\n                    <div class=\"card-body\">\n                        <withdraw-form [(transaction)]=\"transaction\"></withdraw-form>\n                    </div>\n                </section>\n                <p class=\"text-center text-muted\">\n                    <a [routerLink]=\"['/deposit']\">{{ 'common.go-to-deposit' | translate }} &#x203A;</a>\n                </p>\n            </div>\n            <div class=\"col-lg-12 d-none d-lg-block\">\n                <div class=\"transation-slip-container max-width-sm\">\n                    <transaction-slip [transaction]=\"transaction\"></transaction-slip>\n                    <p class=\"text-center text-muted pb-4\">\n                        {{ 'common.learn-more-about-our-fees' | translate }} <a [routerLink]=\"['/fees']\">{{ 'common.here' | translate }}</a>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=withdraw-withdraw-module-es5.js.map