(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-redemption-user-redemption-module"], {
    /***/
    "aVEN":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-redemption/user-redemption.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aVEN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container pt-page\">\n    <div class=\"row\">\n        <div class=\"col-lg-7\">\n            <account-balance class=\"card\" [compact]=\"true\"></account-balance>\n        </div>\n        <div class=\"col-lg-11\">\n            <section class=\"card\">\n                <div class=\"card-header\">\n                    <h5 class=\"mb-0\">{{ 'common.redeem' | translate }}</h5>\n                </div>\n                <div class=\"card-body\">\n                    <redemption-form (onRedemptionSubmitted)=\"onUpdate()\" #redemptionForm></redemption-form>\n                </div>\n            </section>\n        </div>\n        <div class=\"col-lg-6\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"mb-2 text-center\">\n                                <div class=\"mb-2\">\n                                    <span class=\"label label-success\">{{ 'common.redeeming' | translate }}</span>\n                                </div>\n                                <div class=\"p-2 text-center border\">\n                                    <small>{{ 'common.total-quantity-to-redeem' | translate }}</small\n                                    ><br />\n                                    <h5 class=\"mb-0\">{{ totalOunces() | amount: 7 }} ounce</h5>\n                                </div>\n                                <div class=\"p-2 text-center border\">\n                                    <h5 class=\"mb-0\">\n                                        {{ totalQuantity() | number: (isSilver() ? '1.2-2' : '1.0-0') }} {{ isSilver() ? 'kg' : 'g' }}\n                                    </h5>\n                                </div>\n                                <div class=\"p-2\">\n                                    <small> {{ 'common.balance-after-redemption' | translate }} </small><br />\n                                    <h5 class=\"mb-0\">\n                                        {{ calculateBalanceAfterRedemption(isSilver() ? 'AG' : 'AU') | amount: 7 }} {{ isSilver() ? 'AG' : 'AU' }}\n                                    </h5>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"card\">\n                        <div class=\"card-header\">{{ 'common.history' | translate }}</div>\n                        <ul class=\"list-group list-group-flush\">\n                            <ng-container *ngIf=\"itemsStream | async; let items\">\n                                <li\n                                    class=\"list-group-item py-2\"\n                                    [ngClass]=\"redemption.status !== 'completed' ? 'text-muted' : ''\"\n                                    *ngFor=\"let redemption of items\"\n                                >\n                                    <div class=\"d-flex justify-content-between\">\n                                        <span> {{ redemption.type === 'silver' ? 'Silver Troy Ounce' : 'Gold Troy Ounce' }}</span>\n                                        <span class=\"text-right\" [ngClass]=\"redemption.status !== 'completed' ? 'text-muted' : 'text-danger'\"\n                                            >-{{ getQuantity(redemption) }}\n                                            <ng-container *ngIf=\"redemption.type === 'gold'; else silverTemplate\"> g </ng-container>\n                                            <ng-template #silverTemplate> ozt</ng-template>\n                                        </span>\n                                    </div>\n                                    <small class=\"d-flex justify-content-between\">\n                                        <span class=\"text-muted\">{{ redemption.createdAt | date: 'short' }}</span>\n                                        <span class=\"text-muted text-right\">\n                                            {{ redemption.transaction.amount | amount: 2 }} {{ redemption.transaction.currency.code }}\n                                        </span>\n                                    </small>\n                                    <span\n                                        class=\"text-capitalize label label-sm text-right\"\n                                        [ngClass]=\"{\n                                            'label-primary': redemption.status === 'pending',\n                                            'label-success': redemption.status === 'completed',\n                                            'label-warning': redemption.status === 'processing',\n                                            'label-danger': redemption.status === 'cancelled'\n                                        }\"\n                                        >{{ redemption.status }}</span\n                                    >\n                                </li>\n                                <li class=\"list-group-item py-3 text-center text-muted\" *ngIf=\"items.length === 0\">\n                                    <i>{{ 'common.no-redemptions-found' | translate }}</i>\n                                </li>\n                            </ng-container>\n                        </ul>\n                    </div>\n                    <div class=\"d-flex justify-content-center mb-3\">\n                        <ngb-pagination\n                            [(page)]=\"page\"\n                            [collectionSize]=\"count\"\n                            (pageChange)=\"select()\"\n                            [pageSize]=\"limit\"\n                            [maxSize]=\"5\"\n                            [ellipses]=\"false\"\n                            [rotate]=\"true\"\n                            [boundaryLinks]=\"true\"\n                        >\n                        </ngb-pagination>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "gZW2":
    /*!***********************************************************!*\
      !*** ./src/app/user-redemption/user-redemption.module.ts ***!
      \***********************************************************/

    /*! exports provided: UserRedemptionModule */

    /***/
    function gZW2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRedemptionModule", function () {
        return UserRedemptionModule;
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


      var src_app_common_redemption_redemption_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/common/redemption/redemption.module */
      "KY6G");
      /* harmony import */


      var src_app_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/dashboard/dashboard.module */
      "TDBs");
      /* harmony import */


      var _common_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/common.module */
      "a6Df");
      /* harmony import */


      var _user_redemption_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-redemption-routing.module */
      "oD8g");
      /* harmony import */


      var _user_redemption_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-redemption.component */
      "yvNI");

      var UserRedemptionModule = /*#__PURE__*/_createClass(function UserRedemptionModule() {
        _classCallCheck(this, UserRedemptionModule);
      });

      UserRedemptionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_redemption_component__WEBPACK_IMPORTED_MODULE_6__["UserRedemptionComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _user_redemption_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRedemptionRoutingModule"], src_app_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_3__["DashboardModule"], src_app_common_redemption_redemption_module__WEBPACK_IMPORTED_MODULE_2__["RedemptionModule"]]
      })], UserRedemptionModule);
      /***/
    },

    /***/
    "oD8g":
    /*!*******************************************************************!*\
      !*** ./src/app/user-redemption/user-redemption-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: UserRedemptionRoutingModule */

    /***/
    function oD8g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRedemptionRoutingModule", function () {
        return UserRedemptionRoutingModule;
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


      var _user_redemption_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-redemption.component */
      "yvNI");

      var routes = [{
        path: '',
        component: _user_redemption_component__WEBPACK_IMPORTED_MODULE_5__["UserRedemptionComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInAuthGuard"], _common_guards_permission_guard__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]],
        data: {
          permissions: ['redeem']
        }
      }];

      var UserRedemptionRoutingModule = /*#__PURE__*/_createClass(function UserRedemptionRoutingModule() {
        _classCallCheck(this, UserRedemptionRoutingModule);
      });

      UserRedemptionRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserRedemptionRoutingModule);
      /***/
    },

    /***/
    "yvNI":
    /*!**************************************************************!*\
      !*** ./src/app/user-redemption/user-redemption.component.ts ***!
      \**************************************************************/

    /*! exports provided: UserRedemptionComponent */

    /***/
    function yvNI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRedemptionComponent", function () {
        return UserRedemptionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_redemption_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-redemption.component.html */
      "aVEN");
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


      var _common_services_redemption_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/services/redemption.service */
      "G1PJ");
      /* harmony import */


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/services/session.service */
      "6g7h");
      /* harmony import */


      var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../common/services/toastr.service */
      "N/y2");
      /* harmony import */


      var _store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../store/wallets/wallets.query */
      "O9sj");

      var UserRedemptionComponent = /*#__PURE__*/function (_common_list_v2_compo) {
        _inherits(UserRedemptionComponent, _common_list_v2_compo);

        var _super = _createSuper(UserRedemptionComponent);

        function UserRedemptionComponent(http, ngbModal, changeDetector, route, router, session, toastr, walletsQuery, redemptionService) {
          var _this;

          _classCallCheck(this, UserRedemptionComponent);

          _this = _super.call(this, http, ngbModal, changeDetector, route, router, session);
          _this.toastr = toastr;
          _this.walletsQuery = walletsQuery;
          _this.redemptionService = redemptionService;
          _this.faArrowAltToBottom = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowAltToBottom"];
          _this.faArrowAltFromBottom = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowAltFromBottom"];
          _this.faCircle = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCircle"];
          _this.wallets$ = _this.walletsQuery.filteredBalances$;
          return _this;
        }

        _createClass(UserRedemptionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.apiUrl = "/users/".concat(this.session.user.id, "/redemptions");

            _get(_getPrototypeOf(UserRedemptionComponent.prototype), "ngOnInit", this).call(this);
          }
        }, {
          key: "totalOunces",
          value: function totalOunces() {
            return this.redemptionForm ? this.redemptionService.totalOunces(this.redemptionForm.redemption) : '0.00';
          }
        }, {
          key: "totalQuantity",
          value: function totalQuantity() {
            return this.redemptionForm ? this.isSilver() ? new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(this.redemptionService.totalGrams(this.redemptionForm.redemption)).div(1000).toFixed(2) : new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(this.redemptionService.totalGrams(this.redemptionForm.redemption)).toFixed(0, 1) : '0.00';
          }
        }, {
          key: "isSilver",
          value: function isSilver() {
            return this.redemptionForm ? this.redemptionForm.redemption.type === 'silver' : false;
          }
        }, {
          key: "calculateBalanceAfterRedemption",
          value: function calculateBalanceAfterRedemption(currencyCode) {
            var balance = '0.00';
            this.subscriptions.add(this.wallets$.subscribe(function (wallets) {
              var wallet = wallets.find(function (w) {
                return w.currency.code === currencyCode;
              });

              if (wallet) {
                balance = wallet.availableBalance;
              }
            }));

            if (!balance) {
              return '0';
            }

            return new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(balance).minus(this.redemptionForm ? this.redemptionService.totalOunces(this.redemptionForm.redemption) : 0).toFixed(7);
          }
        }, {
          key: "getQuantity",
          value: function getQuantity(redemption) {
            return new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(redemption.type === 'gold' ? this.redemptionService.totalGrams(redemption) : this.redemptionService.totalOunces(redemption)).toFixed(0);
          }
        }, {
          key: "onUpdate",
          value: function onUpdate() {
            this.updateEvent.next();
          }
        }]);

        return UserRedemptionComponent;
      }(_common_list_v2_component__WEBPACK_IMPORTED_MODULE_9__["ListV2Component"]);

      UserRedemptionComponent.ctorParameters = function () {
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
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"]
        }, {
          type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]
        }, {
          type: _store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_13__["WalletsQuery"]
        }, {
          type: _common_services_redemption_service__WEBPACK_IMPORTED_MODULE_10__["RedemptionService"]
        }];
      };

      UserRedemptionComponent.propDecorators = {
        redemptionForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['redemptionForm']
        }]
      };
      UserRedemptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'user-redemption',
        template: _raw_loader_user_redemption_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], UserRedemptionComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-redemption-user-redemption-module-es5.js.map