(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~discover-discover-module"], {
    /***/
    "M0kQ":
    /*!*************************************************************!*\
      !*** ./src/app/common/allocations/allocations.component.ts ***!
      \*************************************************************/

    /*! exports provided: AllocationsComponent */

    /***/
    function M0kQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllocationsComponent", function () {
        return AllocationsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_allocations_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./allocations.component.html */
      "P3h3");
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


      var _list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../list.component */
      "aJRI");
      /* harmony import */


      var _services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/confirmation.service */
      "fTmd");
      /* harmony import */


      var _services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/session.service */
      "6g7h");
      /* harmony import */


      var _services_toastr_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/toastr.service */
      "N/y2");

      var AllocationsComponent = /*#__PURE__*/function (_list_component__WEBP) {
        _inherits(AllocationsComponent, _list_component__WEBP);

        var _super = _createSuper(AllocationsComponent);

        function AllocationsComponent(http, ngbModal, changeDetector, route, router, session, confirmation, toastr, translate) {
          var _this;

          _classCallCheck(this, AllocationsComponent);

          _this = _super.call(this, http, ngbModal, changeDetector, route, router, session, confirmation);
          _this.toastr = toastr;
          _this.translate = translate;
          _this.apiUrl = '/allocations';
          return _this;
        }

        _createClass(AllocationsComponent, [{
          key: "approve",
          value: function approve(allocation) {
            var _this2 = this;

            this.http.post("/allocations/".concat(allocation.id), {
              id: Math.floor(Math.random() * 10000),
              jsonrpc: '2.0',
              method: 'approve'
            }, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json-rpc'
              })
            }).subscribe(function (response) {
              Object.assign(allocation, response.result);

              _this2.toastr.success(_this2.translate.instant('allocations.allocation-approved'));

              _this2.updateEvent.next();
            });
          }
        }, {
          key: "cancel",
          value: function cancel(allocation) {
            var _this3 = this;

            this.http.patch("/allocations/".concat(allocation.id), [{
              op: 'replace',
              path: '/status',
              value: 'cancelled'
            }], {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json-patch+json'
              })
            }).subscribe(function (response) {
              Object.assign(allocation, response);

              _this3.toastr.success(_this3.translate.instant('allocations.allocation-canceled'));

              _this3.updateEvent.next();
            });
          }
        }]);

        return AllocationsComponent;
      }(_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"]);

      AllocationsComponent.ctorParameters = function () {
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
          type: _services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"]
        }, {
          type: _services_toastr_service__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }];
      };

      AllocationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'allocations',
        template: _raw_loader_allocations_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AllocationsComponent);
      /***/
    },

    /***/
    "P3h3":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/allocations/allocations.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function P3h3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"container-fluid\">\n    <div class=\"card\">\n        <div class=\"card-header d-flex justify-content-between align-items-center\">\n            <span>{{ 'common.allocations' | translate }}</span>\n            <div>\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"requestExport()\">\n                    <fa-icon [icon]=\"faDownload\" class=\"mr-1\"></fa-icon> {{ 'common.export' | translate }}\n                </button>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row no-gutters align-items-center mb-3\">\n                <div class=\"col-lg-7 mb-2 mb-lg-0\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><fa-icon [icon]=\"faSearch\"></fa-icon></span>\n                        </span>\n                        <input\n                            type=\"text\"\n                            name=\"searchText\"\n                            (ngModelChange)=\"searchEvent.next()\"\n                            [placeholder]=\"'common.search' | translate\"\n                            class=\"form-control\"\n                            [(ngModel)]=\"search\"\n                        />\n                    </div>\n                </div>\n                <div class=\"col-lg-17 d-flex justify-content-between align-items-center\">\n                    <span class=\"ml-lg-3\"\n                        >{{ count | number }} {{ (count === 1 ? 'common.entry-found' : 'common.entries-found') | translate | lowercase }}</span\n                    >\n                    <div class=\"d-flex align-items-center\">\n                        <ng-select\n                            class=\"mr-2\"\n                            [(ngModel)]=\"limit\"\n                            dropdownPosition=\"auto\"\n                            (change)=\"select(1)\"\n                            [items]=\"limitOpts\"\n                            [placeholder]=\"'common.show-entries-per-page' | translate\"\n                            [clearable]=\"false\"\n                            [searchable]=\"false\"\n                            required\n                        >\n                            <ng-template ng-label-tmp let-item=\"item\">{{ 'common.show-entries' | translate: { value: item } }}</ng-template>\n                            <ng-template ng-option-tmp let-item=\"item\">{{ item }} {{ 'common.entries' | translate }}</ng-template>\n                        </ng-select>\n                        <ngb-pagination\n                            [(page)]=\"page\"\n                            [collectionSize]=\"count\"\n                            (pageChange)=\"select()\"\n                            [pageSize]=\"limit\"\n                            [maxSize]=\"5\"\n                            [ellipses]=\"false\"\n                            [rotate]=\"true\"\n                            [boundaryLinks]=\"true\"\n                        >\n                        </ngb-pagination>\n                    </div>\n                </div>\n            </div>\n            <div class=\"table-responsive position-relative\">\n                <table class=\"table table-hover table-bordered table-data\">\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">\n                                Product\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['productId']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['productId'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['productId']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ 'allocations.investor' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['user', 'id']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['user', 'id'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['user', 'id']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\" class=\"text-right\">\n                                {{ 'common.amount' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['baseTransaction', 'amount']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['baseTransaction', 'amount'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['baseTransaction', 'amount']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\" class=\"text-right\">\n                                {{ 'common.units' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['counterTransaction', 'amount']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['counterTransaction', 'amount'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['counterTransaction', 'amount']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ 'common.status' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['status']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['status'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['status']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ 'common.created-at' | translate | titlecase }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['createdAt']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['createdAt'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['createdAt']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\" *ngIf=\"['admin'].includes(session.user?.role)\">{{ 'common.actions' | translate }}</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <ng-container *ngIf=\"itemsStream | async; let items\">\n                            <tr *ngFor=\"let allocation of items\">\n                                <th scope=\"row\" [width]=\"'1%'\">\n                                    <uuid [value]=\"allocation.id\"></uuid>\n                                </th>\n                                <td>{{ allocation.product?.currency?.code }}</td>\n                                <td>\n                                    <user-display [user]=\"allocation.user\"> </user-display>\n                                </td>\n                                <td class=\"text-right\" [ngClass]=\"allocation.status === 'cancelled' ? 'text-muted' : 'text-primary'\">\n                                    {{ allocation.baseTransaction?.amount | amount: allocation.baseTransaction?.currency?.decimalPlaces }}\n                                    {{ allocation.baseTransaction?.currency?.code }}\n                                </td>\n                                <td class=\"text-right\" [ngClass]=\"allocation.status === 'completed' ? 'text-green' : 'text-muted'\">\n                                    {{ allocation.counterTransaction?.amount | amount: allocation.counterTransaction?.currency?.decimalPlaces }}\n                                    {{ allocation.counterTransaction?.currency?.code }}\n                                </td>\n                                <td>\n                                    <span\n                                        class=\"text-capitalize badge badge-lg\"\n                                        [ngClass]=\"{\n                                            'badge-success': allocation.status === 'completed',\n                                            'badge-info': allocation.status === 'pending',\n                                            'badge-danger': allocation.status === 'cancelled'\n                                        }\"\n                                        >{{ allocation.status }}</span\n                                    >\n                                </td>\n                                <td>{{ allocation.createdAt | date: 'medium' }}</td>\n                                <td class=\"action\" *ngIf=\"['admin'].includes(session.user?.role)\">\n                                    <div class=\"btn-group w-100\">\n                                        <button\n                                            type=\"button\"\n                                            class=\"btn btn-primary-air btn-sm btn-block px-2\"\n                                            (click)=\"$event.preventDefault()\"\n                                            *ngIf=\"allocation.status !== 'pending'\"\n                                            disabled\n                                        >\n                                            {{ 'common.view' | translate }}\n                                        </button>\n                                        <button\n                                            type=\"button\"\n                                            class=\"btn btn-success btn-sm btn-block px-2\"\n                                            (click)=\"approve(allocation)\"\n                                            *ngIf=\"allocation.status === 'pending'\"\n                                        >\n                                            Approve\n                                        </button>\n                                        <div\n                                            class=\"btn-group\"\n                                            ngbDropdown\n                                            container=\"body\"\n                                            placement=\"bottom-right\"\n                                            *ngIf=\"allocation.status === 'pending'\"\n                                        >\n                                            <button\n                                                class=\"btn btn-sm dropdown-toggle-split\"\n                                                [ngClass]=\"allocation.status === 'pending' ? 'btn-success' : 'btn-primary-air'\"\n                                                ngbDropdownToggle\n                                            >\n                                                <fa-icon [icon]=\"faCaretDown\"></fa-icon>\n                                            </button>\n                                            <div class=\"dropdown-menu dropdown-menu-sm\" ngbDropdownMenu>\n                                                <a href ngbDropdownItem (click)=\"cancel(allocation); $event.preventDefault()\">{{\n                                                    'common.cancel' | translate\n                                                }}</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr *ngIf=\"items.length === 0\">\n                                <td colspan=\"8\" class=\"text-center\">{{ 'common.no-entries-found' | translate }}</td>\n                            </tr>\n                        </ng-container>\n                    </tbody>\n                </table>\n                <ng-container *ngIf=\"isFetching | async\">\n                    <circle-spinner></circle-spinner>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n</section>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~admin-admin-module~discover-discover-module-es5.js.map