(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mailbox-mailbox-module"], {
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
    "5Eb4":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mailbox/mailbox.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function Eb4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"container pt-page\">\n    <div class=\"row justify-content-between align-items-center pb-3\">\n        <div class=\"col-auto\">\n            <h5 class=\"mb-0\">{{ 'common.mailbox' | translate }}</h5>\n        </div>\n        <div class=\"col-auto d-flex justify-content-end\">\n            <ol class=\"breadcrumb px-0\">\n                <li class=\"breadcrumb-item\">\n                    <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                </li>\n                <li class=\"breadcrumb-item active\">{{ 'common.mailbox' | translate }}</li>\n            </ol>\n        </div>\n    </div>\n    <router-outlet></router-outlet>\n</section>\n";
      /***/
    },

    /***/
    "5cJx":
    /*!*******************************************!*\
      !*** ./src/app/mailbox/mailbox.module.ts ***!
      \*******************************************/

    /*! exports provided: MailboxModule */

    /***/
    function cJx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailboxModule", function () {
        return MailboxModule;
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


      var _common_mails_mails_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/mails/mails.module */
      "D6Fb");
      /* harmony import */


      var _mailbox_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./mailbox-routing.module */
      "AQpO");
      /* harmony import */


      var _mailbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mailbox.component */
      "SLJv");
      /* harmony import */


      var _mailbox_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mailbox.service */
      "Se2O");
      /* harmony import */


      var _user_mail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user-mail.component */
      "HrB9");
      /* harmony import */


      var _user_mails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./user-mails.component */
      "Tlxi");

      var MailboxModule = /*#__PURE__*/_createClass(function MailboxModule() {
        _classCallCheck(this, MailboxModule);
      });

      MailboxModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_mailbox_component__WEBPACK_IMPORTED_MODULE_5__["MailboxComponent"], _user_mails_component__WEBPACK_IMPORTED_MODULE_8__["UserMailsComponent"], _user_mail_component__WEBPACK_IMPORTED_MODULE_7__["UserMailComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _mailbox_routing_module__WEBPACK_IMPORTED_MODULE_4__["MailboxRoutingModule"], _common_mails_mails_module__WEBPACK_IMPORTED_MODULE_3__["MailsModule"]],
        providers: [_mailbox_service__WEBPACK_IMPORTED_MODULE_6__["MailboxService"]]
      })], MailboxModule);
      /***/
    },

    /***/
    "AQpO":
    /*!***************************************************!*\
      !*** ./src/app/mailbox/mailbox-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: MailboxRoutingModule */

    /***/
    function AQpO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailboxRoutingModule", function () {
        return MailboxRoutingModule;
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


      var _mailbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./mailbox.component */
      "SLJv");
      /* harmony import */


      var _user_mail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-mail.component */
      "HrB9");
      /* harmony import */


      var _user_mails_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-mails.component */
      "Tlxi");

      var routes = [{
        path: '',
        component: _mailbox_component__WEBPACK_IMPORTED_MODULE_4__["MailboxComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"]],
        children: [{
          path: '',
          component: _user_mails_component__WEBPACK_IMPORTED_MODULE_6__["UserMailsComponent"]
        }, {
          path: ':mailId',
          component: _user_mail_component__WEBPACK_IMPORTED_MODULE_5__["UserMailComponent"]
        }]
      }];

      var MailboxRoutingModule = /*#__PURE__*/_createClass(function MailboxRoutingModule() {
        _classCallCheck(this, MailboxRoutingModule);
      });

      MailboxRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MailboxRoutingModule);
      /***/
    },

    /***/
    "HrB9":
    /*!************************************************!*\
      !*** ./src/app/mailbox/user-mail.component.ts ***!
      \************************************************/

    /*! exports provided: UserMailComponent */

    /***/
    function HrB9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserMailComponent", function () {
        return UserMailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserMailComponent = /*#__PURE__*/_createClass(function UserMailComponent() {
        _classCallCheck(this, UserMailComponent);
      });

      UserMailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-mails',
        template: " <mail [markAsRead]=\"true\"></mail> "
      })], UserMailComponent);
      /***/
    },

    /***/
    "SLJv":
    /*!**********************************************!*\
      !*** ./src/app/mailbox/mailbox.component.ts ***!
      \**********************************************/

    /*! exports provided: MailboxComponent */

    /***/
    function SLJv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailboxComponent", function () {
        return MailboxComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_mailbox_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./mailbox.component.html */
      "5Eb4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MailboxComponent = /*#__PURE__*/_createClass(function MailboxComponent() {
        _classCallCheck(this, MailboxComponent);
      });

      MailboxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'mailbox',
        template: _raw_loader_mailbox_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], MailboxComponent);
      /***/
    },

    /***/
    "Se2O":
    /*!********************************************!*\
      !*** ./src/app/mailbox/mailbox.service.ts ***!
      \********************************************/

    /*! exports provided: MailboxService */

    /***/
    function Se2O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailboxService", function () {
        return MailboxService;
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

      var MailboxService = /*#__PURE__*/function () {
        function MailboxService() {
          _classCallCheck(this, MailboxService);

          this.notificationSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /* eslint-disable-next-line @typescript-eslint/member-ordering */

          this.onUpdate = this.notificationSource.asObservable();
        }

        _createClass(MailboxService, [{
          key: "notify",
          value: function notify() {
            this.notificationSource.next();
          }
        }]);

        return MailboxService;
      }();

      MailboxService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MailboxService);
      /***/
    },

    /***/
    "Tlxi":
    /*!*************************************************!*\
      !*** ./src/app/mailbox/user-mails.component.ts ***!
      \*************************************************/

    /*! exports provided: UserMailsComponent */

    /***/
    function Tlxi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserMailsComponent", function () {
        return UserMailsComponent;
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


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/services/session.service */
      "6g7h");

      var UserMailsComponent = /*#__PURE__*/_createClass(function UserMailsComponent(session) {
        _classCallCheck(this, UserMailsComponent);

        this.session = session;
      });

      UserMailsComponent.ctorParameters = function () {
        return [{
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]
        }];
      };

      UserMailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-mails',
        // eslint-disable-next-line @angular-eslint/component-max-inline-declarations
        template: "\n        <ng-container *ngIf=\"session.userStream | async; let user\"><mails [user]=\"user\"></mails></ng-container>\n    "
      })], UserMailsComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=mailbox-mailbox-module-es5.js.map