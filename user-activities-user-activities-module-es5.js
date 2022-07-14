(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-activities-user-activities-module"], {
    /***/
    "2+0c":
    /*!***********************************************************!*\
      !*** ./src/app/user-activities/user-activities.module.ts ***!
      \***********************************************************/

    /*! exports provided: UserActivitiesModule */

    /***/
    function c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserActivitiesModule", function () {
        return UserActivitiesModule;
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


      var _common_user_activity_user_activity_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/user-activity/user-activity.module */
      "FzIm");
      /* harmony import */


      var _user_activities_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-activities-routing.module */
      "7X4i");
      /* harmony import */


      var _user_activities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-activities.component */
      "2L1d");

      var UserActivitiesModule = /*#__PURE__*/_createClass(function UserActivitiesModule() {
        _classCallCheck(this, UserActivitiesModule);
      });

      UserActivitiesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_activities_component__WEBPACK_IMPORTED_MODULE_5__["UserActivitiesComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _common_user_activity_user_activity_module__WEBPACK_IMPORTED_MODULE_3__["UserActivityModule"], _user_activities_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserActivitiesRoutingModule"]]
      })], UserActivitiesModule);
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
    "7X4i":
    /*!*******************************************************************!*\
      !*** ./src/app/user-activities/user-activities-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: UserActivitiesRoutingModule */

    /***/
    function X4i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserActivitiesRoutingModule", function () {
        return UserActivitiesRoutingModule;
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


      var _user_activities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-activities.component */
      "2L1d");

      var routes = [{
        path: '',
        component: _user_activities_component__WEBPACK_IMPORTED_MODULE_4__["UserActivitiesComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"]]
      }];

      var UserActivitiesRoutingModule = /*#__PURE__*/_createClass(function UserActivitiesRoutingModule() {
        _classCallCheck(this, UserActivitiesRoutingModule);
      });

      UserActivitiesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserActivitiesRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-activities-user-activities-module-es5.js.map