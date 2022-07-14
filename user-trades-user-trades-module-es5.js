(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-trades-user-trades-module"], {
    /***/
    "Q3TV":
    /*!******************************************************!*\
      !*** ./src/app/user-trades/user-trades.component.ts ***!
      \******************************************************/

    /*! exports provided: UserTradesComponent */

    /***/
    function Q3TV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserTradesComponent", function () {
        return UserTradesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_trades_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-trades.component.html */
      "iEiu");
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


      var bignumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _common_list_v2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/list-v2.component */
      "qhtW");
      /* harmony import */


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/services/session.service */
      "6g7h");
      /* harmony import */


      var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/services/toastr.service */
      "N/y2");
      /* harmony import */


      var _store_currencies_currencies_mixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../store/currencies/currencies.mixin */
      "V6z1");
      /* harmony import */


      var _store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../store/wallets/wallets.query */
      "O9sj");

      var UserTradesComponent = /*#__PURE__*/function (_common_list_v2_compo) {
        _inherits(UserTradesComponent, _common_list_v2_compo);

        var _super = _createSuper(UserTradesComponent);

        function UserTradesComponent(http, ngbModal, changeDetector, route, router, session, toastr, walletsQuery) {
          var _this;

          _classCallCheck(this, UserTradesComponent);

          _this = _super.call(this, http, ngbModal, changeDetector, route, router, session);
          _this.toastr = toastr;
          _this.walletsQuery = walletsQuery;
          _this.faArrowAltToBottom = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowAltToBottom"];
          _this.faArrowAltFromBottom = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowAltFromBottom"];
          _this.defaultLimit = _this.limitOpts[0];
          _this.faCircle = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCircle"];
          _this.getCurrencyColor = _store_currencies_currencies_mixin__WEBPACK_IMPORTED_MODULE_12__["getCurrencyColor"];
          _this.symbolsMap = {
            'AU/USD': 'Gold Troy Ounce',
            'AG/USD': 'Silver Troy Ounce'
          };
          _this.wallets$ = _this.walletsQuery.filteredBalances$;
          return _this;
        }

        _createClass(UserTradesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.apiUrl = "/users/".concat(this.session.user.id, "/trades");

            _get(_getPrototypeOf(UserTradesComponent.prototype), "ngOnInit", this).call(this);
          }
        }, {
          key: "getBaseCurrency",
          value: function getBaseCurrency(symbol) {
            if (!symbol) {
              return '';
            }

            var parts = symbol.split('/');
            return parts[1];
          }
        }, {
          key: "getCounterCurrency",
          value: function getCounterCurrency(symbol) {
            if (!symbol) {
              return '';
            }

            var parts = symbol.split('/');
            return parts[0];
          }
        }, {
          key: "getTotal",
          value: function getTotal(trade) {
            return new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(trade.price).times(trade.quantity).toFixed(2);
          }
        }, {
          key: "onTrade",
          value: function onTrade() {
            this.updateEvent.next();
          }
        }]);

        return UserTradesComponent;
      }(_common_list_v2_component__WEBPACK_IMPORTED_MODULE_9__["ListV2Component"]);

      UserTradesComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]
        }, {
          type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]
        }, {
          type: _store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_13__["WalletsQuery"]
        }];
      };

      UserTradesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'user-trades',
        template: _raw_loader_user_trades_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], UserTradesComponent);
      /***/
    },

    /***/
    "T1G4":
    /*!***************************************************!*\
      !*** ./src/app/user-trades/user-trades.module.ts ***!
      \***************************************************/

    /*! exports provided: UserTradesModule */

    /***/
    function T1G4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserTradesModule", function () {
        return UserTradesModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_common_trades_trades_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/common/trades/trades.module */
      "9yNi");
      /* harmony import */


      var src_app_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/dashboard/dashboard.module */
      "TDBs");
      /* harmony import */


      var _common_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/common.module */
      "a6Df");
      /* harmony import */


      var _user_trades_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-trades-routing.module */
      "uH/s");
      /* harmony import */


      var _user_trades_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user-trades.component */
      "Q3TV");

      var UserTradesModule = /*#__PURE__*/_createClass(function UserTradesModule() {
        _classCallCheck(this, UserTradesModule);
      });

      UserTradesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_trades_component__WEBPACK_IMPORTED_MODULE_7__["UserTradesComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _user_trades_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserTradesRoutingModule"], src_app_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__["DashboardModule"], src_app_common_trades_trades_module__WEBPACK_IMPORTED_MODULE_3__["TradesModule"]]
      })], UserTradesModule);
      /***/
    },

    /***/
    "iEiu":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-trades/user-trades.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function iEiu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container pt-page pb-3\">\n    <trade-feed></trade-feed>\n    <div class=\"row\">\n        <div class=\"col-lg-7\">\n            <account-balance class=\"card\" [compact]=\"true\"></account-balance>\n            <div class=\"card\">\n                <div class=\"card-header\">{{ 'common.accumulator-status' | translate }}</div>\n                <ul class=\"list-group list-group-flush\">\n                    <li class=\"list-group-item py-3\">\n                        <i>{{ 'common.coming-soon' | translate }}</i>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"col-lg-10\">\n            <section class=\"card\">\n                <div class=\"card-header\">\n                    <h5 class=\"mb-0\">{{ 'common.buy' | translate }} &amp; {{ 'common.sell' | translate }}</h5>\n                </div>\n                <div class=\"card-body\">\n                    <trade-form (onTrade)=\"onTrade()\"></trade-form>\n                </div>\n            </section>\n            <div class=\"callout callout-danger\">\n                <h6 class=\"text-danger\">{{ 'common.important-notice' | translate }}</h6>\n                <p>\n                    {{ 'common.every-transaction-is-denominated-in-troy-ounces' | translate }}\n                </p>\n                <p>{{ 'common.final-pricing-will-be-confirmed-upon-full-payment' | translate }}</p>\n                <p>{{ 'common.we-operate-from-mondays-to-sundays' | translate }}</p>\n                <p>\n                    {{ 'common.due-to-global-markets-being-close-on-weekends' | translate }}\n                </p>\n            </div>\n        </div>\n        <div class=\"col-lg-7\">\n            <div class=\"card\">\n                <div class=\"card-header\">{{ 'common.history' | translate }}</div>\n                <ul class=\"list-group list-group-flush\">\n                    <ng-container *ngIf=\"itemsStream | async; let items\">\n                        <li class=\"list-group-item py-2\" *ngFor=\"let trade of items\">\n                            <div class=\"d-flex justify-content-between\">\n                                <span> {{ $any(symbolsMap)[trade.symbol] }}</span>\n                                <span class=\"text-right\" [ngClass]=\"trade.side === 'BUY' ? 'text-primary' : 'text-danger'\">\n                                    {{ trade.side === 'BUY' ? '+' : '-' }}{{ trade.quantity | amount: 7 }} {{ getCounterCurrency(trade.symbol) }}\n                                </span>\n                            </div>\n                            <small class=\"d-flex justify-content-between\">\n                                <span class=\"text-muted\">{{ trade.createdAt | date: 'short' }}</span>\n                                <span class=\"text-muted text-right\">{{ getTotal(trade) | amount: 2 }} {{ getBaseCurrency(trade.symbol) }}</span>\n                            </small>\n                        </li>\n                        <li class=\"list-group-item py-3 text-center text-muted\" *ngIf=\"items.length === 0\">\n                            <i>{{ 'common.no-trades-found' | translate }}</i>\n                        </li>\n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"d-flex justify-content-center mb-3\">\n                <ngb-pagination\n                    [(page)]=\"page\"\n                    [collectionSize]=\"count\"\n                    (pageChange)=\"select()\"\n                    [pageSize]=\"limit\"\n                    [maxSize]=\"5\"\n                    [ellipses]=\"false\"\n                    [rotate]=\"true\"\n                    [boundaryLinks]=\"true\"\n                >\n                </ngb-pagination>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "uH/s":
    /*!***********************************************************!*\
      !*** ./src/app/user-trades/user-trades-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: UserTradesRoutingModule */

    /***/
    function uHS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserTradesRoutingModule", function () {
        return UserTradesRoutingModule;
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


      var _common_guards_permission_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/guards/permission.guard */
      "UPfJ");
      /* harmony import */


      var _common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/logged-in.auth-guard */
      "59Zp");
      /* harmony import */


      var _user_trades_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-trades.component */
      "Q3TV");

      var routes = [{
        path: '',
        component: _user_trades_component__WEBPACK_IMPORTED_MODULE_5__["UserTradesComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInAuthGuard"], _common_guards_permission_guard__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]],
        data: {
          permissions: ['trades']
        }
      }];

      var UserTradesRoutingModule = /*#__PURE__*/_createClass(function UserTradesRoutingModule() {
        _classCallCheck(this, UserTradesRoutingModule);
      });

      UserTradesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserTradesRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-trades-user-trades-module-es5.js.map