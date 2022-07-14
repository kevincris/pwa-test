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

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~mailbox-mailbox-module"], {
    /***/
    "CU8J":
    /*!*****************************************************!*\
      !*** ./src/app/common/mails/mail/mail.component.ts ***!
      \*****************************************************/

    /*! exports provided: MailComponent */

    /***/
    function CU8J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailComponent", function () {
        return MailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_mail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./mail.component.html */
      "VbqR");
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


      var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/pro-regular-svg-icons */
      "uB96");
      /* harmony import */


      var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fortawesome/pro-solid-svg-icons */
      "4Bjl");
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _services_intercom_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../services/intercom.service */
      "rSOl");
      /* harmony import */


      var _services_mail_notifications_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../services/mail-notifications.service */
      "KQWT");
      /* harmony import */


      var _services_session_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../services/session.service */
      "6g7h");
      /* harmony import */


      var _services_toastr_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../services/toastr.service */
      "N/y2");

      var MailComponent = /*#__PURE__*/function () {
        function MailComponent(http, Toastr, mailNotifications, route, router, session, intercom, translate) {
          _classCallCheck(this, MailComponent);

          this.http = http;
          this.Toastr = Toastr;
          this.mailNotifications = mailNotifications;
          this.route = route;
          this.router = router;
          this.session = session;
          this.intercom = intercom;
          this.translate = translate;
          this.markAsRead = false;
          this.attachments = [];
          this.isDeleting = false;
          this.isLoading = false;
          this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].displayName;
          this.faReply = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faReply"];
          this.faShare = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faShare"];
          this.faHistory = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faHistory"];
          this.faTrash = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrash"];
          this.faFile = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFile"];
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
          this.fetchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        }

        _createClass(MailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.subscriptions.add(this.fetchEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function () {
              return _this.fetch();
            })).subscribe());
            this.subscriptions.add(this.route.paramMap.subscribe(function (params) {
              var mailId = params.get('mailId');

              if (mailId) {
                _this.mail = {
                  id: mailId
                };

                _this.fetchEvent.next();
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
            var _this2 = this;

            this.isLoading = true;
            return this.http.get("/mails/".concat(this.mail.id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(function (mail) {
              Object.assign(_this2.mail, mail);

              var obs = _this2.http.get("/mails/".concat(_this2.mail.id, "/attachments")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function (attachments) {
                _this2.attachments = attachments;
              }));

              if (!_this2.mail.read && _this2.markAsRead) {
                obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(obs, _this2.http.post("/mails/".concat(_this2.mail.id, "/mark-as-read"), {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function () {
                  _this2.mailNotifications.notify();
                })));
              }

              return obs;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this2.isLoading = false;
            }));
          }
        }, {
          key: "back",
          value: function back() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.router.navigate(['../'], {
                        relativeTo: this.route
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this3 = this;

            this.isDeleting = true;
            this.http["delete"]("/mails/".concat(this.mail.id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this3.isDeleting = false;
            })).subscribe(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        this.Toastr.success(this.translate.instant('mail.mail-deleted'));
                        _context2.next = 3;
                        return this.back();

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          }
        }, {
          key: "openAttachment",
          value: function openAttachment(attachment) {
            this.subscriptions.add(this.session.createSignedUrl("/mails/".concat(this.mail.id, "/attachments/").concat(attachment.id)).subscribe(function (signedUrl) {
              return window.open(signedUrl, '_blank', 'noopener');
            }));
          }
        }, {
          key: "reply",
          value: function reply() {
            this.intercom.startConversation(this.buildPrePopulatedMessage());
          }
        }, {
          key: "buildPrePopulatedMessage",
          value: function buildPrePopulatedMessage() {
            return "Subject: ".concat(this.mail.subject, ", Message: ").concat(this.mail.content.replace(/<[^>]+>/g, ''), " \n \n");
          }
        }]);

        return MailComponent;
      }();

      MailComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _services_toastr_service__WEBPACK_IMPORTED_MODULE_14__["ToastrService"]
        }, {
          type: _services_mail_notifications_service__WEBPACK_IMPORTED_MODULE_12__["MailNotificationsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_session_service__WEBPACK_IMPORTED_MODULE_13__["SessionService"]
        }, {
          type: _services_intercom_service__WEBPACK_IMPORTED_MODULE_11__["IntercomService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }];
      };

      MailComponent.propDecorators = {
        markAsRead: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      MailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'mail',
        template: _raw_loader_mail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], MailComponent);
      /***/
    },

    /***/
    "Czvq":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/mails/mail-form/mail-form.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Czvq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form class=\"form-validation e2e-mail-form\" [ngClass]=\"{ 'ng-submitted': form.submitted }\" #form=\"ngForm\" autocomplete=\"false\" novalidate>\n    <div class=\"row\">\n        <div class=\"form-group col\">\n            <label class=\"form-control-label\">{{ 'common.subject' | translate }}</label>\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                name=\"subject\"\n                [placeholder]=\"'common.subject' | translate\"\n                [(ngModel)]=\"mail.subject\"\n                #messageSubject=\"ngModel\"\n                required\n            />\n            <div *ngIf=\"messageSubject.invalid && (form.submitted || messageSubject.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"messageSubject?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n        <div *ngIf=\"templates.length > 0\" class=\"form-group col-sm-12\">\n            <label class=\"form-control-label\" for=\"templates\">{{ 'common.template' | translate }}</label>\n            <ng-select\n                [items]=\"templates\"\n                bindLabel=\"name\"\n                groupBy=\"group\"\n                [(ngModel)]=\"selectedTemplate\"\n                (change)=\"onSelectTemplate()\"\n                [placeholder]=\"'common.select-template' | translate\"\n                name=\"templates\"\n            >\n                <ng-template ng-optgroup-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\n                    {{ item.group | uppercase }}\n                </ng-template>\n                <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\n                    {{ item.name }}\n                </ng-template>\n            </ng-select>\n        </div>\n    </div>\n    <quill-editor\n        name=\"message\"\n        [(ngModel)]=\"mail.content\"\n        [modules]=\"editorModules\"\n        #messageBody=\"ngModel\"\n        [sanitize]=\"true\"\n        required\n    ></quill-editor>\n    <div *ngIf=\"messageBody.invalid && (form.submitted || messageBody.dirty)\" class=\"error-messages\">\n        <div class=\"form-control-feedback\" *ngIf=\"messageBody?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n    </div>\n    <div class=\"mt-3\">\n        <dropzone [files]=\"files\"></dropzone>\n    </div>\n</form>\n";
      /***/
    },

    /***/
    "D6Fb":
    /*!**********************************************!*\
      !*** ./src/app/common/mails/mails.module.ts ***!
      \**********************************************/

    /*! exports provided: MailsModule */

    /***/
    function D6Fb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailsModule", function () {
        return MailsModule;
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


      var _quill_editor_quill_editor_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../quill-editor/quill-editor.module */
      "8kSJ");
      /* harmony import */


      var _mail_form_mail_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./mail-form/mail-form.component */
      "pmm5");
      /* harmony import */


      var _mail_mail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mail/mail.component */
      "CU8J");
      /* harmony import */


      var _mails_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mails.component */
      "EP7a");

      var MailsModule = /*#__PURE__*/_createClass(function MailsModule() {
        _classCallCheck(this, MailsModule);
      });

      MailsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_mails_component__WEBPACK_IMPORTED_MODULE_6__["MailsComponent"], _mail_mail_component__WEBPACK_IMPORTED_MODULE_5__["MailComponent"], _mail_form_mail_form_component__WEBPACK_IMPORTED_MODULE_4__["MailFormComponent"]],
        imports: [_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _quill_editor_quill_editor_module__WEBPACK_IMPORTED_MODULE_3__["QuillEditorModule"]],
        exports: [_mails_component__WEBPACK_IMPORTED_MODULE_6__["MailsComponent"], _mail_mail_component__WEBPACK_IMPORTED_MODULE_5__["MailComponent"], _mail_form_mail_form_component__WEBPACK_IMPORTED_MODULE_4__["MailFormComponent"]]
      })], MailsModule);
      /***/
    },

    /***/
    "EP7a":
    /*!*************************************************!*\
      !*** ./src/app/common/mails/mails.component.ts ***!
      \*************************************************/

    /*! exports provided: MailsComponent */

    /***/
    function EP7a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailsComponent", function () {
        return MailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_mails_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./mails.component.html */
      "btBG");
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


      var striptags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! striptags */
      "B9KB");
      /* harmony import */


      var striptags__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(striptags__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _list_v2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../list-v2.component */
      "qhtW");
      /* harmony import */


      var _services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/session.service */
      "6g7h");

      var MailsComponent = /*#__PURE__*/function (_list_v2_component__W) {
        _inherits(MailsComponent, _list_v2_component__W);

        var _super = _createSuper(MailsComponent);

        function MailsComponent(http, ngbModal, changeDetector, route, router, session, translate) {
          var _this4;

          _classCallCheck(this, MailsComponent);

          _this4 = _super.call(this, http, ngbModal, changeDetector, route, router, session);
          _this4.translate = translate;
          _this4.striptags = striptags__WEBPACK_IMPORTED_MODULE_7__;
          return _this4;
        }

        _createClass(MailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _get(_getPrototypeOf(MailsComponent.prototype), "ngOnInit", this).call(this);

            this.apiUrl = "/users/".concat(this.user.id, "/mails");
          }
        }]);

        return MailsComponent;
      }(_list_v2_component__WEBPACK_IMPORTED_MODULE_8__["ListV2Component"]);

      MailsComponent.ctorParameters = function () {
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
          type: _services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }];
      };

      MailsComponent.propDecorators = {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      MailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'mails',
        template: _raw_loader_mails_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], MailsComponent);
      /***/
    },

    /***/
    "VbqR":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/mails/mail/mail.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function VbqR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"card b-a-0 b-b-1 mb-0 rounded-0 e2e-mail\">\n    <div class=\"card-body\">\n        <div class=\"d-flex justify-content-between mb-3\">\n            <div>\n                <h6 class=\"mail-subject mb-0\">\n                    <b>{{ mail.subject }}</b>\n                </h6>\n                <small class=\"block\">\n                    <span\n                        ><strong>{{ displayName + ' Team' }}</strong> {{ 'common.wrote-to-you' | translate }}</span\n                    >\n                    on {{ mail.createdAt | date: 'medium' }}:\n                </small>\n            </div>\n            <div>\n                <div class=\"row no-gutters\">\n                    <div class=\"col-18 col-lg-auto ml-auto mr-2\">\n                        <button type=\"button\" class=\"btn btn-default btn-icon btn-block\" [routerLink]=\"['../']\">\n                            <fa-icon class=\"btn-icon-symbol\" [icon]=\"faReply\"></fa-icon>\n                            <span>{{ 'common.back' | translate }}</span>\n                        </button>\n                    </div>\n                    <div class=\"col-18 col-lg-auto ml-auto mr-2 mt-sm-0 mt-2\">\n                        <button type=\"button\" class=\"btn btn-default btn-icon btn-block\" (click)=\"reply()\">\n                            <fa-icon class=\"btn-icon-symbol\" [icon]=\"faShare\"></fa-icon>\n                            <span>{{ 'common.reply' | translate }}</span>\n                        </button>\n                    </div>\n                    <div class=\"col-18 col-lg-auto ml-auto mr-2 mt-sm-0 mt-2\">\n                        <button\n                            type=\"button\"\n                            class=\"btn btn-default btn-icon e2e-mail-delete-btn btn-block\"\n                            (click)=\"delete()\"\n                            [ngClass]=\"{ loading: isDeleting }\"\n                            [disabled]=\"isDeleting\"\n                        >\n                            <fa-icon class=\"btn-icon-symbol\" [icon]=\"faTrash\"></fa-icon>\n                            <span>{{ 'common.delete' | translate }}</span>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <hr />\n        <div *ngIf=\"mail\" [innerHtml]=\"mail.content\" class=\"mail-content mt-2\"></div>\n        <div *ngIf=\"attachments.length > 0\">\n            <p>\n                <b>{{ 'common.attachments' | translate }}:</b>\n            </p>\n            <p *ngFor=\"let attachment of attachments\">\n                <fa-icon class=\"mail-attachment-icon mr-2\" [icon]=\"faFile\"></fa-icon>\n                <a href (click)=\"$event.preventDefault(); openAttachment(attachment)\">{{ attachment.name }}</a>\n                <small class=\"mail-file-type text-muted\"> {{ attachment.type }}</small>\n            </p>\n        </div>\n    </div>\n</section>\n";
      /***/
    },

    /***/
    "btBG":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/mails/mails.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function btBG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n        <div class=\"row no-gutters align-items-center mb-3\">\n            <div class=\"col-lg-7 mb-2 mb-lg-0\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><fa-icon [icon]=\"faSearch\"></fa-icon></span>\n                    </span>\n                    <input\n                        type=\"text\"\n                        name=\"searchText\"\n                        (ngModelChange)=\"searchEvent.next()\"\n                        [placeholder]=\"'common.search' | translate\"\n                        class=\"form-control\"\n                        [(ngModel)]=\"search\"\n                    />\n                </div>\n            </div>\n            <div class=\"col-lg-17 d-flex justify-content-between align-items-center\">\n                <span class=\"ml-lg-3\"\n                    >{{ count | number }} {{ (count === 1 ? 'common.entry-found' : 'common.entries-found') | translate | lowercase }}</span\n                >\n                <div class=\"d-flex align-items-center\">\n                    <ng-select\n                        class=\"mr-2\"\n                        [(ngModel)]=\"limit\"\n                        dropdownPosition=\"auto\"\n                        (change)=\"select(1)\"\n                        [items]=\"limitOpts\"\n                        [placeholder]=\"'common.show-entries-per-page' | translate\"\n                        [clearable]=\"false\"\n                        [searchable]=\"false\"\n                        required\n                    >\n                        <ng-template ng-label-tmp let-item=\"item\">{{ 'common.show-entries' | translate: { value: item } }}</ng-template>\n                        <ng-template ng-option-tmp let-item=\"item\">{{ item }} {{ 'common.entries' | translate }}</ng-template>\n                    </ng-select>\n                    <ngb-pagination\n                        [(page)]=\"page\"\n                        [collectionSize]=\"count\"\n                        (pageChange)=\"select()\"\n                        [pageSize]=\"limit\"\n                        [maxSize]=\"5\"\n                        [ellipses]=\"false\"\n                        [rotate]=\"true\"\n                        [boundaryLinks]=\"true\"\n                    >\n                    </ngb-pagination>\n                </div>\n            </div>\n        </div>\n        <div class=\"table-responsive\">\n            <table class=\"table table-hover table-bordered table-data\">\n                <thead class=\"thead-light\">\n                    <tr>\n                        <th scope=\"col\">{{ 'common.from' | translate }}</th>\n                        <th scope=\"col\">{{ 'common.subject' | translate }}</th>\n                        <th scope=\"col\">{{ 'mails.received-at' | translate }}</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <ng-container *ngIf=\"itemsStream | async; let items\">\n                        <tr *ngFor=\"let mail of items\" [routerLink]=\"['./', mail.id]\" class=\"clickable\">\n                            <th scope=\"row\">\n                                <user-display [user]=\"null\"></user-display>\n                            </th>\n                            <td>\n                                <div class=\"text-truncate\" [ngClass]=\"{ 'font-weight-bold': !mail.read }\">\n                                    {{ mail.subject }}\n                                    <span *ngIf=\"!mail.read\" class=\"text-primary\">({{ 'common.new' | translate | lowercase }})</span>\n                                </div>\n                                <div class=\"small text-muted\">{{ striptags(mail.content) | truncate: true:60 }}</div>\n                            </td>\n                            <td>{{ mail.createdAt | date: 'medium' }}</td>\n                        </tr>\n                        <tr *ngIf=\"items.length === 0\">\n                            <td colspan=\"6\" class=\"text-center\">{{ 'common.no-entries-found' | translate }}</td>\n                        </tr>\n                    </ng-container>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "pmm5":
    /*!***************************************************************!*\
      !*** ./src/app/common/mails/mail-form/mail-form.component.ts ***!
      \***************************************************************/

    /*! exports provided: MailFormComponent */

    /***/
    function pmm5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailFormComponent", function () {
        return MailFormComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_mail_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./mail-form.component.html */
      "Czvq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/pro-solid-svg-icons */
      "4Bjl");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var MailFormComponent = /*#__PURE__*/function () {
        function MailFormComponent(activeModal, translate) {
          _classCallCheck(this, MailFormComponent);

          this.activeModal = activeModal;
          this.translate = translate;
          this.files = [];
          this.templates = [];
          this.useName = true;
          this.isLoading = false;
          this.faTimes = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"];
          this.editorModules = {
            toolbar: [['bold', 'italic', 'underline'], [{
              list: 'bullet'
            }], [{
              indent: '-1'
            }, {
              indent: '+1'
            }], [{
              header: [1, 2, 3, 4, 5, 6, false]
            }], [{
              align: []
            }], ['clean'], ['link']]
          };
        }

        _createClass(MailFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.selectedTemplate) {
              this.onSelectTemplate();
            } else {
              this.reset();
            }
          }
        }, {
          key: "recipient",
          get: function get() {
            var _a, _b;

            return (_b = (_a = this.user) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '<NAME>';
          }
        }, {
          key: "onSelectTemplate",
          value: function onSelectTemplate() {
            this.mail.subject = this.selectedTemplate.subject;
            this.mail.content = this.buildBaseMessage(this.recipient, this.selectedTemplate.message);
          }
        }, {
          key: "isValid",
          value: function isValid() {
            return !!this.form.valid;
          }
        }, {
          key: "isSubmitted",
          value: function isSubmitted() {
            return !!this.form.submitted;
          }
        }, {
          key: "reset",
          value: function reset() {
            this.mail.subject = "Message from ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].displayName);
            this.mail.content = this.buildBaseMessage(this.recipient, '<p>...</p>');
          }
        }, {
          key: "buildBaseMessage",
          value: function buildBaseMessage(name, content) {
            return "<p>Hi ".concat(this.useName ? name : '[username]', " \uD83D\uDC4B</p>").concat(content, "<p>If you have any concerns, feel free to contact us.</p><p>Regards,</p><p>").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].displayName, " team</p>");
          }
        }]);

        return MailFormComponent;
      }();

      MailFormComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      };

      MailFormComponent.propDecorators = {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        mail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        files: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        templates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        selectedTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        useName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['form']
        }]
      };
      MailFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'mail-form',
        template: _raw_loader_mail_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], MailFormComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~admin-admin-module~mailbox-mailbox-module-es5.js.map