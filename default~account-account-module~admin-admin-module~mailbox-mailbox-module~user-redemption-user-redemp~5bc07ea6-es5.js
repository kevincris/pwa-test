(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~account-account-module~admin-admin-module~mailbox-mailbox-module~user-redemption-user-redemp~5bc07ea6"], {
    /***/
    "qhtW":
    /*!*********************************************!*\
      !*** ./src/app/common/list-v2.component.ts ***!
      \*********************************************/

    /*! exports provided: Scope, ListV2Component */

    /***/
    function qhtW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Scope", function () {
        return Scope;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListV2Component", function () {
        return ListV2Component;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/pro-regular-svg-icons */
      "uB96");
      /* harmony import */


      var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/pro-solid-svg-icons */
      "4Bjl");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var date_fns_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! date-fns/format */
      "sWYD");
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


      var _services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./services/session.service */
      "6g7h");

      var Scope;

      (function (Scope) {
        Scope["DEFAULT"] = "default";
      })(Scope || (Scope = {}));
      /**
       * Base class for list controllers.
       */


      var ListV2Component = /*#__PURE__*/function () {
        function ListV2Component(http, ngbModal, changeDetector, route, router, session) {
          _classCallCheck(this, ListV2Component);

          this.http = http;
          this.ngbModal = ngbModal;
          this.changeDetector = changeDetector;
          this.route = route;
          this.router = router;
          this.session = session;
          this.scope = Scope.DEFAULT;
          this.search = '';
          this.limitOpts = [5, 8, 10, 12, 15, 20, 50];
          this.offset = 0;
          this.count = 0;
          this.queryParams = {};
          this.searchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          this.paginationEvent = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          this.isFetching = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](false);
          this.isFilterOptionsCollapsed = true;
          this.formatDate = date_fns_format__WEBPACK_IMPORTED_MODULE_7__["default"];
          this.faPlus = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPlus"];
          this.faSearch = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"];
          this.faChevronUp = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChevronUp"];
          this.faChevronDown = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChevronDown"];
          this.faDownload = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faDownload"];
          this.faCaretDown = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCaretDown"];
          this.defaultLimit = this.limitOpts[2];
          this.defaultOrder = [['createdAt', 'DESC']];
          this.defaultQuery = {};
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"]();
          this.updateEvent = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        }

        _createClass(ListV2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.limit = this.defaultLimit;
            this.order = this.defaultOrder;

            if (this.apiQuery) {
              var _iterator = _createForOfIteratorHelper(this.apiQuery),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var property = _step.value;
                  this.queryParams[property] = {};

                  if (this.defaultQuery && this.defaultQuery[property]) {
                    // eslint-disable-next-line guard-for-in
                    for (var key in this.defaultQuery[property]) {
                      this.queryParams[property][key] = this.defaultQuery[property][key];
                    }
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            this.itemsStream = this.mergeFindEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function () {
              return _this.find();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(function (err) {
              _this.isFetching.next(false);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["throwError"])(err);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function (response) {
              _this.count = response.body.meta.count;
              _this.page = _this.offset / _this.limit + 1;
              var routeParams = {
                page: _this.page !== 1 ? _this.page + '' : undefined,
                perPage: _this.limit !== _this.defaultLimit ? _this.limit + '' : undefined,
                order: !Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEqual"])(_this.order, _this.defaultOrder) ? _this.order.map(function (item) {
                  return item.join(':');
                }) : undefined,
                search: _this.search || undefined,
                scope: _this.scope !== Scope.DEFAULT ? _this.scope : undefined
              };

              for (var _i = 0, _Object$keys = Object.keys(_this.queryParams); _i < _Object$keys.length; _i++) {
                var param = _Object$keys[_i];

                if (Object.keys(_this.queryParams[param]).length > 0) {
                  routeParams[param] = !Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEqual"])(_this.queryParams[param], _this.defaultQuery[param]) ? _this.encodeQueryParam(_this.queryParams[param]) : undefined;
                }
              } // eslint-disable-next-line @typescript-eslint/no-floating-promises


              _this.changeState(routeParams);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function (response) {
              _this.fill = new Array(_this.limit - response.body.data.length);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (response) {
              return response.body.data.map(function (item) {
                return _this.mapItem(item);
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function () {
              _this.changeDetector.detectChanges();

              _this.isFetching.next(false);
            }));
            this.route.queryParamMap.subscribe(function (params) {
              if (params.has('perPage')) {
                _this.limit = ~~params.get('perPage');
              }

              if (params.has('page')) {
                _this.offset = (~~params.get('page') - 1) * _this.limit;
              }

              if (!_this.page) {
                _this.page = 1;
              }

              if (params.has('search')) {
                _this.search = decodeURIComponent(params.get('search'));
              }

              if (params.has('scope')) {
                _this.scope = decodeURIComponent(params.get('scope'));
              }

              if (params.has('order')) {
                _this.order = params.getAll('order').map(function (item) {
                  return item.split(':');
                });
              }

              for (var _i2 = 0, _Object$keys2 = Object.keys(_this.queryParams); _i2 < _Object$keys2.length; _i2++) {
                var _key = _Object$keys2[_i2];

                if (params.has(_key)) {
                  _this.queryParams[_key] = _this.decodeQueryParam(params.getAll(_key)); // Expand filter options if custom filter is set

                  _this.isFilterOptionsCollapsed = false;
                }
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "find",
          value: function find() {
            this.isFetching.next(true);
            return this.http.get(this.apiUrl, {
              observe: 'response',
              params: this.generateListParams()
            });
          }
        }, {
          key: "generateListParams",
          value: function generateListParams() {
            var override = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('limit', (override.limit || this.limit) + '').set('offset', this.offset + '');

            if (this.order) {
              var _iterator2 = _createForOfIteratorHelper(this.order),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var item = _step2.value;
                  params = params.append('order', item.join(':'));
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            if (this.search) {
              // the + sign is already encoded for space, should actually be a plus though
              params = params.set('search', this.search.replace('+', '%2B'));
            }

            if (this.scope && this.scope !== Scope.DEFAULT) {
              params = params.set('scope', this.scope);
            }

            for (var _i3 = 0, _Object$keys3 = Object.keys(this.queryParams); _i3 < _Object$keys3.length; _i3++) {
              var param = _Object$keys3[_i3];
              var encoded = this.encodeQueryParam(this.queryParams[param]);

              var _iterator3 = _createForOfIteratorHelper(encoded),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var value = _step3.value;
                  params = params.append(param, value);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }

            return params;
          }
          /** Modal: Read, update and delete */

        }, {
          key: "showForm",
          value: function showForm(_, item) {
            var _this2 = this;

            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            if (!this.formComponent) {
              throw new Error('No form-template given in controller.');
            }

            var modal = this.ngbModal.open(this.formComponent, Object.assign({
              backdrop: 'static',
              windowClass: 'modal-primary'
            }, options));
            modal.componentInstance.item = this.mapItem(item);

            if (modal.componentInstance.onSave) {
              modal.componentInstance.onSave.subscribe(function () {
                modal.close();

                _this2.updateEvent.next();
              });
            }

            if (modal.componentInstance.onDelete) {
              modal.componentInstance.onDelete.subscribe(function () {
                modal.close();

                _this2.updateEvent.next();
              });
            }
          }
        }, {
          key: "requestExport",
          value: function requestExport() {
            this.subscriptions.add(this.http.get(this.apiUrl, {
              params: this.generateListParams({
                limit: 1000
              })["delete"]('offset'),
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
              }),
              observe: 'response',
              responseType: 'blob'
            }).subscribe(function (response) {
              if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(response.body);
              } else {
                var data = window.URL.createObjectURL(response.body);
                var link = document.createElement('a');
                link.href = data;
                var contentDisposition = response.headers.get('Content-Disposition');
                link.download = contentDisposition ? contentDisposition.substring(contentDisposition.indexOf('filename=') + 9, contentDisposition.length - 1) : 'export.xlsx';
                link.click();
                setTimeout(function () {
                  // For Firefox it is necessary to delay revoking the ObjectURL
                  window.URL.revokeObjectURL(data);
                }, 100);
              }
            }));
          }
          /** Select specified page */

        }, {
          key: "select",
          value: function select(page) {
            if (typeof page !== 'undefined') {
              this.page = page;
            }

            this.offset = (this.page - 1) * this.limit;
            this.paginationEvent.next();
          }
          /**
           * Change the sorting order
           * @param order Sequelize Order syntax
           * @param toggle Whether to toggle the order instead of replacing
           */

        }, {
          key: "sort",
          value: function sort(order) {
            var toggle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            // TODO: Allow order functions to be additive
            if (typeof this.order === 'string') {
              return;
            } // Find out if order for that attribute is active already


            var index = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["findIndex"])(this.order, Object(lodash__WEBPACK_IMPORTED_MODULE_8__["matches"])(order)); // if is already selected, toggle

            if (index === -1 || Object(lodash__WEBPACK_IMPORTED_MODULE_8__["last"])(this.order[index]) === 'DESC') {
              order = [].concat(_toConsumableArray(order), ['ASC']);
            } else {
              order = [].concat(_toConsumableArray(order), ['DESC']);
            }

            if (!toggle) {
              // Replace whole order
              this.order = order.length > 0 ? [order] : this.defaultOrder;
            } else {
              if (index !== -1) {
                // If sorting for this attribute is active
                if (order.length === 0) {
                  // If the same icon is clicked three times, remove it
                  this.order.splice(index, 1);
                } else {
                  // If it was clicked twice, swap the direction
                  this.order[index] = order;
                }
              } else {
                // If not active, add new order criteria
                this.order.push(order);
              }
            }

            this.select(1);
          }
        }, {
          key: "isActiveSorting",
          value: function isActiveSorting(order) {
            return !!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["find"])(this.order, Object(lodash__WEBPACK_IMPORTED_MODULE_8__["matches"])(order));
          }
        }, {
          key: "getSortingDirection",
          value: function getSortingDirection(order) {
            var orderElement = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["find"])(this.order, Object(lodash__WEBPACK_IMPORTED_MODULE_8__["matches"])(order));
            return Object(lodash__WEBPACK_IMPORTED_MODULE_8__["last"])(orderElement);
          }
        }, {
          key: "isActiveQuery",
          value: function isActiveQuery(query) {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEqual"])(this.queryParams, query);
          }
        }, {
          key: "getDefaultQuery",
          value: function getDefaultQuery() {
            return this.defaultQuery;
          }
        }, {
          key: "mergeFindEvents",
          value: function mergeFindEvents() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(undefined), this.searchEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(600)), this.paginationEvent, this.updateEvent);
          }
        }, {
          key: "mapItem",
          value: function mapItem(item) {
            return this.model ? new this.model(item) : item;
          }
        }, {
          key: "changeState",
          value: function changeState(queryParams) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var scroll;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      scroll = window.scrollY;
                      _context.next = 3;
                      return this.router.navigate([], {
                        relativeTo: this.route,
                        queryParams: queryParams,
                        queryParamsHandling: 'merge'
                      });

                    case 3:
                      window.scrollTo(0, scroll);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "decodeQueryParam",
          value: function decodeQueryParam(query) {
            var decoded = {};

            var _iterator4 = _createForOfIteratorHelper(query),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var q = _step4.value;

                var _q$split = q.split(':'),
                    _q$split2 = _slicedToArray(_q$split, 2),
                    op = _q$split2[0],
                    value = _q$split2[1];

                decoded[op] = value.split(',');
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return decoded;
          }
        }, {
          key: "encodeQueryParam",
          value: function encodeQueryParam(query) {
            var encoded = [];

            for (var _i4 = 0, _Object$keys4 = Object.keys(query); _i4 < _Object$keys4.length; _i4++) {
              var op = _Object$keys4[_i4];
              var value = query[op];

              if (!value || Array.isArray(value) && value.length === 0) {
                continue;
              }

              encoded.push("".concat(op, ":").concat(Array.isArray(value) ? value.join(',') : value));
            }

            return encoded;
          }
        }]);

        return ListV2Component;
      }();

      ListV2Component.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"]
        }];
      };

      ListV2Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'undef-list-v2',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        template: ''
      })], ListV2Component);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~account-account-module~admin-admin-module~mailbox-mailbox-module~user-redemption-user-redemp~5bc07ea6-es5.js.map