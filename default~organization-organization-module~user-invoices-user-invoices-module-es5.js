(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~organization-organization-module~user-invoices-user-invoices-module"], {
    /***/
    "26T4":
    /*!*****************************************************************************************!*\
      !*** ./src/app/services/user-invoices/user-invoice-form/user-invoice-form.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: UserInvoiceFormComponent */

    /***/
    function T4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserInvoiceFormComponent", function () {
        return UserInvoiceFormComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_invoice_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-invoice-form.component.html */
      "MIJN");
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _common_common_mixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../common/common.mixin */
      "s/H0");
      /* harmony import */


      var _common_contact_book_contact_book_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../common/contact-book/contact-book.component */
      "AqLL");
      /* harmony import */


      var _common_countries__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../common/countries */
      "Gq6/");
      /* harmony import */


      var _common_currency_mask_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../common/currency-mask.config */
      "2wvm");
      /* harmony import */


      var _common_models_accounting_invoice_item_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../common/models/accounting/invoice-item.model */
      "XbEs");
      /* harmony import */


      var _common_models_accounting_invoice_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../common/models/accounting/invoice.model */
      "5Ten");
      /* harmony import */


      var _common_models_core_user_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../common/models/core/user.model */
      "vk+e");
      /* harmony import */


      var _common_services_accounting_invoice_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../common/services/accounting/invoice.service */
      "Zhhe");
      /* harmony import */


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../common/services/session.service */
      "6g7h");
      /* harmony import */


      var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../../common/services/toastr.service */
      "N/y2");

      var UserInvoiceFormComponent = /*#__PURE__*/function () {
        function UserInvoiceFormComponent(ngbModal, session, http, toastr, invoices, route, activeModal, translate) {
          _classCallCheck(this, UserInvoiceFormComponent);

          this.ngbModal = ngbModal;
          this.session = session;
          this.http = http;
          this.toastr = toastr;
          this.invoices = invoices;
          this.route = route;
          this.activeModal = activeModal;
          this.translate = translate;
          this.faQuestionCircle = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faQuestionCircle"];
          this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].displayName;
          this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.currencies = [];
          this.items = [new _common_models_accounting_invoice_item_model__WEBPACK_IMPORTED_MODULE_16__["InvoiceItem"]()];
          this.lockRecipient = false;
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
          this.faChevronLeft = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChevronLeft"];
          this.faTrash = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrash"];
          this.faSave = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSave"];
          this.isLoading = false;
          this.isTermsCollapsed = true;
          this.percentageCurrencyMaskOptions = _common_currency_mask_config__WEBPACK_IMPORTED_MODULE_15__["percentageCurrencyMaskOptions"];
          this.convertPercentage = _common_common_mixin__WEBPACK_IMPORTED_MODULE_12__["convertPercentage"];
          this.showContacts = true;
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"]();
        }

        _createClass(UserInvoiceFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.invoice = new _common_models_accounting_invoice_model__WEBPACK_IMPORTED_MODULE_17__["Invoice"]();
            this.invoice.items = this.items;
            this.invoice.valueAddedTax = '0.00';
            this.valueAddedTax = this.invoice.valueAddedTax;
            this.subscriptions.add(this.http.get('/currencies', {
              params: {
                limit: 100 + '',
                'filter.type': 'or:fiat,crypto,metal'
              }
            }).subscribe(function (response) {
              _this.currencies = response.data;
              var currency = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["find"])(_this.currencies, {
                code: _this.session.user.preferredCurrency.code
              });

              if (currency) {
                _this.invoice.currency = currency;
              } else if (_this.currencies.length > 0) {
                _this.invoice.currency = _this.currencies[0];
              }
            }));

            if (this.route.snapshot.queryParamMap.has('recipient')) {
              this.invoicee = this.route.snapshot.queryParamMap.get('recipient');
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this2 = this;

            var _iterator = _createForOfIteratorHelper(this.itemsForm.toArray()),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var form = _step.value;
                form.submit();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (this.form.invalid || this.itemsForm.some(function (form) {
              return !form.isValid();
            })) {
              return;
            }

            var body = {
              subject: this.invoice.subject,
              currency: {
                code: this.invoice.currency.code
              },
              valueAddedTax: this.invoice.valueAddedTax,
              dueDate: "".concat(this.dueDate.slice(4), "-").concat(this.dueDate.slice(2, 4), "-").concat(this.dueDate.slice(0, 2)),
              invoicer: this.session.user ? {
                id: this.session.user.id
              } : null,
              invoicee: {
                accountNumber: this.invoicee.trim().replace(/\s/g, '')
              },
              items: this.items.map(function (item) {
                return Object.assign(item, {
                  price: item.price.toString()
                });
              }),
              terms: !this.isTermsCollapsed ? this.invoice.terms : null
            };
            this.isLoading = true;
            this.subscriptions.add(this.invoices.create(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this2.isLoading = false;
            })).subscribe(function (invoice) {
              _this2.invoice = invoice;

              _this2.toastr.success(_this2.translate.instant('common.invoice-created'));

              _this2.onSave.next();
            }));
          }
        }, {
          key: "openContactBook",
          value: function openContactBook() {
            var _this3 = this;

            var modal = Object(_common_contact_book_contact_book_component__WEBPACK_IMPORTED_MODULE_13__["openContactBook"])(this.ngbModal, new _common_models_core_user_model__WEBPACK_IMPORTED_MODULE_18__["User"](this.session.user));
            modal.componentInstance.onSelect.subscribe(function (contact) {
              _this3.invoicee = contact.counterUser.accountNumber;
              modal.close();
            });
          }
        }, {
          key: "addItem",
          value: function addItem() {
            this.items.push(new _common_models_accounting_invoice_item_model__WEBPACK_IMPORTED_MODULE_16__["InvoiceItem"]());
          }
        }, {
          key: "mapToCountry",
          value: function mapToCountry(code) {
            if (!code) {
              return '';
            }

            var country = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["find"])(_common_countries__WEBPACK_IMPORTED_MODULE_14__["countriesSortedByName"], {
              alpha2: code
            });
            return country ? country.name : '';
          }
        }]);

        return UserInvoiceFormComponent;
      }();

      UserInvoiceFormComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
        }, {
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_20__["SessionService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_21__["ToastrService"]
        }, {
          type: _common_services_accounting_invoice_service__WEBPACK_IMPORTED_MODULE_19__["InvoiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }];
      };

      UserInvoiceFormComponent.propDecorators = {
        onSave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        invoicee: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        lockRecipient: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['invoiceForm']
        }],
        itemsForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
          args: ['itemsForm']
        }],
        hideModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        showContacts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      UserInvoiceFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'user-invoice-form',
        template: _raw_loader_user_invoice_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], UserInvoiceFormComponent);
      /***/
    },

    /***/
    "Hoga":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/user-invoices/user-invoices.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Hoga(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"session.userStream | async; let user\">\n    <div class=\"container pt-page pb-3\">\n        <div class=\"row justify-content-between align-items-center pb-2\">\n            <div class=\"col-auto\">\n                <h5 class=\"mb-0\">{{ 'common.invoices' | translate }}</h5>\n            </div>\n            <div class=\"col-auto d-flex justify-content-end\">\n                <ol class=\"breadcrumb px-0\">\n                    <li class=\"breadcrumb-item\">\n                        <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">{{ 'common.invoices' | translate }}</li>\n                </ol>\n            </div>\n        </div>\n        <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col\">\n                <button\n                    type=\"button\"\n                    class=\"btn mr-2\"\n                    (click)=\"queryParams = getDefaultQuery(); searchEvent.next()\"\n                    [ngClass]=\"isActiveQuery(getDefaultQuery()) ? 'btn-primary' : 'btn-primary-air'\"\n                >\n                    {{ 'common.all' | translate }}\n                </button>\n                <div class=\"btn-group mr-2\">\n                    <button\n                        type=\"button\"\n                        class=\"btn\"\n                        (click)=\"queryParams['status']['or'] = ['pending']; searchEvent.next()\"\n                        [ngClass]=\"isActiveQuery({ status: { or: ['pending'] } }) ? 'btn-primary' : 'btn-primary-air'\"\n                    >\n                        {{ 'common.pending' | translate }}\n                    </button>\n                    <button\n                        type=\"button\"\n                        class=\"btn\"\n                        (click)=\"queryParams['status']['or'] = ['completed']; searchEvent.next()\"\n                        [ngClass]=\"isActiveQuery({ status: { or: ['completed'] } }) ? 'btn-primary' : 'btn-primary-air'\"\n                    >\n                        {{ 'common.completed' | translate }}\n                    </button>\n                </div>\n            </div>\n            <div class=\"col-auto pt-3 pt-md-0\">\n                <button class=\"btn btn-primary-air e2e-create-invoice-btn\" (click)=\"$event.preventDefault(); openCreateInvoice(user)\">\n                    <fa-icon class=\"mr-1\" [icon]=\"faPlus\"></fa-icon> {{ 'common.new-invoice' | translate }}\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"container e2e-user-invoices\">\n        <div class=\"card\">\n            <div class=\"card-header b-b-0\">{{ 'common.invoices' | translate }}</div>\n            <div class=\"table-responsive\">\n                <table class=\"table table-hover table-card\">\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th scope=\"col\">\n                                {{ 'common.recipient' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['invoicee', 'name']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['invoicee', 'name'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['invoicee', 'name']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\" class=\"text-right\">\n                                {{ 'common.amount' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['amount']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['amount'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['amount']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ 'common.status' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['status']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['status'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['status']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ 'common.due-date' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['dueDate']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['dueDate'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['dueDate']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ 'user-invoices.sent-at' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['createdAt']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['createdAt'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['createdAt']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\"></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <ng-container *ngIf=\"itemsStream | async; let items\">\n                            <ng-container *ngIf=\"items.length === 0; else rows\">\n                                <tr>\n                                    <td class=\"bg-white\" colspan=\"12\">\n                                        <div class=\"mx-auto p-3 mt-2 mb-4 text-center max-width-sm\">\n                                            <img src=\"/img/icons/file.svg\" class=\"img-sm mb-2\" />\n                                            <h4 class=\"mb-1\">{{ 'common.send-an-invoice' | translate }}</h4>\n                                            <p class=\"mb-3 text-gray\">{{ 'common.need-to-invoice' | translate }}</p>\n                                            <button type=\"button\" class=\"btn btn-primary-air btn-lg btn-block\" (click)=\"openCreateInvoice(user)\">\n                                                {{ 'common.create-invoice' | translate }}\n                                            </button>\n                                        </div>\n                                    </td>\n                                </tr>\n                            </ng-container>\n                            <ng-template #rows>\n                                <tr *ngFor=\"let invoice of items\" (click)=\"openInvoice(invoice)\" class=\"clickable bg-white\">\n                                    <th scope=\"row\">\n                                        <div class=\"d-flex align-items-center\">\n                                            <user-avatar\n                                                [user]=\"isInvoicer(invoice, user) ? invoice.invoicee : invoice.invoicer\"\n                                                size=\"sm\"\n                                                elementClass=\"mr-3\"\n                                            ></user-avatar>\n                                            <div>\n                                                <div>{{ invoice.subject }}</div>\n                                                <div>\n                                                    {{ (isInvoicer(invoice, user) ? 'common.to' : 'common.from') | translate }}\n                                                    <span\n                                                        class=\"text-primary\"\n                                                        [innerHTML]=\"\n                                                            isInvoicer(invoice, user)\n                                                                ? buildAccountHolder(invoice.invoicee)\n                                                                : buildAccountHolder(invoice.invoicer)\n                                                        \"\n                                                    ></span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </th>\n                                    <td class=\"text-right\" [ngClass]=\"isInvoicer(invoice, user) ? 'text-green' : 'text-danger'\">\n                                        {{ (invoice.net | amount: invoice.currency?.decimalPlaces) || 0 }} {{ invoice.currency?.code }}\n                                    </td>\n                                    <td>\n                                        <span\n                                            class=\"text-capitalize label\"\n                                            [ngClass]=\"{\n                                                'label-success': invoice.status === 'completed',\n                                                'label-info': invoice.status === 'pending',\n                                                'label-danger': invoice.status === 'cancelled'\n                                            }\"\n                                            >{{ invoice.status }}</span\n                                        >\n                                    </td>\n                                    <td>{{ invoice.dueDate | date: 'mediumDate' }}</td>\n                                    <td>{{ invoice.createdAt | date: 'medium' }}</td>\n                                    <td class=\"action\">\n                                        <button\n                                            type=\"button\"\n                                            class=\"btn btn-success btn-sm btn-block px-2 e2e-pay-invoice-btn\"\n                                            (click)=\"$event.stopPropagation(); openPayModal(invoice.id)\"\n                                            *ngIf=\"!isInvoicer(invoice, user) && invoice.status === 'pending'\"\n                                        >\n                                            {{ 'common.pay-now' | translate }}\n                                        </button>\n                                        <button\n                                            type=\"button\"\n                                            class=\"btn btn-danger btn-sm btn-block px-2 e2e-cancel-invoice-btn\"\n                                            (click)=\"$event.stopPropagation(); cancel(invoice)\"\n                                            *ngIf=\"isInvoicer(invoice, user) && invoice.status === 'pending'\"\n                                            [ngClass]=\"{ loading: invoicesBeingCancelled.has(invoice.id) }\"\n                                            [disabled]=\"invoicesBeingCancelled.has(invoice.id)\"\n                                        >\n                                            {{ 'common.cancel' | translate }}\n                                        </button>\n                                    </td>\n                                </tr>\n                                <tr *ngFor=\"let empty of fill\" class=\"fill\">\n                                    <td colspan=\"12\">\n                                        <div>&nbsp;</div>\n                                        <span>&nbsp;</span>\n                                    </td>\n                                </tr>\n                            </ng-template>\n                        </ng-container>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <footer class=\"table-footer mb-3\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-md-8\">\n                    <ng-select\n                        [(ngModel)]=\"limit\"\n                        dropdownPosition=\"auto\"\n                        (change)=\"select(1)\"\n                        [items]=\"limitOpts\"\n                        [placeholder]=\"'common.show-entries-per-page' | translate\"\n                        [clearable]=\"false\"\n                        [searchable]=\"false\"\n                        required\n                    >\n                        <ng-template ng-label-tmp let-item=\"item\"\n                            >{{ 'common.show' | translate }} {{ item }} {{ 'common.per-page' | translate }}</ng-template\n                        >\n                        <ng-template ng-option-tmp let-item=\"item\">{{ item }} {{ 'common.entries' | translate }}</ng-template>\n                    </ng-select>\n                </div>\n                <div class=\"col-lg-18 col-md-16 d-flex justify-content-center justify-content-md-end mt-3 mt-md-0\">\n                    <ngb-pagination\n                        [(page)]=\"page\"\n                        [collectionSize]=\"count\"\n                        (pageChange)=\"select()\"\n                        [pageSize]=\"limit\"\n                        [maxSize]=\"4\"\n                        [rotate]=\"false\"\n                        [boundaryLinks]=\"true\"\n                    >\n                    </ngb-pagination>\n                </div>\n            </div>\n        </footer>\n    </div>\n</ng-container>\n";
      /***/
    },

    /***/
    "MIJN":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/user-invoices/user-invoice-form/user-invoice-form.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MIJN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form\n    #invoiceForm=\"ngForm\"\n    [ngClass]=\"{ 'ng-submitted': invoiceForm.submitted }\"\n    class=\"form-validation e2e-user-invoice-form\"\n    (ngSubmit)=\"submit()\"\n    novalidate\n>\n    <div class=\"modal-header\" *ngIf=\"!hideModal\">\n        <h5 class=\"modal-title\">{{ 'common.send-invoice' | translate | sentenceCase }}</h5>\n        <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss(); $event.preventDefault()\">&times;</button>\n    </div>\n    <div [ngClass]=\"{ 'modal-body': !hideModal, 'pb-0': !hideModal }\">\n        <div class=\"form-group\">\n            <div class=\"d-flex justify-content-between\">\n                <label class=\"form-control-label\" for=\"invoicee\"\n                    >{{ 'common.recipient' | translate }}\n                    <a\n                        href\n                        (click)=\"$event.preventDefault()\"\n                        [ngbPopover]=\"recipientContent\"\n                        [popoverTitle]=\"recipientTitle\"\n                        triggers=\"mouseenter:mouseleave\"\n                        ><fa-icon [icon]=\"faQuestionCircle\"></fa-icon></a\n                ></label>\n                <a href (click)=\"$event.preventDefault(); openContactBook()\" *ngIf=\"showContacts\">{{ 'common.show-contacts' | translate }}</a>\n            </div>\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"invoicee\"\n                name=\"invoicee\"\n                [(ngModel)]=\"invoicee\"\n                [disabled]=\"lockRecipient\"\n                #invoiceeInput=\"ngModel\"\n                emptyToNull\n                required\n                recipientValidator\n            />\n            <div *ngIf=\"invoiceeInput.invalid && (invoiceForm.submitted || invoiceeInput.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"invoiceeInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                <div class=\"form-control-feedback\" *ngIf=\"invoiceeInput?.errors?.invalidRecipient\">{{ 'common.invalid-recipient' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"form-control-label\" for=\"currency\">{{ 'common.subject' | translate }}</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"invoice.subject\" id=\"subject\" name=\"subject\" #subject=\"ngModel\" required />\n            <div *ngIf=\"subject.invalid && (invoiceForm.submitted || subject.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"subject?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"valueAddedTax\">VAT / GST</label>\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"valueAddedTax\"\n                name=\"valueAddedTax\"\n                [(ngModel)]=\"valueAddedTax\"\n                (ngModelChange)=\"valueAddedTax && (invoice.valueAddedTax = convertPercentage(valueAddedTax))\"\n                currencyMask\n                [options]=\"percentageCurrencyMaskOptions\"\n                #valueAddedTaxField=\"ngModel\"\n                required\n            />\n            <div *ngIf=\"valueAddedTaxField.invalid && (invoiceForm.submitted || valueAddedTaxField.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"valueAddedTaxField?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label\" for=\"currency\">{{ 'common.currency' | translate }}</label>\n                <ng-select\n                    id=\"currency\"\n                    name=\"currency\"\n                    [(ngModel)]=\"invoice.currency\"\n                    bindLabel=\"code\"\n                    [items]=\"currencies\"\n                    [clearable]=\"false\"\n                    #currency=\"ngModel\"\n                    autocomplete=\"false\"\n                    aria-autocomplete=\"false\"\n                    required\n                ></ng-select>\n                <div *ngIf=\"currency.invalid && (invoiceForm.submitted || currency.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"currency?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label\" for=\"dueDate\">{{ 'common.due-date' | translate | sentenceCase }}</label>\n                <input\n                    class=\"form-control\"\n                    type=\"text\"\n                    id=\"dueDate\"\n                    name=\"dueDate\"\n                    mask=\"00/00/0000\"\n                    [(ngModel)]=\"dueDate\"\n                    #dueDateInput=\"ngModel\"\n                    required\n                />\n                <small class=\"form-text text-muted\">{{ 'common.format' | translate }}: dd/mm/yyyy</small>\n                <div *ngIf=\"dueDateInput.invalid && (invoiceForm.submitted || dueDateInput.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"dueDateInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n        </div>\n        <label class=\"form-control-label\">{{ 'common.items' | translate }}</label>\n        <invoice-item-form *ngFor=\"let item of items; index as i\" [item]=\"item\" (onDelete)=\"items.splice(i, 1)\" #itemsForm></invoice-item-form>\n        <div class=\"form-group d-flex justify-content-end\">\n            <a class=\"e2e-add-invoice-item-btn\" href (click)=\"addItem(); $event.preventDefault()\">+ {{ 'common.add-item' | translate }}</a>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"d-flex flex-column justify-content-end\">\n                    <div class=\"d-flex justify-content-between mb-1\">\n                        <span>{{ 'common.subtotal' | translate }}</span>\n                        <span>{{ (invoice.total | amount: invoice.currency?.decimalPlaces) || 0 }} {{ invoice.currency?.code }}</span>\n                    </div>\n                    <div class=\"d-flex justify-content-between mb-1\">\n                        <span>VAT ({{ invoice.valueAddedTax | percent }})</span>\n                        <span>{{ (invoice.tax | amount: invoice.currency?.decimalPlaces) || 0 }} {{ invoice.currency?.code }}</span>\n                    </div>\n                    <div class=\"d-flex justify-content-between\">\n                        <span class=\"font-weight-bold\">Total</span>\n                        <span class=\"font-weight-bold\"\n                            >{{ (invoice.net | amount: invoice.currency?.decimalPlaces) || 0 }} {{ invoice.currency?.code }}</span\n                        >\n                    </div>\n                </div>\n            </div>\n        </div>\n        <a href class=\"d-block mb-2 e2e-terms-toggle-btn\" (click)=\"isTermsCollapsed = !isTermsCollapsed; $event.preventDefault()\"\n            >{{ isTermsCollapsed ? '+ ' + ('common.add' | translate) : '- ' + ('common.remove' | translate) }} {{ 'common.terms' | translate }}</a\n        >\n        <div class=\"mb-2\" [ngbCollapse]=\"isTermsCollapsed\">\n            <label class=\"form-control-label font-md\">{{ 'common.terms' | translate }} ({{ 'common.optional' | translate }})</label>\n            <quill-editor\n                name=\"terms\"\n                [(ngModel)]=\"invoice.terms\"\n                [modules]=\"editorModules\"\n                [placeholder]=\"'common.enter-your-terms' | translate\"\n                [sanitize]=\"true\"\n            ></quill-editor>\n        </div>\n    </div>\n    <div [ngClass]=\"{ 'modal-footer': !hideModal, 'text-right': hideModal }\">\n        <button type=\"submit\" class=\"btn btn-primary btn-w-sm\" [ngClass]=\"{ loading: isLoading }\" [disabled]=\"isLoading\">\n            {{ 'common.send' | translate }}\n        </button>\n    </div>\n</form>\n\n<ng-template #recipientTitle> {{ 'common.how-does-it-work' | translate }} </ng-template>\n<ng-template #recipientContent>\n    <p>{{ 'common.you-can-send-invoices-to-other' | translate: { value: displayName } }}</p>\n    <p [innerHtml]=\"'common.ask-your-invoicee' | translate\"></p>\n</ng-template>\n";
      /***/
    },

    /***/
    "l6XN":
    /*!************************************************************************!*\
      !*** ./src/app/services/user-invoices/user-invoices-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: UserInvoicesRoutingModule */

    /***/
    function l6XN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserInvoicesRoutingModule", function () {
        return UserInvoicesRoutingModule;
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


      var _user_invoices_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-invoices.component */
      "o/gE");

      var routes = [{
        path: '',
        component: _user_invoices_component__WEBPACK_IMPORTED_MODULE_3__["UserInvoicesComponent"]
      }, {
        path: ':id',
        component: _user_invoices_component__WEBPACK_IMPORTED_MODULE_3__["UserInvoicesComponent"]
      }];

      var UserInvoicesRoutingModule = /*#__PURE__*/_createClass(function UserInvoicesRoutingModule() {
        _classCallCheck(this, UserInvoicesRoutingModule);
      });

      UserInvoicesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserInvoicesRoutingModule);
      /***/
    },

    /***/
    "mzZL":
    /*!****************************************************************!*\
      !*** ./src/app/services/user-invoices/user-invoices.module.ts ***!
      \****************************************************************/

    /*! exports provided: UserInvoicesModule */

    /***/
    function mzZL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserInvoicesModule", function () {
        return UserInvoicesModule;
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
      /*! ../../common/common.module */
      "a6Df");
      /* harmony import */


      var _common_invoices_invoices_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/invoices/invoices.module */
      "bw5T");
      /* harmony import */


      var _common_quill_editor_quill_editor_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../common/quill-editor/quill-editor.module */
      "8kSJ");
      /* harmony import */


      var _user_invoice_form_user_invoice_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-invoice-form/user-invoice-form.component */
      "26T4");
      /* harmony import */


      var _user_invoices_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-invoices-routing.module */
      "l6XN");
      /* harmony import */


      var _user_invoices_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user-invoices.component */
      "o/gE");

      var UserInvoicesModule = /*#__PURE__*/_createClass(function UserInvoicesModule() {
        _classCallCheck(this, UserInvoicesModule);
      });

      UserInvoicesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_invoices_component__WEBPACK_IMPORTED_MODULE_7__["UserInvoicesComponent"], _user_invoice_form_user_invoice_form_component__WEBPACK_IMPORTED_MODULE_5__["UserInvoiceFormComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _user_invoices_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserInvoicesRoutingModule"], _common_invoices_invoices_module__WEBPACK_IMPORTED_MODULE_3__["InvoicesModule"], _common_quill_editor_quill_editor_module__WEBPACK_IMPORTED_MODULE_4__["QuillEditorModule"]],
        exports: [_user_invoice_form_user_invoice_form_component__WEBPACK_IMPORTED_MODULE_5__["UserInvoiceFormComponent"]]
      })], UserInvoicesModule);
      /***/
    },

    /***/
    "o/gE":
    /*!*******************************************************************!*\
      !*** ./src/app/services/user-invoices/user-invoices.component.ts ***!
      \*******************************************************************/

    /*! exports provided: UserInvoicesComponent */

    /***/
    function oGE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserInvoicesComponent", function () {
        return UserInvoicesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_invoices_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-invoices.component.html */
      "Hoga");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/pro-regular-svg-icons */
      "uB96");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _common_common_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../common/common.mixin */
      "s/H0");
      /* harmony import */


      var _common_invoices_invoice_modal_invoice_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../common/invoices/invoice-modal/invoice-modal.component */
      "neLm");
      /* harmony import */


      var _common_invoices_invoices_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../common/invoices/invoices.component */
      "iVTV");
      /* harmony import */


      var _common_no_access_modal_no_access_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../common/no-access-modal/no-access-modal.component */
      "gZSw");
      /* harmony import */


      var _user_invoice_form_user_invoice_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./user-invoice-form/user-invoice-form.component */
      "26T4");

      var UserInvoicesComponent = /*#__PURE__*/function (_common_invoices_invo) {
        _inherits(UserInvoicesComponent, _common_invoices_invo);

        var _super = _createSuper(UserInvoicesComponent);

        function UserInvoicesComponent() {
          var _this4;

          _classCallCheck(this, UserInvoicesComponent);

          _this4 = _super.apply(this, arguments);
          _this4.faEllipsisV = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEllipsisV"];
          _this4.invoicesBeingCancelled = new Set();
          _this4.apiQuery = ['status'];
          _this4.defaultLimit = _this4.limitOpts[0];
          _this4.defaultQuery = {
            status: {}
          };
          return _this4;
        }

        _createClass(UserInvoicesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            _get(_getPrototypeOf(UserInvoicesComponent.prototype), "ngOnInit", this).call(this);

            this.route.paramMap.subscribe(function (params) {
              if (params.has('id')) {
                var id = params.get('id');

                var modal = _this5.openPayModal(id);

                var closeHook = function closeHook() {
                  return _this5.router.navigate(['/services/invoices']);
                };

                modal.result.then(closeHook, closeHook);
              }
            });
          }
        }, {
          key: "find",
          value: function find() {
            var _this6 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.session.userStream), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  _ = _ref2[0],
                  user = _ref2[1];

              _this6.apiUrl = "/users/".concat(user.id, "/invoices");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function () {
              return _get(_getPrototypeOf(UserInvoicesComponent.prototype), "find", _this6).call(_this6);
            }));
          }
        }, {
          key: "cancel",
          value: function cancel(invoice) {
            var _this7 = this;

            this.invoicesBeingCancelled.add(invoice.id);
            this.subscriptions.add(this.invoices.patch(invoice.id, [{
              op: 'replace',
              path: '/status',
              value: 'cancelled'
            }]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this7.invoicesBeingCancelled["delete"](invoice.id);
            })).subscribe(function () {
              _this7.toastr.success(_this7.translate.instant('common.invoice-cancelled'));

              _this7.updateEvent.next();
            }));
          }
        }, {
          key: "isInvoicer",
          value: function isInvoicer(invoice, user) {
            var _a;

            return user.id === ((_a = invoice.invoicer) === null || _a === void 0 ? void 0 : _a.id);
          }
        }, {
          key: "openCreateInvoice",
          value: function openCreateInvoice(user) {
            var _this8 = this;

            if (user.accessErrors.length > 0) {
              Object(_common_no_access_modal_no_access_modal_component__WEBPACK_IMPORTED_MODULE_10__["openNoAccessModal"])(this.ngbModal, user.accessErrors[0]);
              return;
            }

            var modal = this.ngbModal.open(_user_invoice_form_user_invoice_form_component__WEBPACK_IMPORTED_MODULE_11__["UserInvoiceFormComponent"], {
              backdrop: 'static',
              windowClass: 'modal-primary'
            });
            var form = modal.componentInstance;
            form.onSave.subscribe(function () {
              modal.close();

              _this8.updateEvent.next();
            });
          }
        }, {
          key: "openPayModal",
          value: function openPayModal(id) {
            var _this9 = this;

            var modal = this.ngbModal.open(_common_invoices_invoice_modal_invoice_modal_component__WEBPACK_IMPORTED_MODULE_8__["InvoiceModalComponent"], {
              backdrop: 'static',
              windowClass: 'modal-primary',
              keyboard: false
            });
            var component = modal.componentInstance;
            component.invoiceId = id;
            component.onSettle.subscribe(function () {
              modal.close();

              _this9.updateEvent.next();
            });
            return modal;
          }
        }, {
          key: "buildAccountHolder",
          value: function buildAccountHolder(user) {
            return !user ? src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].displayName : "".concat(user.name, " <span class=\"text-muted\">/ ").concat(Object(_common_common_mixin__WEBPACK_IMPORTED_MODULE_7__["formatAccountNumber"])(user.accountNumber), "</span>");
          }
        }]);

        return UserInvoicesComponent;
      }(_common_invoices_invoices_component__WEBPACK_IMPORTED_MODULE_9__["InvoicesComponent"]);

      UserInvoicesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'user-invoices',
        template: _raw_loader_user_invoices_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], UserInvoicesComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~organization-organization-module~user-invoices-user-invoices-module-es5.js.map