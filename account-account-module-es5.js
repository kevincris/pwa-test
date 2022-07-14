(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
    /***/
    "/qCo":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-security/two-factor/two-factor.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qCo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"session.userStream | async; let user\">\n    <div *ngIf=\"user.twoFactor\">\n        <div class=\"circle-loader load-complete\">\n            <div class=\"checkmark draw\"></div>\n        </div>\n        <h3 class=\"text-center\">{{ 'two-factor.two-factor-authentication-has-been-enabled' | translate }}</h3>\n    </div>\n    <div *ngIf=\"!user.twoFactor && !twoFactor\">\n        <button\n            type=\"button\"\n            class=\"btn btn-primary btn-w-sm e2e-generate-2fa-secret\"\n            (click)=\"generate2FASecret()\"\n            [ngClass]=\"{ loading: isLoading }\"\n            [disabled]=\"isLoading\"\n        >\n            {{ 'common.enable-2fa' | translate }}\n        </button>\n    </div>\n    <form\n        name=\"twoFactor\"\n        #verificationForm=\"ngForm\"\n        class=\"form-validation\"\n        (ngSubmit)=\"toggleTwoFactorAuth(!user.twoFactor)\"\n        autocomplete=\"false\"\n        novalidate\n        *ngIf=\"(!user.twoFactor && !!twoFactor) || user.twoFactor\"\n    >\n        <div *ngIf=\"!user.twoFactor\">\n            <img [src]=\"twoFactor!.qrCode\" class=\"mx-auto d-block img-thumbnail p-0 mb-2 e2e-2fa-qr\" />\n            <p class=\"text-center e2e-2fa-secret\">\n                {{ 'common.or-enter-this-code' | translate }} <b class=\"text-info\">{{ twoFactor!.secret }}</b>\n            </p>\n            <div class=\"alert alert-info\">\n                {{ 'common.scan-this-code-with-your-auth-app' | translate }}\n            </div>\n        </div>\n        <div *ngIf=\"user.twoFactor\" class=\"callout callout-info bg-white\">\n            {{ 'two-factor.to-disable-two-factor-authentication' | translate }}\n        </div>\n        <div class=\"form-group\" *ngIf=\"!user.twoFactor\">\n            <label for=\"verificationCode\">{{ 'common.verification-code' | translate }}</label>\n            <input type=\"type\" id=\"verificationCode\" name=\"verificationCode\" class=\"form-control\" [(ngModel)]=\"verificationCode\" number />\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary btn-w-sm\" [ngClass]=\"{ loading: isLoading }\" [disabled]=\"isLoading\">\n            <span>{{ (user.twoFactor ? 'common.disable-2fa' : 'common.verify-code') | translate }}</span>\n        </button>\n    </form>\n</ng-container>\n";
      /***/
    },

    /***/
    "0R5k":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/profile/email-form/email-form.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function R5k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form\n    #emailForm=\"ngForm\"\n    class=\"form-validation e2e-email-form\"\n    [ngClass]=\"{ 'ng-submitted': emailForm.submitted }\"\n    (ngSubmit)=\"submit()\"\n    autocomplete=\"false\"\n    novalidate\n>\n    <div class=\"alert alert-{{ alert.severity || 'danger' }} alert-dismissible\" role=\"alert\" *ngFor=\"let alert of alertService.alerts\">\n        <button type=\"button\" class=\"close\" (click)=\"alertService.remove(alert)\">\n            <span>&times;</span>\n        </button>\n        {{ alert.message }}\n    </div>\n    <div class=\"form-group\">\n        <label for=\"email\">{{ 'common.email' | translate }}</label>\n        <input\n            type=\"email\"\n            id=\"email\"\n            name=\"email\"\n            class=\"form-control\"\n            [placeholder]=\"'common.enter-email' | translate\"\n            [(ngModel)]=\"email\"\n            #emailInput=\"ngModel\"\n            email\n            required\n        />\n        <div *ngIf=\"emailInput.invalid && (emailForm.submitted || emailInput.dirty)\" class=\"error-messages\">\n            <div class=\"form-control-feedback\" *ngIf=\"emailInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            <div class=\"form-control-feedback\" *ngIf=\"emailInput?.errors?.email\">{{ 'common.not-a-valid-email-address' | translate }}</div>\n        </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-w-sm\" [ngClass]=\"{ loading: isLoading }\" [disabled]=\"isLoading\">\n        {{ 'common.change-email' | translate }}\n    </button>\n</form>\n";
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
    "7tD/":
    /*!*************************************************************************************************!*\
      !*** ./src/app/account/account-security/change-password-form/change-password-form.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ChangePasswordFormComponent */

    /***/
    function tD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordFormComponent", function () {
        return ChangePasswordFormComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_change_password_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./change-password-form.component.html */
      "OoYq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../common/security-check/security-check.service */
      "i32w");
      /* harmony import */


      var _common_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../common/services/alert.service */
      "0ZVX");
      /* harmony import */


      var _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../common/services/core/user.service */
      "AxWo");
      /* harmony import */


      var _common_services_logout_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../common/services/logout.service */
      "2kWO");
      /* harmony import */


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../common/services/session.service */
      "6g7h");

      var ChangePasswordFormComponent = /*#__PURE__*/function () {
        function ChangePasswordFormComponent(session, securityCheckService, userService, alert, logoutService, translate) {
          _classCallCheck(this, ChangePasswordFormComponent);

          this.session = session;
          this.securityCheckService = securityCheckService;
          this.userService = userService;
          this.alert = alert;
          this.logoutService = logoutService;
          this.translate = translate;
          this.isLoading = false;
          this.requiredPasswordStrength = 60;
          this.passwordStrength = 0;
          this.subcriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        }

        _createClass(ChangePasswordFormComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subcriptions.unsubscribe();
          }
        }, {
          key: "submitSecurityForm",
          value: function submitSecurityForm() {
            var _this = this;

            if (!this.changePasswordForm.valid) {
              return;
            }

            this.subcriptions.add(this.securityCheckService.getScopePermission('securitySettings').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function () {
              _this.isLoading = true;
              return _this.userService.changePassword(_this.session.user.id, _this.password);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this.isLoading = false;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
              // the refreshtoken is invalidated on password change
              _this.session.refreshToken = undefined;

              _this.alert.add({
                message: _this.translate.instant('common.your-password-has-been-successfully-changed'),
                severity: 'success'
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function () {
              return _this.logoutService.logout();
            })).subscribe());
          }
        }]);

        return ChangePasswordFormComponent;
      }();

      ChangePasswordFormComponent.ctorParameters = function () {
        return [{
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]
        }, {
          type: _common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_6__["SecurityCheckService"]
        }, {
          type: _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }, {
          type: _common_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: _common_services_logout_service__WEBPACK_IMPORTED_MODULE_9__["LogoutService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }];
      };

      ChangePasswordFormComponent.propDecorators = {
        changePasswordForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['changePasswordForm']
        }]
      };
      ChangePasswordFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'change-password-form',
        template: _raw_loader_change_password_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ChangePasswordFormComponent);
      /***/
    },

    /***/
    "ACGU":
    /*!************************************************************************!*\
      !*** ./src/app/account/account-security/account-security.component.ts ***!
      \************************************************************************/

    /*! exports provided: AccountSecurityComponent */

    /***/
    function ACGU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountSecurityComponent", function () {
        return AccountSecurityComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_account_security_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./account-security.component.html */
      "qw5i");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/pro-light-svg-icons */
      "WE53");
      /* harmony import */


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../common/services/session.service */
      "6g7h");

      var AccountSecurityComponent = /*#__PURE__*/_createClass(function AccountSecurityComponent(session) {
        _classCallCheck(this, AccountSecurityComponent);

        this.session = session;
        this.faLockAlt = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLockAlt"];
        this.faShieldAlt = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShieldAlt"];
        this.faMobile = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMobile"];
        this.faUsers = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUsers"];
        this.faKey = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faKey"];
      });

      AccountSecurityComponent.ctorParameters = function () {
        return [{
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
        }];
      };

      AccountSecurityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'account-security',
        template: _raw_loader_account_security_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AccountSecurityComponent);
      /***/
    },

    /***/
    "HL7Y":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/profile/profile.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function HL7Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container pt-page\">\n    <div class=\"row justify-content-between align-items-center pb-3\">\n        <div class=\"col-auto\">\n            <h5 class=\"mb-0\">{{ 'common.profile' | translate }}</h5>\n        </div>\n        <div class=\"col-auto d-flex justify-content-end\">\n            <ol class=\"breadcrumb px-0\">\n                <li class=\"breadcrumb-item\">\n                    <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                </li>\n                <li class=\"breadcrumb-item active\">{{ 'common.profile' | translate }}</li>\n            </ol>\n        </div>\n    </div>\n</div>\n<div class=\"container pb-4\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"headline\">{{ 'common.email-address' | translate }}</div>\n            <div class=\"row e2e-email-section\">\n                <div class=\"col-lg-9\">\n                    <div class=\"media media-info pr-2\">\n                        <fa-icon class=\"d-none d-lg-flex mr-3 mt-1\" [icon]=\"faEnvelope\"></fa-icon>\n                        <div class=\"media-body pt-0\">\n                            <h6 class=\"mt-0\">{{ 'common.change-email' | translate }}</h6>\n                            <p>{{ 'profile.you-have-to-confirm-your-new-email-address' | translate }}</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-15\">\n                    <div class=\"form-block max-width-md\">\n                        <email-form *ngIf=\"user\" [user]=\"user\"></email-form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"headline\">{{ 'common.preferred-currency' | translate }}</div>\n            <div class=\"row e2e-currency-section\">\n                <div class=\"col-lg-9\">\n                    <div class=\"media media-info pr-2\">\n                        <fa-icon class=\"d-none d-lg-flex mr-3 mt-1\" [icon]=\"faCoin\"></fa-icon>\n                        <div class=\"media-body pt-0\">\n                            <p>{{ 'profile.preselect-your-balance' | translate }}</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-15\">\n                    <div class=\"form-block max-width-md\">\n                        <div class=\"form-group\">\n                            <label for=\"currency\">{{ 'common.preferred-currency' | translate }}</label>\n                            <ng-select\n                                [items]=\"currencies$ | async\"\n                                [placeholder]=\"'common.select-currency' | translate\"\n                                name=\"currency\"\n                                id=\"currency\"\n                                [clearable]=\"false\"\n                                [ngModel]=\"preferredCurrency$ | async\"\n                                (ngModelChange)=\"changePreferredCurrency($event)\"\n                                required\n                            >\n                                <ng-template ng-label-tmp let-item=\"item\"> {{ item.code }} - {{ item.name }} </ng-template>\n                                <ng-template ng-option-tmp let-item=\"item\"> {{ item.code }} - {{ item.name }} </ng-template>\n                            </ng-select>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"headline\">{{ 'common.information' | translate }}</div>\n            <div class=\"row e2e-information-section\">\n                <div class=\"col-lg-9\">\n                    <div class=\"media media-info pr-2\">\n                        <fa-icon class=\"d-none d-lg-flex mr-3 mt-1\" [icon]=\"faUserCheck\"></fa-icon>\n                        <div class=\"media-body pt-0\">\n                            <h6 class=\"mt-0\">{{ 'profile.update-details' | translate }}</h6>\n                            <p>{{ 'profile.to-update-any-of-your-account-details' | translate }}</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-15\">\n                    <div class=\"form-block max-width-md\" *ngIf=\"user\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">{{ 'common.name' | translate }}</label>\n                            <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" [value]=\"user.name\" disabled />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"phoneNumber\">{{ 'common.phone-number' | translate }}</label>\n                            <input\n                                type=\"text\"\n                                id=\"phoneNumber\"\n                                name=\"phoneNumber\"\n                                class=\"form-control\"\n                                [value]=\"user.phoneNumber ? toCountryCallingCode(user.phoneCountryCode!) + ' ' + user.phoneNumber : '-'\"\n                                disabled\n                            />\n                        </div>\n                        <div class=\"form-group\">\n                            <label>{{ 'common.address' | translate }}</label>\n                            <postal-address [address]=\"user.address\" theme=\"input\"></postal-address>\n                        </div>\n                        <button\n                            type=\"button\"\n                            class=\"btn btn-primary\"\n                            (click)=\"\n                                user.approvedAt\n                                    ? intercom.startConversation(translate.instant('common.update-my-personal-profile-details'))\n                                    : goToVerification()\n                            \"\n                        >\n                            {{ 'profile.update-details' | translate }}\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"headline\">{{ 'common.avatar' | translate }}</div>\n            <div class=\"row e2e-avatar-section\">\n                <div class=\"col-lg-9\">\n                    <div class=\"media media-info pr-2\">\n                        <fa-icon class=\"d-none d-lg-flex mr-3 mt-1\" [icon]=\"faImage\"></fa-icon>\n                        <div class=\"media-body pt-0\">\n                            <h6 class=\"mt-0\">{{ 'profile.upload-avatar' | translate }}</h6>\n                            <p>\n                                {{ 'common.when-not-providing-an-avatar' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-15\">\n                    <div class=\"form-block max-width-md\">\n                        <user-avatar [user]=\"user\" size=\"xl\" elementClass=\"d-block mb-2\"></user-avatar>\n                        <button\n                            type=\"button\"\n                            class=\"btn btn-primary mr-1 e2e-upload-avatar\"\n                            ngfSelect\n                            (fileChange)=\"!avatarUploading && uploadAvatar($event)\"\n                            [fileDropDisabled]=\"!user?.id\"\n                            [disabled]=\"avatarUploading\"\n                            [ngClass]=\"{ loading: avatarUploading }\"\n                        >\n                            {{ 'profile.choose-file' | translate }}\n                        </button>\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteAvatar()\" [disabled]=\"avatarUploading\" *ngIf=\"!!user?.avatar?.id\">\n                            {{ 'profile.remove-avatar' | translate }}\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"headline\">{{ 'common.notifications' | translate }}</div>\n            <div class=\"row e2e-notifications-section\">\n                <div class=\"col-lg-9\">\n                    <div class=\"media media-info pr-2\">\n                        <fa-icon class=\"d-none d-lg-flex mr-3 mt-1\" [icon]=\"faEnvelope\"></fa-icon>\n                        <div class=\"media-body pt-0\">\n                            <h6 class=\"mt-0\">{{ 'profile.receive-notifications' | translate }}</h6>\n                            <p>\n                                {{ 'common.receive-email-notifications-on-various-activities' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-15\">\n                    <div class=\"form-block max-width-md\">\n                        <div *ngIf=\"user\" class=\"custom-controls-stacked\">\n                            <label class=\"custom-control custom-checkbox\">\n                                <input\n                                    type=\"checkbox\"\n                                    class=\"custom-control-input\"\n                                    name=\"sendEmailNotifications\"\n                                    [(ngModel)]=\"user.sendEmailNotifications\"\n                                    (ngModelChange)=\"updateEmailNotifications()\"\n                                    [disabled]=\"isEmailNotificationsUpdating\"\n                                />\n                                <span class=\"custom-control-label font-md\"> {{ 'common.receive-email-notifications' | translate }} </span>\n                            </label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <ng-container>\n                <div class=\"headline\">{{ 'profile.close-account' | translate }}</div>\n                <div class=\"row e2e-close-account-section\">\n                    <div class=\"col-lg-9\">\n                        <div class=\"media media-info pr-2\">\n                            <fa-icon class=\"d-none d-lg-flex mr-3 mt-1\" [icon]=\"faExclamationTriangle\"></fa-icon>\n                            <div class=\"media-body pt-0\">\n                                <h6 class=\"mt-0\">{{ 'common.important-notice' | translate }}</h6>\n                                <p>{{ 'common.write-us-a-message-if-you-wish' | translate }}</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-15\">\n                        <div class=\"form-block max-width-md\">\n                            <button\n                                type=\"button\"\n                                class=\"btn btn-danger\"\n                                (click)=\"intercom.startConversation(translate.instant('common.i-would-like-to-close-my-account'))\"\n                            >\n                                {{ 'profile.request-account-closing' | translate }}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "HTKs":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-security/api-tokens/api-tokens.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HTKs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"session.userStream | async; let user\">\n    <ng-container *ngIf=\"user.twoFactor; else noAccess\">\n        <div class=\"d-flex justify-content-end mb-3\">\n            <ngb-pagination\n                [(page)]=\"page\"\n                [collectionSize]=\"count\"\n                (pageChange)=\"select()\"\n                [pageSize]=\"limit\"\n                [maxSize]=\"5\"\n                [ellipses]=\"false\"\n                [rotate]=\"true\"\n                [boundaryLinks]=\"true\"\n            >\n            </ngb-pagination>\n        </div>\n        <div class=\"table-responsive\">\n            <table class=\"table table-hover table-bordered table-data\">\n                <thead class=\"thead-light\">\n                    <tr>\n                        <th scope=\"col\">{{ 'common.public-key' | translate }}</th>\n                        <th scope=\"col\">{{ 'common.created-at' | translate | titlecase }}</th>\n                        <th scope=\"col\"></th>\n                    </tr>\n                </thead>\n                <tbody class=\"bg-white\">\n                    <ng-container *ngIf=\"itemsStream | async; let items\">\n                        <tr *ngFor=\"let apiToken of items\">\n                            <th scope=\"row\">\n                                {{ apiToken.publicKey }}\n                            </th>\n                            <td scope=\"row\">{{ apiToken.createdAt | date: 'medium' }}</td>\n                            <td class=\"action\">\n                                <a href class=\"btn btn-danger-air btn-sm\" (click)=\"revoke(apiToken); $event.preventDefault()\">{{\n                                    'common.revoke' | translate\n                                }}</a>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"items.length === 0\">\n                            <td colspan=\"3\" class=\"text-center\">{{ 'common.no-entries-found' | translate }}</td>\n                        </tr>\n                    </ng-container>\n                </tbody>\n            </table>\n        </div>\n        <button class=\"btn btn-primary\" [ngClass]=\"{ loading: isLoading }\" (click)=\"generate()\">{{ 'common.generate' | translate }}</button>\n    </ng-container>\n</ng-container>\n<ng-template #noAccess>\n    <div class=\"text-center\">\n        <h4 class=\"m-0\">{{ 'common.you-dont-have-access-to-this-feature' | translate }}</h4>\n        <img src=\"/img/icons/lock.svg\" class=\"img-sm my-3\" />\n        <p class=\"text-body\">{{ 'common.please-enable-2fa-to-access-this-feature' | translate }}</p>\n    </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "OoYq":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-security/change-password-form/change-password-form.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OoYq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form\n    #changePasswordForm=\"ngForm\"\n    class=\"form-validation\"\n    [ngClass]=\"{ 'ng-submitted': changePasswordForm.submitted }\"\n    (ngSubmit)=\"submitSecurityForm()\"\n    novalidate\n>\n    <div class=\"form-group\">\n        <label for=\"password\">{{ 'change-password-form.new-password' | translate }}</label>\n        <input\n            type=\"password\"\n            id=\"password\"\n            name=\"password\"\n            class=\"form-control\"\n            [(ngModel)]=\"password\"\n            #passwordInput=\"ngModel\"\n            [passwordStrength]=\"requiredPasswordStrength\"\n            (onEntropyChange)=\"passwordStrength = $event\"\n            autocomplete=\"off\"\n            required\n        />\n        <div class=\"mt-2\">\n            <password-strength-bar [requiredStrength]=\"requiredPasswordStrength\" [strength]=\"passwordStrength\"></password-strength-bar>\n        </div>\n        <div *ngIf=\"passwordInput.invalid && (changePasswordForm.submitted || passwordInput.dirty)\" class=\"error-messages\">\n            <div class=\"form-control-feedback\" *ngIf=\"passwordInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            <div class=\"form-control-feedback\" *ngIf=\"passwordInput?.errors?.weakPassword\">{{ 'common.password-is-too-weak' | translate }}</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"repeatedPassword\">{{ 'change-password-form.repeat-password' | translate }}</label>\n        <input\n            type=\"password\"\n            id=\"repeatedPassword\"\n            name=\"repeatedPassword\"\n            class=\"form-control\"\n            [(ngModel)]=\"repeatedPassword\"\n            #repeatedPasswordInput=\"ngModel\"\n            [matchPassword]=\"password\"\n            autocomplete=\"off\"\n            required\n        />\n        <div *ngIf=\"repeatedPasswordInput.invalid && (changePasswordForm.submitted || repeatedPasswordInput.dirty)\" class=\"error-messages\">\n            <div class=\"form-control-feedback\" *ngIf=\"repeatedPasswordInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            <div class=\"form-control-feedback\" *ngIf=\"repeatedPasswordInput?.errors?.matchPassword\">\n                {{ 'common.password-do-not-match' | translate }}\n            </div>\n        </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-w-sm\" [ngClass]=\"{ loading: isLoading }\" [disabled]=\"isLoading\">\n        {{ 'common.change-password' | translate }}\n    </button>\n</form>\n";
      /***/
    },

    /***/
    "Q8y0":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-security/logout-all/logout-all.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Q8y0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button class=\"btn btn-danger\" (click)=\"logoutAllDevices()\" [ngClass]=\"{ loading: isLoading }\" [disabled]=\"isLoading\">\n    {{ 'logout-all.logged-out-from-all-devices' | translate }}\n</button>\n";
      /***/
    },

    /***/
    "VGXk":
    /*!*****************************************************************************!*\
      !*** ./src/app/account/account-security/two-factor/two-factor.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: TwoFactorComponent */

    /***/
    function VGXk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TwoFactorComponent", function () {
        return TwoFactorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_two_factor_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./two-factor.component.html */
      "/qCo");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../common/security-check/security-check.service */
      "i32w");
      /* harmony import */


      var _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../common/services/core/user.service */
      "AxWo");
      /* harmony import */


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../common/services/session.service */
      "6g7h");
      /* harmony import */


      var _common_services_token_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../common/services/token.service */
      "JdTs");

      var TwoFactorComponent = /*#__PURE__*/function () {
        function TwoFactorComponent(session, http, securityCheckService, tokenService, userService) {
          _classCallCheck(this, TwoFactorComponent);

          this.session = session;
          this.http = http;
          this.securityCheckService = securityCheckService;
          this.tokenService = tokenService;
          this.userService = userService;
          this.isLoading = false;
          this.subcriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        }

        _createClass(TwoFactorComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subcriptions.unsubscribe();
          }
        }, {
          key: "generate2FASecret",
          value: function generate2FASecret() {
            var _this2 = this;

            this.subcriptions.add(this.securityCheckService.getScopePermission('securitySettings').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
              _this2.isLoading = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function () {
              return _this2.http.post("/users/".concat(_this2.session.user.id), {
                id: Math.floor(Math.random() * 10000),
                jsonrpc: '2.0',
                method: 'generate2FASecret'
              }, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                  'Content-Type': 'application/json-rpc'
                })
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this2.isLoading = false;
            })).subscribe(function (response) {
              _this2.twoFactor = response.result;
            }));
          }
        }, {
          key: "toggleTwoFactorAuth",
          value: function toggleTwoFactorAuth(status) {
            var _this3 = this;

            this.subcriptions.add(this.securityCheckService.getScopePermission('securitySettings').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
              _this3.isLoading = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function () {
              var _a;

              return _this3.userService.changeTwoFactor(_this3.session.user.id, status, _this3.verificationCode ? {
                'X-2FA-Code': (_a = _this3.verificationCode) === null || _a === void 0 ? void 0 : _a.toString()
              } : {});
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function () {
              return _this3.tokenService.refresh();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this3.isLoading = false;
            })).subscribe(function () {
              _this3.verificationCode = null;
              _this3.twoFactor = null;
            }));
          }
        }]);

        return TwoFactorComponent;
      }();

      TwoFactorComponent.ctorParameters = function () {
        return [{
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_6__["SecurityCheckService"]
        }, {
          type: _common_services_token_service__WEBPACK_IMPORTED_MODULE_9__["TokenService"]
        }, {
          type: _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }];
      };

      TwoFactorComponent.propDecorators = {
        verificationForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['verificationForm']
        }]
      };
      TwoFactorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'two-factor',
        template: _raw_loader_two_factor_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TwoFactorComponent);
      /***/
    },

    /***/
    "aYPB":
    /*!*********************************************************************!*\
      !*** ./src/app/account/account-billing/account-billing.resolver.ts ***!
      \*********************************************************************/

    /*! exports provided: AccountBillingResolver */

    /***/
    function aYPB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountBillingResolver", function () {
        return AccountBillingResolver;
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
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _common_services_account_billing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../common/services/account-billing.service */
      "syFb");
      /* harmony import */


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../common/services/session.service */
      "6g7h");

      var AccountBillingResolver = /*#__PURE__*/function () {
        function AccountBillingResolver(accountBills, session) {
          _classCallCheck(this, AccountBillingResolver);

          this.accountBills = accountBills;
          this.session = session;
        }

        _createClass(AccountBillingResolver, [{
          key: "resolve",
          value: function resolve() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([this.accountBills.fetchAccountBills(this.session.user.id), this.accountBills.fetchBillingCurrency(this.session.user.id)]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
              return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  payments = _ref2[0],
                  billingCurrency = _ref2[1];

              return {
                payments: payments,
                billingCurrency: billingCurrency
              };
            }));
          }
        }]);

        return AccountBillingResolver;
      }();

      AccountBillingResolver.ctorParameters = function () {
        return [{
          type: _common_services_account_billing_service__WEBPACK_IMPORTED_MODULE_4__["AccountBillsService"]
        }, {
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]
        }];
      };

      AccountBillingResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AccountBillingResolver);
      /***/
    },

    /***/
    "cFsQ":
    /*!*****************************************************************************!*\
      !*** ./src/app/account/account-security/api-tokens/api-tokens.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ApiTokensComponent */

    /***/
    function cFsQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiTokensComponent", function () {
        return ApiTokensComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_api_tokens_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./api-tokens.component.html */
      "HTKs");
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_common_list_v2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/common/list-v2.component */
      "qhtW");
      /* harmony import */


      var src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/common/services/confirmation.service */
      "fTmd");
      /* harmony import */


      var src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/common/services/session.service */
      "6g7h");
      /* harmony import */


      var src_app_common_services_toastr_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/common/services/toastr.service */
      "N/y2");

      var ApiTokensComponent = /*#__PURE__*/function (_src_app_common_list_) {
        _inherits(ApiTokensComponent, _src_app_common_list_);

        var _super = _createSuper(ApiTokensComponent);

        function ApiTokensComponent(http, ngbModal, changeDetector, route, router, session, toastr, confirmation, translate) {
          var _this4;

          _classCallCheck(this, ApiTokensComponent);

          _this4 = _super.call(this, http, ngbModal, changeDetector, route, router, session);
          _this4.toastr = toastr;
          _this4.confirmation = confirmation;
          _this4.translate = translate;
          _this4.defaultLimit = 5;
          _this4.isLoading = false;
          return _this4;
        }

        _createClass(ApiTokensComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.apiUrl = "/users/".concat(this.session.user.id, "/api-tokens");

            _get(_getPrototypeOf(ApiTokensComponent.prototype), "ngOnInit", this).call(this);
          }
        }, {
          key: "generate",
          value: function generate() {
            var _this5 = this;

            this.isLoading = true;
            this.subscriptions.add(this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])(function (user) {
              return _this5.http.post("/api-tokens", {
                userId: user.id
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this5.isLoading = false;
            })).subscribe(function (apiToken) {
              _this5.toastr.success(_this5.translate.instant('api-tokens.api-token-generated'));

              _this5.updateEvent.next();

              _this5.confirmation.show({
                type: 'warning',
                title: _this5.translate.instant('common.important'),
                text: "\n                        ".concat(_this5.translate.instant('common.please-keep-this-private-key'), "\n                        <br>\n                        <b>").concat(apiToken.privateKey, "</b>\n                        <br>").concat(_this5.translate.instant('common.this-cannot-be-retrieved-once-lost'), "\n                    "),
                confirmText: 'Understood',
                showCancel: false
              }).subscribe();
            }));
          }
        }, {
          key: "revoke",
          value: function revoke(apiToken) {
            var _this6 = this;

            this.subscriptions.add(this.confirmation.show({
              type: 'danger',
              title: this.translate.instant('common.revoke-api-token'),
              text: "".concat(this.translate.instant('common.are-you-sure-want-to-revoke-this-token'), " <b>").concat(this.translate.instant('common.it-cannot-be-undone'), "<b>"),
              confirmText: this.translate.instant('common.revoke'),
              confirmClass: 'danger',
              showCancel: false
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (result) {
              return result === src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmationResult"].CONFIRMED;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])(function () {
              return _this6.http["delete"]("/api-tokens/".concat(apiToken.publicKey));
            })).subscribe(function () {
              _this6.toastr.success(_this6.translate.instant('common.api-token-revoked'));

              _this6.updateEvent.next();
            }));
          }
        }]);

        return ApiTokensComponent;
      }(src_app_common_list_v2_component__WEBPACK_IMPORTED_MODULE_8__["ListV2Component"]);

      ApiTokensComponent.ctorParameters = function () {
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
          type: src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]
        }, {
          type: src_app_common_services_toastr_service__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]
        }, {
          type: src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmationService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }];
      };

      ApiTokensComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'api-tokens',
        template: _raw_loader_api_tokens_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ApiTokensComponent);
      /***/
    },

    /***/
    "dgJ/":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-billing/account-billing.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dgJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container pt-page\">\n    <div class=\"row justify-content-between align-items-center pb-3\">\n        <div class=\"col-auto\">\n            <h5 class=\"mb-0\">{{ 'common.billing' | translate }}</h5>\n        </div>\n        <div class=\"col-auto d-flex justify-content-end\">\n            <ol class=\"breadcrumb px-0\">\n                <li class=\"breadcrumb-item\">\n                    <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                </li>\n                <li class=\"breadcrumb-item active\">{{ 'common.billing' | translate }}</li>\n            </ol>\n        </div>\n    </div>\n</div>\n<ng-container *ngIf=\"session.userStream | async; let user\">\n    <div class=\"container pb-4 e2e-account-billing\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"headline\">{{ 'account-billing.account-billing' | translate }}</div>\n                <div class=\"row\">\n                    <div class=\"col-lg-9\">\n                        <div class=\"media media-info pr-2\">\n                            <div class=\"media-body pt-0\">\n                                <h6 class=\"mt-0\">{{ 'common.payment' | translate }}</h6>\n                                <p>{{ 'account-billing.manage-account-fee-payments' | translate }}</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-15\">\n                        <table class=\"table\">\n                            <tr>\n                                <td class=\"b-t-0\">{{ 'account-billing.next-payment-amount' | translate }}</td>\n                                <td class=\"b-t-0\">\n                                    <b\n                                        ><fee-preview\n                                            [currency]=\"billingCurrency\"\n                                            [type]=\"'account-fee'\"\n                                            [method]=\"'internal'\"\n                                            [amount]=\"'0.0'\"\n                                            [prefix]=\"true\"\n                                        ></fee-preview\n                                    ></b>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{ 'account-billing.next-payment-due' | translate }}</td>\n                                <td>\n                                    <b>{{ !!session.user.approvedAt ? (nextPaymentDue | date: 'mediumDate') : '-' }}</b>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{ 'account-billing.billing-currency' | translate }}</td>\n                                <td>\n                                    <currency-select\n                                        [currencyTypes]=\"['fiat', 'crypto']\"\n                                        [(currency)]=\"billingCurrency\"\n                                        [user]=\"user\"\n                                        (currencyChange)=\"billingCurrencyChange.next($event)\"\n                                    ></currency-select>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n                <div class=\"headline\">{{ 'account-billing.previous-statements' | translate }}</div>\n                <table class=\"table mb-0 account-bills-table\" *ngIf=\"payments.length > 0; else noEntries\">\n                    <thead>\n                        <tr>\n                            <th>\n                                <b>{{ 'common.id' | translate }}</b>\n                            </th>\n                            <th>\n                                <b>{{ 'common.date' | translate }}</b>\n                            </th>\n                            <th>\n                                <b>{{ 'common.amount' | translate }}</b>\n                            </th>\n                            <th>\n                                <b>{{ 'common.settled-amount' | translate }}</b>\n                            </th>\n                            <th>\n                                <b>{{ 'common.receipt' | translate }}</b>\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr\n                            *ngFor=\"let payment of payments\"\n                            class=\"e2e-account-bill\"\n                            [ngClass]=\"{ 'table-danger': determineStatus(payment) === 'unpaid' }\"\n                        >\n                            <td\n                                [ngClass]=\"{\n                                    'text-danger': determineStatus(payment) === 'unpaid',\n                                    'text-monospace': determineStatus(payment) !== 'unpaid'\n                                }\"\n                            >\n                                {{ determineStatus(payment) !== 'unpaid' ? (payment.id | truncate: false:8:'') : 'Outstanding' }}\n                            </td>\n                            <td>{{ payment.invoiceDate | date: 'mediumDate' }}</td>\n                            <td>\n                                <b *ngIf=\"determineStatus(payment) !== 'free'; else freeCharge\"\n                                    >{{ payment.amount | amount: payment.currency.decimalPlaces }} {{ payment.currency.code }}</b\n                                >\n                            </td>\n                            <td>\n                                <span class=\"font-weight-bold\" *ngIf=\"determineStatus(payment) === 'paid'; else unsettled\">\n                                    {{ payment.transaction.fixedFee | amount: payment.transaction.currency.decimalPlaces }}\n                                    {{ payment.transaction.currency.code }}</span\n                                >\n                                <ng-template #unsettled>\n                                    <span *ngIf=\"determineStatus(payment) === 'unpaid'; else freeCharge\" class=\"text-muted\">{{\n                                        'common.unpaid' | translate\n                                    }}</span>\n                                </ng-template>\n                            </td>\n                            <td>\n                                <a\n                                    href\n                                    (click)=\"payment.invoice && openInvoiceModal(payment); $event.preventDefault()\"\n                                    [ngClass]=\"{ 'text-muted': !payment.invoice }\"\n                                    [ngbTooltip]=\"!payment.invoice ? 'Not available' : undefined\"\n                                    >{{ 'common.download' | translate }}</a\n                                >\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <ng-template #noEntries>\n                    <div class=\"row\">\n                        <div class=\"col d-flex justify-content-center align-items-center h-100\">\n                            <div class=\"px-sm-3 w-100 max-width-sm text-center mb-0\">\n                                <img src=\"/img/icons/refresh.svg\" class=\"img-sm mb-2\" />\n                                <h4 class=\"mb-1\">{{ 'common.no-previous-bills' | translate }}</h4>\n                                <p class=\"mb-0 text-gray\">{{ 'common.account-bills-are-charged-per-month' | translate }}</p>\n                            </div>\n                        </div>\n                    </div>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</ng-container>\n\n<ng-template #freeCharge>\n    <b class=\"text-success text-uppercase\">{{ 'common.free' | translate }}</b>\n</ng-template>\n";
      /***/
    },

    /***/
    "heGf":
    /*!**********************************************!*\
      !*** ./src/app/account/account.component.ts ***!
      \**********************************************/

    /*! exports provided: AccountComponent */

    /***/
    function heGf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
        return AccountComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AccountComponent = /*#__PURE__*/_createClass(function AccountComponent() {
        _classCallCheck(this, AccountComponent);
      });

      AccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'account',
        template: '<router-outlet></router-outlet>'
      })], AccountComponent);
      /***/
    },

    /***/
    "i32w":
    /*!*****************************************************************!*\
      !*** ./src/app/common/security-check/security-check.service.ts ***!
      \*****************************************************************/

    /*! exports provided: SecurityCheckService */

    /***/
    function i32w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SecurityCheckService", function () {
        return SecurityCheckService;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/session.service */
      "6g7h");
      /* harmony import */


      var _confirm_password_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./confirm-password.modal */
      "iO5V");

      var SecurityCheckService = /*#__PURE__*/function () {
        function SecurityCheckService(ngbModal, session) {
          _classCallCheck(this, SecurityCheckService);

          this.ngbModal = ngbModal;
          this.session = session;
        }
        /**
         * Asks the user for permission to do something that requires a higher scope than basic
         * Resolves if the check was successful or the permission is still granted from another request
         * @param scope The required scope
         */


        _createClass(SecurityCheckService, [{
          key: "getScopePermission",
          value: function getScopePermission(scope) {
            // Resolve if token has already the correct scope
            if (this.session.hasTokenScope(scope)) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(undefined);
            }

            var modal = this.ngbModal.open(_confirm_password_modal__WEBPACK_IMPORTED_MODULE_5__["ConfirmPasswordModalComponent"], {
              windowClass: 'modal-primary security-check-modal'
            });
            modal.componentInstance.scope = scope;
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
              modal.result.then(function () {
                observer.next();
                observer.complete();
              })["catch"](function () {
                observer.complete();
              });
            });
          }
        }]);

        return SecurityCheckService;
      }();

      SecurityCheckService.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }, {
          type: _services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
        }];
      };

      SecurityCheckService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SecurityCheckService);
      /***/
    },

    /***/
    "jEA1":
    /*!******************************************************!*\
      !*** ./src/app/account/profile/profile.component.ts ***!
      \******************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function jEA1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.component.html */
      "HL7Y");
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


      var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fortawesome/pro-regular-svg-icons */
      "uB96");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _common_common_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../common/common.mixin */
      "s/H0");
      /* harmony import */


      var _common_services_avatar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../common/services/avatar.service */
      "tYXW");
      /* harmony import */


      var _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../common/services/core/user.service */
      "AxWo");
      /* harmony import */


      var _common_services_intercom_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../common/services/intercom.service */
      "rSOl");
      /* harmony import */


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../common/services/session.service */
      "6g7h");
      /* harmony import */


      var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../common/services/toastr.service */
      "N/y2");
      /* harmony import */


      var _common_services_token_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../common/services/token.service */
      "JdTs");
      /* harmony import */


      var _store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../store/currencies/currencies.query */
      "4pv/");

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(http, toastr, userService, token, avatar, router, intercom, session, currenciesQuery, tokenService, translate) {
          _classCallCheck(this, ProfileComponent);

          this.http = http;
          this.toastr = toastr;
          this.userService = userService;
          this.token = token;
          this.avatar = avatar;
          this.router = router;
          this.intercom = intercom;
          this.session = session;
          this.currenciesQuery = currenciesQuery;
          this.tokenService = tokenService;
          this.translate = translate;
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
          this.fetchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
          this.isLoading = false;
          this.isUploading = false;
          this.avatarUploading = false;
          this.isEmailNotificationsUpdating = false;
          this.toCountryCallingCode = _common_common_mixin__WEBPACK_IMPORTED_MODULE_10__["toCountryCallingCode"];
          this.faCoin = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCoin"];
          this.faExclamationCircle = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faExclamationCircle"];
          this.faEnvelope = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEnvelope"];
          this.faUserCheck = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faUserCheck"];
          this.faFileAlt = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFileAlt"];
          this.faImage = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faImage"];
          this.faInfoCircle = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faInfoCircle"];
          this.faExclamationTriangle = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faExclamationTriangle"];
          this.faUniversity = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faUniversity"];
          this.faBell = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBell"];
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.preferredCurrency$ = this.currenciesQuery.preferredCurrency$;
            this.currencies$ = this.currenciesQuery.selectAll({
              filterBy: function filterBy(currency) {
                return ['fiat', 'crypto'].includes(currency.type);
              }
            });
            this.subscriptions.add( // todo: might need a reloader here?
            this.fetchEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function () {
              return _this7.http.get("/users/".concat(_this7.session.user.id));
            })).subscribe(function (user) {
              _this7.user = user;
            }));
            this.fetchEvent.next();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "goToVerification",
          value: function goToVerification() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.router.navigate(['/verify']);

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "uploadAvatar",
          value: function uploadAvatar(avatar) {
            var _this8 = this;

            this.avatarUploading = true;
            this.http.request('POST', "/users/".concat(this.user.id, "/avatar"), {
              body: avatar,
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'X-File-Name': encodeURIComponent(avatar.name),
                'Content-Type': avatar.type
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(function () {
              return _this8.token.refresh();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this8.avatarUploading = false;
            })).subscribe(function () {
              _this8.avatar.reload();

              _this8.fetchEvent.next();

              _this8.toastr.success(_this8.translate.instant('profile.avatar-updated'));
            });
          }
        }, {
          key: "deleteAvatar",
          value: function deleteAvatar() {
            var _this9 = this;

            this.http["delete"]("/users/".concat(this.user.id, "/avatar")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(function () {
              return _this9.token.refresh();
            })).subscribe(function () {
              _this9.avatar.reload();

              _this9.fetchEvent.next();
            });
          }
        }, {
          key: "updateEmailNotifications",
          value: function updateEmailNotifications() {
            var _this10 = this;

            var previousState = !this.user.sendEmailNotifications;
            this.isEmailNotificationsUpdating = true;
            this.subscriptions.add(this.userService.changeSendEmailNotifications(this.user.id, this.user.sendEmailNotifications).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this10.isEmailNotificationsUpdating = false;
            })).subscribe(function () {
              _this10.fetchEvent.next();

              _this10.toastr.success(_this10.translate.instant('common.email-notifications-updated'));
            }, function () {
              _this10.user.sendEmailNotifications = previousState;
            }));
          }
        }, {
          key: "changePreferredCurrency",
          value: function changePreferredCurrency(currency) {
            var _this11 = this;

            this.subscriptions.add(this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (user) {
              return user.preferredCurrency.code !== currency.code;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (user) {
              return _this11.userService.changePreferredCurrency(user.id, currency);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(function () {
              return _this11.tokenService.refresh();
            })).subscribe(function () {
              _this11.toastr.success(_this11.translate.instant('common.preferred-currency-changed'));
            }));
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_15__["ToastrService"]
        }, {
          type: _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]
        }, {
          type: _common_services_token_service__WEBPACK_IMPORTED_MODULE_16__["TokenService"]
        }, {
          type: _common_services_avatar_service__WEBPACK_IMPORTED_MODULE_11__["AvatarService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _common_services_intercom_service__WEBPACK_IMPORTED_MODULE_13__["IntercomService"]
        }, {
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_14__["SessionService"]
        }, {
          type: _store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_17__["CurrenciesQuery"]
        }, {
          type: _common_services_token_service__WEBPACK_IMPORTED_MODULE_16__["TokenService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }];
      };

      ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ProfileComponent);
      /***/
    },

    /***/
    "jcJX":
    /*!*******************************************!*\
      !*** ./src/app/account/account.module.ts ***!
      \*******************************************/

    /*! exports provided: AccountModule */

    /***/
    function jcJX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountModule", function () {
        return AccountModule;
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


      var _account_billing_account_billing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./account-billing/account-billing.component */
      "y2dp");
      /* harmony import */


      var _account_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./account-routing.module */
      "sGj0");
      /* harmony import */


      var _account_security_account_security_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./account-security/account-security.component */
      "ACGU");
      /* harmony import */


      var _account_security_api_tokens_api_tokens_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./account-security/api-tokens/api-tokens.component */
      "cFsQ");
      /* harmony import */


      var _account_security_change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./account-security/change-password-form/change-password-form.component */
      "7tD/");
      /* harmony import */


      var _account_security_logout_all_logout_all_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./account-security/logout-all/logout-all.component */
      "ncyD");
      /* harmony import */


      var _account_security_two_factor_two_factor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./account-security/two-factor/two-factor.component */
      "VGXk");
      /* harmony import */


      var _account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./account.component */
      "heGf");
      /* harmony import */


      var _profile_email_form_email_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./profile/email-form/email-form.component */
      "zc7i");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./profile/profile.component */
      "jEA1");

      var AccountModule = /*#__PURE__*/_createClass(function AccountModule() {
        _classCallCheck(this, AccountModule);
      });

      AccountModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], _account_security_two_factor_two_factor_component__WEBPACK_IMPORTED_MODULE_9__["TwoFactorComponent"], _profile_email_form_email_form_component__WEBPACK_IMPORTED_MODULE_11__["EmailFormComponent"], _account_security_change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordFormComponent"], _account_security_logout_all_logout_all_component__WEBPACK_IMPORTED_MODULE_8__["LogoutAllComponent"], _account_security_account_security_component__WEBPACK_IMPORTED_MODULE_5__["AccountSecurityComponent"], _account_billing_account_billing_component__WEBPACK_IMPORTED_MODULE_3__["AccountBillingComponent"], _account_component__WEBPACK_IMPORTED_MODULE_10__["AccountComponent"], _account_security_api_tokens_api_tokens_component__WEBPACK_IMPORTED_MODULE_6__["ApiTokensComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_4__["AccountRoutingModule"]]
      })], AccountModule);
      /***/
    },

    /***/
    "ncyD":
    /*!*****************************************************************************!*\
      !*** ./src/app/account/account-security/logout-all/logout-all.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: LogoutAllComponent */

    /***/
    function ncyD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutAllComponent", function () {
        return LogoutAllComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_logout_all_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./logout-all.component.html */
      "Q8y0");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../common/security-check/security-check.service */
      "i32w");
      /* harmony import */


      var _common_services_logout_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../common/services/logout.service */
      "2kWO");
      /* harmony import */


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../common/services/session.service */
      "6g7h");
      /* harmony import */


      var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../common/services/toastr.service */
      "N/y2");

      var LogoutAllComponent = /*#__PURE__*/function () {
        function LogoutAllComponent(session, http, securityCheckService, logoutService, toastr, translate) {
          _classCallCheck(this, LogoutAllComponent);

          this.session = session;
          this.http = http;
          this.securityCheckService = securityCheckService;
          this.logoutService = logoutService;
          this.toastr = toastr;
          this.translate = translate;
          this.isLoading = false;
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        }

        _createClass(LogoutAllComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "logoutAllDevices",
          value: function logoutAllDevices() {
            var _this12 = this;

            this.subscriptions.add(this.securityCheckService.getScopePermission('securitySettings').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(function () {
              _this12.isLoading = true;
              return _this12.http.post("/users/".concat(_this12.session.user.id), {
                id: Math.floor(Math.random() * 10000),
                jsonrpc: '2.0',
                method: 'logoutAllDevices'
              }, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                  'Content-Type': 'application/json-rpc'
                })
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this12.isLoading = false;
            })).subscribe(function () {
              _this12.toastr.success(_this12.translate.instant('logout-all.logged-out-from-all-devices'));

              _this12.logoutService.logout().subscribe(function () {
                return undefined;
              });
            }));
          }
        }]);

        return LogoutAllComponent;
      }();

      LogoutAllComponent.ctorParameters = function () {
        return [{
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_7__["SecurityCheckService"]
        }, {
          type: _common_services_logout_service__WEBPACK_IMPORTED_MODULE_8__["LogoutService"]
        }, {
          type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }];
      };

      LogoutAllComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logout-all',
        template: _raw_loader_logout_all_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LogoutAllComponent);
      /***/
    },

    /***/
    "qw5i":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-security/account-security.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qw5i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container pt-page\">\n    <div class=\"row justify-content-between align-items-center pb-3\">\n        <div class=\"col-auto\">\n            <h5 class=\"mb-0\">{{ 'common.security' | translate }}</h5>\n        </div>\n        <div class=\"col-auto d-flex justify-content-end\">\n            <ol class=\"breadcrumb px-0\">\n                <li class=\"breadcrumb-item\">\n                    <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                </li>\n                <li class=\"breadcrumb-item active\">{{ 'common.security' | translate }}</li>\n            </ol>\n        </div>\n    </div>\n</div>\n<div class=\"container pb-4\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"headline\">{{ 'common.password' | translate }}</div>\n            <div class=\"row e2e-reset-password\">\n                <div class=\"col-lg-9\">\n                    <div class=\"media media-info pr-2\">\n                        <fa-icon class=\"d-none d-lg-flex mr-3 mt-1\" [icon]=\"faLockAlt\"></fa-icon>\n                        <div class=\"media-body pt-0\">\n                            <h6 class=\"mt-0\">{{ 'common.change-password' | translate }}</h6>\n                            <p>\n                                {{ 'common.your-password-passphrases' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-15\">\n                    <div class=\"form-block max-width-md\">\n                        <change-password-form></change-password-form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"headline\">{{ 'account-security.2-factor-authentication' | translate }}</div>\n            <div class=\"row e2e-two-factor\">\n                <div class=\"col-lg-9\">\n                    <div class=\"media media-info pr-2\">\n                        <fa-icon class=\"d-none d-lg-flex mr-3 mt-1\" [icon]=\"faMobile\"></fa-icon>\n                        <div class=\"media-body pt-0\">\n                            <h6 class=\"mt-0\">{{ 'account-security.increase-security' | translate }}</h6>\n                            <p>\n                                {{ 'common.we-recommend-using-2-factor-authentication' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-15\">\n                    <div class=\"form-block max-width-md\">\n                        <two-factor></two-factor>\n                    </div>\n                </div>\n            </div>\n            <div class=\"headline\">{{ 'common.logout-from-all-devices' | translate }}</div>\n            <div class=\"row e2e-logout-all-devices\">\n                <div class=\"col-lg-9\">\n                    <div class=\"media media-info pr-2\">\n                        <fa-icon class=\"d-none d-lg-flex mr-3 mt-1\" [icon]=\"faShieldAlt\"></fa-icon>\n                        <div class=\"media-body pt-0\">\n                            <h6 class=\"mt-0\">{{ 'account-security.clear-all-sessions' | translate }}</h6>\n                            <p>\n                                {{ 'common.use-this-feature' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-15\">\n                    <div class=\"form-block max-width-md\">\n                        <logout-all></logout-all>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "sGj0":
    /*!***************************************************!*\
      !*** ./src/app/account/account-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: AccountRoutingModule */

    /***/
    function sGj0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function () {
        return AccountRoutingModule;
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


      var _account_billing_account_billing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./account-billing/account-billing.component */
      "y2dp");
      /* harmony import */


      var _account_billing_account_billing_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./account-billing/account-billing.resolver */
      "aYPB");
      /* harmony import */


      var _account_security_account_security_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./account-security/account-security.component */
      "ACGU");
      /* harmony import */


      var _account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./account.component */
      "heGf");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./profile/profile.component */
      "jEA1");

      var routes = [{
        path: '',
        component: _account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"]],
        children: [{
          path: '',
          redirectTo: 'profile',
          pathMatch: 'full'
        }, {
          path: 'profile',
          component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]
        }, {
          path: 'security',
          component: _account_security_account_security_component__WEBPACK_IMPORTED_MODULE_6__["AccountSecurityComponent"]
        }, {
          path: 'billing',
          component: _account_billing_account_billing_component__WEBPACK_IMPORTED_MODULE_4__["AccountBillingComponent"],
          resolve: {
            data: _account_billing_account_billing_resolver__WEBPACK_IMPORTED_MODULE_5__["AccountBillingResolver"]
          }
        }]
      }];

      var AccountRoutingModule = /*#__PURE__*/_createClass(function AccountRoutingModule() {
        _classCallCheck(this, AccountRoutingModule);
      });

      AccountRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_account_billing_account_billing_resolver__WEBPACK_IMPORTED_MODULE_5__["AccountBillingResolver"]]
      })], AccountRoutingModule);
      /***/
    },

    /***/
    "syFb":
    /*!************************************************************!*\
      !*** ./src/app/common/services/account-billing.service.ts ***!
      \************************************************************/

    /*! exports provided: AccountBillsService */

    /***/
    function syFb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountBillsService", function () {
        return AccountBillsService;
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

      var AccountBillsService = /*#__PURE__*/function () {
        function AccountBillsService(http) {
          _classCallCheck(this, AccountBillsService);

          this.http = http;
        }

        _createClass(AccountBillsService, [{
          key: "fetchAccountBills",
          value: function fetchAccountBills(userId) {
            return this.http.get("/users/".concat(userId, "/account-bills"));
          }
        }, {
          key: "fetchBillingCurrency",
          value: function fetchBillingCurrency(userId) {
            return this.http.get("/users/".concat(userId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response.billingCurrency;
            }));
          }
        }]);

        return AccountBillsService;
      }();

      AccountBillsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      AccountBillsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], AccountBillsService);
      /***/
    },

    /***/
    "y2dp":
    /*!**********************************************************************!*\
      !*** ./src/app/account/account-billing/account-billing.component.ts ***!
      \**********************************************************************/

    /*! exports provided: AccountBillingComponent */

    /***/
    function y2dp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountBillingComponent", function () {
        return AccountBillingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_account_billing_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./account-billing.component.html */
      "dgJ/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/pro-light-svg-icons */
      "WE53");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var currency_symbol_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! currency-symbol-map */
      "1yQU");
      /* harmony import */


      var currency_symbol_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(currency_symbol_map__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var date_fns_addMonths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! date-fns/addMonths */
      "dLU1");
      /* harmony import */


      var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! date-fns/parseISO */
      "4+6U");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../common/services/core/user.service */
      "AxWo");
      /* harmony import */


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../common/services/session.service */
      "6g7h");
      /* harmony import */


      var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../common/services/toastr.service */
      "N/y2");

      var AccountBillingComponent = /*#__PURE__*/function () {
        function AccountBillingComponent(session, translate, route, toastr, userService) {
          _classCallCheck(this, AccountBillingComponent);

          this.session = session;
          this.translate = translate;
          this.route = route;
          this.toastr = toastr;
          this.userService = userService;
          this.payments = [];
          this.billingCurrencyChange = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
          this.currencySymbolMap = currency_symbol_map__WEBPACK_IMPORTED_MODULE_7__["currencySymbolMap"];
          this.faUserPlus = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUserPlus"];
          this.now = new Date();
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"]();
        }

        _createClass(AccountBillingComponent, [{
          key: "nextPaymentDue",
          get: function get() {
            return this.payments.length > 0 ? Object(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(date_fns_parseISO__WEBPACK_IMPORTED_MODULE_9__["default"])(this.payments[0].invoiceDate), 1) : this.now;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.route.data.subscribe(function (_ref3) {
              var data = _ref3.data;

              if (data) {
                _this13.payments = data.payments;
                _this13.billingCurrency = data.billingCurrency;
              }
            });
            this.subscriptions.add(this.billingCurrencyChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (currency) {
              return _this13.userService.changeBillingCurrency(_this13.session.user.id, currency);
            })).subscribe(function () {
              _this13.toastr.success(_this13.translate.instant('account-billing.billing-currency-updated'));
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "determineStatus",
          value: function determineStatus(accountBill) {
            if (new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(accountBill.amount).eq(0)) {
              return 'free';
            }

            if (!accountBill.transaction) {
              return 'unpaid';
            }

            return 'paid';
          }
        }, {
          key: "openInvoiceModal",
          value: function openInvoiceModal(payment) {
            if (!payment.invoice) {
              return;
            }

            window.open(payment.invoice.signedUrl, '_blank', 'noopener');
          }
        }]);

        return AccountBillingComponent;
      }();

      AccountBillingComponent.ctorParameters = function () {
        return [{
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_13__["SessionService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_14__["ToastrService"]
        }, {
          type: _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]
        }];
      };

      AccountBillingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'account-billing',
        template: _raw_loader_account_billing_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AccountBillingComponent);
      /***/
    },

    /***/
    "zc7i":
    /*!********************************************************************!*\
      !*** ./src/app/account/profile/email-form/email-form.component.ts ***!
      \********************************************************************/

    /*! exports provided: EmailFormComponent */

    /***/
    function zc7i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailFormComponent", function () {
        return EmailFormComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_email_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./email-form.component.html */
      "0R5k");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../common/security-check/security-check.service */
      "i32w");
      /* harmony import */


      var _common_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../common/services/alert.service */
      "0ZVX");
      /* harmony import */


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../common/services/session.service */
      "6g7h");
      /* harmony import */


      var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../common/services/toastr.service */
      "N/y2");

      var EmailFormComponent = /*#__PURE__*/function () {
        function EmailFormComponent(securityCheckService, Toastr, session, http, alertService, translate) {
          _classCallCheck(this, EmailFormComponent);

          this.securityCheckService = securityCheckService;
          this.Toastr = Toastr;
          this.session = session;
          this.http = http;
          this.alertService = alertService;
          this.translate = translate;
          this.isLoading = false;
          this.email = '';
          this.disposables = new Set();
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        }

        _createClass(EmailFormComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.email = this.user.email || '';
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.clearAlerts();
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this14 = this;

            if (!this.emailForm.valid) {
              throw new Error(this.translate.instant('common.form-invalid'));
            }

            this.clearAlerts();
            this.subscriptions.add(this.securityCheckService.getScopePermission('securitySettings').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(function () {
              _this14.isLoading = true;
              return _this14.http.post("/users/".concat(_this14.user.id), {
                id: Math.floor(Math.random() * 10000),
                jsonrpc: '2.0',
                method: 'sendEmailConfirmation',
                params: {
                  email: _this14.email
                }
              }, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                  'Content-Type': 'application/json-rpc'
                })
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this14.isLoading = false;
            })).subscribe(function () {
              _this14.Toastr.success(_this14.translate.instant('email-form.email-sent-please-check-your-inbox'));

              _this14.email = '';

              _this14.emailForm.resetForm();
            }, function (error) {
              if (error.status === 409) {
                _this14.disposables.add(_this14.alertService.add({
                  message: _this14.translate.instant('common.the-email-is-already-used-by-another-account'),
                  severity: 'danger'
                }));
              }
            }));
          }
        }, {
          key: "clearAlerts",
          value: function clearAlerts() {
            var _iterator = _createForOfIteratorHelper(this.disposables),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var disposable = _step.value;
                disposable.dispose();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }]);

        return EmailFormComponent;
      }();

      EmailFormComponent.ctorParameters = function () {
        return [{
          type: _common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_7__["SecurityCheckService"]
        }, {
          type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]
        }, {
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _common_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }];
      };

      EmailFormComponent.propDecorators = {
        emailForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['emailForm']
        }],
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      EmailFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'email-form',
        template: _raw_loader_email_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], EmailFormComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=account-account-module-es5.js.map