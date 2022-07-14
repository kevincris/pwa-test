(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-services-module"], {
    /***/
    "334H":
    /*!*********************************************!*\
      !*** ./src/app/services/services.module.ts ***!
      \*********************************************/

    /*! exports provided: ServicesModule */

    /***/
    function H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicesModule", function () {
        return ServicesModule;
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

      var routes = [{
        path: '',
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInAuthGuard"]],
        children: [{
          path: 'invoices',
          canActivate: [_common_guards_permission_guard__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]],
          data: {
            permissions: ['invoices']
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | user-invoices-user-invoices-module */
            [__webpack_require__.e("default~admin-admin-module~mailbox-mailbox-module~organization-organization-module~user-invoices-use~5d18fcc7"), __webpack_require__.e("default~admin-admin-module~organization-organization-module~user-invoices-user-invoices-module"), __webpack_require__.e("default~organization-organization-module~user-invoices-user-invoices-module")]).then(__webpack_require__.bind(null,
            /*! ./user-invoices/user-invoices.module */
            "mzZL")).then(function (mod) {
              return mod.UserInvoicesModule;
            });
          }
        }, {
          path: 'conversions',
          canActivate: [_common_guards_permission_guard__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]],
          data: {
            permissions: ['conversions']
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | user-conversions-user-conversions-module */
            [__webpack_require__.e("default~admin-admin-module~deposit-deposit-module~discover-discover-module~organization-organization~bea567be"), __webpack_require__.e("common"), __webpack_require__.e("user-conversions-user-conversions-module")]).then(__webpack_require__.bind(null,
            /*! ./user-conversions/user-conversions.module */
            "W0TQ")).then(function (mod) {
              return mod.UserConversionsModule;
            });
          }
        }]
      }];

      var ServicesModule = /*#__PURE__*/_createClass(function ServicesModule() {
        _classCallCheck(this, ServicesModule);
      });

      ServicesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ServicesModule);
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
    }
  }]);
})();
//# sourceMappingURL=services-services-module-es5.js.map