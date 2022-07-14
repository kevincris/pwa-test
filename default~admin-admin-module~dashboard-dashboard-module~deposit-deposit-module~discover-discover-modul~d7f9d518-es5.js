(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~dashboard-dashboard-module~deposit-deposit-module~discover-discover-modul~d7f9d518"], {
    /***/
    "22W4":
    /*!*******************************************************************************************!*\
      !*** ./src/app/common/transaction/transaction-overview/transaction-overview.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: TransactionOverviewComponent */

    /***/
    function W4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionOverviewComponent", function () {
        return TransactionOverviewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_transaction_overview_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./transaction-overview.component.html */
      "N/ae");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/pro-solid-svg-icons */
      "4Bjl");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_7__);
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


      var _common_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../common.mixin */
      "s/H0");
      /* harmony import */


      var _models_accounting_transaction_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../models/accounting/transaction.model */
      "OWbF");
      /* harmony import */


      var _models_core_user_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../models/core/user.model */
      "vk+e");
      /* harmony import */


      var _services_session_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../services/session.service */
      "6g7h");
      /* harmony import */


      var _services_sgpmx_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../services/sgpmx.service */
      "BqkS");
      /* harmony import */


      var _transactions_mixins__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../transactions.mixins */
      "HiCw");

      var TransactionOverviewComponent = /*#__PURE__*/function () {
        function TransactionOverviewComponent(http, activeModal, session, sgpmxService, translate) {
          _classCallCheck(this, TransactionOverviewComponent);

          this.http = http;
          this.activeModal = activeModal;
          this.session = session;
          this.sgpmxService = sgpmxService;
          this.translate = translate;
          this.calculateFee = _transactions_mixins__WEBPACK_IMPORTED_MODULE_16__["calculateFee"];
          this.isZero = _common_mixin__WEBPACK_IMPORTED_MODULE_11__["isZero"];
          this.faTimes = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimes"];
          this.faCircleNotch = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCircleNotch"];
          this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].appName;
          this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].displayName;
          this.fetchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
        }

        _createClass(TransactionOverviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.subscriptions.add(this.session.userStream.subscribe(function (user) {
              _this.user = new _models_core_user_model__WEBPACK_IMPORTED_MODULE_13__["User"](user);
            }));
            this.subscriptions.add(this.fetchEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function () {
              return !!_this.transaction.id;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function () {
              return _this.http.get("/transactions/".concat(_this.transaction.id));
            })).subscribe(function (transaction) {
              Object.assign(_this.transaction, transaction);
            }));
            this.fetchEvent.next();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.transaction) {
              this.fetchEvent.next();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "buildActionLabel",
          value: function buildActionLabel(transaction) {
            if (transaction.status === 'completed') {
              if (transaction.type === 'deposit') {
                return this.translate.instant('common.deposited');
              }

              return this.isReceiver ? 'Received' : 'Sent';
            }

            if (transaction.type === 'deposit') {
              return this.translate.instant('common.requesting');
            }

            return this.translate.instant('common.sending');
          }
        }, {
          key: "showFees",
          value: function showFees(transaction) {
            return !this.isReceiver || transaction.type === 'deposit';
          }
        }, {
          key: "formatTxid",
          value: function formatTxid(externalReference) {
            return externalReference.includes(':') ? externalReference.split(':')[1] : externalReference;
          }
        }, {
          key: "calculateExchangeRate",
          value: function calculateExchangeRate() {
            if (this.transaction.type === 'deposit' && this.transaction.receivedAmount) {
              return new bignumber_js__WEBPACK_IMPORTED_MODULE_7___default.a(this.transaction.receivedAmount).div(this.transaction.amount).toFixed(this.transaction.currency.decimalPlaces, 1);
            }

            return '';
          }
        }, {
          key: "determineAmount",
          value: function determineAmount() {
            var _a;

            if (this.transaction.card && this.transaction.currency.code !== ((_a = this.transaction.receivedCurrency) === null || _a === void 0 ? void 0 : _a.code)) {
              return this.transaction.receivedAmount;
            }

            return ['card-order', 'payment'].includes(this.transaction.type) ? this.calculateFee(this.transaction) : this.creditableAmount;
          }
        }, {
          key: "isReceiver",
          get: function get() {
            return Object(_transactions_mixins__WEBPACK_IMPORTED_MODULE_16__["isReceiver"])(this.transaction, this.user);
          }
        }, {
          key: "creditableAmount",
          get: function get() {
            return this.transaction.id ? this.transaction.settledAmount : Object(_transactions_mixins__WEBPACK_IMPORTED_MODULE_16__["calculateCreditableAmount"])(this.transaction);
          }
        }, {
          key: "deductableAmount",
          get: function get() {
            // For preview
            if (!this.transaction.id || this.transaction.type === 'payment') {
              return Object(_transactions_mixins__WEBPACK_IMPORTED_MODULE_16__["calculateDeductableAmount"])(this.transaction);
            }

            return this.transaction.type !== 'deposit' && this.isReceiver ? this.transaction.settledAmount : Object(_transactions_mixins__WEBPACK_IMPORTED_MODULE_16__["calculateDeductableAmount"])(this.transaction);
          }
        }, {
          key: "isSgpmxMetalTransfer",
          value: function isSgpmxMetalTransfer() {
            var _a;

            return this.appName === 'sgpmx' && this.transaction.type === 'transfer' && ['AU', 'AG'].includes((_a = this.transaction.currency) === null || _a === void 0 ? void 0 : _a.code);
          }
        }, {
          key: "calculateFeeInUsd",
          value: function calculateFeeInUsd() {
            return this.sgpmxService.calculateFeeInUsd(this.transaction);
          }
        }, {
          key: "isPlatformTransfer",
          value: function isPlatformTransfer() {
            return new _models_accounting_transaction_model__WEBPACK_IMPORTED_MODULE_12__["Transaction"](this.transaction).isPlatformTransfer();
          }
        }]);

        return TransactionOverviewComponent;
      }();

      TransactionOverviewComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: _services_session_service__WEBPACK_IMPORTED_MODULE_14__["SessionService"]
        }, {
          type: _services_sgpmx_service__WEBPACK_IMPORTED_MODULE_15__["SgpmxService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }];
      };

      TransactionOverviewComponent.propDecorators = {
        transaction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      TransactionOverviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'transaction-overview',
        template: _raw_loader_transaction_overview_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TransactionOverviewComponent);
      /***/
    },

    /***/
    "3nDh":
    /*!***********************************************!*\
      !*** ./src/app/common/trades/trade.mixins.ts ***!
      \***********************************************/

    /*! exports provided: getTradeGrandTotal, getTradeValue */

    /***/
    function nDh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTradeGrandTotal", function () {
        return getTradeGrandTotal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTradeValue", function () {
        return getTradeValue;
      });
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);

      function getTradeGrandTotal(trade) {
        var value = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(trade.quantity).times(trade.price);
        return (trade.side === 'BUY' ? value.plus(new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(trade.fee).plus(trade.gst)) : value.minus(new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(trade.fee).plus(trade.gst))).toFixed(2);
      }

      function getTradeValue(trade) {
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(trade.quantity).times(trade.price).toFixed(2);
      }
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
    "6sOK":
    /*!******************************************!*\
      !*** ./src/app/store/fees/fees.store.ts ***!
      \******************************************/

    /*! exports provided: FeesStore */

    /***/
    function sOK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeesStore", function () {
        return FeesStore;
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


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @datorama/akita */
      "4ZtF");

      var FeesStore = /*#__PURE__*/function (_datorama_akita__WEBP) {
        _inherits(FeesStore, _datorama_akita__WEBP);

        var _super = _createSuper(FeesStore);

        function FeesStore() {
          _classCallCheck(this, FeesStore);

          return _super.call(this);
        }

        return _createClass(FeesStore);
      }(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"]);

      FeesStore.ctorParameters = function () {
        return [];
      };

      FeesStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({
        name: 'fees',
        idKey: 'id'
      })], FeesStore);
      /***/
    },

    /***/
    "7oti":
    /*!**********************************************************!*\
      !*** ./src/app/common/models/accounting/wallet.model.ts ***!
      \**********************************************************/

    /*! exports provided: Wallet */

    /***/
    function oti(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Wallet", function () {
        return Wallet;
      });
      /* harmony import */


      var _core_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/user.model */
      "vk+e");
      /* harmony import */


      var _currency_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./currency.model */
      "/e3T");

      var Wallet = /*#__PURE__*/function () {
        function Wallet(data) {
          _classCallCheck(this, Wallet);

          if (data) {
            Object.assign(this, data);
            this.currency = new _currency_model__WEBPACK_IMPORTED_MODULE_1__["Currency"](data.currency);

            if (data.user) {
              this.user = new _core_user_model__WEBPACK_IMPORTED_MODULE_0__["User"](data.user);
            }
          }
        }

        _createClass(Wallet, [{
          key: "isRootWallet",
          value: function isRootWallet() {
            return this.user === null;
          }
        }]);

        return Wallet;
      }();
      /***/

    },

    /***/
    "80k1":
    /*!******************************************!*\
      !*** ./src/app/store/fees/fees.query.ts ***!
      \******************************************/

    /*! exports provided: FeesQuery */

    /***/
    function k1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeesQuery", function () {
        return FeesQuery;
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


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @datorama/akita */
      "4ZtF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _fees_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./fees.store */
      "6sOK");

      var FeesQuery = /*#__PURE__*/function (_datorama_akita__WEBP2) {
        _inherits(FeesQuery, _datorama_akita__WEBP2);

        var _super2 = _createSuper(FeesQuery);

        function FeesQuery(store) {
          var _this2;

          _classCallCheck(this, FeesQuery);

          _this2 = _super2.call(this, store);
          _this2.store = store;
          return _this2;
        }

        _createClass(FeesQuery, [{
          key: "findByPrimaryAttributes",
          value: function findByPrimaryAttributes(query) {
            var _this3 = this;

            return this.selectEntity(function (entity) {
              return entity.type === query.type && entity.method === query.method && query.currencyCode === entity.currency.code;
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (fee) {
              return fee ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(fee) : _this3.selectEntity(function (entity) {
                return entity.type === query.type && entity.method === query.method && entity.currency.code === 'USD';
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (usdFee) {
                return usdFee !== null && usdFee !== void 0 ? usdFee : null;
              }));
            }));
          }
        }]);

        return FeesQuery;
      }(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["QueryEntity"]);

      FeesQuery.ctorParameters = function () {
        return [{
          type: _fees_store__WEBPACK_IMPORTED_MODULE_5__["FeesStore"]
        }];
      };

      FeesQuery = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FeesQuery);
      /***/
    },

    /***/
    "9wb7":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/transaction/transaction-view/transaction-view.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wb7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header\">\n    <h5 class=\"modal-title\">Txid: <uuid [value]=\"transaction.id\" ngClass=\"text-white\"></uuid></h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss()\" *ngIf=\"activeModal\">&times;</button>\n</div>\n<ul class=\"nav nav-tabs-alt nav-fill\">\n    <li class=\"nav-item\">\n        <a\n            href\n            class=\"nav-link e2e-transaction-view-overview\"\n            [ngClass]=\"{ active: activeTab === 'overview' }\"\n            (click)=\"$event.preventDefault(); activeTab = 'overview'\"\n        >\n            {{ 'common.overview' | translate }}\n        </a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"transaction.beneficiary\">\n        <a\n            href\n            class=\"nav-link e2e-transaction-view-beneficiary\"\n            [ngClass]=\"{ active: activeTab === 'beneficiary' }\"\n            (click)=\"$event.preventDefault(); activeTab = 'beneficiary'\"\n        >\n            {{ (transaction.type === 'deposit' ? 'common.instructions' : 'common.beneficiary') | translate }}\n        </a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"transaction.method !== 'crypto'\">\n        <a\n            href\n            class=\"nav-link e2e-transaction-view-attachments\"\n            [ngClass]=\"{ active: activeTab === 'attachments' }\"\n            (click)=\"$event.preventDefault(); activeTab = 'attachments'\"\n        >\n            {{ 'common.attachments' | translate }}\n        </a>\n    </li>\n</ul>\n<div class=\"modal-body transaction-view e2e-transaction-view\">\n    <ng-container *ngIf=\"activeTab === 'overview'\">\n        <transaction-overview [transaction]=\"transaction\"></transaction-overview>\n        <div class=\"row b-t-1 p-2\">\n            <div class=\"col-12 py-2\">\n                <div class=\"font-weight-bold\">{{ 'common.type' | translate }}</div>\n                <div>{{ transaction.type | startCase }}</div>\n            </div>\n            <div *ngIf=\"transaction.method !== 'internal'\" class=\"col-12 py-2\">\n                <div class=\"font-weight-bold\">{{ 'common.method' | translate }}</div>\n                <div>{{ transactionMethodMap[transaction.method] }}</div>\n            </div>\n            <div class=\"col-12 py-2\">\n                <div class=\"font-weight-bold\">{{ 'common.status' | translate }}</div>\n                <div\n                    class=\"text-capitalize\"\n                    [ngClass]=\"{\n                        'text-success': transaction.status === 'completed',\n                        'text-info': transaction.status === 'pending',\n                        'text-warning': transaction.status === 'processing',\n                        'text-danger': ['cancelled', 'failed'].includes(transaction.status)\n                    }\"\n                >\n                    {{ transaction.status | startCase }}\n                </div>\n            </div>\n            <div *ngIf=\"transaction.purpose\" class=\"col-12 py-2\">\n                <div class=\"font-weight-bold\">{{ 'common.purpose' | translate }}</div>\n                <div>{{ transaction.purpose | startCase }}</div>\n            </div>\n            <div *ngIf=\"transaction.sourceOfFunds\" class=\"col-12 py-2\">\n                <div class=\"font-weight-bold\">{{ 'common.source-of-funds' | translate }}</div>\n                <div>{{ transaction.sourceOfFunds | startCase }}</div>\n            </div>\n            <div class=\"col-12 py-2\">\n                <div class=\"font-weight-bold\">{{ 'common.created-at' | translate }}</div>\n                <div>{{ transaction.createdAt | date: 'medium' }}</div>\n            </div>\n            <div *ngIf=\"transaction.settledAt\" class=\"col-12 py-2\">\n                <div class=\"font-weight-bold\">Settled at</div>\n                <div>{{ transaction.settledAt | date: 'medium' }}</div>\n            </div>\n        </div>\n        <div class=\"row b-t-1 p-2\" *ngIf=\"trade\">\n            <div class=\"col-12 py-2\">\n                <div class=\"font-weight-bold\">{{ 'common.trade' | translate }} ID</div>\n                <uuid [value]=\"trade.id\" ngClass=\"text-gray\"></uuid>\n            </div>\n            <div class=\"col-12 py-2\">\n                <div class=\"font-weight-bold\">{{ 'common.symbol' | translate }}</div>\n                <div>{{ trade.symbol }}</div>\n            </div>\n            <div class=\"col-12 py-2\">\n                <div class=\"font-weight-bold\">{{ 'trade-type' | translate }}</div>\n                <div>{{ trade.side }}</div>\n            </div>\n            <div class=\"col-12 py-2\">\n                <div class=\"font-weight-bold\">{{ 'common.spot-price' | translate }}</div>\n                <div>{{ trade.price | amount: 2 }} USD</div>\n            </div>\n            <div class=\"col-12 py-2\">\n                <div class=\"font-weight-bold\">{{ 'common.amount' | translate }}</div>\n                <div>{{ trade.quantity | amount: 7 }} {{ trade.symbol.split('/')[0] }}</div>\n                <div class=\"text-muted font-sm\">{{ getTradeValue(trade) | amount: 2 }} USD</div>\n            </div>\n            <div class=\"col-12 py-2\">\n                <div class=\"font-weight-bold\">{{ 'common.fee' | translate }}</div>\n                <div>{{ trade.fee | amount: 2 }} USD</div>\n            </div>\n            <div class=\"col-12 py-2\">\n                <div class=\"font-weight-bold\">GST</div>\n                <div>{{ trade.gst | amount: 2 }} USD</div>\n            </div>\n            <div class=\"col-12 py-2\">\n                <div class=\"font-weight-bold\">{{ 'common.grand-total' | translate | sentenceCase }}</div>\n                <div>{{ getTradeGrandTotal(trade) | amount: 2 }} USD</div>\n            </div>\n        </div>\n    </ng-container>\n    <ng-container *ngIf=\"activeTab === 'beneficiary'\">\n        <ng-container *ngIf=\"transaction.method === 'crypto'; else depositInstruction\">\n            <div class=\"form-group\">\n                <label class=\"font-md\" for=\"depositAddress\">{{ transaction.type | startCase }} {{ 'common.address' | translate }}</label>\n                <div class=\"input-group input-group-lg mb-3\">\n                    <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"depositAddress\"\n                        name=\"depositAddress\"\n                        [value]=\"transaction.beneficiary?.accountNumber\"\n                        disabled\n                    />\n                    <copy-btn\n                        class=\"input-group-append\"\n                        [value]=\"transaction.beneficiary?.accountNumber\"\n                        [disabled]=\"!transaction.beneficiary\"\n                    ></copy-btn>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"font-md\" for=\"depositAmount\">{{ transaction.type | startCase }} {{ 'common.amount' | translate }}</label>\n                <div class=\"input-group input-group-lg mb-3\">\n                    <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"depositAmount\"\n                        name=\"depositAmount\"\n                        value=\"{{ transaction.amount | amount }}\"\n                        disabled\n                    />\n                    <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">{{ transaction.currency?.code }}</span>\n                    </div>\n                </div>\n            </div>\n            <form\n                *ngIf=\"transaction.type === 'deposit'\"\n                class=\"crypto-form form-validation\"\n                #cryptoForm=\"ngForm\"\n                [ngClass]=\"{ 'ng-submitted': cryptoForm.submitted }\"\n                autocomplete=\"false\"\n                novalidate\n            >\n                <div class=\"form-group\">\n                    <label class=\"font-md\" for=\"txid\">\n                        Transaction ID\n                        <a\n                            href\n                            (click)=\"$event.preventDefault()\"\n                            [ngbPopover]=\"txidContent\"\n                            [popoverTitle]=\"txidTitle\"\n                            triggers=\"mouseenter:mouseleave\"\n                            ><fa-icon [icon]=\"faQuestionCircle\"></fa-icon\n                        ></a>\n                    </label>\n                    <input\n                        type=\"text\"\n                        class=\"form-control form-control-lg\"\n                        id=\"txid\"\n                        name=\"txid\"\n                        [(ngModel)]=\"transaction.reference\"\n                        [disabled]=\"transaction.status !== 'pending'\"\n                        #txidInput=\"ngModel\"\n                        required\n                    />\n                    <div *ngIf=\"txidInput.invalid && (cryptoForm.submitted || txidInput.dirty)\" class=\"error-messages\">\n                        <div class=\"form-control-feedback\" *ngIf=\"txidInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                    </div>\n                </div>\n            </form>\n            <div class=\"callout callout-info\" *ngIf=\"transaction.type === 'deposit'\">\n                <p>By using this deposit address, you confirm that you accept our Terms & Conditions and Data Privacy Notice</p>\n                <p>\n                    <b>Disclaimer:</b> All funds are deposited into a cold wallet provided to Aerapass by a third party service provider. Aerapass\n                    does not operate any virtual asset storage or exchange facilities.\n                </p>\n            </div>\n        </ng-container>\n        <ng-template #depositInstruction>\n            <div class=\"p-1\">\n                <deposit-instruction [transaction]=\"transaction\"></deposit-instruction>\n            </div>\n        </ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"activeTab === 'attachments'\">\n        <dropzone\n            *ngIf=\"\n                ['deposit', 'transfer', 'withdrawal'].includes(transaction.type) &&\n                ['pending', 'processing', 'completed'].includes(transaction.status)\n            \"\n            class=\"w-100\"\n            [files]=\"files\"\n            [existingFiles]=\"existingFiles\"\n            [canDelete]=\"false\"\n            [showTable]=\"false\"\n        ></dropzone>\n        <div class=\"table-responsive\">\n            <table\n                class=\"table table-hover align-items-center table-borderless mb-0\"\n                *ngIf=\"\n                    (files && files.length > 0) ||\n                        (existingFiles && existingFiles.length > 0) ||\n                        ['deposit', 'withdrawal'].includes(transaction.type) ||\n                        hasReceipt ||\n                        transaction.reference?.startsWith('Invoice');\n                    else noFile\n                \"\n            >\n                <thead>\n                    <tr>\n                        <th scope=\"col\" colspan=\"2\">{{ 'common.file-name' | translate }}</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngIf=\"transaction.reference?.startsWith('Invoice')\">\n                        <th>\n                            <a href (click)=\"$event.preventDefault(); openInvoice(transaction?.reference)\">{{ transaction.reference }}</a>\n                        </th>\n                        <td></td>\n                    </tr>\n                    <tr class=\"bg-white attachment\" *ngIf=\"['deposit', 'withdrawal'].includes(transaction.type)\">\n                        <th scope=\"row\">\n                            <a href class=\"text-primary\" (click)=\"$event.preventDefault(); openProformaInvoice()\">{{\n                                'common.proforma-invoice' | translate\n                            }}</a>\n                        </th>\n                        <td></td>\n                    </tr>\n                    <tr class=\"bg-white attachment\" *ngIf=\"hasReceipt\">\n                        <th scope=\"row\">\n                            <a href class=\"text-primary\" (click)=\"$event.preventDefault(); openSgpmxInvoice()\">{{ 'common.invoice' | translate }}</a>\n                        </th>\n                        <td></td>\n                    </tr>\n                    <tr class=\"bg-white attachment e2e-attachment\" *ngFor=\"let existingFile of existingFiles\">\n                        <th scope=\"row\">\n                            <file-item [file]=\"existingFile\"></file-item>\n                        </th>\n                        <td></td>\n                    </tr>\n                    <tr class=\"bg-white attachment e2e-attachment\" *ngFor=\"let item of files; let i = index\">\n                        <th scope=\"row\">\n                            <div class=\"text-primary\">{{ item.name }}</div>\n                            <small class=\"text-muted\">{{ item.size / 1024 / 1024 | number: '.2' }} MB</small>\n                        </th>\n                        <td class=\"text-right\" nowrap>\n                            <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"files.splice(i, 1)\">\n                                <fa-icon [icon]=\"faTimes\"></fa-icon>\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <ng-template #noFile>\n            <div class=\"text-center mt-4 mb-3\">\n                <fa-icon class=\"text-muted\" [icon]=\"faFileSearch\" size=\"3x\"></fa-icon>\n                <h3 class=\"text-muted mt-2\">{{ 'common.no-files-found' | translate }}</h3>\n            </div>\n        </ng-template>\n    </ng-container>\n</div>\n<div class=\"modal-footer\">\n    <ng-container *ngIf=\"['deposit', 'withdrawal', 'transfer'].includes(transaction.type) && (canMarkAsPaid || canUpload || canCancel); else close\">\n        <button\n            *ngIf=\"canMarkAsPaid\"\n            class=\"btn btn-success btn-w-sm e2e-mark-as-paid-btn\"\n            [ngClass]=\"{ loading: isMarkingAsPaid }\"\n            [disabled]=\"isLoading\"\n            (click)=\"transaction.method === 'crypto' ? markCryptoDepositAsPaid() : markAsPaid()\"\n        >\n            {{ 'common.mark-as-paid' | translate }}\n        </button>\n        <button\n            *ngIf=\"canUpload\"\n            class=\"btn btn-success btn-w-sm e2e-upload-attachment-btn\"\n            [ngClass]=\"{ loading: isUploading }\"\n            [disabled]=\"isLoading\"\n            (click)=\"uploadFiles()\"\n        >\n            {{ 'common.upload-files' | translate }}\n        </button>\n        <button\n            *ngIf=\"canCancel\"\n            class=\"btn btn-danger btn-w-sm e2e-cancel-transaction-btn\"\n            [ngClass]=\"{ loading: isCancelling }\"\n            [disabled]=\"isLoading\"\n            (click)=\"cancel()\"\n        >\n            {{ 'common.cancel' | translate }}\n        </button>\n    </ng-container>\n    <ng-template #close>\n        <button class=\"btn btn-default btn-w-sm\" (click)=\"activeModal.dismiss()\">{{ 'common.close' | translate }}</button>\n    </ng-template>\n</div>\n\n<ng-template #txidTitle> {{ 'common.what-is-transaction-id' | translate }} </ng-template>\n<ng-template #txidContent>\n    <p>{{ 'common.after-submitting-transaction' | translate }}</p>\n    <p>{{ 'common.please-paste-transaction-id' | translate }}</p>\n</ng-template>\n";
      /***/
    },

    /***/
    "AVzZ":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/transaction/transaction-slip/transaction-slip.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AVzZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"transaction-slip\">\n    <button type=\"button\" class=\"close close-modal float-right\" (click)=\"activeModal.close()\" *ngIf=\"activeModal\">&times;</button>\n    <p class=\"text-center\" *ngIf=\"transaction.id\">\n        <span class=\"font-weight-bold\">{{ transaction.id }}</span>\n    </p>\n    <transaction-overview [transaction]=\"transaction\"></transaction-overview>\n</div>\n";
      /***/
    },

    /***/
    "BqkS":
    /*!**************************************************!*\
      !*** ./src/app/common/services/sgpmx.service.ts ***!
      \**************************************************/

    /*! exports provided: SgpmxService */

    /***/
    function BqkS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SgpmxService", function () {
        return SgpmxService;
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


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/store/currencies/currencies.query */
      "4pv/");
      /* harmony import */


      var src_app_store_fees_fees_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/store/fees/fees.query */
      "80k1");
      /* harmony import */


      var _models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../models/accounting/currency.model */
      "/e3T");

      var SgpmxService = /*#__PURE__*/function () {
        function SgpmxService(currenciesQuery, feesQuery) {
          _classCallCheck(this, SgpmxService);

          this.currenciesQuery = currenciesQuery;
          this.feesQuery = feesQuery;
        }

        _createClass(SgpmxService, [{
          key: "calculateFeeInUsd",
          value: function calculateFeeInUsd(transaction) {
            if (!transaction.currency || !transaction.amount) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('0');
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([this.currenciesQuery.selectEntity('USD').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)), this.currenciesQuery.selectEntity(transaction.currency.code).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)), this.feesQuery.findByPrimaryAttributes({
              type: 'transfer',
              method: 'internal',
              currencyCode: transaction.currency.code
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)), this.feesQuery.findByPrimaryAttributes({
              type: 'gst',
              method: 'internal',
              currencyCode: transaction.currency.code
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 4),
                  usd = _ref2[0],
                  currency = _ref2[1],
                  transferFee = _ref2[2],
                  gstFee = _ref2[3];

              var usdValue = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_7__["Currency"].convert(transaction.amount, currency, usd)).decimalPlaces(2);
              var feeAmount = usdValue.times((transferFee === null || transferFee === void 0 ? void 0 : transferFee.relative) || 0).plus((transferFee === null || transferFee === void 0 ? void 0 : transferFee.fixed) || 0);

              if ((transferFee === null || transferFee === void 0 ? void 0 : transferFee.min) && feeAmount.isLessThan(transferFee.min)) {
                feeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(transferFee.min);
              } else if ((transferFee === null || transferFee === void 0 ? void 0 : transferFee.max) && feeAmount.isGreaterThan(transferFee.max)) {
                feeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(transferFee.max);
              }

              var gst = feeAmount.times((gstFee === null || gstFee === void 0 ? void 0 : gstFee.relative) || 0);

              if (!feeAmount.isZero() && (gstFee === null || gstFee === void 0 ? void 0 : gstFee.min) && gst.isLessThan(gstFee.min)) {
                gst = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(gstFee.min);
              } else if (!feeAmount.isZero() && (gstFee === null || gstFee === void 0 ? void 0 : gstFee.max) && gst.isGreaterThan(gstFee.max)) {
                gst = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(gstFee.max);
              }

              return feeAmount.plus(gst).toFixed(2);
            }));
          }
        }]);

        return SgpmxService;
      }();

      SgpmxService.ctorParameters = function () {
        return [{
          type: src_app_store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_5__["CurrenciesQuery"]
        }, {
          type: src_app_store_fees_fees_query__WEBPACK_IMPORTED_MODULE_6__["FeesQuery"]
        }];
      };

      SgpmxService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SgpmxService);
      /***/
    },

    /***/
    "JpEy":
    /*!*****************************************************!*\
      !*** ./src/app/common/models/core/address.model.ts ***!
      \*****************************************************/

    /*! exports provided: Address */

    /***/
    function JpEy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Address", function () {
        return Address;
      });

      var Address = /*#__PURE__*/_createClass(function Address(data) {
        _classCallCheck(this, Address);

        Object.assign(this, data);
      });
      /***/

    },

    /***/
    "Kg0I":
    /*!***********************************************************************************!*\
      !*** ./src/app/common/transaction/transaction-slip/transaction-slip.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: TransactionSlipComponent */

    /***/
    function Kg0I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionSlipComponent", function () {
        return TransactionSlipComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_transaction_slip_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./transaction-slip.component.html */
      "AVzZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var TransactionSlipComponent = /*#__PURE__*/_createClass(function TransactionSlipComponent(activeModal) {
        _classCallCheck(this, TransactionSlipComponent);

        this.activeModal = activeModal;
      });

      TransactionSlipComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }];
      };

      TransactionSlipComponent.propDecorators = {
        transaction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      TransactionSlipComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'transaction-slip',
        template: _raw_loader_transaction_slip_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TransactionSlipComponent);
      /***/
    },

    /***/
    "N/ae":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/transaction/transaction-overview/transaction-overview.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NAe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"mb-2 text-center\">\n    <span class=\"label label-success mb-1\">{{ buildActionLabel(transaction) }}</span>\n    <h2 class=\"text-primary mb-0\">{{ deductableAmount | amount: transaction.currency?.decimalPlaces }} {{ transaction.currency?.code }}</h2>\n</div>\n<transaction-flow [transaction]=\"transaction\"></transaction-flow>\n<div class=\"table-responsive my-2\">\n    <table class=\"table table-borderless mb-0\">\n        <tbody>\n            <tr\n                *ngIf=\"\n                    transaction.id &&\n                    transaction.type === 'deposit' &&\n                    transaction.method !== 'card' &&\n                    transaction.receivedCurrency &&\n                    transaction.receivedCurrency.code !== transaction.currency?.code\n                \"\n            >\n                <th class=\"py-2 text-right font-weight-bold text-muted\">{{ 'common.conversion' | translate }}</th>\n                <td class=\"py-2 text-right text-muted\">\n                    {{ transaction.receivedAmount | amount: transaction.receivedCurrency?.decimalPlaces }} {{ transaction.receivedCurrency?.code }} =\n                    {{ transaction.amount | amount: transaction.currency?.decimalPlaces }} {{ transaction.currency?.code }}\n                    <div class=\"small\">\n                        1 {{ transaction.currency?.code }} = {{ calculateExchangeRate() }} {{ transaction.receivedCurrency?.code }}\n                    </div>\n                </td>\n            </tr>\n            <ng-container *ngIf=\"!isSgpmxMetalTransfer(); else metalTransferFees\">\n                <tr *ngIf=\"showFees(transaction)\">\n                    <th class=\"py-2 text-right font-weight-bold text-muted\">{{ 'common.service-fee' | translate }}</th>\n                    <td class=\"py-2 text-right text-muted\">\n                        {{ calculateFee(transaction) | amount: transaction.currency?.decimalPlaces }} {{ transaction.currency?.code }}\n                        <div class=\"small\">\n                            <ng-container\n                                *ngIf=\"\n                                    (transaction.fixedFee && !isZero(transaction.fixedFee)) ||\n                                        (transaction.relativeFee && !isZero(transaction.relativeFee));\n                                    else free\n                                \"\n                            >\n                                (<ng-container *ngIf=\"transaction.fixedFee && !isZero(transaction.fixedFee)\"\n                                    >{{ transaction.fixedFee | amount: transaction.currency?.decimalPlaces }}\n                                    {{ transaction.currency?.code }}</ng-container\n                                >\n                                <ng-container\n                                    *ngIf=\"\n                                        transaction.fixedFee &&\n                                        !isZero(transaction.fixedFee) &&\n                                        transaction.relativeFee &&\n                                        !isZero(transaction.relativeFee)\n                                    \"\n                                >\n                                    +\n                                </ng-container>\n                                <ng-container *ngIf=\"transaction.relativeFee && !isZero(transaction.relativeFee)\">{{\n                                    transaction.relativeFee | percent: '1.2'\n                                }}</ng-container\n                                >)\n                            </ng-container>\n                            <ng-template #free>({{ 'common.free-of-charge' | translate | lowercase }})</ng-template>\n                        </div>\n                    </td>\n                </tr>\n            </ng-container>\n            <ng-template #metalTransferFees>\n                <tr *ngIf=\"!transaction.id\">\n                    <th class=\"py-2 text-right font-weight-bold text-muted\">{{ 'common.service-fee' | translate }}</th>\n                    <td class=\"py-2 text-right text-muted\">{{ calculateFeeInUsd() | async | amount }} USD</td>\n                </tr>\n            </ng-template>\n            <tr>\n                <th class=\"py-2 text-right font-weight-bold\">\n                    <ng-container *ngIf=\"!transaction.card; else cardTransaction\">\n                        {{ 'common.recipient' | translate }} {{ (transaction.status === 'completed' ? 'common.got' : 'common.gets') | translate }}\n                    </ng-container>\n                    <ng-template #cardTransaction>\n                        {{ 'common.card' | translate }} {{ (transaction.type === 'withdrawal' ? 'common.loaded' : 'common.unloaded') | translate }}\n                        {{ 'common.with' | translate }}\n                    </ng-template>\n                </th>\n                <td class=\"py-2 text-right text-primary\">\n                    {{ determineAmount() | amount: transaction.currency?.decimalPlaces }}\n                    {{\n                        transaction.card && transaction.currency.code !== transaction.receivedCurrency?.code\n                            ? transaction.receivedCurrency?.code\n                            : transaction.currency?.code\n                    }}\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    <ng-container *ngIf=\"transaction.comment\">\n        <div class=\"mt-2\">\n            <p>\n                <span class=\"text-primary\">\n                    <ng-container *ngIf=\"!isReceiver\">\n                        {{ isPlatformTransfer() ? displayName : transaction.baseWallet?.user?.name }}\n                    </ng-container>\n                    <ng-container *ngIf=\"isReceiver\">\n                        {{ isPlatformTransfer() ? displayName : transaction.counterWallet?.user?.name }}\n                    </ng-container>\n                </span>\n                {{ 'common.wrote-a-comment' | translate }}:\n            </p>\n            <div class=\"transaction-slip-comment\">\n                {{ transaction.comment }}\n            </div>\n        </div>\n    </ng-container>\n    <p class=\"text-center\" *ngIf=\"transaction.reference\">\n        <b>{{ 'common.reference' | translate }}:</b> {{ transaction.reference }}\n    </p>\n    <p class=\"mt-4 text-truncate\" *ngIf=\"transaction.externalReference\">\n        <b>Txid:</b> <copy-icon [value]=\"formatTxid(transaction.externalReference)\" class=\"ml-2 mr-1\"></copy-icon>\n        <span class=\"text-muted\">{{ formatTxid(transaction.externalReference) }}</span>\n    </p>\n</div>\n";
      /***/
    },

    /***/
    "O0l5":
    /*!***********************************************************************************!*\
      !*** ./src/app/common/transaction/transaction-flow/transaction-flow.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: TransactionFlowComponent */

    /***/
    function O0l5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionFlowComponent", function () {
        return TransactionFlowComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_transaction_flow_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./transaction-flow.component.html */
      "f9MI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/pro-regular-svg-icons */
      "uB96");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _common_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../common.mixin */
      "s/H0");
      /* harmony import */


      var _services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/session.service */
      "6g7h");
      /* harmony import */


      var _transactions_mixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../transactions.mixins */
      "HiCw");

      var TransactionFlowComponent = /*#__PURE__*/function () {
        function TransactionFlowComponent(session, translate) {
          _classCallCheck(this, TransactionFlowComponent);

          this.session = session;
          this.translate = translate;
          this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].displayName;

          this.walletOwnerAccountNumber = function (wallet) {
            return Object(_transactions_mixins__WEBPACK_IMPORTED_MODULE_8__["buildWalletOwnerAccountNumber"])(wallet, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].displayName);
          };
        }

        _createClass(TransactionFlowComponent, [{
          key: "prettifyCoinName",
          value: function prettifyCoinName(coin) {
            switch (coin) {
              case 'crypto':
                return 'Crypto';

              default:
                return '';
            }
          }
        }, {
          key: "determineTransactionIcon",
          value: function determineTransactionIcon(transaction) {
            var isSender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (transaction.type === 'deposit') {
              if (isSender) {
                if (transaction.method === 'card') {
                  return _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCreditCard"];
                }

                return _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUniversity"];
              }
            }

            if (transaction.type === 'withdrawal') {
              if (!isSender) {
                if (transaction.method === 'card') {
                  return _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCreditCard"];
                }

                return _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUniversity"];
              }
            }

            if (transaction.type === 'mint') {
              if (isSender) {
                if (transaction.baseWallet) {
                  return _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faWallet"];
                }

                return _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGlobeAmericas"];
              }

              if (transaction.counterWallet) {
                return _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faWallet"];
              }

              return _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFireAlt"];
            }

            if (transaction.type === 'investment') {
              return _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faChartNetwork"];
            }

            return _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faWallet"];
          }
        }, {
          key: "buildCounterWalletName",
          value: function buildCounterWalletName() {
            if (!this.transaction.counterWallet) {
              return '';
            }

            var user = this.transaction.counterWallet.user;

            if (user) {
              return "".concat(Object(_common_mixin__WEBPACK_IMPORTED_MODULE_6__["isAccountNumber"])(user.accountNumber) ? Object(_common_mixin__WEBPACK_IMPORTED_MODULE_6__["formatAccountNumber"])(user.accountNumber) : user.accountNumber);
            }

            return src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].displayName;
          }
        }, {
          key: "buildFromText",
          value: function buildFromText() {
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].appName === 'sgpmx' && this.transaction.type === 'trade') {
              return this.transaction.currency.code === 'USD' ? this.translate.instant('common.debit') : 'Sell';
            }

            if (this.transaction.type === 'account-fee') {
              return this.translate.instant('common.payment-from');
            }

            return "".concat(this.transaction.type, " ").concat(this.translate.instant('common.from').toLowerCase());
          }
        }, {
          key: "buildToText",
          value: function buildToText() {
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].appName === 'sgpmx' && this.transaction.type === 'trade') {
              return this.transaction.currency.code === 'USD' ? 'Credit' : 'Buy';
            }

            if (this.transaction.type === 'account-fee') {
              return this.translate.instant('common.payment-for');
            }

            return "".concat(this.transaction.type, " ").concat(this.translate.instant('common.to').toLowerCase());
          }
        }]);

        return TransactionFlowComponent;
      }();

      TransactionFlowComponent.ctorParameters = function () {
        return [{
          type: _services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }];
      };

      TransactionFlowComponent.propDecorators = {
        transaction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      TransactionFlowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'transaction-flow',
        template: _raw_loader_transaction_flow_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TransactionFlowComponent);
      /***/
    },

    /***/
    "OD8z":
    /*!*************************************************************************************!*\
      !*** ./src/app/common/transaction/transaction-files/transaction-files.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: TransactionFilesComponent */

    /***/
    function OD8z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionFilesComponent", function () {
        return TransactionFilesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_transaction_files_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./transaction-files.component.html */
      "kbPi");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_confirmation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/confirmation.service */
      "fTmd");
      /* harmony import */


      var _services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/session.service */
      "6g7h");
      /* harmony import */


      var _services_toastr_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../services/toastr.service */
      "N/y2");

      var TransactionFilesComponent = /*#__PURE__*/function () {
        function TransactionFilesComponent(activeModal, session, http, toastr, confirmation, translate) {
          _classCallCheck(this, TransactionFilesComponent);

          this.activeModal = activeModal;
          this.session = session;
          this.http = http;
          this.toastr = toastr;
          this.confirmation = confirmation;
          this.translate = translate;
          this.files = [];
          this.existingFiles = [];
          this.isLoading = false;
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
          this.fetchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        }

        _createClass(TransactionFilesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.subscriptions.add(this.fetchEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function () {
              return _this4.http.get("/transactions/".concat(_this4.transaction.id, "/files"));
            })).subscribe(function (files) {
              return _this4.existingFiles = files;
            }));
            this.fetchEvent.next();
          }
        }, {
          key: "deleteFile",
          value: function deleteFile(file) {
            var _this5 = this;

            this.subscriptions.add(this.confirmation.show({
              type: 'danger',
              text: "".concat(this.translate.instant('common.are-you-sure-want-to-delete-file'), "<br>").concat(this.translate.instant('common.you-cant-undo-action')),
              confirmText: this.translate.instant('common.delete'),
              confirmClass: 'danger'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (result) {
              return result === _services_confirmation_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmationResult"].CONFIRMED;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(function () {
              return _this5.http["delete"]("/transactions/".concat(_this5.transaction.id, "/files/").concat(file.id));
            })).subscribe(function () {
              Object(lodash__WEBPACK_IMPORTED_MODULE_6__["remove"])(_this5.existingFiles, {
                id: file.id
              });

              _this5.toastr.success("".concat(file.name, " ").concat(_this5.translate.instant('common.removed')));

              _this5.fetchEvent.next();
            }));
          }
        }, {
          key: "uploadFiles",
          value: function uploadFiles() {
            var _this6 = this;

            this.isLoading = true;
            this.subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(this.files.map(function (file) {
              return _this6.http.post("/transactions/".concat(_this6.transaction.id, "/files"), file, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                  'X-File-Name': encodeURIComponent(file.name),
                  'Content-Type': file.type
                })
              });
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              return _this6.isLoading = false;
            })).subscribe(function () {
              _this6.toastr.success(_this6.translate.instant('common.file-uploaded'));

              _this6.files = [];

              _this6.fetchEvent.next();
            }));
          }
        }]);

        return TransactionFilesComponent;
      }();

      TransactionFilesComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]
        }, {
          type: _services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _services_toastr_service__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]
        }, {
          type: _services_confirmation_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmationService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      };

      TransactionFilesComponent.propDecorators = {
        transaction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      TransactionFilesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'transaction-files',
        template: _raw_loader_transaction_files_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TransactionFilesComponent);
      /***/
    },

    /***/
    "OFFW":
    /*!***************************************************************!*\
      !*** ./src/app/common/models/accounting/beneficiary.model.ts ***!
      \***************************************************************/

    /*! exports provided: Beneficiary */

    /***/
    function OFFW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Beneficiary", function () {
        return Beneficiary;
      });
      /* harmony import */


      var _core_address_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/address.model */
      "JpEy");
      /* harmony import */


      var _core_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/user.model */
      "vk+e");
      /* harmony import */


      var _currency_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./currency.model */
      "/e3T");

      var Beneficiary = /*#__PURE__*/_createClass(function Beneficiary(data) {
        _classCallCheck(this, Beneficiary);

        Object.assign(this, data);

        if (data.currency) {
          this.currency = new _currency_model__WEBPACK_IMPORTED_MODULE_2__["Currency"](data.currency);
        }

        if (data.user) {
          this.user = new _core_user_model__WEBPACK_IMPORTED_MODULE_1__["User"](data.user);
        }

        if (data.accountHolderAddress) {
          this.accountHolderAddress = new _core_address_model__WEBPACK_IMPORTED_MODULE_0__["Address"](data.accountHolderAddress);
        }

        if (data.bankAddress) {
          this.bankAddress = new _core_address_model__WEBPACK_IMPORTED_MODULE_0__["Address"](data.bankAddress);
        }

        if (data.intermediateBankAddress) {
          this.intermediateBankAddress = new _core_address_model__WEBPACK_IMPORTED_MODULE_0__["Address"](data.intermediateBankAddress);
        }
      });
      /***/

    },

    /***/
    "OWbF":
    /*!***************************************************************!*\
      !*** ./src/app/common/models/accounting/transaction.model.ts ***!
      \***************************************************************/

    /*! exports provided: methodMap, Transaction */

    /***/
    function OWbF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "methodMap", function () {
        return methodMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Transaction", function () {
        return Transaction;
      });
      /* harmony import */


      var _beneficiary_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./beneficiary.model */
      "OFFW");
      /* harmony import */


      var _currency_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./currency.model */
      "/e3T");
      /* harmony import */


      var _wallet_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./wallet.model */
      "7oti");

      var methodMap = {
        internal: 'INTERNAL',
        card: 'CARD',
        crypto: 'CRYPTO',
        local: 'LOCAL',
        swift: 'SWIFT'
      };

      var Transaction = /*#__PURE__*/function () {
        function Transaction(data) {
          _classCallCheck(this, Transaction);

          if (data) {
            Object.assign(this, data);
            this.currency = new _currency_model__WEBPACK_IMPORTED_MODULE_1__["Currency"](data.currency);

            if (data.requestedCurrency) {
              this.requestedCurrency = new _currency_model__WEBPACK_IMPORTED_MODULE_1__["Currency"](data.requestedCurrency);
            }

            if (data.receivedCurrency) {
              this.receivedCurrency = new _currency_model__WEBPACK_IMPORTED_MODULE_1__["Currency"](data.receivedCurrency);
            }

            if (data.baseWallet) {
              this.baseWallet = new _wallet_model__WEBPACK_IMPORTED_MODULE_2__["Wallet"](data.baseWallet);
            }

            if (data.counterWallet) {
              this.counterWallet = new _wallet_model__WEBPACK_IMPORTED_MODULE_2__["Wallet"](data.counterWallet);
            }

            if (data.beneficiary) {
              this.beneficiary = new _beneficiary_model__WEBPACK_IMPORTED_MODULE_0__["Beneficiary"](data.beneficiary);
            }
          }
        }

        _createClass(Transaction, [{
          key: "isPlatformTransfer",
          value: function isPlatformTransfer() {
            return !!(this.type === 'transfer' && (this.baseWallet && this.baseWallet.isRootWallet() || this.counterWallet && this.counterWallet.isRootWallet()));
          }
        }]);

        return Transaction;
      }();
      /***/

    },

    /***/
    "SRhG":
    /*!**********************************************************!*\
      !*** ./src/app/common/transaction/transaction.module.ts ***!
      \**********************************************************/

    /*! exports provided: TransactionModule */

    /***/
    function SRhG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionModule", function () {
        return TransactionModule;
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


      var _common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common.module */
      "a6Df");
      /* harmony import */


      var _transaction_files_transaction_files_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./transaction-files/transaction-files.component */
      "OD8z");
      /* harmony import */


      var _transaction_files_transation_files_modal_transaction_files_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./transaction-files/transation-files-modal/transaction-files-modal.component */
      "TVr3");
      /* harmony import */


      var _transaction_flow_transaction_flow_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./transaction-flow/transaction-flow.component */
      "O0l5");
      /* harmony import */


      var _transaction_overview_transaction_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./transaction-overview/transaction-overview.component */
      "22W4");
      /* harmony import */


      var _transaction_slip_transaction_slip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./transaction-slip/transaction-slip.component */
      "Kg0I");
      /* harmony import */


      var _transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./transaction-view/transaction-view.component */
      "vOIs");

      var components = [_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_8__["TransactionViewComponent"], _transaction_files_transaction_files_component__WEBPACK_IMPORTED_MODULE_3__["TransactionFilesComponent"], _transaction_files_transation_files_modal_transaction_files_modal_component__WEBPACK_IMPORTED_MODULE_4__["TransactionFilesModalComponent"], _transaction_flow_transaction_flow_component__WEBPACK_IMPORTED_MODULE_5__["TransactionFlowComponent"], _transaction_slip_transaction_slip_component__WEBPACK_IMPORTED_MODULE_7__["TransactionSlipComponent"], _transaction_overview_transaction_overview_component__WEBPACK_IMPORTED_MODULE_6__["TransactionOverviewComponent"]];

      var TransactionModule = /*#__PURE__*/_createClass(function TransactionModule() {
        _classCallCheck(this, TransactionModule);
      });

      TransactionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: components,
        exports: components,
        imports: [_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      })], TransactionModule);
      /***/
    },

    /***/
    "TVr3":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/common/transaction/transaction-files/transation-files-modal/transaction-files-modal.component.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: TransactionFilesModalComponent */

    /***/
    function TVr3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionFilesModalComponent", function () {
        return TransactionFilesModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_transaction_files_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./transaction-files-modal.component.html */
      "i9Wx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var TransactionFilesModalComponent = /*#__PURE__*/_createClass(function TransactionFilesModalComponent(activeModal) {
        _classCallCheck(this, TransactionFilesModalComponent);

        this.activeModal = activeModal;
      });

      TransactionFilesModalComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
        }];
      };

      TransactionFilesModalComponent.propDecorators = {
        transaction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      TransactionFilesModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'transaction-files-modal',
        template: _raw_loader_transaction_files_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TransactionFilesModalComponent);
      /***/
    },

    /***/
    "f9MI":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/transaction/transaction-flow/transaction-flow.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function f9MI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"transaction-flow mb-2\">\n    <div class=\"d-flex flex-column justify-content-between align-items-center w-25\">\n        <div class=\"bubble\">\n            <user-avatar\n                *ngIf=\"transaction.baseWallet && transaction.baseWallet.user; else baseIcon\"\n                [user]=\"transaction.baseWallet.user\"\n            ></user-avatar>\n            <ng-template #baseIcon>\n                <fa-icon [icon]=\"determineTransactionIcon(transaction, true)\" [size]=\"'lg'\"></fa-icon>\n            </ng-template>\n        </div>\n        <div class=\"line\"></div>\n        <div class=\"bubble\">\n            <user-avatar\n                *ngIf=\"transaction.counterWallet && transaction.counterWallet.user?.id; else counterIcon\"\n                [user]=\"transaction.counterWallet.user\"\n            ></user-avatar>\n            <ng-template #counterIcon>\n                <fa-icon\n                    [icon]=\"determineTransactionIcon(transaction, false)\"\n                    [size]=\"'lg'\"\n                    *ngIf=\"transaction.counterWallet || transaction.type === 'mint'\"\n                ></fa-icon>\n            </ng-template>\n        </div>\n    </div>\n    <div class=\"w-75\">\n        <div class=\"b-b-1 pb-3\">\n            <div class=\"text-muted lh-1 pb-1\">\n                {{ buildFromText() | capitalize }}\n            </div>\n            <div class=\"name-tag\">\n                <ng-container *ngIf=\"transaction.baseWallet && transaction.type !== 'deposit'\">\n                    <ng-container *ngIf=\"transaction.type === 'trade' && !transaction.baseWallet.user; else default\">\n                        <div class=\"text-primary font-lg\">Trade</div>\n                        <small>{{ walletOwnerAccountNumber(transaction.baseWallet) }}</small>\n                    </ng-container>\n                    <ng-template #default>\n                        <ng-container *ngIf=\"transaction.baseWallet.user && transaction.baseWallet.user.name; else plain\">\n                            <div class=\"text-primary font-lg\">{{ transaction.baseWallet.user.name }}</div>\n                            <small>{{ transaction.baseWallet.user.accountNumber | accountNumber }}</small>\n                        </ng-container>\n                    </ng-template>\n                    <ng-template #plain>\n                        <div class=\"text-primary font-lg\">{{ walletOwnerAccountNumber(transaction.baseWallet) | accountNumber }}</div>\n                    </ng-template>\n                </ng-container>\n                <ng-container *ngIf=\"transaction.type === 'deposit'\">\n                    <div class=\"text-primary font-lg\">\n                        <ng-template #depositBtc>\n                            {{ prettifyCoinName(transaction.method) }} {{ 'common.wallet' | translate | lowercase }}\n                        </ng-template>\n                    </div>\n                </ng-container>\n                <ng-container *ngIf=\"transaction.type === 'mint' && !transaction.baseWallet\"\n                    ><span class=\"text-primary\">{{ 'common.mint' | translate }}</span></ng-container\n                >\n            </div>\n        </div>\n        <div class=\"pt-3\">\n            <div class=\"text-muted lh-1 pb-1\">\n                {{ buildToText() | capitalize }}\n            </div>\n            <div class=\"name-tag\">\n                <ng-container *ngIf=\"transaction.counterWallet && transaction.type !== 'withdrawal'\">\n                    <ng-container *ngIf=\"transaction.counterWallet.user && transaction.counterWallet.user.name; else accountFee\">\n                        <div class=\"text-primary font-lg\">{{ transaction.counterWallet.user.name }}</div>\n                        <small>{{ transaction.counterWallet.user.accountNumber | accountNumber }}</small>\n                    </ng-container>\n                    <ng-template #accountFee>\n                        <ng-container *ngIf=\"transaction.type === 'account-fee'; else cardOrder\">\n                            <div class=\"text-primary font-lg\">{{ 'common.account-fee' | translate | sentenceCase }}</div>\n                            <small>{{ walletOwnerAccountNumber(transaction.counterWallet) }}</small>\n                        </ng-container>\n                    </ng-template>\n                    <ng-template #cardOrder>\n                        <ng-container *ngIf=\"transaction.type === 'card-order'; else conversion\">\n                            <div class=\"text-primary font-lg\">{{ 'common.card-order' | translate }}</div>\n                            <small>{{ walletOwnerAccountNumber(transaction.counterWallet) }}</small>\n                        </ng-container>\n                    </ng-template>\n                    <ng-template #conversion>\n                        <ng-container *ngIf=\"transaction.type === 'conversion'; else trade\">\n                            <div class=\"text-primary font-lg\">{{ 'common.conversion' | translate }}</div>\n                            <small>{{ walletOwnerAccountNumber(transaction.counterWallet) }}</small>\n                        </ng-container>\n                    </ng-template>\n                    <ng-template #trade>\n                        <ng-container *ngIf=\"transaction.type === 'trade'; else plain\">\n                            <div class=\"text-primary font-lg\">{{ 'common.trade' | translate }}</div>\n                            <small>{{ walletOwnerAccountNumber(transaction.counterWallet) }}</small>\n                        </ng-container>\n                    </ng-template>\n                    <ng-template #plain>\n                        <div class=\"text-primary font-lg\">{{ buildCounterWalletName() | accountNumber }}</div>\n                    </ng-template>\n                </ng-container>\n                <ng-container *ngIf=\"!transaction.id && !transaction.counterWallet && transaction.type === 'transfer'\">\n                    <div class=\"text-muted font-lg\">...</div>\n                </ng-container>\n                <ng-container *ngIf=\"transaction.type === 'withdrawal'\">\n                    <ng-container *ngIf=\"['redeem'].includes(transaction.method)\">\n                        <div>{{ displayName }}</div>\n                        <small class=\"text-gray\">{{ 'common.platform' | translate }}</small>\n                    </ng-container>\n                    <ng-container *ngIf=\"transaction.method === 'card'\">\n                        <div class=\"text-primary font-lg\">{{ 'common.card' | translate }} {{ transaction.card?.maskedPan }}</div>\n                    </ng-container>\n                    <ng-container *ngIf=\"transaction.method !== 'card' && !['redeem'].includes(transaction.method)\">\n                        <div class=\"text-primary font-lg\">{{ transaction.beneficiary?.accountHolder || transaction.beneficiary?.accountNumber }}</div>\n                        <small *ngIf=\"transaction.beneficiary?.accountHolder\">{{ transaction.beneficiary?.accountNumber }}</small>\n                    </ng-container>\n                </ng-container>\n                <ng-container *ngIf=\"transaction.type === 'mint' && !transaction.counterWallet\"\n                    ><span class=\"text-danger\">{{ 'common.destroyed' | translate }}</span></ng-container\n                >\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "i9Wx":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/transaction/transaction-files/transation-files-modal/transaction-files-modal.component.html ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function i9Wx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{ 'transaction-files-modal.attach-file' | translate }}</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss()\">&times;</button>\n</div>\n<div class=\"modal-body e2e-transaction-files-modal\">\n    <transaction-files [transaction]=\"transaction\"></transaction-files>\n</div>\n";
      /***/
    },

    /***/
    "kbPi":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/transaction/transaction-files/transaction-files.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kbPi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<dropzone\n    [canCreate]=\"transaction.status === 'pending'\"\n    [files]=\"files\"\n    [existingFiles]=\"existingFiles\"\n    (onDelete)=\"deleteFile($event)\"\n    [canDelete]=\"['admin'].includes(session.user?.role)\"\n></dropzone>\n<div class=\"text-center p-3\">\n    <h3 *ngIf=\"transaction.status !== 'pending' && existingFiles.length === 0\">{{ 'common.no-files' | translate }}</h3>\n</div>\n<div class=\"d-flex justify-content-end\" *ngIf=\"transaction.status !== 'completed'\">\n    <button\n        (click)=\"uploadFiles()\"\n        type=\"button\"\n        class=\"btn btn-primary btn-w-sm e2e-transaction-files-submit-btn\"\n        [ngClass]=\"{ loading: isLoading }\"\n        [disabled]=\"isLoading\"\n    >\n        {{ 'common.upload' | translate }}\n    </button>\n</div>\n";
      /***/
    },

    /***/
    "m2Kw":
    /*!********************************************************!*\
      !*** ./src/app/common/services/transaction.service.ts ***!
      \********************************************************/

    /*! exports provided: TransactionService */

    /***/
    function m2Kw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionService", function () {
        return TransactionService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _models_accounting_transaction_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../models/accounting/transaction.model */
      "OWbF");

      var TransactionService = /*#__PURE__*/function () {
        function TransactionService(http) {
          _classCallCheck(this, TransactionService);

          this.http = http;
          this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.searchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appName;
        }

        _createClass(TransactionService, [{
          key: "changeStatus",
          value: function changeStatus(id, status) {
            return this.http.patch("/transactions/".concat(id), [{
              op: 'replace',
              path: '/status',
              value: status
            }], {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json-patch+json'
              })
            });
          }
        }, {
          key: "revert",
          value: function revert(id) {
            return this.http.post("/transactions/".concat(id, "/revert"), {});
          }
        }, {
          key: "hasInvoice",
          value: function hasInvoice(transaction) {
            var transactionModel = new _models_accounting_transaction_model__WEBPACK_IMPORTED_MODULE_5__["Transaction"](transaction);
            var isTrade = transaction.type === 'trade' && ['AU', 'AG'].includes(transaction.currency.code);
            var isTransfer = transaction.type === 'transfer' && ['AU', 'AG'].includes(transaction.currency.code) && !transactionModel.isPlatformTransfer();
            return this.appName === 'sgpmx' && transaction.status === 'completed' && (isTrade || isTransfer || ['redeem', 'card-order'].includes(transaction.type));
          }
        }, {
          key: "restore",
          value: function restore(id) {
            return this.http.post("/admin/transactions/".concat(id, "/restore"), {});
          }
        }]);

        return TransactionService;
      }();

      TransactionService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      TransactionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], TransactionService);
      /***/
    },

    /***/
    "vOIs":
    /*!***********************************************************************************!*\
      !*** ./src/app/common/transaction/transaction-view/transaction-view.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: TransactionViewComponent */

    /***/
    function vOIs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionViewComponent", function () {
        return TransactionViewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_transaction_view_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./transaction-view.component.html */
      "9wb7");
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


      var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fortawesome/pro-solid-svg-icons */
      "4Bjl");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
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


      var _models_accounting_transaction_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../models/accounting/transaction.model */
      "OWbF");
      /* harmony import */


      var _services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../services/confirmation.service */
      "fTmd");
      /* harmony import */


      var _services_session_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../services/session.service */
      "6g7h");
      /* harmony import */


      var _services_toastr_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../services/toastr.service */
      "N/y2");
      /* harmony import */


      var _services_transaction_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../services/transaction.service */
      "m2Kw");
      /* harmony import */


      var _trades_trade_mixins__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../trades/trade.mixins */
      "3nDh");

      var TransactionViewComponent = /*#__PURE__*/function () {
        function TransactionViewComponent(http, activeModal, toastr, confirmation, transactionService, session, router, translate) {
          _classCallCheck(this, TransactionViewComponent);

          this.http = http;
          this.activeModal = activeModal;
          this.toastr = toastr;
          this.confirmation = confirmation;
          this.transactionService = transactionService;
          this.session = session;
          this.router = router;
          this.translate = translate;
          this.faQuestionCircle = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faQuestionCircle"];
          this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.files = [];
          this.existingFiles = [];
          this.activeTab = 'overview';
          this.isMarkingAsPaid = false;
          this.isUploading = false;
          this.isCancelling = false;
          this.transactionMethodMap = _models_accounting_transaction_model__WEBPACK_IMPORTED_MODULE_12__["methodMap"];
          this.faTimes = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTimes"];
          this.faFileSearch = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFileSearch"];
          this.getTradeGrandTotal = _trades_trade_mixins__WEBPACK_IMPORTED_MODULE_17__["getTradeGrandTotal"];
          this.getTradeValue = _trades_trade_mixins__WEBPACK_IMPORTED_MODULE_17__["getTradeValue"]; // SGPMX

          this.hasReceipt = false;
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"]();
        }

        _createClass(TransactionViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            var _a, _b;

            if (this.transaction.type === 'trade' && src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].appName === 'sgpmx') {
              this.subscriptions.add(this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["flatMap"])(function (user) {
                return _this7.http.get("/users/".concat(user.id, "/trades"), {
                  params: {
                    'filter.baseTransactionId': _this7.transaction.id,
                    'filter.counterTransactionId': _this7.transaction.id,
                    'filter.q': 'or'
                  }
                });
              })).subscribe(function (res) {
                _this7.trade = res.data[0];
              }));
            }

            if (this.transaction.type === 'deposit' && this.transaction.method === 'crypto' && this.transaction.status === 'pending') {
              this.activeTab = 'beneficiary';
            }

            if (this.transactionService.hasInvoice(this.transaction) && (this.transaction.type === 'trade' || ((_b = (_a = this.transaction.baseWallet) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.id) === this.session.user.id)) {
              this.http.get("/sgpmx/transactions/".concat(this.transaction.id, "/has-receipt")).subscribe(function (hasReceipt) {
                _this7.hasReceipt = hasReceipt;
              });
            }

            this.getTransactionFiles();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "getTransactionFiles",
          value: function getTransactionFiles() {
            var _this8 = this;

            this.http.get("/transactions/".concat(this.transaction.id, "/files")).subscribe(function (files) {
              _this8.existingFiles = files;
            });
          }
        }, {
          key: "markAsPaid",
          value: function markAsPaid() {
            var _this9 = this;

            this.isMarkingAsPaid = true;
            this.transactionService.changeStatus(this.transaction.id, 'processing').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this9.isMarkingAsPaid = false;
            })).subscribe(function (transaction) {
              _this9.transaction.status = transaction.status;

              _this9.toastr.success(_this9.translate.instant('common.deposit-marked-as-paid'));

              _this9.onUpdate.emit();

              _this9.subscriptions.add(_this9.confirmation.show({
                type: 'success',
                text: _this9.translate.instant('common.thank-you-for-notifying'),
                confirmText: _this9.translate.instant('common.i-will-upload-a-receipt'),
                cancelText: _this9.translate.instant('common.i-will-do-it-later'),
                cancelClass: 'warning'
              }).subscribe(function (result) {
                if (result === _services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmationResult"].CONFIRMED) {
                  _this9.activeTab = 'attachments';
                }
              }));
            });
          }
        }, {
          key: "markCryptoDepositAsPaid",
          value: function markCryptoDepositAsPaid() {
            var _this10 = this;

            Object.assign(this.cryptoForm, {
              submitted: true
            });

            if (this.cryptoForm && this.cryptoForm.invalid) {
              return;
            }

            this.isMarkingAsPaid = true;
            this.http.patch("/transactions/".concat(this.transaction.id), [{
              op: 'replace',
              path: '/status',
              value: 'processing'
            }, {
              op: 'replace',
              path: '/reference',
              value: this.transaction.reference
            }], {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json-patch+json'
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this10.isMarkingAsPaid = false;
            })).subscribe(function (transaction) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this11 = this;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.transaction.status = transaction.status;
                        this.toastr.success(this.translate.instant('common.deposit-marked-as-paid'));
                        this.onUpdate.emit();
                        this.router.navigateByUrl('/', {
                          skipLocationChange: true
                        }).then(function () {
                          return _this11.router.navigate(['/transactions']);
                        });

                        if (this.activeModal) {
                          this.activeModal.close();
                        }

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            var _this12 = this;

            this.isCancelling = true;
            this.subscriptions.add(this.confirmation.show({
              type: 'danger',
              text: "".concat(this.translate.instant('common.are-you-sure-you-want-to-cancel'), " ").concat(this.transaction.type, " (").concat(this.transaction.id.substring(0, 7), ")?"),
              confirmText: this.translate.instant('common.yes'),
              confirmClass: 'danger',
              cancelText: this.translate.instant('common.no'),
              cancelClass: 'success'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (result) {
              return result === _services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmationResult"].CONFIRMED;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["flatMap"])(function () {
              return _this12.transactionService.changeStatus(_this12.transaction.id, 'cancelled');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this12.isCancelling = false;
            })).subscribe(function () {
              _this12.toastr.success(_this12.translate.instant('common.transaction-cancelled'));

              _this12.onCancel.emit();
            }));
          }
        }, {
          key: "uploadFiles",
          value: function uploadFiles() {
            var _this13 = this;

            this.isUploading = true;
            this.subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(this.files.map(function (file) {
              return _this13.http.post("/transactions/".concat(_this13.transaction.id, "/files"), file, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                  'X-File-Name': encodeURIComponent(file.name),
                  'Content-Type': file.type
                })
              });
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this13.isUploading = false;
            })).subscribe(function () {
              _this13.files = [];

              _this13.getTransactionFiles();

              _this13.toastr.success(_this13.translate.instant('common.attachment-uploaded'));

              _this13.onUpdate.emit();
            }));
          }
        }, {
          key: "canCancel",
          get: function get() {
            return this.activeTab !== 'attachments' && this.transaction.status === 'pending';
          }
        }, {
          key: "canMarkAsPaid",
          get: function get() {
            return this.activeTab !== 'attachments' && this.transaction.status === 'pending' && this.transaction.type === 'deposit';
          }
        }, {
          key: "canUpload",
          get: function get() {
            return this.activeTab === 'attachments' && ['pending', 'processing', 'completed'].includes(this.transaction.status);
          }
        }, {
          key: "isLoading",
          get: function get() {
            return this.isMarkingAsPaid || this.isUploading || this.isCancelling;
          }
        }, {
          key: "openProformaInvoice",
          value: function openProformaInvoice() {
            this.subscriptions.add(this.session.createSignedUrl("/transactions/".concat(this.transaction.id, "/proforma-invoice")).subscribe(function (signedUrl) {
              window.open(signedUrl, '_blank', 'noopener');
            }));
          }
        }, {
          key: "openSgpmxInvoice",
          value: function openSgpmxInvoice() {
            this.subscriptions.add(this.session.createSignedUrl("/sgpmx-invoice/".concat(this.transaction.id)).subscribe(function (signedUrl) {
              window.open(signedUrl, '_blank', 'noopener');
            }));
          }
        }, {
          key: "openInvoice",
          value: function openInvoice(reference) {
            var invoiceId = reference.split(' ')[1];
            this.subscriptions.add(this.session.createSignedUrl("/invoices/".concat(invoiceId, "/file")).subscribe(function (signedUrl) {
              window.open(signedUrl, '_blank', 'noopener');
            }));
          }
        }]);

        return TransactionViewComponent;
      }();

      TransactionViewComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: _services_toastr_service__WEBPACK_IMPORTED_MODULE_15__["ToastrService"]
        }, {
          type: _services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmationService"]
        }, {
          type: _services_transaction_service__WEBPACK_IMPORTED_MODULE_16__["TransactionService"]
        }, {
          type: _services_session_service__WEBPACK_IMPORTED_MODULE_14__["SessionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
        }];
      };

      TransactionViewComponent.propDecorators = {
        transaction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onUpdate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        onCancel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        cryptoForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['cryptoForm']
        }]
      };
      TransactionViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'transaction-view',
        template: _raw_loader_transaction_view_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TransactionViewComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~admin-admin-module~dashboard-dashboard-module~deposit-deposit-module~discover-discover-modul~d7f9d518-es5.js.map