(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-terms-module"], {
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
    "7ury":
    /*!************************************************************!*\
      !*** ./src/app/common/services/compliance/term.service.ts ***!
      \************************************************************/

    /*! exports provided: TermService */

    /***/
    function ury(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermService", function () {
        return TermService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var TermService = /*#__PURE__*/function () {
        function TermService(http) {
          _classCallCheck(this, TermService);

          this.http = http;
        }

        _createClass(TermService, [{
          key: "create",
          value: function create(term) {
            return this.http.post('/admin/terms', {
              terms: term.terms,
              privacy: term.privacy
            });
          }
        }, {
          key: "getApplicableTerm",
          value: function getApplicableTerm(userId) {
            return userId ? this.getTermsAcceptance(userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (termsAcceptance) {
              return termsAcceptance.term;
            })) : this.http.get("/terms");
          }
        }, {
          key: "getTermsAcceptance",
          value: function getTermsAcceptance(userId) {
            return this.http.get("/users/".concat(userId, "/terms-acceptance"));
          }
        }, {
          key: "accept",
          value: function accept(termsAcceptance) {
            var accepted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return this.http.post("/users/".concat(termsAcceptance.user.id, "/terms-acceptance"), {
              termsAcceptance: {
                id: termsAcceptance.id
              },
              accepted: accepted
            });
          }
        }]);

        return TermService;
      }();

      TermService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      TermService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], TermService);
      /***/
    },

    /***/
    "eIz4":
    /*!******************************************!*\
      !*** ./src/app/terms/terms.component.ts ***!
      \******************************************/

    /*! exports provided: TermsComponent */

    /***/
    function eIz4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsComponent", function () {
        return TermsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_terms_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./terms.component.html */
      "ecxo");
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


      var _common_services_compliance_term_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/services/compliance/term.service */
      "7ury");
      /* harmony import */


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/services/session.service */
      "6g7h");

      var TermsComponent = /*#__PURE__*/function () {
        function TermsComponent(session, termService) {
          _classCallCheck(this, TermsComponent);

          this.session = session;
          this.termService = termService;
          this.isLoading = false;
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        }

        _createClass(TermsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.subscriptions.add(this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              _this.isLoading = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (user) {
              return _this.termService.getApplicableTerm(user.id);
            })).subscribe(function (term) {
              _this.term = term;
              _this.isLoading = false;
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }]);

        return TermsComponent;
      }();

      TermsComponent.ctorParameters = function () {
        return [{
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]
        }, {
          type: _common_services_compliance_term_service__WEBPACK_IMPORTED_MODULE_5__["TermService"]
        }];
      };

      TermsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'terms',
        template: _raw_loader_terms_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TermsComponent);
      /***/
    },

    /***/
    "eLkP":
    /*!***********************************************!*\
      !*** ./src/app/terms/terms-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: TermsRoutingModule */

    /***/
    function eLkP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsRoutingModule", function () {
        return TermsRoutingModule;
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


      var _terms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./terms.component */
      "eIz4");

      var routes = [{
        path: '',
        component: _terms_component__WEBPACK_IMPORTED_MODULE_4__["TermsComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"]]
      }];

      var TermsRoutingModule = /*#__PURE__*/_createClass(function TermsRoutingModule() {
        _classCallCheck(this, TermsRoutingModule);
      });

      TermsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TermsRoutingModule);
      /***/
    },

    /***/
    "eNqe":
    /*!***************************************!*\
      !*** ./src/app/terms/terms.module.ts ***!
      \***************************************/

    /*! exports provided: TermsModule */

    /***/
    function eNqe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsModule", function () {
        return TermsModule;
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


      var _terms_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./terms-routing.module */
      "eLkP");
      /* harmony import */


      var _terms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./terms.component */
      "eIz4");

      var TermsModule = /*#__PURE__*/_createClass(function TermsModule() {
        _classCallCheck(this, TermsModule);
      });

      TermsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_terms_component__WEBPACK_IMPORTED_MODULE_4__["TermsComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _terms_routing_module__WEBPACK_IMPORTED_MODULE_3__["TermsRoutingModule"]]
      })], TermsModule);
      /***/
    },

    /***/
    "ecxo":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/terms/terms.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function ecxo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container pt-page\">\n    <div class=\"row justify-content-between align-items-center pb-2\">\n        <div class=\"col-auto\">\n            <h5 class=\"mb-0\">{{ 'common.terms' | translate }} &amp; {{ 'common.conditions' | translate }}</h5>\n        </div>\n        <div class=\"col-auto d-flex justify-content-end\">\n            <ol class=\"breadcrumb px-0\">\n                <li class=\"breadcrumb-item\">\n                    <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                </li>\n                <li class=\"breadcrumb-item active\">{{ 'common.terms' | translate }} &amp; {{ 'common.conditions' | translate }}</li>\n            </ol>\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"pt-1 pb-3 terms-content-outlet\" [innerHTML]=\"term?.terms | safeHtml\" *ngIf=\"!isLoading; else loadingContent\"></div>\n        </div>\n    </div>\n</div>\n\n<ng-template #loadingContent>\n    <div>\n        <svg class=\"spinner spinner-dark\" viewBox=\"0 0 50 50\">\n            <circle class=\"path\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\"></circle>\n        </svg>\n        <p class=\"mb-0 mt-5 text-center\">{{ 'common.loading-terms-and-conditions' | translate }}</p>\n    </div>\n</ng-template>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=terms-terms-module-es5.js.map