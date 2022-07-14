(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["organization-organization-module"], {
    /***/
    "GNzn":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organization/merchant-customer-list/merchant-customer-list.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GNzn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section>\n    <div class=\"card\">\n        <div class=\"card-header d-flex justify-content-between align-items-center\">\n            <span>{{ 'common.customers' | translate }}</span>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row no-gutters align-items-center mb-3\">\n                <div class=\"col-lg-7 mb-2 mb-lg-0\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><fa-icon [icon]=\"faSearch\"></fa-icon></span>\n                        </span>\n                        <input\n                            type=\"text\"\n                            name=\"searchText\"\n                            (ngModelChange)=\"searchEvent.next()\"\n                            [placeholder]=\"'common.search' | translate\"\n                            class=\"form-control\"\n                            [(ngModel)]=\"search\"\n                        />\n                    </div>\n                </div>\n                <div class=\"col-lg-17 d-flex justify-content-between align-items-center\">\n                    <div class=\"ml-lg-3\">\n                        <span>{{ count | number }} {{ (count === 1 ? 'common.entry-found' : 'common.entries-found') | translate | lowercase }}</span>\n                        <span class=\"ml-3\"\n                            ><a href (click)=\"isFilterOptionsCollapsed = !isFilterOptionsCollapsed; $event.preventDefault()\"\n                                >{{ isFilterOptionsCollapsed ? '+' : '-' }} {{ 'common.filter-options' | translate }}</a\n                            ></span\n                        >\n                    </div>\n                    <div class=\"d-flex align-items-center\">\n                        <ng-select\n                            class=\"mr-2\"\n                            [(ngModel)]=\"limit\"\n                            dropdownPosition=\"auto\"\n                            (change)=\"select(1)\"\n                            [items]=\"limitOpts\"\n                            [placeholder]=\"'common.show-entries-per-page' | translate\"\n                            [clearable]=\"false\"\n                            [searchable]=\"false\"\n                            required\n                        >\n                            <ng-template ng-label-tmp let-item=\"item\">{{ 'common.show-entries' | translate: { value: item } }}</ng-template>\n                            <ng-template ng-option-tmp let-item=\"item\">{{ item }} {{ 'common.entries' | translate }}</ng-template>\n                        </ng-select>\n                        <ngb-pagination\n                            [(page)]=\"page\"\n                            [collectionSize]=\"count\"\n                            (pageChange)=\"select()\"\n                            [pageSize]=\"limit\"\n                            [maxSize]=\"5\"\n                            [ellipses]=\"false\"\n                            [rotate]=\"true\"\n                            [boundaryLinks]=\"true\"\n                        >\n                        </ngb-pagination>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card\" [ngbCollapse]=\"isFilterOptionsCollapsed\">\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-xl-8\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6 col-form-label text-body px-0\">{{ 'common.created-at' | translate | titlecase }}</label>\n                                <div class=\"col-sm-18\">\n                                    <div class=\"d-flex align-items-center\">\n                                        <div class=\"input-group\">\n                                            <input\n                                                class=\"form-control\"\n                                                type=\"text\"\n                                                id=\"createdAtFrom\"\n                                                name=\"createdAtFrom\"\n                                                [placeholder]=\"queryParams['createdAt']['gte'] || ('common.from' | translate)\"\n                                                (dateTimeChange)=\"\n                                                    queryParams['createdAt']['gte'] = $event.value && formatDate($event.value, 'yyyy-MM-dd');\n                                                    searchEvent.next()\n                                                \"\n                                                [owlDateTime]=\"createdAtFrom\"\n                                                [owlDateTimeTrigger]=\"createdAtFrom\"\n                                            />\n                                            <input\n                                                class=\"form-control\"\n                                                type=\"text\"\n                                                id=\"createdAtTo\"\n                                                name=\"createdAtTo\"\n                                                [placeholder]=\"queryParams['createdAt']['lte'] || 'To'\"\n                                                (dateTimeChange)=\"\n                                                    queryParams['createdAt']['lte'] = $event.value && formatDate($event.value, 'yyyy-MM-dd');\n                                                    searchEvent.next()\n                                                \"\n                                                [owlDateTime]=\"createdAtTo\"\n                                                [owlDateTimeTrigger]=\"createdAtTo\"\n                                            />\n                                        </div>\n                                        <owl-date-time pickerType=\"calendar\" [firstDayOfWeek]=\"1\" #createdAtFrom></owl-date-time>\n                                        <owl-date-time pickerType=\"calendar\" [firstDayOfWeek]=\"1\" #createdAtTo></owl-date-time>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-8\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6 col-form-label text-body px-0\">{{ 'common.approved-at' | translate }}</label>\n                                <div class=\"col-sm-18\">\n                                    <div class=\"d-flex align-items-center\">\n                                        <div class=\"input-group\">\n                                            <input\n                                                class=\"form-control\"\n                                                type=\"text\"\n                                                id=\"approvedAtFrom\"\n                                                name=\"approvedAtFrom\"\n                                                [placeholder]=\"queryParams['approvedAt']['gte'] || ('common.from' | translate)\"\n                                                (dateTimeChange)=\"\n                                                    queryParams['approvedAt']['gte'] = $event.value && formatDate($event.value, 'yyyy-MM-dd');\n                                                    searchEvent.next()\n                                                \"\n                                                [owlDateTime]=\"approvedAtFrom\"\n                                                [owlDateTimeTrigger]=\"approvedAtFrom\"\n                                            />\n                                            <input\n                                                class=\"form-control\"\n                                                type=\"text\"\n                                                id=\"approvedAtTo\"\n                                                name=\"approvedAtTo\"\n                                                [placeholder]=\"queryParams['approvedAt']['lte'] || 'To'\"\n                                                (dateTimeChange)=\"\n                                                    queryParams['approvedAt']['lte'] = $event.value && formatDate($event.value, 'yyyy-MM-dd');\n                                                    searchEvent.next()\n                                                \"\n                                                [owlDateTime]=\"approvedAtTo\"\n                                                [owlDateTimeTrigger]=\"approvedAtTo\"\n                                            />\n                                        </div>\n                                        <owl-date-time pickerType=\"calendar\" [firstDayOfWeek]=\"1\" #approvedAtFrom></owl-date-time>\n                                        <owl-date-time pickerType=\"calendar\" [firstDayOfWeek]=\"1\" #approvedAtTo></owl-date-time>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-8\">\n                            <div class=\"form-group row\">\n                                <label for=\"type\" class=\"col-sm-6 col-form-label text-body px-0\">{{ 'common.type' | translate }}</label>\n                                <div class=\"col-sm-18\">\n                                    <ng-select\n                                        id=\"type\"\n                                        name=\"type\"\n                                        [items]=\"types\"\n                                        [multiple]=\"true\"\n                                        [closeOnSelect]=\"false\"\n                                        [searchable]=\"false\"\n                                        [placeholder]=\"'common.filter-by-type' | translate\"\n                                        [ngModel]=\"queryParams['type']['or']\"\n                                        (ngModelChange)=\"queryParams['type']['eq'] = $event; searchEvent.next()\"\n                                    >\n                                        <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\n                                            <input class=\"mr-2\" [id]=\"'item-' + index\" type=\"checkbox\" [ngModel]=\"item$.selected\" />\n                                            <span class=\"text-capitalize\">{{ item }}</span>\n                                        </ng-template>\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"table-responsive position-relative\">\n                <table class=\"table table-hover table-bordered table-data\">\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">\n                                {{ 'common.name' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['accountNumber']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['accountNumber'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['accountNumber']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ 'common.type' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['type']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['type'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['type']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ 'common.email' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['email']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['email'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['email']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ 'common.status' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['status']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['status'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['status']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ (scope === 'verification' ? 'common.changed' : 'common.created') | translate }} {{ 'common.at' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"\n                                        getSortingDirection(scope === 'verification' ? ['changeRequests', 'createdAt'] : ['createdAt']) === 'DESC'\n                                            ? faChevronUp\n                                            : faChevronDown\n                                    \"\n                                    (click)=\"\n                                        sort(\n                                            scope === 'verification' ? ['changeRequests', 'createdAt'] : ['createdAt'],\n                                            $event.ctrlKey || $event.metaKey\n                                        )\n                                    \"\n                                    [ngClass]=\"{\n                                        active: isActiveSorting(scope === 'verification' ? ['changeRequests', 'createdAt'] : ['createdAt'])\n                                    }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ (scope === 'verification' ? 'common.changed-at' : 'common.approved-at') | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"\n                                        getSortingDirection(scope === 'verification' ? ['changeRequests', 'approvedAt'] : ['approvedAt']) === 'DESC'\n                                            ? faChevronUp\n                                            : faChevronDown\n                                    \"\n                                    (click)=\"\n                                        sort(\n                                            scope === 'verification' ? ['changeRequests', 'approvedAt'] : ['approvedAt'],\n                                            $event.ctrlKey || $event.metaKey\n                                        )\n                                    \"\n                                    [ngClass]=\"{\n                                        active: isActiveSorting(scope === 'verification' ? ['changeRequests', 'approvedAt'] : ['approvedAt'])\n                                    }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">{{ 'common.actions' | translate }}</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <ng-container *ngIf=\"itemsStream | async; let items\">\n                            <tr *ngFor=\"let user of items\" class=\"e2e-user\">\n                                <th scope=\"row\" [width]=\"'1%'\">\n                                    <uuid [value]=\"user.id\"></uuid>\n                                </th>\n                                <td>\n                                    <user-display\n                                        [user]=\"user\"\n                                        [displayBadges]=\"false\"\n                                        [disableLink]=\"true\"\n                                        (click)=\"openUserProfile(user)\"\n                                    ></user-display>\n                                </td>\n                                <td>\n                                    <span\n                                        class=\"text-capitalize label label-sm\"\n                                        [ngClass]=\"{ 'label-primary': user.type === 'business', 'label-success': user.type === 'personal' }\"\n                                        >{{ user.type }}</span\n                                    >\n                                </td>\n                                <td>\n                                    <copy-wrap [value]=\"user.email\" *ngIf=\"!!user.email; else noMail\">\n                                        <span class=\"text-body\">{{ user.email }}</span>\n                                    </copy-wrap>\n                                    <ng-template #noMail><span class=\"text-muted\">NONE</span></ng-template>\n                                </td>\n                                <td>\n                                    <span\n                                        class=\"text-capitalize badge badge-lg\"\n                                        [ngClass]=\"{\n                                            'badge-default': user.status === 'inactive',\n                                            'badge-success': user.status === 'active',\n                                            'badge-info': user.status === 'pending',\n                                            'badge-warning': ['suspended', 'closing'].includes(user.status),\n                                            'badge-danger': ['frozen', 'closed'].includes(user.status)\n                                        }\"\n                                        >{{ user.status }}</span\n                                    >\n                                </td>\n                                <td>{{ user.createdAt | date: 'medium' }}</td>\n                                <td>{{ user.approvedAt | date: 'medium' }}</td>\n                                <td class=\"action\">\n                                    <a class=\"btn btn-primary-air btn-sm btn-block px-2\" (click)=\"openUserProfile(user)\">{{\n                                        'common.view' | translate\n                                    }}</a>\n                                </td>\n                            </tr>\n                            <tr *ngIf=\"items.length === 0\">\n                                <td colspan=\"8\" class=\"text-center\">{{ 'common.no-entries-found' | translate }}</td>\n                            </tr>\n                        </ng-container>\n                    </tbody>\n                </table>\n                <ng-container *ngIf=\"isFetching | async\">\n                    <circle-spinner></circle-spinner>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n</section>\n";
      /***/
    },

    /***/
    "HLGW":
    /*!*****************************************************************************************!*\
      !*** ./src/app/organization/merchant-customer-list/merchant-customer-list.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: MerchantCustomerListComponent */

    /***/
    function HLGW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MerchantCustomerListComponent", function () {
        return MerchantCustomerListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_merchant_customer_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./merchant-customer-list.component.html */
      "GNzn");
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


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_admin_users_user_form_modal_user_form_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/admin/users/user-form-modal/user-form-modal.component */
      "RYhL");
      /* harmony import */


      var src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/common/services/confirmation.service */
      "fTmd");
      /* harmony import */


      var src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/common/services/session.service */
      "6g7h");
      /* harmony import */


      var _common_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../common/list.component */
      "aJRI");
      /* harmony import */


      var _merchant_user_profile_merchant_user_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../merchant-user-profile/merchant-user-profile.component */
      "RrL8");

      var MerchantCustomerListComponent = /*#__PURE__*/function (_common_list_componen) {
        _inherits(MerchantCustomerListComponent, _common_list_componen);

        var _super = _createSuper(MerchantCustomerListComponent);

        function MerchantCustomerListComponent(http, ngbModal, changeDetector, route, router, session, confirmation, translate) {
          var _this;

          _classCallCheck(this, MerchantCustomerListComponent);

          _this = _super.call(this, http, ngbModal, changeDetector, route, router, session, confirmation);
          _this.translate = translate;
          _this.types = ['personal', 'business'];
          _this.apiUrl = '/users';
          _this.apiQuery = ['approvedAt', 'type', 'createdAt'];
          _this.formComponent = src_app_admin_users_user_form_modal_user_form_modal_component__WEBPACK_IMPORTED_MODULE_9__["UserFormModalComponent"];
          return _this;
        }

        _createClass(MerchantCustomerListComponent, [{
          key: "find",
          value: function find() {
            var _this2 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["withLatestFrom"])(this.session.userStream), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  _ = _ref2[0],
                  user = _ref2[1];

              _this2.apiUrl = "/users/".concat(user.id, "/associates");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(function () {
              return _get(_getPrototypeOf(MerchantCustomerListComponent.prototype), "find", _this2).call(_this2);
            }));
          }
        }, {
          key: "openUserProfile",
          value: function openUserProfile(associate) {
            var modal = this.ngbModal.open(_merchant_user_profile_merchant_user_profile_component__WEBPACK_IMPORTED_MODULE_13__["MerchantUserProfileComponent"], {
              backdrop: 'static',
              windowClass: 'modal-primary',
              size: 'lg'
            });
            var component = modal.componentInstance;
            component.associate = associate;
          }
        }]);

        return MerchantCustomerListComponent;
      }(_common_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"]);

      MerchantCustomerListComponent.ctorParameters = function () {
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
          type: src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"]
        }, {
          type: src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmationService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }];
      };

      MerchantCustomerListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'merchant-customer-list',
        template: _raw_loader_merchant_customer_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], MerchantCustomerListComponent);
      /***/
    },

    /***/
    "RrL8":
    /*!***************************************************************************************!*\
      !*** ./src/app/organization/merchant-user-profile/merchant-user-profile.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: MerchantUserProfileComponent */

    /***/
    function RrL8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MerchantUserProfileComponent", function () {
        return MerchantUserProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_merchant_user_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./merchant-user-profile.component.html */
      "lGZE");
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


      var color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! color */
      "aSns");
      /* harmony import */


      var color__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_common_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/common/list.component */
      "aJRI");
      /* harmony import */


      var src_app_common_models_core_user_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/common/models/core/user.model */
      "vk+e");
      /* harmony import */


      var src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/common/services/confirmation.service */
      "fTmd");
      /* harmony import */


      var src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/common/services/session.service */
      "6g7h");
      /* harmony import */


      var src_app_common_services_toastr_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/common/services/toastr.service */
      "N/y2");
      /* harmony import */


      var src_app_common_services_transaction_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/common/services/transaction.service */
      "m2Kw");
      /* harmony import */


      var src_app_common_transaction_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/common/transaction/transaction-view/transaction-view.component */
      "vOIs");
      /* harmony import */


      var src_app_common_transactions_mixins__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/common/transactions.mixins */
      "HiCw");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var MerchantUserProfileComponent = /*#__PURE__*/function (_src_app_common_list_) {
        _inherits(MerchantUserProfileComponent, _src_app_common_list_);

        var _super2 = _createSuper(MerchantUserProfileComponent);

        function MerchantUserProfileComponent(http, ngbModal, changeDetector, route, router, session, confirmation, calendar, activeModal, translate, transactionService, toastr) {
          var _this3;

          _classCallCheck(this, MerchantUserProfileComponent);

          _this3 = _super2.call(this, http, ngbModal, changeDetector, route, router, session, confirmation);
          _this3.calendar = calendar;
          _this3.activeModal = activeModal;
          _this3.translate = translate;
          _this3.transactionService = transactionService;
          _this3.toastr = toastr;
          _this3.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].displayName;
          _this3.appColor = color__WEBPACK_IMPORTED_MODULE_7__(getComputedStyle(document.body).getPropertyValue('--primary').trim()).lighten(0.1);
          _this3.calculateDeductableAmount = src_app_common_transactions_mixins__WEBPACK_IMPORTED_MODULE_17__["calculateDeductableAmount"];
          _this3.transactionsLoading = new Set();
          _this3.activeTab = 'overview';
          _this3.transaction = {
            amount: '',
            method: 'internal',
            type: 'transfer'
          };
          return _this3;
        }

        _createClass(MerchantUserProfileComponent, [{
          key: "find",
          value: function find() {
            var _this4 = this;

            return this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function (user) {
              _this4.user = new src_app_common_models_core_user_model__WEBPACK_IMPORTED_MODULE_11__["User"](user);
              _this4.apiUrl = "/associations/".concat(_this4.user.id, "/users/").concat(_this4.associate.id, "/transactions");
              _this4.transaction.currency = user.preferredCurrency;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(function () {
              return _get(_getPrototypeOf(MerchantUserProfileComponent.prototype), "find", _this4).call(_this4);
            }));
          }
        }, {
          key: "viewTransaction",
          value: function viewTransaction(transaction) {
            var _this5 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var modal = this.ngbModal.open(src_app_common_transaction_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_16__["TransactionViewComponent"], {
              windowClass: 'modal-primary'
            });
            var transactionView = modal.componentInstance;
            transactionView.transaction = Object.assign({}, transaction);

            if (!!options.activeTab) {
              transactionView.activeTab = options.activeTab;
            }

            transactionView.onCancel.subscribe(function () {
              modal.dismiss();

              _this5.updateEvent.next();
            });
            transactionView.onUpdate.subscribe(function () {
              _this5.updateEvent.next();
            });
            return modal;
          }
        }, {
          key: "formatType",
          value: function formatType(type) {
            return type.slice(0, 1).toUpperCase();
          }
        }, {
          key: "buildBeautifiedType",
          value: function buildBeautifiedType(transaction) {
            switch (transaction.type) {
              case 'transfer':
                if (this.isReceiver(transaction)) {
                  return this.translate.instant('common.transfer-from');
                }

                return this.translate.instant('common.transfer-to');

              case 'deposit':
                return transaction.method === 'card' ? this.translate.instant('common.unload-from') : this.translate.instant('common.deposit-from');

              case 'withdrawal':
                if (transaction.method === 'card') {
                  return this.translate.instant('common.topup-to');
                }

                return this.translate.instant('common.withdrawal-to');

              case 'card-order':
              case 'account-fee':
              case 'payment':
                return this.translate.instant('common.payment-to');

              case 'conversion':
                if (this.isReceiver(transaction)) {
                  return this.translate.instant('common.conversion-from');
                }

                return this.translate.instant('common.conversion-to');

              case 'trade':
                if (this.isReceiver(transaction)) {
                  return transaction.currency.code === 'USD' ? this.translate.instant('common.credit') : this.translate.instant('common.buy');
                }

                return transaction.currency.code === 'USD' ? this.translate.instant('common.debit') : this.translate.instant('common.sell');

              case 'investment':
                if (this.isReceiver(transaction)) {
                  return this.translate.instant('common.investment-from');
                }

                return this.translate.instant('common.investment-to');

              default:
                return Object(lodash__WEBPACK_IMPORTED_MODULE_8__["capitalize"])(transaction.type);
            }
          }
        }, {
          key: "isReceiver",
          value: function isReceiver(transaction) {
            return !!transaction.counterWallet && !!transaction.counterWallet.user && !!this.user && transaction.counterWallet.user.id === this.user.id;
          }
        }, {
          key: "determineSubject",
          value: function determineSubject(transaction) {
            switch (transaction.type) {
              case 'card-order':
                return "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].displayName, " <span class=\"text-muted\">/ ").concat(this.translate.instant('common.card'), "</span>");

              case 'account-fee':
                return "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].displayName, " <span class=\"text-muted\">/ ").concat(this.translate.instant('common.account-fee'), "</span>");

              case 'deposit':
              case 'withdrawal':
                return this.beautifyMethod(transaction);

              case 'payment':
                return src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].displayName;

              case 'transfer':
                if (transaction.isPlatformTransfer()) {
                  return src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].displayName;
                } else if (this.isReceiver(transaction)) {
                  return this.buildAccountHolder(transaction.baseWallet);
                }

              // eslint-disable-next-line no-fallthrough

              default:
                return this.buildAccountHolder(transaction.counterWallet);
            }
          }
        }, {
          key: "beautifyMethod",
          value: function beautifyMethod(transaction) {
            var _a, _b;

            switch (transaction.method) {
              case 'local':
              case 'swift':
                if (transaction.type === 'withdrawal' && transaction.beneficiary && transaction.beneficiary.accountHolder && transaction.beneficiary.accountNumber) {
                  return "".concat(transaction.beneficiary.accountHolder, " <span class=\"text-muted\">/ ").concat(transaction.beneficiary.accountNumber, "</span>");
                }

                return "".concat(((_a = this.user) === null || _a === void 0 ? void 0 : _a.type) === 'business' ? this.translate.instant('common.corporate') : this.translate.instant('common.personal'), " ").concat(this.translate.instant('common.bank-account'));

              case 'card':
                var maskedPan = (_b = transaction.card) === null || _b === void 0 ? void 0 : _b.maskedPan;
                return 'Card' + (maskedPan ? " <span class=\"text-muted\">/ ".concat(maskedPan.slice(0, 4), " ").concat(maskedPan.slice(4, 8), " ").concat(maskedPan.slice(8, 12), " ").concat(maskedPan.slice(12), " </span>") : '');

              default:
                return Object(lodash__WEBPACK_IMPORTED_MODULE_8__["capitalize"])(transaction.method);
            }
          }
        }, {
          key: "markAsPaid",
          value: function markAsPaid(item) {
            var _this6 = this;

            if (item.method === 'crypto') {
              this.viewTransaction(item);
              return;
            }

            this.transactionsLoading.add(item.id);
            this.transactionService.changeStatus(item.id, 'processing').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this6.transactionsLoading["delete"](item.id);
            })).subscribe(function () {
              _this6.toastr.success(_this6.translate.instant('common.deposit-mark-as-paid'));

              _this6.updateEvent.next();

              _this6.subscriptions.add(_this6.confirmation.show({
                type: 'success',
                text: _this6.translate.instant('common.thank-you-for-notifying'),
                confirmText: _this6.translate.instant('common.i-will-upload-a-receipt'),
                cancelText: _this6.translate.instant('common.i-will-do-it-later'),
                cancelClass: 'warning'
              }).subscribe(function (result) {
                if (result === src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmationResult"].CONFIRMED) {
                  _this6.viewTransaction(item, {
                    activeTab: 'attachments'
                  });
                }
              }));
            });
          }
        }, {
          key: "buildAccountHolder",
          value: function buildAccountHolder(wallet) {
            return "".concat(wallet.user ? "".concat(wallet.user.name) : this.displayName, " <span class=\"text-muted\">/ ").concat(Object(src_app_common_transactions_mixins__WEBPACK_IMPORTED_MODULE_17__["buildWalletOwnerAccountNumber"])(wallet, src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].appName), "</span>");
          }
        }]);

        return MerchantUserProfileComponent;
      }(src_app_common_list_component__WEBPACK_IMPORTED_MODULE_10__["ListComponent"]);

      MerchantUserProfileComponent.ctorParameters = function () {
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
          type: src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_13__["SessionService"]
        }, {
          type: src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmationService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }, {
          type: src_app_common_services_transaction_service__WEBPACK_IMPORTED_MODULE_15__["TransactionService"]
        }, {
          type: src_app_common_services_toastr_service__WEBPACK_IMPORTED_MODULE_14__["ToastrService"]
        }];
      };

      MerchantUserProfileComponent.propDecorators = {
        associate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      MerchantUserProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'merchant-user-profile',
        template: _raw_loader_merchant_user_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], MerchantUserProfileComponent);
      /***/
    },

    /***/
    "Y/bI":
    /*!********************************************************!*\
      !*** ./src/app/organization/organization.component.ts ***!
      \********************************************************/

    /*! exports provided: OrganizationComponent */

    /***/
    function YBI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrganizationComponent", function () {
        return OrganizationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_organization_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./organization.component.html */
      "q6Is");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/pro-regular-svg-icons */
      "uB96");
      /* harmony import */


      var _common_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/services/session.service */
      "6g7h");

      var OrganizationComponent = /*#__PURE__*/_createClass(function OrganizationComponent(session) {
        _classCallCheck(this, OrganizationComponent);

        this.session = session;
        this.faEllipsisV = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEllipsisV"];
      });

      OrganizationComponent.ctorParameters = function () {
        return [{
          type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
        }];
      };

      OrganizationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'organization',
        template: _raw_loader_organization_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], OrganizationComponent);
      /***/
    },

    /***/
    "gXvW":
    /*!*****************************************************!*\
      !*** ./src/app/organization/organization.module.ts ***!
      \*****************************************************/

    /*! exports provided: OrganizationModule */

    /***/
    function gXvW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrganizationModule", function () {
        return OrganizationModule;
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


      var _common_quill_editor_quill_editor_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/quill-editor/quill-editor.module */
      "8kSJ");
      /* harmony import */


      var _services_user_invoices_user_invoices_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/user-invoices/user-invoices.module */
      "mzZL");
      /* harmony import */


      var _transfer_transfer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../transfer/transfer.module */
      "uqTW");
      /* harmony import */


      var _merchant_customer_list_merchant_customer_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./merchant-customer-list/merchant-customer-list.component */
      "HLGW");
      /* harmony import */


      var _merchant_user_profile_merchant_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./merchant-user-profile/merchant-user-profile.component */
      "RrL8");
      /* harmony import */


      var _organization_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./organization-routing.module */
      "gw9s");
      /* harmony import */


      var _organization_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./organization.component */
      "Y/bI");

      var OrganizationModule = /*#__PURE__*/_createClass(function OrganizationModule() {
        _classCallCheck(this, OrganizationModule);
      });

      OrganizationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_organization_component__WEBPACK_IMPORTED_MODULE_9__["OrganizationComponent"], _merchant_user_profile_merchant_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["MerchantUserProfileComponent"], _merchant_customer_list_merchant_customer_list_component__WEBPACK_IMPORTED_MODULE_6__["MerchantCustomerListComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _organization_routing_module__WEBPACK_IMPORTED_MODULE_8__["OrganizationRoutingModule"], _common_quill_editor_quill_editor_module__WEBPACK_IMPORTED_MODULE_3__["QuillEditorModule"], _services_user_invoices_user_invoices_module__WEBPACK_IMPORTED_MODULE_4__["UserInvoicesModule"], _transfer_transfer_module__WEBPACK_IMPORTED_MODULE_5__["TransferModule"]]
      })], OrganizationModule);
      /***/
    },

    /***/
    "gw9s":
    /*!*************************************************************!*\
      !*** ./src/app/organization/organization-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: OrganizationRoutingModule */

    /***/
    function gw9s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrganizationRoutingModule", function () {
        return OrganizationRoutingModule;
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


      var _organization_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./organization.component */
      "Y/bI");

      var routes = [{
        path: '',
        component: _organization_component__WEBPACK_IMPORTED_MODULE_3__["OrganizationComponent"]
      }];

      var OrganizationRoutingModule = /*#__PURE__*/_createClass(function OrganizationRoutingModule() {
        _classCallCheck(this, OrganizationRoutingModule);
      });

      OrganizationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrganizationRoutingModule);
      /***/
    },

    /***/
    "lGZE":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organization/merchant-user-profile/merchant-user-profile.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lGZE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{ 'common.customer-profile' | translate }}</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss(); $event.preventDefault()\">&times;</button>\n</div>\n<ul class=\"nav nav-tabs-alt nav-fill\">\n    <li class=\"nav-item\">\n        <a href class=\"nav-link active\" [ngClass]=\"{ active: activeTab === 'overview' }\" (click)=\"activeTab = 'overview'; $event.preventDefault()\">\n            {{ 'common.overview' | translate }}\n        </a>\n    </li>\n    <li class=\"nav-item\">\n        <a href class=\"nav-link\" [ngClass]=\"{ active: activeTab === 'send-payment' }\" (click)=\"activeTab = 'send-payment'; $event.preventDefault()\">\n            {{ 'common.send-payment' | translate }}\n        </a>\n    </li>\n    <li class=\"nav-item\">\n        <a href class=\"nav-link\" [ngClass]=\"{ active: activeTab === 'send-invoice' }\" (click)=\"activeTab = 'send-invoice'; $event.preventDefault()\">\n            {{ 'common.send-invoice' | translate }}\n        </a>\n    </li>\n</ul>\n<div class=\"modal-body\">\n    <ng-container *ngIf=\"activeTab === 'overview'\">\n        <div class=\"row mb-2\">\n            <div class=\"col-lg-8 d-flex align-items-center\">\n                <div class=\"media d-flex align-items-center\">\n                    <user-avatar [user]=\"associate\" size=\"xl\" elementClass=\"mr-3\"></user-avatar>\n                    <div class=\"media-body\">\n                        <div class=\"text-muted font-sm\">{{ 'common.account-name' | translate | titlecase }}</div>\n                        <p class=\"profile-value text-primary\">\n                            {{ associate.name }}\n                        </p>\n                        <div class=\"text-muted font-sm\">{{ 'common.account-number' | translate | titlecase }}</div>\n                        <p>\n                            <copy-wrap [value]=\"associate.accountNumber\">\n                                <span class=\"profile-value text-body\">{{ associate.accountNumber | accountNumber }}</span>\n                            </copy-wrap>\n                        </p>\n                        <div class=\"text-muted font-sm\">{{ 'common.email-address' | translate }}</div>\n                        <p class=\"profile-value\">{{ associate.email }}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row mb-2\">\n            <div class=\"col\">\n                <h5>{{ 'common.transactions' | translate }}</h5>\n            </div>\n        </div>\n        <div class=\"table-responsive\">\n            <table class=\"table table-hover table-card\">\n                <thead class=\"thead-light\">\n                    <tr>\n                        <th scope=\"col\">\n                            {{ 'common.subject' | translate }}\n                            <fa-icon\n                                class=\"sort-toggle\"\n                                [icon]=\"getSortingDirection(['counterWallet', 'id']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                (click)=\"sort(['counterWallet', 'id'], $event.ctrlKey || $event.metaKey)\"\n                                [ngClass]=\"{ active: isActiveSorting(['counterWallet', 'id']) }\"\n                            ></fa-icon>\n                        </th>\n                        <th scope=\"col\" class=\"text-right\">\n                            {{ 'common.amount' | translate }}\n                            <fa-icon\n                                class=\"sort-toggle\"\n                                [icon]=\"getSortingDirection(['amount']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                (click)=\"sort(['amount'], $event.ctrlKey || $event.metaKey)\"\n                                [ngClass]=\"{ active: isActiveSorting(['amount']) }\"\n                            ></fa-icon>\n                        </th>\n                        <th scope=\"col\">\n                            {{ 'common.status' | translate }}\n                            <fa-icon\n                                class=\"sort-toggle\"\n                                [icon]=\"getSortingDirection(['status']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                (click)=\"sort(['status'], $event.ctrlKey || $event.metaKey)\"\n                                [ngClass]=\"{ active: isActiveSorting(['status']) }\"\n                            ></fa-icon>\n                        </th>\n                        <th scope=\"col\">\n                            {{ 'common.created-at' | translate | titlecase }}\n                            <fa-icon\n                                class=\"sort-toggle\"\n                                [icon]=\"getSortingDirection(['createdAt']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                (click)=\"sort(['createdAt'], $event.ctrlKey || $event.metaKey)\"\n                                [ngClass]=\"{ active: isActiveSorting(['createdAt']) }\"\n                            ></fa-icon>\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <ng-container *ngIf=\"itemsStream | async; let items\">\n                        <ng-container *ngIf=\"items.length === 0; else rows\">\n                            <tr>\n                                <td class=\"bg-white\" colspan=\"12\">\n                                    <div class=\"mx-auto p-3 mt-2 mb-4 text-center max-width-sm\">\n                                        <p class=\"mb-3 text-gray\">No transaction found.</p>\n                                    </div>\n                                </td>\n                            </tr>\n                        </ng-container>\n                        <ng-template #rows>\n                            <tr\n                                *ngFor=\"let transaction of items\"\n                                class=\"clickable bg-white e2e-user-transaction transaction-row\"\n                                (click)=\"viewTransaction(transaction)\"\n                                [ngClass]=\"{ 'text-muted': transaction.status !== 'completed' }\"\n                            >\n                                <th scope=\"row\">\n                                    <div class=\"d-flex align-items-center\">\n                                        <ng-container\n                                            *ngIf=\"\n                                                transaction.type === 'deposit' ||\n                                                    transaction.type === 'withdrawal' ||\n                                                    transaction.type === 'card-order' ||\n                                                    transaction.type === 'conversion' ||\n                                                    transaction.type === 'trade' ||\n                                                    transaction.type === 'subscription' ||\n                                                    transaction.type === 'investment';\n                                                else avatar\n                                            \"\n                                        >\n                                            <!-- htmllint attr-bans=\"[]\" -->\n                                            <div class=\"avatar avatar-sm mr-3\">\n                                                <svg\n                                                    class=\"img-avatar\"\n                                                    xmlns=\"http://www.w3.org/2000/svg\"\n                                                    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                                                    xml:space=\"preserve\"\n                                                    text-rendering=\"geometricPrecision\"\n                                                    style=\"\n                                                        shape-rendering: geometricPrecision;\n                                                        image-rendering: optimizeQuality;\n                                                        fill-rule: evenodd;\n                                                        clip-rule: evenodd;\n                                                    \"\n                                                    viewBox=\"0 0 120 120\"\n                                                >\n                                                    <g>\n                                                        <rect [style.fill]=\"appColor\" width=\"120\" height=\"120\"></rect>\n                                                        <text\n                                                            font-weight=\"500\"\n                                                            font-size=\"3.25em\"\n                                                            font-family=\"sans-serif\"\n                                                            fill=\"#ffffff\"\n                                                            x=\"50%\"\n                                                            y=\"50%\"\n                                                            text-anchor=\"middle\"\n                                                            dy=\"0.35em\"\n                                                        >\n                                                            {{ formatType(transaction.type) }}\n                                                        </text>\n                                                    </g>\n                                                </svg>\n                                            </div>\n                                            <!-- htmllint attr-bans=\"$previous\" -->\n                                        </ng-container>\n                                        <ng-template #avatar>\n                                            <user-avatar\n                                                *ngIf=\"!isReceiver(transaction)\"\n                                                [user]=\"transaction.counterWallet.user\"\n                                                size=\"sm\"\n                                                elementClass=\"mr-3\"\n                                            ></user-avatar>\n                                            <user-avatar\n                                                *ngIf=\"isReceiver(transaction)\"\n                                                [user]=\"transaction.baseWallet.user\"\n                                                size=\"sm\"\n                                                elementClass=\"mr-3\"\n                                            ></user-avatar>\n                                        </ng-template>\n                                        <div>\n                                            <div>{{ buildBeautifiedType(transaction) }}</div>\n                                            <ng-container *ngIf=\"!['conversion', 'investment', 'trade'].includes(transaction.type); else addon\">\n                                                <span\n                                                    [ngClass]=\"transaction.status !== 'completed' ? 'text-muted' : 'text-primary'\"\n                                                    [innerHtml]=\"determineSubject(transaction)\"\n                                                ></span>\n                                            </ng-container>\n                                            <ng-template #addon>\n                                                <ng-container *ngIf=\"$any(transaction).allocationsStream | async; let allocations\">\n                                                    <span [ngClass]=\"transaction.status !== 'completed' ? 'text-muted' : 'text-primary'\">\n                                                        {{ allocations[0]?.product?.name }}\n                                                        <span class=\"text-muted\">/ {{ allocations[0]?.id | truncate: false:7:'' }}</span>\n                                                    </span>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"$any(transaction).conversionsStream | async; let conversions\">\n                                                    <span [ngClass]=\"transaction.status !== 'completed' ? 'text-muted' : 'text-primary'\">\n                                                        {{\n                                                            isReceiver(transaction)\n                                                                ? conversions[0]?.baseTransaction?.currency?.name\n                                                                : conversions[0]?.currency?.name\n                                                        }}\n                                                        <span class=\"text-muted\">/ {{ conversions[0]?.id | truncate: false:7:'' }}</span>\n                                                    </span>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"$any(transaction).tradeStream | async; let trades\">\n                                                    <span [ngClass]=\"transaction.status !== 'completed' ? 'text-muted' : 'text-primary'\">\n                                                        {{\n                                                            isReceiver(transaction)\n                                                                ? trades[0]?.counterTransaction?.currency?.name\n                                                                : trades[0]?.baseTransaction?.currency?.name\n                                                        }}\n                                                        <span class=\"text-muted\">/ {{ trades[0]?.id | truncate: false:7:'' }}</span>\n                                                        <span\n                                                            [ngClass]=\"\n                                                                !queryParams['currencyCode']['or']?.length\n                                                                    ? isReceiver(transaction)\n                                                                        ? 'tx-marker down'\n                                                                        : 'tx-marker up'\n                                                                    : ''\n                                                            \"\n                                                        ></span>\n                                                    </span>\n                                                </ng-container>\n                                            </ng-template>\n                                        </div>\n                                    </div>\n                                </th>\n                                <td class=\"text-right\">\n                                    <span\n                                        [ngClass]=\"\n                                            transaction.status !== 'completed' ? 'text-muted' : isReceiver(transaction) ? 'text-green' : 'text-danger'\n                                        \"\n                                        >{{ isReceiver(transaction) ? '' : '-'\n                                        }}{{\n                                            (isReceiver(transaction) ? transaction.settledAmount : calculateDeductableAmount(transaction))\n                                                | amount: transaction.currency.decimalPlaces\n                                        }}\n                                        {{ transaction.currency.code }}</span\n                                    >\n                                </td>\n                                <td>\n                                    <span\n                                        class=\"text-capitalize label\"\n                                        [ngClass]=\"{\n                                            'label-success': transaction.status === 'completed',\n                                            'label-info': transaction.status === 'pending',\n                                            'label-warning': transaction.status === 'processing',\n                                            'label-danger': ['cancelled', 'failed'].indexOf(transaction.status) !== -1\n                                        }\"\n                                        >{{ transaction.status }}</span\n                                    >\n                                </td>\n                                <td>{{ transaction.createdAt | date: 'medium' }}</td>\n                            </tr>\n                        </ng-template>\n                    </ng-container>\n                </tbody>\n            </table>\n        </div>\n        <ng-container *ngIf=\"itemsStream | async; let items\">\n            <ng-container *ngIf=\"items.length !== 0\">\n                <div class=\"row\">\n                    <div class=\"col d-flex justify-content-center mt-3\">\n                        <ngb-pagination\n                            [(page)]=\"page\"\n                            [collectionSize]=\"count\"\n                            (pageChange)=\"select()\"\n                            [pageSize]=\"limit\"\n                            [maxSize]=\"4\"\n                            [rotate]=\"false\"\n                            [boundaryLinks]=\"true\"\n                        >\n                        </ngb-pagination>\n                    </div>\n                </div>\n            </ng-container>\n        </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"activeTab === 'send-payment'\">\n        <transfer-form [transaction]=\"transaction\" [recipient]=\"associate.email\" [showContactBtn]=\"false\" [lockRecipient]=\"true\"></transfer-form>\n    </ng-container>\n    <ng-container *ngIf=\"activeTab === 'send-invoice'\">\n        <user-invoice-form [hideModal]=\"true\" [invoicee]=\"associate.email\" [lockRecipient]=\"true\" [showContacts]=\"false\"></user-invoice-form>\n    </ng-container>\n</div>\n";
      /***/
    },

    /***/
    "q6Is":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organization/organization.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function q6Is(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"session.userStream | async; let user\">\n    <div class=\"container pt-page pb-3\">\n        <div class=\"row justify-content-between align-items-center pb-2\">\n            <div class=\"col-auto\">\n                <h5 class=\"mb-0\">{{ 'common.organization' | translate }}</h5>\n            </div>\n            <div class=\"col-auto d-flex justify-content-end\">\n                <ol class=\"breadcrumb px-0\">\n                    <li class=\"breadcrumb-item\">\n                        <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">{{ 'common.organization' | translate }}</li>\n                </ol>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\">\n        <merchant-customer-list></merchant-customer-list>\n    </div>\n</ng-container>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=organization-organization-module-es5.js.map