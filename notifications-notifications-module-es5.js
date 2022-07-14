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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"], {
    /***/
    "4G6T":
    /*!**********************************************************!*\
      !*** ./src/app/notifications/notifications.component.ts ***!
      \**********************************************************/

    /*! exports provided: NotificationsComponent */

    /***/
    function G6T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
        return NotificationsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_notifications_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./notifications.component.html */
      "FTXL");
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _common_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/list.component */
      "aJRI");
      /* harmony import */


      var _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/services/confirmation.service */
      "fTmd");
      /* harmony import */


      var _common_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/services/notifications.service */
      "A3TI");
      /* harmony import */


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/services/session.service */
      "6g7h");

      var NotificationsComponent = /*#__PURE__*/function (_common_list_componen) {
        _inherits(NotificationsComponent, _common_list_componen);

        var _super = _createSuper(NotificationsComponent);

        function NotificationsComponent(http, ngbModal, changeDetector, route, router, session, confirmation, notificationsService) {
          var _this;

          _classCallCheck(this, NotificationsComponent);

          _this = _super.call(this, http, ngbModal, changeDetector, route, router, session, confirmation);
          _this.notificationsService = notificationsService;
          _this.min = Math.min;
          _this.limit = 10;
          _this.defaultLimit = 10;
          return _this;
        }

        _createClass(NotificationsComponent, [{
          key: "find",
          value: function find() {
            var _this2 = this;

            return this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (user) {
              _this2.apiUrl = "/users/".concat(user.id, "/notifications");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(function () {
              return _get(_getPrototypeOf(NotificationsComponent.prototype), "find", _this2).call(_this2);
            }));
          }
        }, {
          key: "markAllAsRead",
          value: function markAllAsRead() {
            var _this3 = this;

            this.subscriptions.add(this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(function (user) {
              return _this3.http.post("/users/".concat(user.id, "/notifications"), {
                id: Math.floor(Math.random() * 10000),
                jsonrpc: '2.0',
                method: 'markAllAsRead'
              }, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                  'Content-Type': 'application/json-rpc'
                })
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(function () {
              return _this3.find();
            })).subscribe(function () {
              _this3.notificationsService.notifyEvent.next();
            }));
          }
        }, {
          key: "goto",
          value: function goto(notification) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!notification.invoice) {
                        _context.next = 5;
                        break;
                      }

                      _context.next = 3;
                      return this.router.navigate(['/services/invoices', notification.invoice.id]);

                    case 3:
                      _context.next = 17;
                      break;

                    case 5:
                      if (!notification.transaction) {
                        _context.next = 10;
                        break;
                      }

                      _context.next = 8;
                      return this.router.navigate(['/transactions', notification.transaction.id]);

                    case 8:
                      _context.next = 17;
                      break;

                    case 10:
                      if (!notification.conversion) {
                        _context.next = 15;
                        break;
                      }

                      _context.next = 13;
                      return this.router.navigate(['/services/conversions', notification.conversion.id]);

                    case 13:
                      _context.next = 17;
                      break;

                    case 15:
                      _context.next = 17;
                      return this.router.navigate(['/protocol']);

                    case 17:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return NotificationsComponent;
      }(_common_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"]);

      NotificationsComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]
        }, {
          type: _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"]
        }, {
          type: _common_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"]
        }];
      };

      NotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'notifications',
        template: _raw_loader_notifications_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], NotificationsComponent);
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
    "FTXL":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FTXL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"!router.isActive('/dashboard', false)\">\n    <div class=\"container pt-page\">\n        <div class=\"row justify-content-between align-items-center pb-2\">\n            <div class=\"col-auto\">\n                <h5 class=\"mb-0\">{{ 'common.notifications' | translate }}</h5>\n            </div>\n            <div class=\"col-auto d-flex justify-content-end\">\n                <ol class=\"breadcrumb px-0\">\n                    <li class=\"breadcrumb-item\">\n                        <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">{{ 'common.notifications' | translate }}</li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</ng-container>\n<section class=\"container e2e-notifications mb-3\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"d-flex justify-content-end align-items-center mb-2\">\n                <div class=\"d-flex align-items-center\">\n                    <a href class=\"btn btn-secondary-air\" (click)=\"markAllAsRead(); $event.preventDefault()\">{{\n                        'common.mark-all-as-read' | translate\n                    }}</a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"table-responsive\">\n        <table class=\"table table-hover align-items-center table-borderless\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">{{ 'common.description' | translate }}</th>\n                    <th scope=\"col\" class=\"table-col-sm\">{{ 'common.created-at' | translate | titlecase }}</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr\n                    *ngFor=\"let notification of itemsStream | async\"\n                    class=\"clickable bg-white e2e-notification\"\n                    [ngClass]=\"'has-' + notification.severity\"\n                >\n                    <th scope=\"row\" (click)=\"goto(notification)\">\n                        <span class=\"badge mr-1\" [ngClass]=\"'badge-' + notification.severity\" *ngIf=\"!notification.read\">{{\n                            'common.new' | translate\n                        }}</span>\n                        <notification [notification]=\"notification\"></notification>\n                    </th>\n                    <td>\n                        {{ notification.createdAt | date: 'medium' }}\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <footer class=\"table-footer\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-8\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <ng-select\n                            [(ngModel)]=\"limit\"\n                            dropdownPosition=\"auto\"\n                            (change)=\"select(1)\"\n                            [items]=\"limitOpts\"\n                            [placeholder]=\"'common.show-entries-per-page' | translate\"\n                            [clearable]=\"false\"\n                            [searchable]=\"false\"\n                            required\n                        >\n                            <ng-template ng-label-tmp let-item=\"item\"\n                                >{{ 'common.show' | translate }} {{ item }} {{ 'common.per-page' | translate }}</ng-template\n                            >\n                            <ng-template ng-option-tmp let-item=\"item\">{{ item }} {{ 'common.entries' | translate }}</ng-template>\n                        </ng-select>\n                    </div>\n                    <div class=\"col-12 d-flex align-items-center\">\n                        <span class=\"text-muted text-small\">Showing {{ offset + 1 }} - {{ min(offset + limit, count) }} of {{ count }}</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-12 col-md-16 d-flex justify-content-end\">\n                <ngb-pagination\n                    [(page)]=\"page\"\n                    [collectionSize]=\"count\"\n                    (pageChange)=\"select()\"\n                    [pageSize]=\"limit\"\n                    [maxSize]=\"4\"\n                    [rotate]=\"false\"\n                    [boundaryLinks]=\"true\"\n                >\n                </ngb-pagination>\n            </div>\n        </div>\n    </footer>\n</section>\n";
      /***/
    },

    /***/
    "cxoL":
    /*!***************************************************************!*\
      !*** ./src/app/notifications/notifications-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: NotificationsRoutingModule */

    /***/
    function cxoL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsRoutingModule", function () {
        return NotificationsRoutingModule;
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


      var _notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./notifications.component */
      "4G6T");

      var routes = [{
        path: '',
        component: _notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"]]
      }];

      var NotificationsRoutingModule = /*#__PURE__*/_createClass(function NotificationsRoutingModule() {
        _classCallCheck(this, NotificationsRoutingModule);
      });

      NotificationsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NotificationsRoutingModule);
      /***/
    },

    /***/
    "wMrW":
    /*!*******************************************************!*\
      !*** ./src/app/notifications/notifications.module.ts ***!
      \*******************************************************/

    /*! exports provided: NotificationsModule */

    /***/
    function wMrW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsModule", function () {
        return NotificationsModule;
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


      var _common_notification_notification_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/notification/notification.module */
      "niQX");
      /* harmony import */


      var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./notifications-routing.module */
      "cxoL");
      /* harmony import */


      var _notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./notifications.component */
      "4G6T");

      var NotificationsModule = /*#__PURE__*/_createClass(function NotificationsModule() {
        _classCallCheck(this, NotificationsModule);
      });

      NotificationsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _common_notification_notification_module__WEBPACK_IMPORTED_MODULE_3__["NotificationModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_4__["NotificationsRoutingModule"]]
      })], NotificationsModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=notifications-notifications-module-es5.js.map