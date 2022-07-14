(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fees-fees-module"], {
    /***/
    "+v4p":
    /*!*************************************!*\
      !*** ./src/app/fees/fees.module.ts ***!
      \*************************************/

    /*! exports provided: FeesModule */

    /***/
    function v4p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeesModule", function () {
        return FeesModule;
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


      var _common_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/common.module */
      "a6Df");
      /* harmony import */


      var _fees_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./fees-routing.module */
      "p/cI");
      /* harmony import */


      var _fees_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./fees.component */
      "VVZl");
      /* harmony import */


      var _sgpmx_user_fees_sgpmx_user_fees_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sgpmx-user-fees/sgpmx-user-fees.component */
      "8o7j");
      /* harmony import */


      var _user_fees_user_fees_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user-fees/user-fees.component */
      "Yvvr");

      var FeesModule = /*#__PURE__*/_createClass(function FeesModule() {
        _classCallCheck(this, FeesModule);
      });

      FeesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_fees_component__WEBPACK_IMPORTED_MODULE_5__["FeesComponent"], _user_fees_user_fees_component__WEBPACK_IMPORTED_MODULE_7__["UserFeesComponent"], _sgpmx_user_fees_sgpmx_user_fees_component__WEBPACK_IMPORTED_MODULE_6__["SgpmxUserFeesComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _fees_routing_module__WEBPACK_IMPORTED_MODULE_4__["FeesRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]]
      })], FeesModule);
      /***/
    },

    /***/
    "3PBs":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fees/user-fees/user-fees.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function PBs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container h-100\">\n    <div class=\"row mt-2\">\n        <div class=\"col\">\n            <currency-select-tab\n                [(currency)]=\"currency\"\n                (currencyChange)=\"fetchEvent.next()\"\n                [user]=\"user\"\n                [moreButtonOptions]=\"{ text: 'Other currencies', hasCaret: true }\"\n                #currencySelect\n            ></currency-select-tab>\n        </div>\n    </div>\n    <div class=\"row mt-3\">\n        <ng-container *ngIf=\"['fiat', 'crypto'].includes(currency.type)\">\n            <div class=\"col col-lg-6\">\n                <div class=\"card fee-tag\">\n                    <div class=\"card-body\">\n                        <div class=\"d-flex justify-content-center align-items-center flex-column p-3\">\n                            <div class=\"icon-wrapper mb-2 d-flex align-items-center justify-content-center\">\n                                <figure class=\"m-0\">\n                                    <fa-icon class=\"quickbar-icon\" [fixedWidth]=\"true\" [icon]=\"faLandmarkAlt\"></fa-icon>\n                                </figure>\n                            </div>\n                            <p class=\"font-weight-bold font-lg m-0\">{{ 'common.platform-fees' | translate }}</p>\n                        </div>\n                    </div>\n                    <div>\n                        <table class=\"table mb-0\">\n                            <tbody>\n                                <tr *ngIf=\"currency.code === 'USD'\">\n                                    <td>{{ 'common.monthly-account-fee' | translate }}</td>\n                                    <td class=\"text-right\">\n                                        <ng-container *ngIf=\"getFee('account-fee', 'internal'); else noFee; let fee\">\n                                            <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                        </ng-container>\n                                    </td>\n                                </tr>\n                                <ng-container *ngIf=\"getFee('gst', 'internal'); let fee\">\n                                    <tr>\n                                        <td>GST</td>\n                                        <td class=\"text-right\">\n                                            <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                        </td>\n                                    </tr>\n                                </ng-container>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col col-lg-6\">\n                <div class=\"card fee-tag\">\n                    <div class=\"card-body\">\n                        <div class=\"d-flex justify-content-center align-items-center flex-column p-3\">\n                            <div class=\"icon-wrapper mb-2 d-flex align-items-center justify-content-center\">\n                                <figure class=\"m-0\">\n                                    <fa-icon class=\"quickbar-icon\" [fixedWidth]=\"true\" [icon]=\"faArrowAltToBottom\"></fa-icon>\n                                </figure>\n                            </div>\n                            <p class=\"font-weight-bold font-lg m-0\">{{ 'common.deposit' | translate }}</p>\n                        </div>\n                    </div>\n                    <div>\n                        <table class=\"table mb-0\">\n                            <tbody>\n                                <ng-container *ngFor=\"let method of methods\">\n                                    <tr>\n                                        <td>{{ getMethod('deposit', method.value) }}</td>\n                                        <td class=\"text-right\">\n                                            <ng-container *ngIf=\"getFee('deposit', method.value); else noFee; let fee\">\n                                                <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                            </ng-container>\n                                        </td>\n                                    </tr>\n                                </ng-container>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col col-lg-6\">\n                <div class=\"card fee-tag\">\n                    <div class=\"card-body\">\n                        <div class=\"d-flex justify-content-center align-items-center flex-column p-3\">\n                            <div class=\"icon-wrapper mb-2 d-flex align-items-center justify-content-center\">\n                                <figure class=\"m-0\">\n                                    <fa-icon class=\"quickbar-icon\" [fixedWidth]=\"true\" [icon]=\"faArrowAltFromBottom\"></fa-icon>\n                                </figure>\n                            </div>\n                            <p class=\"font-weight-bold font-lg m-0\">{{ 'common.withdrawal' | translate }}</p>\n                        </div>\n                    </div>\n                    <div>\n                        <table class=\"table mb-0\">\n                            <tbody>\n                                <ng-container *ngFor=\"let method of methods\">\n                                    <tr>\n                                        <td>{{ getMethod('withdrawal', method.value) }}</td>\n                                        <td class=\"text-right\">\n                                            <ng-container *ngIf=\"getFee('withdrawal', method.value); else noFee; let fee\">\n                                                <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                            </ng-container>\n                                        </td>\n                                    </tr>\n                                </ng-container>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n        <div class=\"col col-lg-6\" *ngIf=\"currency.type !== 'metal'\">\n            <div class=\"card fee-tag\">\n                <div class=\"card-body\">\n                    <div class=\"d-flex justify-content-center align-items-center flex-column p-3\">\n                        <div class=\"icon-wrapper mb-2 d-flex align-items-center justify-content-center\">\n                            <figure class=\"m-0\">\n                                <fa-icon class=\"quickbar-icon\" [fixedWidth]=\"true\" [icon]=\"faPaperPlane\"></fa-icon>\n                            </figure>\n                        </div>\n                        <p class=\"font-weight-bold font-lg m-0\">{{ 'common.transfer' | translate }}</p>\n                    </div>\n                </div>\n                <div>\n                    <table class=\"table mb-0\">\n                        <tbody>\n                            <tr>\n                                <td>{{ 'common.internal-transfer' | translate }}</td>\n                                <td class=\"text-right\">\n                                    <ng-container *ngIf=\"getFee('transfer', 'internal'); else noFee; let fee\">\n                                        <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                    </ng-container>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-lg-6\" *ngIf=\"currency.type === 'metal'\">\n            <div class=\"card fee-tag\">\n                <div class=\"card-body\">\n                    <div class=\"d-flex justify-content-center align-items-center flex-column p-3\">\n                        <div class=\"icon-wrapper mb-2 d-flex align-items-center justify-content-center\">\n                            <figure class=\"m-0\">\n                                <fa-icon class=\"quickbar-icon\" [fixedWidth]=\"true\" [icon]=\"faPaperPlane\"></fa-icon>\n                            </figure>\n                        </div>\n                        <p class=\"font-weight-bold font-lg m-0\">{{ 'common.trade' | translate }}</p>\n                    </div>\n                </div>\n                <div>\n                    <table class=\"table mb-0\">\n                        <tbody>\n                            <tr>\n                                <td>{{ 'common.buy' | translate }} &amp; {{ 'common.sell' | translate }}</td>\n                                <td class=\"text-right\">\n                                    <ng-container *ngIf=\"getFee('service', 'internal'); else noFee; let fee\">\n                                        <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                    </ng-container>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #noFee>\n    <span class=\"text-success\">{{ 'common.free' | translate | uppercase }}</span>\n</ng-template>\n<ng-template #withFee let-fee=\"fee\">\n    <div>\n        <span *ngIf=\"fee.relative && fee.fixed\">\n            {{ convert(fee.fixed, fee.currency) | amount: currency.decimalPlaces }} {{ currency.code }} + {{ fee.relative | percent: '1.2' }}\n        </span>\n        <span *ngIf=\"fee.relative && !fee.fixed\">\n            {{ fee.relative | percent: '1.2' }}\n        </span>\n        <span *ngIf=\"!fee.relative && fee.fixed\"> {{ convert(fee.fixed, fee.currency) | amount: currency.decimalPlaces }} {{ currency.code }} </span>\n    </div>\n    <div *ngIf=\"fee.min\">\n        <small class=\"text-muted\">\n            {{ 'common.min' | translate | lowercase }}. {{ convert(fee.min, fee.currency) | amount: currency.decimalPlaces }}\n            {{ currency.type !== 'metal' ? currency.code : 'USD' }}\n        </small>\n    </div>\n    <div *ngIf=\"fee.max\">\n        <small class=\"text-muted\">\n            {{ 'common.max' | translate }}. {{ convert(fee.max, fee.currency) | amount: currency.decimalPlaces }}\n            {{ currency.type !== 'metal' ? currency.code : 'USD' }}\n        </small>\n    </div>\n    <div *ngIf=\"fee.minValue\">\n        <small class=\"text-muted\">\n            {{ 'common.min' | translate | lowercase }}. {{ fee.type }} {{ convert(fee.minValue, fee.currency) | amount: currency.decimalPlaces }}\n            {{ currency.type !== 'metal' ? currency.code : 'USD' }}\n        </small>\n    </div>\n</ng-template>\n";
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
          var _this;

          _classCallCheck(this, FeesQuery);

          _this = _super2.call(this, store);
          _this.store = store;
          return _this;
        }

        _createClass(FeesQuery, [{
          key: "findByPrimaryAttributes",
          value: function findByPrimaryAttributes(query) {
            var _this2 = this;

            return this.selectEntity(function (entity) {
              return entity.type === query.type && entity.method === query.method && query.currencyCode === entity.currency.code;
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (fee) {
              return fee ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(fee) : _this2.selectEntity(function (entity) {
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
    "8o7j":
    /*!*******************************************************************!*\
      !*** ./src/app/fees/sgpmx-user-fees/sgpmx-user-fees.component.ts ***!
      \*******************************************************************/

    /*! exports provided: SgpmxUserFeesComponent */

    /***/
    function o7j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SgpmxUserFeesComponent", function () {
        return SgpmxUserFeesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sgpmx_user_fees_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sgpmx-user-fees.component.html */
      "jP41");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/pro-duotone-svg-icons */
      "IIzM");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/common/services/session.service */
      "6g7h");
      /* harmony import */


      var src_app_store_fees_fees_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/store/fees/fees.query */
      "80k1");
      /* harmony import */


      var src_app_store_fees_fees_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/store/fees/fees.service */
      "jwRq");

      var SgpmxUserFeesComponent = /*#__PURE__*/function () {
        function SgpmxUserFeesComponent(session, http, feesQuery, feesService) {
          _classCallCheck(this, SgpmxUserFeesComponent);

          this.session = session;
          this.http = http;
          this.feesQuery = feesQuery;
          this.feesService = feesService;
          this.isLoading = false;
          this.fees = [];
          this.faBalanceScale = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBalanceScale"];
          this.faExchange = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faExchange"];
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        }

        _createClass(SgpmxUserFeesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.subscriptions.add(this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
              return _this3.isLoading = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])(function (user) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([_this3.http.get("/users/".concat(user.id, "/fee-schedule"), {
                params: {
                  currencyCode: 'AU'
                }
              }), _this3.http.get("/users/".concat(user.id, "/fee-schedule"), {
                params: {
                  currencyCode: 'AG'
                }
              })]);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this3.isLoading = false;
            })).subscribe(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  goldFees = _ref2[0],
                  silverFees = _ref2[1];

              _this3.fees = [].concat(_toConsumableArray(goldFees), _toConsumableArray(silverFees));
            }));
            this.feesService.fetch();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "getFee",
          value: function getFee(type, method, currencyCode) {
            var found = this.fees.find(function (fee) {
              return fee.type === type && fee.method === method && fee.currency.code === currencyCode;
            });

            if (!found || !found.relative && !found.fixed) {
              return null;
            }

            return found;
          }
        }, {
          key: "getGst",
          value: function getGst() {
            return this.feesQuery.findByPrimaryAttributes({
              type: 'gst',
              method: 'internal',
              currencyCode: 'USD'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (gst) {
              return gst ? "".concat(new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(gst.relative || 0).times(100).toFixed(0), "%") : 'FREE';
            }));
          }
        }]);

        return SgpmxUserFeesComponent;
      }();

      SgpmxUserFeesComponent.ctorParameters = function () {
        return [{
          type: src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_store_fees_fees_query__WEBPACK_IMPORTED_MODULE_9__["FeesQuery"]
        }, {
          type: src_app_store_fees_fees_service__WEBPACK_IMPORTED_MODULE_10__["FeesService"]
        }];
      };

      SgpmxUserFeesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sgpmx-user-fees',
        template: _raw_loader_sgpmx_user_fees_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], SgpmxUserFeesComponent);
      /***/
    },

    /***/
    "VVZl":
    /*!****************************************!*\
      !*** ./src/app/fees/fees.component.ts ***!
      \****************************************/

    /*! exports provided: FeesComponent */

    /***/
    function VVZl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeesComponent", function () {
        return FeesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_fees_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./fees.component.html */
      "YoBR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var FeesComponent = /*#__PURE__*/_createClass(function FeesComponent() {
        _classCallCheck(this, FeesComponent);

        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appName;
      });

      FeesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'fees',
        template: _raw_loader_fees_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FeesComponent);
      /***/
    },

    /***/
    "YoBR":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fees/fees.component.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function YoBR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container pt-page\">\n    <div class=\"row justify-content-between align-items-center pb-2\">\n        <div class=\"col-auto\">\n            <h5 class=\"mb-0\">{{ 'common.fee-schedule' | translate | titlecase }}</h5>\n        </div>\n        <div class=\"col-auto d-flex justify-content-end\">\n            <ol class=\"breadcrumb px-0\">\n                <li class=\"breadcrumb-item\">\n                    <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                </li>\n                <li class=\"breadcrumb-item active\">{{ 'common.fee-schedule' | translate }}</li>\n            </ol>\n        </div>\n    </div>\n</div>\n<ng-container *ngIf=\"appName !== 'sgpmx'; else sgpmx\">\n    <user-fees></user-fees>\n</ng-container>\n<ng-template #sgpmx>\n    <sgpmx-user-fees></sgpmx-user-fees>\n</ng-template>\n";
      /***/
    },

    /***/
    "Yvvr":
    /*!*******************************************************!*\
      !*** ./src/app/fees/user-fees/user-fees.component.ts ***!
      \*******************************************************/

    /*! exports provided: UserFeesComponent */

    /***/
    function Yvvr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserFeesComponent", function () {
        return UserFeesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_fees_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-fees.component.html */
      "3PBs");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/pro-duotone-svg-icons */
      "IIzM");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_common_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/common/models/accounting/currency.model */
      "/e3T");
      /* harmony import */


      var src_app_common_models_core_user_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/common/models/core/user.model */
      "vk+e");
      /* harmony import */


      var src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/common/services/session.service */
      "6g7h");

      var UserFeesComponent = /*#__PURE__*/function () {
        function UserFeesComponent(http, session) {
          _classCallCheck(this, UserFeesComponent);

          this.http = http;
          this.session = session;
          this.fees = [];
          this.currencies = [];
          this.fetchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          this.faArrowAltToBottom = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArrowAltToBottom"];
          this.faLandmarkAlt = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faLandmarkAlt"];
          this.faArrowAltFromBottom = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArrowAltFromBottom"];
          this.faPaperPlane = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPaperPlane"];
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        }

        _createClass(UserFeesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.currency = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"])(this.session.user.preferredCurrency);
            this.loadOwner();
            this.http.get('/currencies', {
              params: {
                limit: 100 + ''
              }
            }).subscribe(function (response) {
              _this4.currencies = response.data;
              _this4.currency = _this4.currencies.find(function (currency) {
                return currency.code === _this4.session.user.preferredCurrency.code;
              });
            });
            this.subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(undefined), this.fetchEvent).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function () {
              return _this4.fetch();
            })).subscribe(function (fees) {
              _this4.fees = fees;

              if (_this4.currency && _this4.currency.type === 'crypto') {
                _this4.methods = [{
                  value: 'crypto',
                  display: _this4.currency.name
                }];
              } else {
                _this4.methods = [{
                  value: 'swift',
                  display: 'SWIFT'
                }, {
                  value: 'local',
                  display: 'Local'
                }, {
                  value: 'card',
                  display: 'Topup Card'
                }];
              }
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "fetch",
          value: function fetch() {
            return this.http.get("/users/".concat(this.user.id, "/fee-schedule"), {
              params: {
                currencyCode: this.currency.code
              }
            });
          }
        }, {
          key: "getFee",
          value: function getFee(type, method) {
            var found = this.fees.find(function (fee) {
              return fee.type === type && fee.method === method;
            });

            if (!found || !found.relative && !found.fixed) {
              return null;
            }

            return found;
          }
        }, {
          key: "convert",
          value: function convert(amount, baseCurrency) {
            var _this5 = this;

            var base = this.currencies.find(function (currency) {
              return currency.code === baseCurrency.code;
            });
            var counter = this.currencies.find(function (currency) {
              return currency.code === _this5.currency.code;
            });

            if (!base || !counter) {
              return '0';
            }

            return src_app_common_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_8__["Currency"].convert(amount, base, counter);
          }
        }, {
          key: "getMethod",
          value: function getMethod(type, feeMethod) {
            var _a, _b;

            if (feeMethod === 'card') {
              return type === 'withdrawal' ? 'Topup Card' : 'Unload Card';
            }

            return (_b = (_a = this.methods.find(function (method) {
              return feeMethod === method.value;
            })) === null || _a === void 0 ? void 0 : _a.display) !== null && _b !== void 0 ? _b : '';
          }
        }, {
          key: "loadOwner",
          value: function loadOwner() {
            var _this6 = this;

            this.subscriptions.add(this.session.userStream.subscribe(function (user) {
              _this6.user = new src_app_common_models_core_user_model__WEBPACK_IMPORTED_MODULE_9__["User"](user);

              _this6.fetchEvent.next();
            }));
          }
        }]);

        return UserFeesComponent;
      }();

      UserFeesComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]
        }];
      };

      UserFeesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'user-fees',
        template: _raw_loader_user_fees_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], UserFeesComponent);
      /***/
    },

    /***/
    "jP41":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fees/sgpmx-user-fees/sgpmx-user-fees.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jP41(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container h-100\">\n    <div class=\"row mt-2\">\n        <div class=\"col col-lg-6\">\n            <div class=\"card fee-tag\">\n                <div class=\"card-body\">\n                    <div class=\"d-flex justify-content-center align-items-center flex-column p-3\">\n                        <div class=\"icon-wrapper mb-2 d-flex align-items-center justify-content-center\">\n                            <figure class=\"m-0\">\n                                <fa-icon class=\"quickbar-icon\" [fixedWidth]=\"true\" [icon]=\"faBalanceScale\"></fa-icon>\n                            </figure>\n                        </div>\n                        <p class=\"font-weight-bold font-lg m-0\">Gold Troy Ounce</p>\n                    </div>\n                </div>\n                <div>\n                    <table class=\"table mb-0\">\n                        <tbody>\n                            <tr>\n                                <td>Buy &amp; Sell</td>\n                                <td class=\"text-right\">\n                                    <ng-container *ngIf=\"getFee('service', 'internal', 'AU'); else noFee; let fee\">\n                                        <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                    </ng-container>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-lg-6\">\n            <div class=\"card fee-tag\">\n                <div class=\"card-body\">\n                    <div class=\"d-flex justify-content-center align-items-center flex-column p-3\">\n                        <div class=\"icon-wrapper mb-2 d-flex align-items-center justify-content-center\">\n                            <figure class=\"m-0\">\n                                <fa-icon class=\"quickbar-icon\" [fixedWidth]=\"true\" [icon]=\"faBalanceScale\"></fa-icon>\n                            </figure>\n                        </div>\n                        <p class=\"font-weight-bold font-lg m-0\">Silver Troy Ounce</p>\n                    </div>\n                </div>\n                <div>\n                    <table class=\"table mb-0\">\n                        <tbody>\n                            <tr>\n                                <td>Buy &amp; Sell</td>\n                                <td class=\"text-right\">\n                                    <ng-container *ngIf=\"getFee('service', 'internal', 'AG'); else noFee; let fee\">\n                                        <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                    </ng-container>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-lg-6\">\n            <div class=\"card fee-tag\">\n                <div class=\"card-body\">\n                    <div class=\"d-flex justify-content-center align-items-center flex-column p-3\">\n                        <div class=\"icon-wrapper mb-2 d-flex align-items-center justify-content-center\">\n                            <figure class=\"m-0\">\n                                <fa-icon class=\"quickbar-icon\" [fixedWidth]=\"true\" [icon]=\"faExchange\"></fa-icon>\n                            </figure>\n                        </div>\n                        <p class=\"font-weight-bold font-lg m-0\">Gold Troy Ounce</p>\n                    </div>\n                </div>\n                <div>\n                    <table class=\"table mb-0\">\n                        <tbody>\n                            <tr>\n                                <td>{{ 'common.transfer' | translate }}</td>\n                                <td class=\"text-right\">\n                                    <ng-container *ngIf=\"getFee('transfer', 'internal', 'AU'); else noFee; let fee\">\n                                        <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                    </ng-container>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-lg-6\">\n            <div class=\"card fee-tag\">\n                <div class=\"card-body\">\n                    <div class=\"d-flex justify-content-center align-items-center flex-column p-3\">\n                        <div class=\"icon-wrapper mb-2 d-flex align-items-center justify-content-center\">\n                            <figure class=\"m-0\">\n                                <fa-icon class=\"quickbar-icon\" [fixedWidth]=\"true\" [icon]=\"faExchange\"></fa-icon>\n                            </figure>\n                        </div>\n                        <p class=\"font-weight-bold font-lg m-0\">Silver Troy Ounce</p>\n                    </div>\n                </div>\n                <div>\n                    <table class=\"table mb-0\">\n                        <tbody>\n                            <tr>\n                                <td>{{ 'common.transfer' | translate }}</td>\n                                <td class=\"text-right\">\n                                    <ng-container *ngIf=\"getFee('transfer', 'internal', 'AG'); else noFee; let fee\">\n                                        <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                    </ng-container>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <p class=\"font-sm\">\n        <i>* Subject to additional {{ getGst() | async }} GST</i>\n    </p>\n</div>\n\n<ng-template #noFee>\n    <span class=\"text-success\" *ngIf=\"!isLoading; else spinner\">FREE</span>\n    <ng-template #spinner>\n        <ion-spinner name=\"dots\"></ion-spinner>\n    </ng-template>\n</ng-template>\n<ng-template #withFee let-fee=\"fee\">\n    <div>\n        <span *ngIf=\"fee.relative && fee.fixed\"> {{ fee.fixed | amount }} USD + {{ fee.relative | percent: '1.2' }}*</span>\n        <span *ngIf=\"fee.relative && !fee.fixed\"> {{ fee.relative | percent: '1.2' }}* </span>\n        <span *ngIf=\"!fee.relative && fee.fixed\"> {{ fee.fixed | amount }} USD*</span>\n    </div>\n    <div *ngIf=\"fee.min\">\n        <small class=\"text-muted\"> min. {{ fee.min | amount }} USD </small>\n    </div>\n    <div *ngIf=\"fee.max\">\n        <small class=\"text-muted\"> {{ 'common.max' | translate }}. {{ fee.max | amount }} USD </small>\n    </div>\n    <div *ngIf=\"fee.minValue\">\n        <small class=\"text-muted\"> min. {{ fee.type }} {{ fee.minValue | amount }} USD </small>\n    </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "jwRq":
    /*!********************************************!*\
      !*** ./src/app/store/fees/fees.service.ts ***!
      \********************************************/

    /*! exports provided: FeesService */

    /***/
    function jwRq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeesService", function () {
        return FeesService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/common/services/session.service */
      "6g7h");
      /* harmony import */


      var _fees_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./fees.store */
      "6sOK");

      var FeesService = /*#__PURE__*/function () {
        function FeesService(store, http, session) {
          _classCallCheck(this, FeesService);

          this.store = store;
          this.http = http;
          this.session = session;
        }

        _createClass(FeesService, [{
          key: "fetchAsObservable",
          value: function fetchAsObservable() {
            var _this7 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([this.http.get("/users/".concat(this.session.user.id, "/fee-schedule"), {
              params: {
                currencyCode: 'AU'
              }
            }), this.http.get("/users/".concat(this.session.user.id, "/fee-schedule"), {
              params: {
                currencyCode: 'AG'
              }
            }), this.http.get("/users/".concat(this.session.user.id, "/fee-schedule"), {
              params: {
                currencyCode: 'USD'
              }
            })]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 3),
                  goldFees = _ref4[0],
                  silverFees = _ref4[1],
                  usdFees = _ref4[2];

              return [].concat(_toConsumableArray(goldFees), _toConsumableArray(silverFees), _toConsumableArray(usdFees));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (fees) {
              _this7.store.set(fees);
            }));
          }
        }, {
          key: "fetch",
          value: function fetch() {
            this.fetchAsObservable().subscribe(function () {
              return undefined;
            });
          }
        }]);

        return FeesService;
      }();

      FeesService.ctorParameters = function () {
        return [{
          type: _fees_store__WEBPACK_IMPORTED_MODULE_6__["FeesStore"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]
        }];
      };

      FeesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], FeesService);
      /***/
    },

    /***/
    "p/cI":
    /*!*********************************************!*\
      !*** ./src/app/fees/fees-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: FeesRoutingModule */

    /***/
    function pCI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeesRoutingModule", function () {
        return FeesRoutingModule;
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


      var _fees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./fees.component */
      "VVZl");

      var routes = [{
        path: '',
        component: _fees_component__WEBPACK_IMPORTED_MODULE_4__["FeesComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"]]
      }];

      var FeesRoutingModule = /*#__PURE__*/_createClass(function FeesRoutingModule() {
        _classCallCheck(this, FeesRoutingModule);
      });

      FeesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FeesRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=fees-fees-module-es5.js.map