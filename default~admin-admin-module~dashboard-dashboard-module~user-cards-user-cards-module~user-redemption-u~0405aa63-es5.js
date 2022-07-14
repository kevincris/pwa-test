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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~dashboard-dashboard-module~user-cards-user-cards-module~user-redemption-u~0405aa63"], {
    /***/
    "+XXr":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/card-view/modal-unload/modal-unload.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XXr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border b-b-1\">\n    <ion-toolbar>\n        <ion-buttons slot=\"primary\">\n            <ion-button color=\"dark\" (click)=\"dismiss()\">\n                <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>{{ 'common.unload-card' | translate}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding px-3\">\n        <form\n            class=\"form-validation\"\n            #unloadForm=\"ngForm\"\n            [ngClass]=\"{ 'ng-submitted': unloadForm.submitted }\"\n            autocomplete=\"false\"\n            (ngSubmit)=\"submit()\"\n            novalidate\n        >\n            <div class=\"row\">\n                <div class=\"form-group col\">\n                    <label class=\"font-md\" for=\"source\">{{ 'common.source' | translate }} ({{ 'common.card' | translate }})</label>\n                    <ng-select\n                        class=\"ng-select-lg ng-select-topup\"\n                        [placeholder]=\"'common.select-currency' | translate\"\n                        [(ngModel)]=\"sourceCurrencyCode\"\n                        (ngModelChange)=\"fetchEvent.next()\"\n                        name=\"sourceCurrencyCode\"\n                        [items]=\"niumCurrencies\"\n                        [clearable]=\"false\"\n                        [searchable]=\"true\"\n                        [required]=\"true\"\n                        appendTo=\".modal-container\"\n                    >\n                        <ng-template ng-label-tmp let-item=\"item\">\n                            <b class=\"mr-1\">{{ item }}</b>\n                            <span class=\"small text-muted\">{{ getCardBalance(item) | amount: 2 }} {{ item }}</span>\n                        </ng-template>\n                        <ng-template ng-option-tmp let-item=\"item\">\n                            {{ item }}\n                            <span class=\"float-right small text-muted\">{{ getCardBalance(item) | amount: 2 }} {{ item }}</span>\n                        </ng-template>\n                    </ng-select>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col\">\n                    <div class=\"d-flex justify-content-between\">\n                        <div class=\"d-flex\">\n                            <label class=\"font-md\"> {{ 'common.amount' | translate }} </label>\n                        </div>\n                    </div>\n                    <input\n                        type=\"number\"\n                        class=\"form-control form-control-lg\"\n                        id=\"amount\"\n                        name=\"amount\"\n                        [placeholder]=\"'0.00'\"\n                        [(ngModel)]=\"amount\"\n                        #amountInput=\"ngModel\"\n                        required\n                    />\n                    <div *ngIf=\"amountInput.invalid && (unloadForm.submitted || amountInput.dirty)\" class=\"error-messages\">\n                        <div class=\"form-control-feedback\" *ngIf=\"amountInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col\">\n                    <label class=\"font-md\" for=\"destination\"> {{ 'common.destination' | translate }} ({{ 'common.wallet' | translate }}) </label>\n                    <currency-select\n                        [(currency)]=\"destinationCurrency\"\n                        [user]=\"session.user\"\n                        [isLarge]=\"true\"\n                        [required]=\"true\"\n                        [salesProceeds]=\"true\"\n                        [filterBy]=\"['USD']\"\n                        (currencyChange)=\"fetchEvent.next()\"\n                    >\n                    </currency-select>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <table class=\"table\">\n                        <tr class=\"table-light\" *ngIf=\"calculateFee()\">\n                            <td>{{ 'common.service-fee' | translate }}</td>\n                            <td class=\"text-right\">\n                                <span class=\"font-weight-bold\" *ngIf=\"!isFetching; else spinner\"\n                                    >{{ calculateFee() | amount: 2 }} {{ destinationCurrency.code }}\n                                </span>\n                            </td>\n                        </tr>\n                        <tr class=\"table-light\" *ngIf=\"sourceCurrencyCode !== destinationCurrency.code\">\n                            <td>Exchange rate</td>\n                            <td class=\"text-right\">\n                                <span class=\"font-weight-bold\" *ngIf=\"!isFetching; else spinner\">\n                                    1 {{ sourceCurrencyCode }} = {{ exchangeRate | amount: 4 }} {{destinationCurrency.code}}\n                                </span>\n                            </td>\n                        </tr>\n                        <tr class=\"table-light\">\n                            <td>{{ 'common.amount-to-be-credited' | translate }}</td>\n                            <td class=\"text-right\"><b>{{ calculateAmount() | amount: 2 }} {{ destinationCurrency.code }}</b></td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"isLoading\">\n                <span *ngIf=\"!isLoading; else spinner\">{{ 'common.submit' | translate }}</span>\n            </button>\n        </form>\n    </div>\n</ion-content>\n<ng-template #spinner><ion-spinner name=\"crescent\" class=\"font-md\"></ion-spinner></ng-template>\n";
      /***/
    },

    /***/
    "1+je":
    /*!***********************************************************!*\
      !*** ./src/app/common/card-dummy/card-dummy.component.ts ***!
      \***********************************************************/

    /*! exports provided: CardDummyComponent */

    /***/
    function je(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardDummyComponent", function () {
        return CardDummyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_dummy_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-dummy.component.html */
      "gtds");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var CardDummyComponent = /*#__PURE__*/function () {
        function CardDummyComponent() {
          _classCallCheck(this, CardDummyComponent);
        }

        _createClass(CardDummyComponent, [{
          key: "getLogo",
          value: function getLogo() {
            switch (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appName) {
              case 'sgpmx':
                return '/img/brand/logo-symbol.svg';

              case 'premiertrust':
              case 'ubk':
              case 'birex':
              case 'usunpay':
              case 'etransfer':
                return '/img/brand/logo.svg';

              default:
                return '/img/brand/logo-symbol-white.svg';
            }
          }
        }, {
          key: "getBackgroundImageStyle",
          value: function getBackgroundImageStyle() {
            if (!this.backgroundImage) {
              return;
            }

            var styles = {
              backgroundImage: 'url(' + this.backgroundImage + ')',
              height: '190px',
              width: '300px',
              backgroundSize: 'contain',
              zIndex: 'auto',
              border: 'none',
              boxShadow: 'none'
            };
            return styles;
          }
        }]);

        return CardDummyComponent;
      }();

      CardDummyComponent.propDecorators = {
        card: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        backgroundImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      CardDummyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'card-dummy',
        template: _raw_loader_card_dummy_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardDummyComponent);
      /***/
    },

    /***/
    "22Go":
    /*!****************************************************************!*\
      !*** ./src/app/common/card-view/modal-fees/modal-fees.page.ts ***!
      \****************************************************************/

    /*! exports provided: ModalFeesPage */

    /***/
    function Go(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalFeesPage", function () {
        return ModalFeesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_fees_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-fees.page.html */
      "Tg4p");
      /* harmony import */


      var _modal_fees_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-fees.page.scss */
      "B5K8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ModalFeesPage = /*#__PURE__*/function () {
        function ModalFeesPage(modalController) {
          _classCallCheck(this, ModalFeesPage);

          this.modalController = modalController;
        }

        _createClass(ModalFeesPage, [{
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }]);

        return ModalFeesPage;
      }();

      ModalFeesPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      ModalFeesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-fees',
        template: _raw_loader_modal_fees_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_fees_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModalFeesPage);
      /***/
    },

    /***/
    "24Jd":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/card-view/card-view.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Jd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"background\"></div>\n\n<ion-content>\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button size=\"small\" color=\"primary\" (click)=\"dismiss()\">\n            <ion-icon name=\"close-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n    <ion-fab horizontal=\"end\" vertical=\"top\" slot=\"fixed\" class=\"change-pin\">\n        <div ngbDropdown class=\"d-inline-block\">\n            <ion-fab-button\n                size=\"small\"\n                class=\"bg-primary\"\n                placement=\"bottom-right\"\n                ngbDropdownToggle\n                closeIcon=\"chevron-up-outline\"\n                [disabled]=\"!( session.user?.id === item.cardholder?.id || ['admin'].includes(session.user?.role))\"\n            >\n                <ion-icon name=\"ellipsis-horizontal\"></ion-icon>\n            </ion-fab-button>\n            <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                <button ngbDropdownItem (click)=\"openDownloadReportModal()\">{{ 'common.download-report' | translate }}</button>\n                <button *ngIf=\"item.type === 'physical'\" ngbDropdownItem (click)=\"openChangePinModal()\">{{ 'common.change-pin' | translate }}</button>\n                <button ngbDropdownItem (click)=\"openUnloadModal()\">{{ 'common.unload-card' | translate}}</button>\n                <button ngbDropdownItem (click)=\"openViewNiumTermsModal()\">{{'card-view.view-terms' | translate}}</button>\n                <button ngbDropdownItem (click)=\"openFeesModal()\">{{'card-view.view-fee-schedule' | translate}}</button>\n                <ng-container *ngIf=\"['admin'].includes(session.user?.role)\">\n                    <div class=\"dropdown-divider\"></div>\n                    <div class=\"dropdown-item font-sm font-weight-bold text-gray\">{{'card-view.admin-functions' | translate}}</div>\n                    <button ngbDropdownItem (click)=\"offLedgerModal('load')\">\n                        {{ 'common.load-card' | translate }} ({{ 'common.off-ledger' | translate }})\n                    </button>\n                    <button ngbDropdownItem (click)=\"offLedgerModal('unload')\">\n                        {{ 'common.unload-card' | translate }} ({{ 'common.off-ledger' | translate }})\n                    </button>\n                </ng-container>\n            </div>\n        </div>\n    </ion-fab>\n    <ion-grid [fixed]=\"true\">\n        <div class=\"top-card ion-text-center\">\n            <ion-chip (click)=\"presentCardDetails()\" color=\"light\" [ngClass]=\"item.type === 'virtual' ? 'clickable' : 'cursor-default'\">\n                <ion-label class=\"text-monospace text-white\">{{ formatPan(item.maskedPan) }}</ion-label>\n                <fa-icon *ngIf=\"item.type === 'virtual'\" class=\"ml-1\" [icon]=\"faEye\"></fa-icon>\n            </ion-chip>\n            <div class=\"balances\">\n                <ng-container *ngIf=\"balances$ | async; else loading\">\n                    <div\n                        (mouseenter)=\"balances.length <= 1 ? null : popoverBalance.toggle()\"\n                        (mouseleave)=\"balances.length <= 1 ? null : popoverBalance.toggle()\"\n                    >\n                        <h1 class=\"text-white mb-0\">\n                            {{ balances[0].balance | amount: 2 }}\n                            <ion-text color=\"primary\">{{ balances[0].curSymbol }}</ion-text>\n                        </h1>\n                        <ion-row [ngClass]=\"{ 'd-none': balances.length <= 1 }\">\n                            <ion-col size=\"12\" size-md=\"6\" offset-md=\"3\">\n                                <ion-button\n                                    fill=\"clear\"\n                                    [ngbPopover]=\"balancesTemplate\"\n                                    popoverClass=\"popover-flex popover-dark\"\n                                    placement=\"bottom\"\n                                    size=\"small\"\n                                    #popoverBalance=\"ngbPopover\"\n                                >\n                                    <ion-icon name=\"eye\"></ion-icon>&nbsp;view all balances\n                                </ion-button>\n                                <ng-template #balancesTemplate>\n                                    <table class=\"table table-dark table-striped table-borderless mb-0\">\n                                        <tbody>\n                                            <tr *ngFor=\"let balance of balances.slice(1)\">\n                                                <td>{{ balance.balance }}</td>\n                                                <td class=\"text-primary text-right\">{{ balance.curSymbol }}</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </ng-template>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </ng-container>\n                <ng-template #loading>\n                    <div class=\"loader\">\n                        <ion-spinner name=\"dots\" color=\"light\"></ion-spinner>\n                    </div>\n                </ng-template>\n            </div>\n            <div class=\"data\">\n                <ul class=\"ion-text-left\">\n                    <li><span class=\"title\">{{ 'common.name-on-card' | translate }}</span></li>\n                    <li>\n                        <p>{{ userDetails?.firstName }} {{ userDetails?.lastName }}</p>\n                    </li>\n                </ul>\n                <ul class=\"ion-text-right\">\n                    <li><span class=\"title\">{{ 'common.status' | translate }}</span></li>\n                    <li>\n                        <p>\n                            <span\n                                class=\"text-capitalize\"\n                                [ngClass]=\"{\n                                    'text-success': item.status === 'active',\n                                    'text-danger': item.status === 'blocked',\n                                    'text-warning': item.status === 'inactive'\n                                }\"\n                            >\n                                {{ item.status }}\n                            </span>\n                        </p>\n                    </li>\n                </ul>\n            </div>\n\n            <ion-row class=\"primary-actions\">\n                <ion-col>\n                    <ion-button\n                        expand=\"block\"\n                        (click)=\"presentTopupModal()\"\n                        [disabled]=\"!this.balances || !( session.user?.id === item.cardholder?.id || ['admin'].includes(session.user?.role))\"\n                    >\n                        {{ 'common.top-up' | translate | titlecase }}\n                    </ion-button>\n                </ion-col>\n                <ion-col>\n                    <div class=\"btn-group w-100 custom-actions\">\n                        <button\n                            class=\"btn btn-block success-actions\"\n                            (click)=\"openSwapModal()\"\n                            [disabled]=\"!this.balances || !( session.user?.id === item.cardholder?.id || ['admin'].includes(session.user?.role))\"\n                        >\n                            <span class=\"text-uppercase\">{{ 'common.exchange' | translate }}</span>\n                        </button>\n                        <button\n                            class=\"btn btn-block danger-actions m-0\"\n                            (click)=\"blockUnblockCard(copy.status === 'active')\"\n                            [disabled]=\"isBlockUnblockLoading || !( session.user?.id === item.cardholder?.id || ['admin'].includes(session.user?.role))\"\n                        >\n                            <ng-template #spinner><ion-spinner name=\"crescent\"></ion-spinner></ng-template>\n                            <span class=\"text-uppercase\" *ngIf=\"!isBlockUnblockLoading; else spinner\"\n                                >{{ (copy.status === 'active' ? 'common.block' : 'common.unblock') | translate }}</span\n                            >\n                        </button>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </div>\n        <div class=\"section-list\">\n            <ion-item *ngFor=\"let tx of transactions\">\n                <div\n                    class=\"thumb\"\n                    [ngClass]=\"getTransactionColor(tx)\"\n                    slot=\"start\"\n                    placement=\"right\"\n                    [ngbTooltip]=\"tx.retrievalReferenceNumber\"\n                    triggers=\"click:blur\"\n                >\n                    <ion-icon [name]=\"getTransactionIcon(tx)\"></ion-icon>\n                </div>\n                <ion-label>\n                    <h4><span [innerHtml]=\"getDescription(tx)\"></span></h4>\n                    <p>{{ tx.createdAt | date: 'medium' }}</p>\n                    <span class=\"label label-xs label-primary\" *ngIf=\"tx.merchantCategory\">{{ tx.merchantCategory }}</span>\n                    <span class=\"label label-xs label-primary\" *ngIf=\"tx.transactionType.includes('Wallet_Credit_Mode_Prefund')\"\n                        >{{ 'common.top-up' | translate }}</span\n                    >\n                    <span class=\"label label-xs label-primary\" *ngIf=\"tx.transactionType.includes('Wallet_Refund')\"\n                        >{{ 'common.top-up' | translate | titlecase }}</span\n                    >\n                    <span class=\"label label-xs label-primary\" *ngIf=\"tx.transactionType.includes('Wallet_Fund_Transfer')\"\n                        >{{ 'common.forex' | translate }}</span\n                    >\n                </ion-label>\n                <div slot=\"end\">\n                    <div\n                        [ngClass]=\"{\n                            'text-green': ['Approved', 'Pending'].includes(tx.status) && !tx.debit,\n                            'text-danger': ['Approved', 'Pending'].includes(tx.status) && tx.debit,\n                            'text-muted': tx.status === 'Declined'\n                        }\"\n                    >\n                        {{ tx.debit ? '-' : '+' }}{{ tx.authAmount | amount }} {{ tx.authCurrencyCode || tx.transactionCurrencyCode }}\n                    </div>\n                    <small\n                        class=\"text-muted\"\n                        *ngIf=\"tx.transactionType !== 'Auto_Sweep' && tx.transactionType !== 'Wallet_Fund_Transfer' && tx.authCurrencyCode !== tx.transactionCurrencyCode\"\n                    >\n                        {{ tx.debit ? '-' : '+' }}{{ tx.cardTransactionAmount | amount }} {{ tx.transactionCurrencyCode }}\n                    </small>\n                    <small\n                        class=\"text-green\"\n                        *ngIf=\"(tx.transactionType === 'Auto_Sweep' || tx.transactionType === 'Wallet_Fund_Transfer') && tx.authCurrencyCode !== tx.transactionCurrencyCode\"\n                    >\n                        +{{ tx.cardTransactionAmount | amount }} {{ tx.transactionCurrencyCode }}\n                    </small>\n                </div>\n            </ion-item>\n            <ion-item class=\"ion-text-center\" *ngIf=\"!isFetching && transactions.length === 0\">\n                <ion-label color=\"medium\"> {{ 'no-history-found' | translate }} </ion-label>\n            </ion-item>\n            <ion-infinite-scroll (ionInfinite)=\"fetchTransactions($event)\" class=\"ion-padding-top\">\n                <ion-infinite-scroll-content loadingSpinner=\"crescent\"> </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n        </div>\n    </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "59Ih":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/card-view/modal-change-pin/modal-change-pin.page.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ih(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border b-b-1\">\n    <ion-toolbar>\n        <ion-buttons slot=\"primary\">\n            <ion-button color=\"dark\" (click)=\"dismiss()\">\n                <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>{{ 'common.change-pin' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<div class=\"ion-padding p-3\">\n    <form\n        class=\"form-validation\"\n        #changePinForm=\"ngForm\"\n        [ngClass]=\"{ 'ng-submitted': changePinForm.submitted }\"\n        autocomplete=\"false\"\n        (ngSubmit)=\"changePin()\"\n        novalidate\n    >\n        <div class=\"row\">\n            <div class=\"form-group col\">\n                <label class=\"font-md\" for=\"pin\">{{'modal-change-pin.choose-your-new-pin' | translate}}</label>\n                <input\n                    type=\"password\"\n                    class=\"form-control form-control-lg\"\n                    [(ngModel)]=\"pinBlock\"\n                    id=\"pin\"\n                    name=\"pin\"\n                    #pin=\"ngModel\"\n                    pattern=\"^[0-9]+$\"\n                    minlength=\"6\"\n                    maxlength=\"6\"\n                    required\n                />\n                <div *ngIf=\"pin.invalid && (changePinForm.submitted || pin.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"pin?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                    <div class=\"form-control-feedback\" *ngIf=\"pin?.errors?.pattern\">{{ 'common.only-digits-allowed' | translate }}</div>\n                    <div class=\"form-control-feedback\" *ngIf=\"pin?.errors?.minlength\">{{ 'common.must-six-digits' | translate }}</div>\n                    <div class=\"form-control-feedback\" *ngIf=\"pin?.errors?.maxlength\">{{ 'common.cannot-be-longer' | translate }}</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col\">\n                <label class=\"font-md\" for=\"pin\">{{ 'common.repeat-pin' | translate }}</label>\n                <input\n                    type=\"password\"\n                    class=\"form-control form-control-lg\"\n                    [(ngModel)]=\"repeatedPin\"\n                    id=\"repeatedPin\"\n                    name=\"repeatedPin\"\n                    #repeatedPinInput=\"ngModel\"\n                    pattern=\"^[0-9]+$\"\n                    minlength=\"6\"\n                    maxlength=\"6\"\n                    [matchPassword]=\"pinBlock\"\n                    required\n                />\n                <div *ngIf=\"repeatedPinInput.invalid && (changePinForm.submitted || repeatedPinInput.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"repeatedPinInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                    <div class=\"form-control-feedback\" *ngIf=\"repeatedPinInput?.errors?.pattern\">{{ 'common.only-digits-allowed' | translate }}</div>\n                    <div class=\"form-control-feedback\" *ngIf=\"repeatedPinInput?.errors?.minlength\">{{ 'common.must-six-digits' | translate }}</div>\n                    <div class=\"form-control-feedback\" *ngIf=\"repeatedPinInput?.errors?.maxlength\">{{ 'common.cannot-be-longer' | translate }}</div>\n                    <div class=\"form-control-feedback\" *ngIf=\"repeatedPinInput?.errors?.matchPassword\">\n                        {{ 'common.pin-do-not-match' | translate }}\n                    </div>\n                </div>\n            </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"isLoading\">\n            <ng-template #spinner><ion-spinner name=\"crescent\" class=\"font-md\"></ion-spinner></ng-template>\n            <span *ngIf=\"!isLoading; else spinner\">{{ 'common.submit' | translate }}</span>\n        </button>\n    </form>\n</div>\n";
      /***/
    },

    /***/
    "5uf+":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-cards/card-order-confirmation/card-order-confirmation.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form\n    #cardOrderConfirmForm=\"ngForm\"\n    [ngClass]=\"{ 'ng-submitted': cardOrderConfirmForm.submitted }\"\n    (ngSubmit)=\"submit()\"\n    autocomplete=\"false\"\n    novalidate\n>\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{ 'common.confirm-shipping-address' | translate }}</h5>\n        <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss()\">&times;</button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"callout callout-success mt-0\">\n            <h6 class=\"text-success mb-0\">{{ 'common.your-card-is-waiting-for-you' | translate }}</h6>\n            <p class=\"text-gray\">\n                {{ 'common.you-have-been-assigned-card-order-by' }} <span class=\"text-primary\"> {{ session.user?.association?.name }} </span>.\n                {{ 'common.confirm' | translate }}\n                <ng-container *ngIf=\"cardOrder.type === 'physical'\">{{ 'common.your-shipping-address' | translate }} </ng-container\n                >{{ 'common.to-proceed' | translate }}\n            </p>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"font-md\" for=\"cardOrderId\">{{ 'common.order-id' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" id=\"cardOrderId\" name=\"cardOrderId\" [value]=\"cardOrder.id\" disabled />\n        </div>\n        <div class=\"form-group\">\n            <label class=\"font-md\" for=\"cardOrderType\">{{ 'common.card-type' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" id=\"cardOrderType\" name=\"cardOrderType\" [value]=\"cardOrder.type | uppercase\" disabled />\n        </div>\n        <div class=\"py-1\"></div>\n        <ng-container *ngIf=\"cardOrder.type === 'physical'\">\n            <h6 class=\"text-primary\">{{ 'common.shipping-address' | translate }}</h6>\n            <textarea\n                class=\"form-control\"\n                [(ngModel)]=\"cardOrder.shippingAddress\"\n                name=\"shippingAddress\"\n                rows=\"4\"\n                required\n                #shippingAddressField=\"ngModel\"\n            ></textarea>\n            <div *ngIf=\"shippingAddressField.invalid && (cardOrderConfirmForm.submitted || shippingAddressField.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"shippingAddressField?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </ng-container>\n    </div>\n    <div class=\"modal-footer flex-column flex-md-row justify-content-center justify-content-md-end\">\n        <button class=\"btn btn-default btn-w-sm ml-1\" (click)=\"activeModal.dismiss()\" [disabled]=\"isLoading\">\n            {{ 'common.i-will-do-it-later' | translate }}\n        </button>\n        <button class=\"btn btn-success btn-w-sm ml-1\" type=\"submit\" [ngClass]=\"{ loading: isLoading }\" [disabled]=\"isLoading\">\n            {{ 'common.confirm' | translate }}\n        </button>\n    </div>\n</form>\n";
      /***/
    },

    /***/
    "7Fps":
    /*!*******************************************************!*\
      !*** ./src/app/common/models/accounting/fee.model.ts ***!
      \*******************************************************/

    /*! exports provided: feeTypeMap, feeMethodMap, Fee, getFeeType */

    /***/
    function Fps(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "feeTypeMap", function () {
        return feeTypeMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "feeMethodMap", function () {
        return feeMethodMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Fee", function () {
        return Fee;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFeeType", function () {
        return getFeeType;
      });
      /* harmony import */


      var _core_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/user.model */
      "vk+e");
      /* harmony import */


      var _beneficiary_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./beneficiary.model */
      "OFFW");
      /* harmony import */


      var _currency_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./currency.model */
      "/e3T");

      var feeTypeMap = {
        'account-fee': 'Account Fee',
        'card-order': 'Card Order Fee',
        'fx-spread': 'Exchange Rate Spread',
        deposit: 'Deposit',
        withdrawal: 'Withdrawal',
        transfer: 'Transfer',
        conversion: 'Conversion',
        investment: 'Investment',
        trade: 'Trade',
        redeem: 'Redeem',
        service: 'Buy & Sell',
        gst: 'GST',
        payment: 'Payment'
      };
      var feeMethodMap = {
        internal: 'Internal',
        card: 'Topup Card',
        crypto: 'Crypto',
        local: 'LOCAL',
        swift: 'SWIFT'
      };

      var Fee = /*#__PURE__*/function () {
        function Fee(data) {
          _classCallCheck(this, Fee);

          if (data) {
            Object.assign(this, data);

            if (data.currency) {
              this.currency = new _currency_model__WEBPACK_IMPORTED_MODULE_2__["Currency"](data.currency);
            }

            if (data.user) {
              this.user = new _core_user_model__WEBPACK_IMPORTED_MODULE_0__["User"](data.user);
            }

            if (data.beneficiary) {
              this.beneficiary = new _beneficiary_model__WEBPACK_IMPORTED_MODULE_1__["Beneficiary"](data.beneficiary);
            }
          }
        }

        _createClass(Fee, [{
          key: "isGlobal",
          value: function isGlobal() {
            return this.user === null;
          }
        }, {
          key: "isFallback",
          value: function isFallback(currency) {
            return this.currency.code !== currency.code;
          }
        }, {
          key: "isAssociationFee",
          value: function isAssociationFee(user) {
            return !!this.user && !!user && this.user.id !== user.id;
          }
        }, {
          key: "hasFixedFee",
          value: function hasFixedFee() {
            return !['fx-spread', 'service', 'gst'].includes(this.type);
          }
        }, {
          key: "hasRelativeFee",
          value: function hasRelativeFee() {
            return !['account-fee'].includes(this.type);
          }
        }, {
          key: "hasMaxOrMin",
          value: function hasMaxOrMin() {
            return !['account-fee', 'fx-spread'].includes(this.type);
          }
        }, {
          key: "hasMinValue",
          value: function hasMinValue() {
            return ['transfer', 'deposit', 'withdrawal'].includes(this.type);
          }
        }]);

        return Fee;
      }();

      function getFeeType(transactionType) {
        var feeMap = {
          deposit: 'deposit',
          withdrawal: 'withdrawal',
          transfer: 'transfer',
          conversion: 'conversion',
          investment: 'investment',
          trade: 'trade',
          redeem: 'redeem',
          payment: 'payment',
          // Use transfer fee for invoice
          invoice: 'transfer',
          'invoice-p2p': 'transfer',
          'card-order': 'card-order',
          'account-fee': 'account-fee'
        };
        return feeMap[transactionType];
      }
      /***/

    },

    /***/
    "97la":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/card-view/modal-download-transactions/modal-download-transactions.page.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function la(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border b-b-1\">\n    <ion-toolbar>\n        <ion-buttons slot=\"primary\">\n            <ion-button color=\"dark\" (click)=\"dismiss()\">\n                <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>{{ 'common.download-report' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding px-3\">\n        <div class=\"form-group\">\n            <label class=\"font-md\" for=\"fromDate\">{{ 'common.from' | translate }}</label>\n            <div class=\"input-group\">\n                <input\n                    class=\"form-control form-control-lg\"\n                    placeholder=\"yyyy-mm-dd\"\n                    name=\"fromDate\"\n                    [(ngModel)]=\"fromDate\"\n                    ngbDatepicker\n                    #dfromDate=\"ngbDatepicker\"\n                />\n                <div class=\"input-group-append\">\n                    <button class=\"btn btn-lg btn-default calendar\" (click)=\"dfromDate.toggle()\" type=\"button\">\n                        <fa-icon [icon]=\"faCalendarAlt\"></fa-icon>\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"font-md\" for=\"toDate\">{{ 'common.to' | translate | titlecase }}</label>\n            <div class=\"input-group\">\n                <input\n                    class=\"form-control form-control-lg\"\n                    placeholder=\"yyyy-mm-dd\"\n                    name=\"toDate\"\n                    [(ngModel)]=\"toDate\"\n                    ngbDatepicker\n                    #dtoDate=\"ngbDatepicker\"\n                />\n                <div class=\"input-group-append\">\n                    <button class=\"btn btn-lg btn-default calendar\" (click)=\"dtoDate.toggle()\" type=\"button\">\n                        <fa-icon [icon]=\"faCalendarAlt\"></fa-icon>\n                    </button>\n                </div>\n            </div>\n        </div>\n        <button type=\"button\" class=\"btn btn-lg btn-primary btn-block mt-3\" (click)=\"downloadReport()\">{{ 'common.download' | translate }}</button>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "9TuU":
    /*!**************************************************************************!*\
      !*** ./src/app/common/card-view/modal-offledger/modal-offledger.page.ts ***!
      \**************************************************************************/

    /*! exports provided: ModalOffledgerPage */

    /***/
    function TuU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalOffledgerPage", function () {
        return ModalOffledgerPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_offledger_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-offledger.page.html */
      "R35r");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/session.service */
      "6g7h");

      var ModalOffledgerPage = /*#__PURE__*/function () {
        function ModalOffledgerPage(http, session, modalController, translate) {
          _classCallCheck(this, ModalOffledgerPage);

          this.http = http;
          this.session = session;
          this.modalController = modalController;
          this.translate = translate;
          this.load = {
            sourceCurrencyCode: 'USD',
            amount: '',
            destinationCurrencyCode: 'USD'
          };
          this.unload = {
            currencyCode: 'USD',
            amount: '',
            comments: ''
          };
          this.isLoading = false;
          this.niumCurrencies = ['AUD', 'CAD', 'EUR', 'GBP', 'HKD', 'JPY', 'SGD', 'USD'];
          this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].appName;
        }

        _createClass(ModalOffledgerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submitOffLedgerForm",
          value: function submitOffLedgerForm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!this.offLedgerForm.invalid) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return");

                    case 2:
                      this.isLoading = true;

                      if (this.type === 'load') {
                        this.load.amount += '';
                        this.http.post("/cards/".concat(this.item.id, "/load"), this.load).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                          _this.isLoading = false;
                        })).subscribe(function (response) {
                          _this.modalController.dismiss(response);
                        });
                      } else {
                        this.unload.amount += '';
                        this.http.post("/cards/".concat(this.item.id, "/unload"), this.unload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                          _this.isLoading = false;
                        })).subscribe(function (response) {
                          _this.modalController.dismiss(response);
                        });
                      }

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }]);

        return ModalOffledgerPage;
      }();

      ModalOffledgerPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      };

      ModalOffledgerPage.propDecorators = {
        offLedgerForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['offLedgerForm']
        }]
      };
      ModalOffledgerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-offledger',
        template: _raw_loader_modal_offledger_page_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ModalOffledgerPage);
      /***/
    },

    /***/
    "B5K8":
    /*!******************************************************************!*\
      !*** ./src/app/common/card-view/modal-fees/modal-fees.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function B5K8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: transparent;\n}\n\nh1.title {\n  font-weight: 600;\n  font-size: 28px;\n  line-height: 34px;\n  color: #151522;\n  padding: 0;\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n\nion-text {\n  font-weight: 300;\n  font-size: 17px;\n  line-height: 24px;\n  color: #151522;\n}\n\nion-item {\n  --background: transparent;\n  --inner-padding-end: 0;\n}\n\nion-item ion-input {\n  border: 1px solid rgba(228, 228, 228, 0.6);\n  box-sizing: border-box;\n  border-radius: 5px;\n  background: #ffffff;\n  --padding-start: 16px;\n  margin-bottom: 8px;\n  min-height: 48px;\n}\n\nion-item ion-toggle {\n  --background: rgba(153, 153, 153, 0.8);\n}\n\n.action-button {\n  --border-radius: 6px;\n  --box-shadow: none !important;\n  min-height: 48px;\n  box-shadow: 0px 4px 8px rgba(50, 50, 71, 0.06), 0px 4px 4px rgba(50, 50, 71, 0.08);\n}\n\n.action-button span {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 22px;\n  text-transform: initial;\n}\n\n.mb {\n  margin-bottom: 16px;\n}\n\n.link {\n  text-decoration: none !important;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 20px;\n}\n\n.input-label {\n  font-weight: 600;\n  color: #151522;\n  margin-bottom: 16px;\n}\n\n.caption {\n  color: #151522;\n}\n\n.basic::after {\n  content: \"\";\n  width: 48px;\n  height: auto;\n  padding-top: 24px;\n}\n\n.errors-container {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--ion-color-danger);\n}\n\n.action-button {\n  --border-radius: 6px;\n  --box-shadow: none !important;\n  min-height: 48px;\n  box-shadow: 0px 4px 8px rgba(50, 50, 71, 0.06), 0px 4px 4px rgba(50, 50, 71, 0.08);\n}\n\n.action-button span {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 22px;\n  text-transform: initial;\n}\n\n.modal-change-pin .modal-wrapper {\n  margin: 1rem;\n  height: 250px;\n  position: relative;\n  box-shadow: 0px 1px 150px rgba(0, 0, 0, 0.4);\n  border-radius: 8px;\n  --width: 450px;\n  --max-width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vZGFsLWZlZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNFO0VBQ0UsMENBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLHNDQUFBO0FBQUo7O0FBSUE7RUFDRSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrRkFBQTtBQURGOztBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUtBO0VBQ0UsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFGRjs7QUFLQTtFQUNFLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtGQUFBO0FBRkY7O0FBSUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBRko7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUhGIiwiZmlsZSI6Im1vZGFsLWZlZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmgxLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgY29sb3I6ICMxNTE1MjI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbmlvbi10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICMxNTE1MjI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcblxuICBpb24taW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjI4LCAyMjgsIDIyOCwgMC42KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgbWluLWhlaWdodDogNDhweDtcbiAgfVxuXG4gIGlvbi10b2dnbGUge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgxNTMsIDE1MywgMTUzLCAwLjgpO1xuICB9XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDUwLCA1MCwgNzEsIDAuMDYpLCAwcHggNHB4IDRweCByZ2JhKDUwLCA1MCwgNzEsIDAuMDgpO1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICB9XG59XG5cbi5tYiB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5pbnB1dC1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMTUxNTIyO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uY2FwdGlvbiB7XG4gIGNvbG9yOiAjMTUxNTIyO1xufVxuXG4uYmFzaWM6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xufVxuXG4uZXJyb3JzLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG4uYWN0aW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSg1MCwgNTAsIDcxLCAwLjA2KSwgMHB4IDRweCA0cHggcmdiYSg1MCwgNTAsIDcxLCAwLjA4KTtcblxuICBzcGFuIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgfVxufVxuXG4ubW9kYWwtY2hhbmdlLXBpbiAubW9kYWwtd3JhcHBlciB7XG4gIG1hcmdpbjogMXJlbTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDE1MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAtLXdpZHRoOiA0NTBweDtcbiAgLS1tYXgtd2lkdGg6IDkwJTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "HXIS":
    /*!****************************************************************************!*\
      !*** ./src/app/common/card-view/modal-change-pin/modal-change-pin.page.ts ***!
      \****************************************************************************/

    /*! exports provided: ModalChangePinPage */

    /***/
    function HXIS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalChangePinPage", function () {
        return ModalChangePinPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_change_pin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-change-pin.page.html */
      "59Ih");
      /* harmony import */


      var _modal_change_pin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-change-pin.page.scss */
      "QdlJ");
      /* harmony import */


      var _card_view_modal_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../card-view-modal.scss */
      "W/nx");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/session.service */
      "6g7h");

      var ModalChangePinPage = /*#__PURE__*/function () {
        function ModalChangePinPage(http, session, modalController) {
          _classCallCheck(this, ModalChangePinPage);

          this.http = http;
          this.session = session;
          this.modalController = modalController;
          this.pinBlock = '';
          this.isLoading = false;
        }

        _createClass(ModalChangePinPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changePin",
          value: function changePin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.changePinForm.invalid) {
                        _context2.next = 2;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 2:
                      this.isLoading = true;
                      this.http.put("/cards/".concat(this.item.id, "/pin"), {
                        pin: this.pinBlock
                      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                        _this2.isLoading = false;
                      })).subscribe(function (response) {
                        _this2.modalController.dismiss(response);
                      });

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }]);

        return ModalChangePinPage;
      }();

      ModalChangePinPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }];
      };

      ModalChangePinPage.propDecorators = {
        changePinForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
          args: ['changePinForm']
        }]
      };
      ModalChangePinPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-modal-change-pin',
        template: _raw_loader_modal_change_pin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_change_pin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"], _card_view_modal_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
      })], ModalChangePinPage);
      /***/
    },

    /***/
    "J4oW":
    /*!******************************************************************!*\
      !*** ./src/app/common/card-view/modal-topup/modal-topup.page.ts ***!
      \******************************************************************/

    /*! exports provided: ModalTopupPage */

    /***/
    function J4oW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalTopupPage", function () {
        return ModalTopupPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_topup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-topup.page.html */
      "Pu3v");
      /* harmony import */


      var _card_view_modal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../card-view-modal.scss */
      "W/nx");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/store/currencies/currencies.query */
      "4pv/");
      /* harmony import */


      var src_app_store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/store/wallets/wallets.query */
      "O9sj");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _models_core_user_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../models/core/user.model */
      "vk+e");
      /* harmony import */


      var _services_accounting_fee_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../services/accounting/fee.service */
      "le6r");
      /* harmony import */


      var _services_session_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../services/session.service */
      "6g7h");

      var ModalTopupPage = /*#__PURE__*/function () {
        function ModalTopupPage(http, session, modalController, walletsQuery, currenciesQuery, feeService) {
          _classCallCheck(this, ModalTopupPage);

          this.http = http;
          this.session = session;
          this.modalController = modalController;
          this.walletsQuery = walletsQuery;
          this.currenciesQuery = currenciesQuery;
          this.feeService = feeService;
          this.from = {
            code: 'USD'
          };
          this.topup = {
            sourceCurrencyCode: 'USD',
            amount: '',
            destinationCurrencyCode: 'USD'
          };
          this.isLoading = false;
          this.isGettingExchangeRate = false;
          this.exchangeRate = '1';
          this.niumCurrencies = ['AUD', 'CAD', 'EUR', 'GBP', 'HKD', 'JPY', 'SGD', 'USD'];
          this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].appName;
          this.subcriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
        }

        _createClass(ModalTopupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.subcriptions.add(this.feeService.fetch({
              type: 'withdrawal',
              method: 'card',
              currency: this.from,
              user: new _models_core_user_model__WEBPACK_IMPORTED_MODULE_12__["User"](this.session.user)
            }).subscribe(function (cardTopupFee) {
              return _this3.cardTopupFee = cardTopupFee;
            }));
            this.subcriptions.add(this.currenciesQuery.selectEntity('USD').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function (usd) {
              _this3.currency = usd;
            }));

            if (this.niumCurrencies.includes(this.session.user.preferredCurrency.code)) {
              this.topup.destinationCurrencyCode = this.session.user.preferredCurrency.code;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subcriptions.unsubscribe();
          }
        }, {
          key: "topupCard",
          value: function topupCard() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!this.transactionForm.invalid) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 2:
                      this.isLoading = true;
                      this.topup.sourceCurrencyCode = this.from.code;
                      this.topup.amount += '';
                      this.http.post("/cards/".concat(this.item.id, "/topup"), this.topup).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                        _this4.isLoading = false;
                      })).subscribe(function (response) {
                        _this4.modalController.dismiss(response);
                      });

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getCardBalance",
          value: function getCardBalance(code) {
            var found = this.balances.find(function (b) {
              return b.curSymbol === code;
            });

            if (found) {
              return found.balance + '';
            }

            return '0.00';
          }
        }, {
          key: "useMax",
          value: function useMax() {
            var _this5 = this;

            this.subcriptions.add(this.walletsQuery.balances$.subscribe(function (balances) {
              var found = balances.find(function (balance) {
                return balance.currency.code === _this5.from.code;
              });

              if (found) {
                _this5.topup.amount = parseFloat(found.balance);
              }
            }));
          }
        }, {
          key: "calculateFee",
          value: function calculateFee() {
            var _this$feeService$dete = this.feeService.determineFee({
              amount: this.topup.amount + '' || '0',
              currency: this.currency
            }, this.cardTopupFee),
                relativeFee = _this$feeService$dete.relativeFee,
                fixedFee = _this$feeService$dete.fixedFee;

            var relativeFeeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(this.topup.amount || 0).times(relativeFee || 0);
            var totalFee = new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(fixedFee || 0).plus(relativeFeeAmount);
            return totalFee.toFixed(2, 1);
          }
        }, {
          key: "isForexTopup",
          value: function isForexTopup() {
            return this.from.code !== this.topup.destinationCurrencyCode;
          }
        }, {
          key: "getExchangeRate",
          value: function getExchangeRate() {
            var _this6 = this;

            var _a, _b;

            this.isGettingExchangeRate = true;

            if (this.from.code !== this.topup.destinationCurrencyCode) {
              this.http.post("/card-programs/".concat((_b = (_a = this.item.cardholder) === null || _a === void 0 ? void 0 : _a.cardProgram) === null || _b === void 0 ? void 0 : _b.id, "/get-exchange-rate"), {
                sourceCurrencyCode: this.from.code,
                destinationCurrencyCode: this.topup.destinationCurrencyCode
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                _this6.isGettingExchangeRate = false;
              })).subscribe(function (response) {
                _this6.exchangeRate = response.exchangeRate;
              });
            } else {
              this.exchangeRate = '1';
              this.isGettingExchangeRate = false;
            }
          }
        }, {
          key: "calculateAmount",
          value: function calculateAmount() {
            if (!this.topup.amount) {
              return '0';
            }

            return new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(this.topup.amount || 0).minus(new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(this.calculateFee())).times(this.exchangeRate).toFixed(2);
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }]);

        return ModalTopupPage;
      }();

      ModalTopupPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _services_session_service__WEBPACK_IMPORTED_MODULE_14__["SessionService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: src_app_store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_10__["WalletsQuery"]
        }, {
          type: src_app_store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_9__["CurrenciesQuery"]
        }, {
          type: _services_accounting_fee_service__WEBPACK_IMPORTED_MODULE_13__["FeeService"]
        }];
      };

      ModalTopupPage.propDecorators = {
        transactionForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['transactionForm']
        }]
      };
      ModalTopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-modal-topup',
        template: _raw_loader_modal_topup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_card_view_modal_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModalTopupPage);
      /***/
    },

    /***/
    "Pu3v":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/card-view/modal-topup/modal-topup.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Pu3v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border b-b-1\">\n    <ion-toolbar>\n        <ion-buttons slot=\"primary\">\n            <ion-button color=\"dark\" (click)=\"dismiss()\">\n                <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>{{ 'common.top-up-card' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding px-3\">\n        <form\n            class=\"form-validation\"\n            #transactionForm=\"ngForm\"\n            [ngClass]=\"{ 'ng-submitted': transactionForm.submitted }\"\n            autocomplete=\"false\"\n            (ngSubmit)=\"topupCard()\"\n            novalidate\n        >\n            <div class=\"row\">\n                <div class=\"form-group col\">\n                    <label class=\"font-md\" for=\"source\">\n                        {{ 'common.source' | translate }} ({{'common.wallet' | translate}}<ng-container *ngIf=\"appName === 'sgpmx'\">\n                            - {{ 'common.sales-proceeds' | translate }}</ng-container\n                        >)\n                    </label>\n                    <currency-select\n                        [(currency)]=\"from\"\n                        [user]=\"session.user\"\n                        [isLarge]=\"true\"\n                        [currencyTypes]=\"['fiat']\"\n                        [required]=\"true\"\n                        [filterBy]=\"['USD']\"\n                        [salesProceeds]=\"true\"\n                        [hideZeroBalance]=\"appName !== 'sgpmx'\"\n                    >\n                    </currency-select>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col\">\n                    <div class=\"d-flex justify-content-between\">\n                        <div class=\"d-flex\">\n                            <label class=\"font-md\"> {{ 'common.amount' | translate }} </label>\n                        </div>\n                        <a href (click)=\"useMax(); $event.preventDefault()\">{{ 'common.use-max' | translate }}</a>\n                    </div>\n                    <input\n                        type=\"number\"\n                        class=\"form-control form-control-lg\"\n                        id=\"amount\"\n                        name=\"amount\"\n                        [placeholder]=\"'0.00'\"\n                        [(ngModel)]=\"topup.amount\"\n                        #amount=\"ngModel\"\n                        required\n                    />\n                    <div *ngIf=\"amount.invalid && (transactionForm.submitted || amount.dirty)\" class=\"error-messages\">\n                        <div class=\"form-control-feedback\" *ngIf=\"amount?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col\">\n                    <label class=\"font-md\" for=\"destination\">{{ 'common.destination' | translate }} ({{ 'common.card' | translate }})</label>\n                    <ng-select\n                        class=\"ng-select-lg ng-select-topup\"\n                        [placeholder]=\"'common.select-currency' | translate\"\n                        [(ngModel)]=\"topup.destinationCurrencyCode\"\n                        (ngModelChange)=\"getExchangeRate()\"\n                        name=\"destinationCurrencyCode\"\n                        [items]=\"niumCurrencies\"\n                        [clearable]=\"false\"\n                        [searchable]=\"true\"\n                        [required]=\"true\"\n                        appendTo=\".modal-container\"\n                    >\n                        <ng-template ng-label-tmp let-item=\"item\">\n                            <b class=\"mr-1\">{{ item }}</b>\n                            <span class=\"small text-muted\">{{ getCardBalance(item) | amount: 2 }} {{ item }}</span>\n                        </ng-template>\n                        <ng-template ng-option-tmp let-item=\"item\">\n                            {{ item }}\n                            <span class=\"float-right small text-muted\">{{ getCardBalance(item) | amount: 2 }} {{ item }}</span>\n                        </ng-template>\n                    </ng-select>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <table class=\"table\">\n                        <tr class=\"table-light\">\n                            <td>{{ 'common.service-fee' | translate }}</td>\n                            <td class=\"text-right\"><b>{{ calculateFee() | amount: 2 }} {{ from.code }}</b></td>\n                        </tr>\n                        <tr class=\"table-light\" *ngIf=\"isForexTopup()\">\n                            <td>Exchange rate</td>\n                            <td class=\"text-right\">\n                                <b\n                                    ><span *ngIf=\"!isGettingExchangeRate; else spinner\"\n                                        >1 {{ from.code }} = {{ exchangeRate | amount: 4 }} {{topup.destinationCurrencyCode}}</span\n                                    ></b\n                                >\n                            </td>\n                        </tr>\n                        <tr class=\"table-light\">\n                            <td>{{ 'common.amount-to-be-credited' | translate }}</td>\n                            <td class=\"text-right\"><b>{{ calculateAmount() | amount: 2 }} {{ topup.destinationCurrencyCode }}</b></td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"isLoading\">\n                <ng-template #spinner><ion-spinner name=\"crescent\" class=\"font-md\"></ion-spinner></ng-template>\n                <span *ngIf=\"!isLoading; else spinner\">{{ 'common.submit' | translate }}</span>\n            </button>\n        </form>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "QdlJ":
    /*!******************************************************************************!*\
      !*** ./src/app/common/card-view/modal-change-pin/modal-change-pin.page.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function QdlJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".modal-change-pin .modal-wrapper {\n  margin: 1rem;\n  height: 250px;\n  position: relative;\n  box-shadow: 0px 1px 150px rgba(0, 0, 0, 0.4);\n  border-radius: 8px;\n  --width: 450px;\n  --max-width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vZGFsLWNoYW5nZS1waW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJtb2RhbC1jaGFuZ2UtcGluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1jaGFuZ2UtcGluIC5tb2RhbC13cmFwcGVyIHtcbiAgbWFyZ2luOiAxcmVtO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTUwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0td2lkdGg6IDQ1MHB4O1xuICAtLW1heC13aWR0aDogOTAlO1xufVxuIl19 */";
      /***/
    },

    /***/
    "R35r":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/card-view/modal-offledger/modal-offledger.page.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function R35r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border b-b-1\">\n    <ion-toolbar>\n        <ion-buttons slot=\"primary\">\n            <ion-button color=\"dark\" (click)=\"dismiss()\">\n                <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title\n            >{{type === 'load' ? ('common.load-card' | translate) + ' (Off-ledger)' : ('common.load-card' | translate) + ' (Off-ledger)'}}</ion-title\n        >\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding px-3\">\n        <form\n            class=\"form-validation\"\n            #offLedgerForm=\"ngForm\"\n            [ngClass]=\"{ 'ng-submitted': offLedgerForm.submitted }\"\n            autocomplete=\"false\"\n            (ngSubmit)=\"submitOffLedgerForm()\"\n            novalidate\n        >\n            <ng-container *ngIf=\"type === 'load'\">\n                <div class=\"row\">\n                    <div class=\"form-group col\">\n                        <div class=\"d-flex justify-content-between\">\n                            <div class=\"d-flex\">\n                                <label class=\"font-md\"> {{ 'common.amount' | translate }} </label>\n                            </div>\n                        </div>\n                        <input\n                            type=\"number\"\n                            class=\"form-control form-control-lg\"\n                            id=\"amount\"\n                            name=\"amount\"\n                            [placeholder]=\"'0.00'\"\n                            [(ngModel)]=\"load.amount\"\n                            #amount=\"ngModel\"\n                            required\n                        />\n                        <div *ngIf=\"amount.invalid && (offLedgerForm.submitted || amount.dirty)\" class=\"error-messages\">\n                            <div class=\"form-control-feedback\" *ngIf=\"amount?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group col\">\n                        <label class=\"font-md\" for=\"sourceCurrencyCode\">{{ 'common.source-currency-code' | translate }}</label>\n                        <ng-select\n                            class=\"ng-select-lg ng-select-topup\"\n                            [placeholder]=\"'common.select-currency' | translate\"\n                            [(ngModel)]=\"load.sourceCurrencyCode\"\n                            name=\"sourceCurrencyCode\"\n                            [items]=\"niumCurrencies\"\n                            [required]=\"true\"\n                            appendTo=\".modal-container\"\n                            [searchable]=\"false\"\n                            [clearable]=\"false\"\n                        >\n                            <ng-template ng-label-tmp let-item=\"item\">\n                                <b class=\"mr-1\">{{ item }}</b>\n                            </ng-template>\n                            <ng-template ng-option-tmp let-item=\"item\"> {{ item }} </ng-template>\n                        </ng-select>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group col\">\n                        <label class=\"font-md\" for=\"destinationCurrencyCode\">{{ 'common.destination-currency-code' | translate }}</label>\n                        <ng-select\n                            class=\"ng-select-lg ng-select-topup\"\n                            [placeholder]=\"'common.select-currency' | translate\"\n                            [(ngModel)]=\"load.destinationCurrencyCode\"\n                            name=\"destinationCurrencyCode\"\n                            [items]=\"niumCurrencies\"\n                            [required]=\"true\"\n                            appendTo=\".modal-container\"\n                            [searchable]=\"false\"\n                            [clearable]=\"false\"\n                        >\n                            <ng-template ng-label-tmp let-item=\"item\">\n                                <b class=\"mr-1\">{{ item }}</b>\n                            </ng-template>\n                            <ng-template ng-option-tmp let-item=\"item\"> {{ item }} </ng-template>\n                        </ng-select>\n                    </div>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"type === 'unload'\">\n                <div class=\"row\">\n                    <div class=\"form-group col\">\n                        <div class=\"d-flex justify-content-between\">\n                            <div class=\"d-flex\">\n                                <label class=\"font-md\"> {{ 'common.amount' | translate }} </label>\n                            </div>\n                        </div>\n                        <input\n                            type=\"number\"\n                            class=\"form-control form-control-lg\"\n                            id=\"amount\"\n                            name=\"amount\"\n                            [placeholder]=\"'0.00'\"\n                            [(ngModel)]=\"unload.amount\"\n                            #amount=\"ngModel\"\n                            required\n                        />\n                        <div *ngIf=\"amount.invalid && (offLedgerForm.submitted || amount.dirty)\" class=\"error-messages\">\n                            <div class=\"form-control-feedback\" *ngIf=\"amount?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group col\">\n                        <label class=\"font-md\" for=\"currencyCode\">{{ 'common.currency-code' | translate }}</label>\n                        <ng-select\n                            class=\"ng-select-lg ng-select-topup\"\n                            [placeholder]=\"'common.select-currency' | translate\"\n                            [(ngModel)]=\"unload.currencyCode\"\n                            name=\"currencyCode\"\n                            [items]=\"niumCurrencies\"\n                            [required]=\"true\"\n                            appendTo=\".modal-container\"\n                            [searchable]=\"false\"\n                            [clearable]=\"false\"\n                        >\n                            <ng-template ng-label-tmp let-item=\"item\">\n                                <b class=\"mr-1\">{{ item }}</b>\n                            </ng-template>\n                            <ng-template ng-option-tmp let-item=\"item\"> {{ item }} </ng-template>\n                        </ng-select>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group col\">\n                        <div class=\"d-flex justify-content-between\">\n                            <div class=\"d-flex\">\n                                <label class=\"font-md\"> {{ 'common.comments' | translate }} </label>\n                            </div>\n                        </div>\n                        <textarea\n                            class=\"form-control\"\n                            id=\"comments\"\n                            name=\"comments\"\n                            maxlength=\"300\"\n                            [(ngModel)]=\"unload.comments\"\n                            rows=\"5\"\n                            emptyToNull\n                        ></textarea>\n                    </div>\n                </div>\n            </ng-container>\n            <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"isLoading\">\n                <ng-template #spinner><ion-spinner name=\"crescent\" class=\"font-md\"></ion-spinner></ng-template>\n                <span *ngIf=\"!isLoading; else spinner\">{{ 'common.submit' | translate }}</span>\n            </button>\n        </form>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "Tg4p":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/card-view/modal-fees/modal-fees.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tg4p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border b-b-1\">\n    <ion-toolbar>\n        <ion-buttons slot=\"primary\">\n            <ion-button color=\"dark\" (click)=\"dismiss()\">\n                <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>{{ 'common.card' | translate }} - {{ 'common.fee-schedule' | translate | titlecase }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding p-3\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <card-fee-schedule></card-fee-schedule>\n            </div>\n        </div>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "V2ub":
    /*!****************************************************************!*\
      !*** ./src/app/common/card-view/modal-swap/modal-swap.page.ts ***!
      \****************************************************************/

    /*! exports provided: ModalSwapPage */

    /***/
    function V2ub(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalSwapPage", function () {
        return ModalSwapPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_swap_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-swap.page.html */
      "nuNh");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _services_accounting_fee_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/accounting/fee.service */
      "le6r");
      /* harmony import */


      var _services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/session.service */
      "6g7h");

      var ModalSwapPage = /*#__PURE__*/function () {
        function ModalSwapPage(http, session, modalController, feeService) {
          _classCallCheck(this, ModalSwapPage);

          this.http = http;
          this.session = session;
          this.modalController = modalController;
          this.feeService = feeService;
          this.swap = {
            sourceCurrencyCode: '',
            amount: '',
            destinationCurrencyCode: ''
          };
          this.isLoading = false;
          this.isGettingExchangeRate = false;
          this.exchangeRate = '1';
          this.niumCurrencies = ['AUD', 'CAD', 'EUR', 'GBP', 'HKD', 'JPY', 'SGD', 'USD'];
          this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].appName;
          this.subcriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        }

        _createClass(ModalSwapPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.filterSourceCurrencies();
            this.swap.sourceCurrencyCode = 'USD';
            this.filterDestinationCurrencies();
            this.swap.destinationCurrencyCode = this.filteredDestinationCurrencies[0];
            this.getExchangeRate();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subcriptions.unsubscribe();
          }
        }, {
          key: "topupCard",
          value: function topupCard() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!this.transactionForm.invalid) {
                        _context4.next = 2;
                        break;
                      }

                      return _context4.abrupt("return");

                    case 2:
                      this.isLoading = true;
                      this.swap.amount = this.swap.amount + '';
                      this.http.post("/cards/".concat(this.item.id, "/swap"), this.swap).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                        _this7.isLoading = false;
                      })).subscribe(function (response) {
                        _this7.modalController.dismiss(response);
                      });

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "filterSourceCurrencies",
          value: function filterSourceCurrencies() {
            this.filteredCardBalances = this.balances.filter(function (b) {
              return !new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(b.balance).isZero();
            });
          }
        }, {
          key: "filterDestinationCurrencies",
          value: function filterDestinationCurrencies() {
            var _this8 = this;

            this.filteredDestinationCurrencies = this.niumCurrencies.filter(function (c) {
              return c !== _this8.swap.sourceCurrencyCode;
            });
          }
        }, {
          key: "getCardBalance",
          value: function getCardBalance(code) {
            var found = this.balances.find(function (b) {
              return b.curSymbol === code;
            });

            if (found) {
              return found.balance + '';
            }

            return '0.00';
          }
        }, {
          key: "useMax",
          value: function useMax() {
            var _this9 = this;

            var found = this.balances.find(function (balance) {
              return balance.curSymbol === _this9.swap.sourceCurrencyCode;
            });

            if (found) {
              this.swap.amount = parseFloat(found.balance);
            }
          }
        }, {
          key: "calculateFee",
          value: function calculateFee() {
            var _this$feeService$dete2 = this.feeService.determineFee({
              amount: this.swap.amount + '' || '0',
              currency: this.currency
            }, this.cardTopupFee),
                relativeFee = _this$feeService$dete2.relativeFee,
                fixedFee = _this$feeService$dete2.fixedFee;

            var relativeFeeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(this.swap.amount || 0).times(relativeFee || 0);
            var totalFee = new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(fixedFee || 0).plus(relativeFeeAmount);
            return totalFee.toFixed(2, 1);
          }
        }, {
          key: "isForexTopup",
          value: function isForexTopup() {
            return this.swap.sourceCurrencyCode !== this.swap.destinationCurrencyCode;
          }
        }, {
          key: "getExchangeRate",
          value: function getExchangeRate() {
            var _this10 = this;

            var _a, _b;

            this.isGettingExchangeRate = true;

            if (this.swap.sourceCurrencyCode !== this.swap.destinationCurrencyCode) {
              this.http.post("/card-programs/".concat((_b = (_a = this.item.cardholder) === null || _a === void 0 ? void 0 : _a.cardProgram) === null || _b === void 0 ? void 0 : _b.id, "/get-exchange-rate"), {
                sourceCurrencyCode: this.swap.sourceCurrencyCode,
                destinationCurrencyCode: this.swap.destinationCurrencyCode
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                _this10.isGettingExchangeRate = false;
              })).subscribe(function (response) {
                _this10.exchangeRate = response.exchangeRate;
              });
            } else {
              this.exchangeRate = '1';
              this.isGettingExchangeRate = false;
            }
          }
        }, {
          key: "calculateAmount",
          value: function calculateAmount() {
            if (!this.swap.amount) {
              return '0';
            }

            return new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(this.swap.amount || 0).minus(new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(this.calculateFee())).times(this.exchangeRate).toFixed(2);
          }
        }, {
          key: "compareCurrencies",
          value: function compareCurrencies(a, b) {
            return a.curSymbol === b;
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }]);

        return ModalSwapPage;
      }();

      ModalSwapPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_accounting_fee_service__WEBPACK_IMPORTED_MODULE_9__["FeeService"]
        }];
      };

      ModalSwapPage.propDecorators = {
        transactionForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['transactionForm']
        }]
      };
      ModalSwapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-swap',
        template: _raw_loader_modal_swap_page_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ModalSwapPage);
      /***/
    },

    /***/
    "W/nx":
    /*!*******************************************************!*\
      !*** ./src/app/common/card-view/card-view-modal.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function WNx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: transparent;\n}\n\nh1.title {\n  font-weight: 600;\n  font-size: 28px;\n  line-height: 34px;\n  color: #151522;\n  padding: 0;\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n\nion-text {\n  font-weight: 300;\n  font-size: 17px;\n  line-height: 24px;\n  color: #151522;\n}\n\nion-item {\n  --background: transparent;\n  --inner-padding-end: 0;\n}\n\nion-item ion-input {\n  border: 1px solid rgba(228, 228, 228, 0.6);\n  box-sizing: border-box;\n  border-radius: 5px;\n  background: #ffffff;\n  --padding-start: 16px;\n  margin-bottom: 8px;\n  min-height: 48px;\n}\n\nion-item ion-toggle {\n  --background: rgba(153, 153, 153, 0.8);\n}\n\n.action-button {\n  --border-radius: 6px;\n  --box-shadow: none !important;\n  min-height: 48px;\n  box-shadow: 0px 4px 8px rgba(50, 50, 71, 0.06), 0px 4px 4px rgba(50, 50, 71, 0.08);\n}\n\n.action-button span {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 22px;\n  text-transform: initial;\n}\n\n.mb {\n  margin-bottom: 16px;\n}\n\n.link {\n  text-decoration: none !important;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 20px;\n}\n\n.input-label {\n  font-weight: 600;\n  color: #151522;\n  margin-bottom: 16px;\n}\n\n.caption {\n  color: #151522;\n}\n\n.basic::after {\n  content: \"\";\n  width: 48px;\n  height: auto;\n  padding-top: 24px;\n}\n\n.errors-container {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--ion-color-danger);\n}\n\n.action-button {\n  --border-radius: 6px;\n  --box-shadow: none !important;\n  min-height: 48px;\n  box-shadow: 0px 4px 8px rgba(50, 50, 71, 0.06), 0px 4px 4px rgba(50, 50, 71, 0.08);\n}\n\n.action-button span {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 22px;\n  text-transform: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhcmQtdmlldy1tb2RhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNFO0VBQ0UsMENBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLHNDQUFBO0FBQUo7O0FBSUE7RUFDRSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrRkFBQTtBQURGOztBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUtBO0VBQ0UsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFGRjs7QUFLQTtFQUNFLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtGQUFBO0FBRkY7O0FBSUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBRkoiLCJmaWxlIjoiY2FyZC12aWV3LW1vZGFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaDEudGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICBjb2xvcjogIzE1MTUyMjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuaW9uLXRleHQge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogIzE1MTUyMjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuXG4gIGlvbi1pbnB1dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjgsIDIyOCwgMjI4LCAwLjYpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBtaW4taGVpZ2h0OiA0OHB4O1xuICB9XG5cbiAgaW9uLXRvZ2dsZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuOCk7XG4gIH1cbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoNTAsIDUwLCA3MSwgMC4wNiksIDBweCA0cHggNHB4IHJnYmEoNTAsIDUwLCA3MSwgMC4wOCk7XG5cbiAgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gIH1cbn1cblxuLm1iIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmlucHV0LWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxNTE1MjI7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5jYXB0aW9uIHtcbiAgY29sb3I6ICMxNTE1MjI7XG59XG5cbi5iYXNpYzo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy10b3A6IDI0cHg7XG59XG5cbi5lcnJvcnMtY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDUwLCA1MCwgNzEsIDAuMDYpLCAwcHggNHB4IDRweCByZ2JhKDUwLCA1MCwgNzEsIDAuMDgpO1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "WvqM":
    /*!**********************************************!*\
      !*** ./node_modules/ease-component/index.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function WvqM(module, exports) {
      // easing functions from "Tween.js"
      exports.linear = function (n) {
        return n;
      };

      exports.inQuad = function (n) {
        return n * n;
      };

      exports.outQuad = function (n) {
        return n * (2 - n);
      };

      exports.inOutQuad = function (n) {
        n *= 2;
        if (n < 1) return 0.5 * n * n;
        return -0.5 * (--n * (n - 2) - 1);
      };

      exports.inCube = function (n) {
        return n * n * n;
      };

      exports.outCube = function (n) {
        return --n * n * n + 1;
      };

      exports.inOutCube = function (n) {
        n *= 2;
        if (n < 1) return 0.5 * n * n * n;
        return 0.5 * ((n -= 2) * n * n + 2);
      };

      exports.inQuart = function (n) {
        return n * n * n * n;
      };

      exports.outQuart = function (n) {
        return 1 - --n * n * n * n;
      };

      exports.inOutQuart = function (n) {
        n *= 2;
        if (n < 1) return 0.5 * n * n * n * n;
        return -0.5 * ((n -= 2) * n * n * n - 2);
      };

      exports.inQuint = function (n) {
        return n * n * n * n * n;
      };

      exports.outQuint = function (n) {
        return --n * n * n * n * n + 1;
      };

      exports.inOutQuint = function (n) {
        n *= 2;
        if (n < 1) return 0.5 * n * n * n * n * n;
        return 0.5 * ((n -= 2) * n * n * n * n + 2);
      };

      exports.inSine = function (n) {
        return 1 - Math.cos(n * Math.PI / 2);
      };

      exports.outSine = function (n) {
        return Math.sin(n * Math.PI / 2);
      };

      exports.inOutSine = function (n) {
        return .5 * (1 - Math.cos(Math.PI * n));
      };

      exports.inExpo = function (n) {
        return 0 == n ? 0 : Math.pow(1024, n - 1);
      };

      exports.outExpo = function (n) {
        return 1 == n ? n : 1 - Math.pow(2, -10 * n);
      };

      exports.inOutExpo = function (n) {
        if (0 == n) return 0;
        if (1 == n) return 1;
        if ((n *= 2) < 1) return .5 * Math.pow(1024, n - 1);
        return .5 * (-Math.pow(2, -10 * (n - 1)) + 2);
      };

      exports.inCirc = function (n) {
        return 1 - Math.sqrt(1 - n * n);
      };

      exports.outCirc = function (n) {
        return Math.sqrt(1 - --n * n);
      };

      exports.inOutCirc = function (n) {
        n *= 2;
        if (n < 1) return -0.5 * (Math.sqrt(1 - n * n) - 1);
        return 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
      };

      exports.inBack = function (n) {
        var s = 1.70158;
        return n * n * ((s + 1) * n - s);
      };

      exports.outBack = function (n) {
        var s = 1.70158;
        return --n * n * ((s + 1) * n + s) + 1;
      };

      exports.inOutBack = function (n) {
        var s = 1.70158 * 1.525;
        if ((n *= 2) < 1) return 0.5 * (n * n * ((s + 1) * n - s));
        return 0.5 * ((n -= 2) * n * ((s + 1) * n + s) + 2);
      };

      exports.inBounce = function (n) {
        return 1 - exports.outBounce(1 - n);
      };

      exports.outBounce = function (n) {
        if (n < 1 / 2.75) {
          return 7.5625 * n * n;
        } else if (n < 2 / 2.75) {
          return 7.5625 * (n -= 1.5 / 2.75) * n + 0.75;
        } else if (n < 2.5 / 2.75) {
          return 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375;
        } else {
          return 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
        }
      };

      exports.inOutBounce = function (n) {
        if (n < .5) return exports.inBounce(n * 2) * .5;
        return exports.outBounce(n * 2 - 1) * .5 + .5;
      }; // aliases


      exports['in-quad'] = exports.inQuad;
      exports['out-quad'] = exports.outQuad;
      exports['in-out-quad'] = exports.inOutQuad;
      exports['in-cube'] = exports.inCube;
      exports['out-cube'] = exports.outCube;
      exports['in-out-cube'] = exports.inOutCube;
      exports['in-quart'] = exports.inQuart;
      exports['out-quart'] = exports.outQuart;
      exports['in-out-quart'] = exports.inOutQuart;
      exports['in-quint'] = exports.inQuint;
      exports['out-quint'] = exports.outQuint;
      exports['in-out-quint'] = exports.inOutQuint;
      exports['in-sine'] = exports.inSine;
      exports['out-sine'] = exports.outSine;
      exports['in-out-sine'] = exports.inOutSine;
      exports['in-expo'] = exports.inExpo;
      exports['out-expo'] = exports.outExpo;
      exports['in-out-expo'] = exports.inOutExpo;
      exports['in-circ'] = exports.inCirc;
      exports['out-circ'] = exports.outCirc;
      exports['in-out-circ'] = exports.inOutCirc;
      exports['in-back'] = exports.inBack;
      exports['out-back'] = exports.outBack;
      exports['in-out-back'] = exports.inOutBack;
      exports['in-bounce'] = exports.inBounce;
      exports['out-bounce'] = exports.outBounce;
      exports['in-out-bounce'] = exports.inOutBounce;
      /***/
    },

    /***/
    "gtds":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/card-dummy/card-dummy.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gtds(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"isLoading; else cardTemplate\">\n    <div class=\"cc d-flex justify-content-center align-items-center\" [ngStyle]=\"{ backgroundColor: '#e5e5e5' }\">\n        <ion-spinner name=\"dots\"></ion-spinner>\n    </div>\n</ng-container>\n<ng-template #cardTemplate>\n    <ng-container *ngIf=\"backgroundImage; else noBackground\">\n        <div class=\"cc\" [ngClass]=\"{ disabled: disabled }\" [ngStyle]=\"getBackgroundImageStyle()\"></div>\n    </ng-container>\n    <ng-template #noBackground>\n        <div class=\"cc\" [ngClass]=\"{ disabled: disabled }\">\n            <div class=\"cc-content\">\n                <img [src]=\"getLogo()\" draggable=\"false\" class=\"cc-logo\" />\n                <div class=\"cc-title\">{{ 'common.card-number' | translate }}</div>\n                <div class=\"cc-digit\">{{ card?.maskedPan }}</div>\n                <div class=\"cc-title\">{{ 'common.expires' | translate }}</div>\n                <div class=\"cc-digit\">{{ card?.expiresAt || '2023-01-01' | date: 'MM/yy' }}</div>\n            </div>\n            <div class=\"cc-wave\"></div>\n        </div>\n    </ng-template>\n</ng-template>\n";
      /***/
    },

    /***/
    "hHbQ":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/card-view/card-details/card-details.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hHbQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"close-btn bg-primary d-flex justify-content-center align-items-center\" (click)=\"dismiss()\">\n    <ion-icon name=\"close-outline\"></ion-icon>\n</div>\n<div *ngIf=\"!!details; else loading\" class=\"modal-card-body\" [ngStyle]=\"getBackgroundImageStyle()\">\n    <div class=\"d-flex justify-content-end mb-2\">\n        <img src=\"/img/icons/contactless.svg\" class=\"card-pay-logo\" />\n    </div>\n    <div class=\"card-text-heading card-text mt-xs-3 mt-lg-4\">Virtual Card</div>\n    <copy-wrap [value]=\"details.unMaskedCardNumber\">\n        <p class=\"card-number mb-1 text-monospace card-text\">{{ formatCardNumber(details.unMaskedCardNumber) }}</p>\n    </copy-wrap>\n    <div class=\"d-flex mb-2\">\n        <div class=\"mr-4 d-flex\">\n            <div class=\"text-uppercase text-monospace card-label card-text\">\n                <div>{{ 'common.valid' | translate }}</div>\n                <div>{{ 'common.thru' | translate }}</div>\n            </div>\n            <copy-wrap [value]=\"details.expiry\">\n                <span class=\"ml-2 text-monospace card-details card-text\">{{ details.expiry }} </span>\n            </copy-wrap>\n        </div>\n        <div class=\"mr-4 d-flex\">\n            <div class=\"text-uppercase text-monospace card-label card-text\">\n                <div>{{ 'common.security' | translate | lowercase }}</div>\n                <div>{{ 'common.code' | translate | lowercase }}</div>\n            </div>\n            <copy-wrap [value]=\"details.cvv\">\n                <span class=\"ml-2 text-monospace card-details card-text\">{{ details.cvv }}</span>\n            </copy-wrap>\n        </div>\n    </div>\n    <div class=\"d-flex justify-content-between align-items-end limited-text-wrapper\">\n        <span class=\"card-text-limited card-text\">{{ 'common.limited-use' | translate }}</span>\n        <img *ngIf=\"!backgroundImage\" src=\"/img/icons/visa.svg\" class=\"img-sm text-muted mb-1\" />\n    </div>\n</div>\n<ng-template #loading>\n    <div class=\"d-flex justify-content-center align-items-center h-100\">\n        <div class=\"card-details-loader d-flex justify-content-center align-items-center\">\n            <ion-spinner color=\"primary\" name=\"dots\" color=\"light\"></ion-spinner>\n        </div>\n    </div>\n</ng-template>\n<div class=\"wave\" *ngIf=\"!backgroundImage\"></div>\n";
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
    "lCnd":
    /*!**************************************************************************************!*\
      !*** ./src/app/user-cards/card-order/card-order-terms/card-order-terms.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: CardOrderTermsComponent */

    /***/
    function lCnd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardOrderTermsComponent", function () {
        return CardOrderTermsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_order_terms_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-order-terms.component.html */
      "sbLD");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../common/services/toastr.service */
      "N/y2");

      var ease = __webpack_require__(
      /*! ease-component */
      "WvqM");

      var scroll = __webpack_require__(
      /*! scroll */
      "zELP");

      var CardOrderTermsComponent = /*#__PURE__*/function () {
        function CardOrderTermsComponent(element, toastr, http, modal, translate) {
          var _this11 = this;

          _classCallCheck(this, CardOrderTermsComponent);

          this.element = element;
          this.toastr = toastr;
          this.http = http;
          this.modal = modal;
          this.translate = translate;
          this.isDown = false;
          this.viewOnly = false;
          this.isLoaded = false;

          this.scrollHandler = function () {
            // 25px threshold
            if (_this11.isLoaded && !_this11.isDown && _this11.modalContainer.scrollTop >= _this11.modalContainer.scrollHeight - _this11.modalContainer.offsetHeight - 25) {
              setTimeout(function () {
                _this11.isDown = true;
              });
            }
          };
        }

        _createClass(CardOrderTermsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.modalContainer = this.element.nativeElement.querySelector('.card-terms-container');
            this.modalContainer.addEventListener('scroll', this.scrollHandler);
            this.http.get('/nium/terms').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (terms) {
              _this12.terms = terms;
              _this12.isLoaded = true;
              setTimeout(function () {
                _this12.scrollHandler();
              });
            })).subscribe(function () {
              return undefined;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.modalContainer.removeEventListener('scroll', this.scrollHandler);
          }
        }, {
          key: "scrollDown",
          value: function scrollDown() {
            scroll.top(this.modalContainer, this.modalContainer.scrollHeight - this.modalContainer.clientHeight, {
              duration: 1000,
              ease: ease.inOutExpo
            });
          }
        }, {
          key: "accept",
          value: function accept() {
            if (!this.isDown) {
              this.toastr.warning(this.translate.instant('common.please-scroll-to-bottom'), this.translate.instant('common.terms'));
              return;
            }

            this.modal.close(Object.assign(Object.assign({}, this.terms), {
              accept: true
            }));
          }
        }]);

        return CardOrderTermsComponent;
      }();

      CardOrderTermsComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      };

      CardOrderTermsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'card-order-terms',
        template: _raw_loader_card_order_terms_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardOrderTermsComponent);
      /***/
    },

    /***/
    "le6r":
    /*!***********************************************************!*\
      !*** ./src/app/common/services/accounting/fee.service.ts ***!
      \***********************************************************/

    /*! exports provided: FeeService */

    /***/
    function le6r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeeService", function () {
        return FeeService;
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


      var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../models/accounting/currency.model */
      "/e3T");
      /* harmony import */


      var _models_accounting_fee_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../models/accounting/fee.model */
      "7Fps");
      /* harmony import */


      var _transactions_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../transactions.mixins */
      "HiCw");

      var FeeService = /*#__PURE__*/function () {
        function FeeService(http) {
          _classCallCheck(this, FeeService);

          this.http = http;
        }

        _createClass(FeeService, [{
          key: "fetch",
          value: function fetch(fee) {
            return this.http.post('/fees', {
              id: Math.round(Math.random() * 10000),
              jsonrpc: '2.0',
              method: 'findByPrimaryAttributes',
              params: {
                type: fee.type,
                method: fee.method,
                amount: fee.amount ? fee.amount : '1',
                currency: fee.currency,
                user: fee.user
              }
            }, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json-rpc'
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
              return response.result ? new _models_accounting_fee_model__WEBPACK_IMPORTED_MODULE_6__["Fee"](response.result) : null;
            }));
          }
        }, {
          key: "determineFee",
          value: function determineFee(currentTransaction, fee) {
            var transaction = currentTransaction;
            var fixedFee = fee && fee.fixed && transaction.currency ? _models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_5__["Currency"].convert(fee.fixed, fee.currency, transaction.currency) : '0';
            var relativeFee = fee && fee.relative ? fee.relative : '0';
            transaction.fixedFee = fixedFee || undefined;
            transaction.relativeFee = relativeFee || undefined;

            if (fee && fee.min) {
              var minFee = _models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_5__["Currency"].convert(fee.min, fee.currency, transaction.currency);

              if (new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(Object(_transactions_mixins__WEBPACK_IMPORTED_MODULE_7__["calculateFee"])(transaction)).isLessThan(minFee)) {
                transaction.fixedFee = minFee;
                transaction.relativeFee = '0';
              }
            }

            if (fee && fee.max) {
              var maxFee = _models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_5__["Currency"].convert(fee.max, fee.currency, transaction.currency);

              if (new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(Object(_transactions_mixins__WEBPACK_IMPORTED_MODULE_7__["calculateFee"])(transaction)).isGreaterThan(maxFee)) {
                transaction.fixedFee = maxFee;
                transaction.relativeFee = '0';
              }
            }

            return transaction;
          }
        }]);

        return FeeService;
      }();

      FeeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      FeeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], FeeService);
      /***/
    },

    /***/
    "nHmX":
    /*!**************************************************************************************************!*\
      !*** ./src/app/common/card-view/modal-download-transactions/modal-download-transactions.page.ts ***!
      \**************************************************************************************************/

    /*! exports provided: ModalDownloadTransactionsPage */

    /***/
    function nHmX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalDownloadTransactionsPage", function () {
        return ModalDownloadTransactionsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_download_transactions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-download-transactions.page.html */
      "97la");
      /* harmony import */


      var _card_view_modal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../card-view-modal.scss */
      "W/nx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/pro-regular-svg-icons */
      "uB96");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/session.service */
      "6g7h");

      var ModalDownloadTransactionsPage = /*#__PURE__*/function () {
        function ModalDownloadTransactionsPage(session, modalController, calendar) {
          _classCallCheck(this, ModalDownloadTransactionsPage);

          this.session = session;
          this.modalController = modalController;
          this.calendar = calendar;
          this.isLoading = false;
          this.faCalendarAlt = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCalendarAlt"];
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
          this.fromDate = {
            year: new Date().getFullYear(),
            month: 1,
            day: 1
          };
          this.toDate = this.calendar.getToday();
        }

        _createClass(ModalDownloadTransactionsPage, [{
          key: "downloadReport",
          value: function downloadReport() {
            var _this13 = this;

            this.subscriptions.add(this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(function (user) {
              return _this13.session.createSignedUrl("/users/".concat(user.id, "/cards/").concat(_this13.item.id, "/transactions/report"));
            })).subscribe(function (signedUrl) {
              window.open("".concat(signedUrl, "&from=").concat(_this13.parseNgbdate(_this13.fromDate), "&to=").concat(_this13.parseNgbdate(_this13.toDate)), '_blank', 'noopener');

              _this13.dismiss();
            }));
            this.session.createSignedUrl("/cards/".concat(this.item.id, "/transactions/report"));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }, {
          key: "parseNgbdate",
          value: function parseNgbdate(date) {
            return "".concat(date === null || date === void 0 ? void 0 : date.year, "-").concat(date === null || date === void 0 ? void 0 : date.month.toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false
            }), "-").concat(date === null || date === void 0 ? void 0 : date.day.toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false
            }));
          }
        }]);

        return ModalDownloadTransactionsPage;
      }();

      ModalDownloadTransactionsPage.ctorParameters = function () {
        return [{
          type: _services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCalendar"]
        }];
      };

      ModalDownloadTransactionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-download-transactions',
        template: _raw_loader_modal_download_transactions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_card_view_modal_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModalDownloadTransactionsPage);
      /***/
    },

    /***/
    "nO15":
    /*!****************************************************!*\
      !*** ./src/app/common/card-view/card-view.page.ts ***!
      \****************************************************/

    /*! exports provided: CardViewPage */

    /***/
    function nO15(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardViewPage", function () {
        return CardViewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_view_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-view.page.html */
      "24Jd");
      /* harmony import */


      var _card_view_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./card-view.page.scss */
      "zZt8");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/pro-solid-svg-icons */
      "4Bjl");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! date-fns */
      "b/SL");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_common_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/common/models/accounting/currency.model */
      "/e3T");
      /* harmony import */


      var src_app_common_services_toastr_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/common/services/toastr.service */
      "N/y2");
      /* harmony import */


      var src_app_store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/store/currencies/currencies.query */
      "4pv/");
      /* harmony import */


      var src_app_store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/store/wallets/wallets.query */
      "O9sj");
      /* harmony import */


      var src_app_store_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/store/wallets/wallets.service */
      "hOWo");
      /* harmony import */


      var src_app_user_cards_card_order_card_order_terms_card_order_terms_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/user-cards/card-order/card-order-terms/card-order-terms.component */
      "lCnd");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _file__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../file */
      "B1CS");
      /* harmony import */


      var _security_check_security_check_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../security-check/security-check.service */
      "i32w");
      /* harmony import */


      var _services_session_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../services/session.service */
      "6g7h");
      /* harmony import */


      var _services_transaction_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../services/transaction.service */
      "m2Kw");
      /* harmony import */


      var _card_details_card_details_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./card-details/card-details.page */
      "psES");
      /* harmony import */


      var _modal_change_pin_modal_change_pin_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./modal-change-pin/modal-change-pin.page */
      "HXIS");
      /* harmony import */


      var _modal_download_transactions_modal_download_transactions_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./modal-download-transactions/modal-download-transactions.page */
      "nHmX");
      /* harmony import */


      var _modal_fees_modal_fees_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./modal-fees/modal-fees.page */
      "22Go");
      /* harmony import */


      var _modal_offledger_modal_offledger_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./modal-offledger/modal-offledger.page */
      "9TuU");
      /* harmony import */


      var _modal_swap_modal_swap_page__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./modal-swap/modal-swap.page */
      "V2ub");
      /* harmony import */


      var _modal_topup_modal_topup_page__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./modal-topup/modal-topup.page */
      "J4oW");
      /* harmony import */


      var _modal_unload_modal_unload_page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./modal-unload/modal-unload.page */
      "zGa5");

      var CardViewPage = /*#__PURE__*/function () {
        function CardViewPage(session, http, toastr, walletsQuery, modalController, alertController, securityCheckService, ngbModal, currenciesQuery, walletsService, transactionService, translate) {
          _classCallCheck(this, CardViewPage);

          this.session = session;
          this.http = http;
          this.toastr = toastr;
          this.walletsQuery = walletsQuery;
          this.modalController = modalController;
          this.alertController = alertController;
          this.securityCheckService = securityCheckService;
          this.ngbModal = ngbModal;
          this.currenciesQuery = currenciesQuery;
          this.walletsService = walletsService;
          this.transactionService = transactionService;
          this.translate = translate;
          this.activeTab = 'history';
          this.transaction = {
            type: 'withdrawal',
            method: 'card',
            counterWallet: {
              user: null
            }
          };
          this.copy = {};
          this.transactions = [];
          this.page = 1;
          this.size = 5;
          this.isFetching = false;
          this.isBlockUnblockLoading = false;
          this.faEye = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEye"];
          this.fetchBalanceEvent = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
          this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].appName;
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subscription"]();
          this.wallets$ = this.walletsQuery.filteredBalances$;
        }

        _createClass(CardViewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            var _a;

            this.http.get("/cards/".concat(this.item.id)).subscribe(function (card) {
              var _a, _b;

              if (card) {
                Object.assign(_this14.item, card);
                _this14.copy = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"])(_this14.item);
                _this14.transaction.card = card;

                if ((_b = (_a = card.cardholder) === null || _a === void 0 ? void 0 : _a.cardProgram) === null || _b === void 0 ? void 0 : _b.digitalCardArtwork) {
                  _this14.digitalCardArtWorkUrl = Object(_file__WEBPACK_IMPORTED_MODULE_21__["buildFileUrl"])(card.cardholder.cardProgram.digitalCardArtwork);
                }
              }
            });
            this.http.get('/currencies', {
              params: {
                limit: 100 + ''
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (response) {
              return response.data.map(function (payload) {
                return new src_app_common_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_14__["Currency"](payload);
              });
            })).subscribe(function (currencies) {
              _this14.currencies = currencies;
            });
            this.http.get("/users/".concat((_a = this.item.cardholder) === null || _a === void 0 ? void 0 : _a.id, "/details")).subscribe(function (details) {
              _this14.userDetails = details;
            });
            this.balances$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(undefined), this.fetchBalanceEvent).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function () {
              return _this14.http.get("/cards/".concat(_this14.item.id, "/balance"));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (balance) {
              return balance.filter(function (currency) {
                return currency.balance !== 0;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (balance) {
              return balance.length ? balance : [{
                curSymbol: 'USD',
                balance: 0
              }];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["withLatestFrom"])(this.currenciesQuery.selectAll()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  balance = _ref2[0],
                  availableCurrencies = _ref2[1];

              return balance.map(function (b) {
                var _a;

                Object.assign(b, {
                  balanceInUsd: new bignumber_js__WEBPACK_IMPORTED_MODULE_9___default.a(b.balance).times(((_a = availableCurrencies.find(function (currency) {
                    return currency.code === b.curSymbol;
                  })) === null || _a === void 0 ? void 0 : _a.exchangeRate) || 1).toNumber()
                });
                return b;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["tap"])(function (balance) {
              _this14.balances = balance.sort(function (prev, next) {
                return next.balanceInUsd - prev.balanceInUsd;
              });
            }));
            this.copy = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"])(this.item);
            this.fetchTransactions();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "fetchTransactions",
          value: function fetchTransactions(event, reset) {
            var _this15 = this;

            this.isFetching = true;

            if (reset) {
              this.page = 1;
            }

            this.http.get("/cards/".concat(this.item.id, "/transactions"), {
              params: {
                page: this.page - 1 + '',
                size: this.size + ''
              }
            }).subscribe(function (response) {
              _this15.isFetching = false;

              if (response.content) {
                var transactions = response.content.map(function (content) {
                  return Object.assign(Object.assign({}, content), {
                    createdAt: Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["parseISO"])(content.createdAt)
                  });
                });
                _this15.totalElements = response.totalElements || '0';
                _this15.transactions = reset ? transactions : _this15.transactions.concat(transactions);
                _this15.page += 1;
              }

              if (event) {
                event.target.complete();
              }
            });
          }
        }, {
          key: "getCurrencyByCode",
          value: function getCurrencyByCode(code) {
            return this.currencies.find(function (currency) {
              return currency.code === code;
            });
          }
        }, {
          key: "blockUnblockCard",
          value: function blockUnblockCard(checked) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this16 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertController.create({
                        header: checked ? this.translate.instant('common.block-your-card') : this.translate.instant('common.unblock-your-card'),
                        message: this.translate.instant('common.you-can-revert'),
                        buttons: [{
                          text: this.translate.instant('common.cancel'),
                          role: 'cancel'
                        }, {
                          text: checked ? this.translate.instant('common.block') : this.translate.instant('common.unblock'),
                          cssClass: 'text-danger',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                              var _this17 = this;

                              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                while (1) {
                                  switch (_context5.prev = _context5.next) {
                                    case 0:
                                      this.isBlockUnblockLoading = true;
                                      this.http.put("/cards/".concat(this.item.id, "/status"), {
                                        status: checked ? 'block' : 'unblock'
                                      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
                                        _this17.isBlockUnblockLoading = false;
                                      })).subscribe(function (card) {
                                        Object.assign(_this17.item, card);
                                        _this17.copy = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"])(_this17.item);
                                        _this17.transaction.card = card;

                                        _this17.toastr.success("".concat(_this17.translate.instant('common.card'), " ").concat(checked ? _this17.translate.instant('common.block') : _this17.translate.instant('common.unblock')));
                                      });

                                    case 2:
                                    case "end":
                                      return _context5.stop();
                                  }
                                }
                              }, _callee5, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "presentTopupModal",
          value: function presentTopupModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this18 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.t0 = this.modalController;
                      _context8.t1 = _modal_topup_modal_topup_page__WEBPACK_IMPORTED_MODULE_31__["ModalTopupPage"];
                      _context8.next = 4;
                      return this.modalController.getTop();

                    case 4:
                      _context8.t2 = _context8.sent;
                      _context8.t3 = {
                        item: this.item,
                        balances: this.balances
                      };
                      _context8.t4 = {
                        component: _context8.t1,
                        cssClass: 'modal-container',
                        presentingElement: _context8.t2,
                        componentProps: _context8.t3
                      };
                      _context8.next = 9;
                      return _context8.t0.create.call(_context8.t0, _context8.t4);

                    case 9:
                      modal = _context8.sent;
                      _context8.next = 12;
                      return modal.present();

                    case 12:
                      modal.onWillDismiss().then(function (_ref3) {
                        var data = _ref3.data;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                          var alert;
                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                            while (1) {
                              switch (_context7.prev = _context7.next) {
                                case 0:
                                  this.fetchTransactions(null, true);
                                  this.fetchBalanceEvent.next();

                                  if (data) {
                                    _context7.next = 4;
                                    break;
                                  }

                                  return _context7.abrupt("return");

                                case 4:
                                  _context7.next = 6;
                                  return this.alertController.create({
                                    header: this.translate.instant('common.topup-completed'),
                                    message: "".concat(this.translate.instant('common.you-successfully-topped-up'), " ").concat(data.destinationAmount.toFixed(2), " ").concat(data.destinationCurrencyCode, "."),
                                    buttons: ['OK']
                                  });

                                case 6:
                                  alert = _context7.sent;
                                  _context7.next = 9;
                                  return alert.present();

                                case 9:
                                  this.refreshBalance();

                                case 10:
                                case "end":
                                  return _context7.stop();
                              }
                            }
                          }, _callee7, this);
                        }));
                      });

                    case 13:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "openChangePinModal",
          value: function openChangePinModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this19 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.t0 = this.modalController;
                      _context10.t1 = _modal_change_pin_modal_change_pin_page__WEBPACK_IMPORTED_MODULE_26__["ModalChangePinPage"];
                      _context10.next = 4;
                      return this.modalController.getTop();

                    case 4:
                      _context10.t2 = _context10.sent;
                      _context10.t3 = {
                        item: this.item
                      };
                      _context10.t4 = {
                        component: _context10.t1,
                        cssClass: 'modal-change-pin',
                        presentingElement: _context10.t2,
                        componentProps: _context10.t3
                      };
                      _context10.next = 9;
                      return _context10.t0.create.call(_context10.t0, _context10.t4);

                    case 9:
                      modal = _context10.sent;
                      _context10.next = 12;
                      return modal.present();

                    case 12:
                      modal.onWillDismiss().then(function (_ref4) {
                        var data = _ref4.data;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this19, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                          var alert;
                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) {
                              switch (_context9.prev = _context9.next) {
                                case 0:
                                  if (data) {
                                    _context9.next = 2;
                                    break;
                                  }

                                  return _context9.abrupt("return");

                                case 2:
                                  _context9.next = 4;
                                  return this.alertController.create({
                                    header: this.translate.instant('common.pin-updated'),
                                    message: this.translate.instant('common.you-successfully-update-card-pin'),
                                    buttons: ['OK']
                                  });

                                case 4:
                                  alert = _context9.sent;
                                  _context9.next = 7;
                                  return alert.present();

                                case 7:
                                case "end":
                                  return _context9.stop();
                              }
                            }
                          }, _callee9, this);
                        }));
                      });

                    case 13:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "openFeesModal",
          value: function openFeesModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var modal;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.t0 = this.modalController;
                      _context11.t1 = _modal_fees_modal_fees_page__WEBPACK_IMPORTED_MODULE_28__["ModalFeesPage"];
                      _context11.next = 4;
                      return this.modalController.getTop();

                    case 4:
                      _context11.t2 = _context11.sent;
                      _context11.t3 = {
                        item: this.item
                      };
                      _context11.t4 = {
                        component: _context11.t1,
                        cssClass: 'modal-fees',
                        presentingElement: _context11.t2,
                        componentProps: _context11.t3
                      };
                      _context11.next = 9;
                      return _context11.t0.create.call(_context11.t0, _context11.t4);

                    case 9:
                      modal = _context11.sent;
                      _context11.next = 12;
                      return modal.present();

                    case 12:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "openDownloadReportModal",
          value: function openDownloadReportModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var modal;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.t0 = this.modalController;
                      _context12.t1 = _modal_download_transactions_modal_download_transactions_page__WEBPACK_IMPORTED_MODULE_27__["ModalDownloadTransactionsPage"];
                      _context12.next = 4;
                      return this.modalController.getTop();

                    case 4:
                      _context12.t2 = _context12.sent;
                      _context12.t3 = {
                        item: this.item
                      };
                      _context12.t4 = {
                        component: _context12.t1,
                        cssClass: 'modal-download-report',
                        presentingElement: _context12.t2,
                        componentProps: _context12.t3
                      };
                      _context12.next = 9;
                      return _context12.t0.create.call(_context12.t0, _context12.t4);

                    case 9:
                      modal = _context12.sent;
                      _context12.next = 12;
                      return modal.present();

                    case 12:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "presentCardDetails",
          value: function presentCardDetails() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this20 = this;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      if (!(this.item.type !== 'virtual')) {
                        _context14.next = 2;
                        break;
                      }

                      return _context14.abrupt("return");

                    case 2:
                      this.subscriptions.add(this.securityCheckService.getScopePermission('banking').subscribe(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this20, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                          var modal;
                          return regeneratorRuntime.wrap(function _callee13$(_context13) {
                            while (1) {
                              switch (_context13.prev = _context13.next) {
                                case 0:
                                  _context13.t0 = this.modalController;
                                  _context13.t1 = _card_details_card_details_page__WEBPACK_IMPORTED_MODULE_25__["CardDetailsPage"];
                                  _context13.next = 4;
                                  return this.modalController.getTop();

                                case 4:
                                  _context13.t2 = _context13.sent;
                                  _context13.t3 = {
                                    item: this.item,
                                    backgroundImage: this.digitalCardArtWorkUrl
                                  };
                                  _context13.t4 = {
                                    component: _context13.t1,
                                    cssClass: 'modal-card',
                                    presentingElement: _context13.t2,
                                    componentProps: _context13.t3
                                  };
                                  _context13.next = 9;
                                  return _context13.t0.create.call(_context13.t0, _context13.t4);

                                case 9:
                                  modal = _context13.sent;
                                  _context13.next = 12;
                                  return modal.present();

                                case 12:
                                case "end":
                                  return _context13.stop();
                              }
                            }
                          }, _callee13, this);
                        }));
                      }));

                    case 3:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "openViewNiumTermsModal",
          value: function openViewNiumTermsModal() {
            var termsModal = this.ngbModal.open(src_app_user_cards_card_order_card_order_terms_card_order_terms_component__WEBPACK_IMPORTED_MODULE_19__["CardOrderTermsComponent"], {
              windowClass: 'modal-primary view-terms-modal',
              backdrop: 'static',
              backdropClass: 'view-terms-modal'
            });
            termsModal.componentInstance.viewOnly = true;
          }
        }, {
          key: "offLedgerModal",
          value: function offLedgerModal(type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var _this21 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.t0 = this.modalController;
                      _context16.t1 = _modal_offledger_modal_offledger_page__WEBPACK_IMPORTED_MODULE_29__["ModalOffledgerPage"];
                      _context16.next = 4;
                      return this.modalController.getTop();

                    case 4:
                      _context16.t2 = _context16.sent;
                      _context16.t3 = {
                        item: this.item,
                        balances: this.balances,
                        type: type
                      };
                      _context16.t4 = {
                        component: _context16.t1,
                        cssClass: 'modal-container',
                        presentingElement: _context16.t2,
                        componentProps: _context16.t3
                      };
                      _context16.next = 9;
                      return _context16.t0.create.call(_context16.t0, _context16.t4);

                    case 9:
                      modal = _context16.sent;
                      _context16.next = 12;
                      return modal.present();

                    case 12:
                      modal.onWillDismiss().then(function (_ref5) {
                        var data = _ref5.data;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this21, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                          var dismissHeader, dismissMessage, alert;
                          return regeneratorRuntime.wrap(function _callee15$(_context15) {
                            while (1) {
                              switch (_context15.prev = _context15.next) {
                                case 0:
                                  if (data) {
                                    _context15.next = 2;
                                    break;
                                  }

                                  return _context15.abrupt("return");

                                case 2:
                                  this.fetchTransactions(null, true);
                                  this.fetchBalanceEvent.next();

                                  if (type === 'load') {
                                    dismissHeader = this.translate.instant('common.topup-completed');
                                    dismissMessage = "this.translate.instant(\n                    'common.you-successfully-topped-up'\n                ) (off ledger) ".concat(data.destinationAmount.toFixed(2), " ").concat(data.destinationCurrencyCode, ".");
                                  } else {
                                    dismissHeader = this.translate.instant('common.unload-card-completed');
                                    dismissMessage = "".concat(this.translate.instant('common.unload-card'), " ").concat(data.message);
                                  }

                                  if (data) {
                                    _context15.next = 7;
                                    break;
                                  }

                                  return _context15.abrupt("return");

                                case 7:
                                  _context15.next = 9;
                                  return this.alertController.create({
                                    header: dismissHeader,
                                    message: dismissMessage,
                                    buttons: ['OK']
                                  });

                                case 9:
                                  alert = _context15.sent;
                                  _context15.next = 12;
                                  return alert.present();

                                case 12:
                                case "end":
                                  return _context15.stop();
                              }
                            }
                          }, _callee15, this);
                        }));
                      });

                    case 13:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "openUnloadModal",
          value: function openUnloadModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var _this22 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.t0 = this.modalController;
                      _context18.t1 = _modal_unload_modal_unload_page__WEBPACK_IMPORTED_MODULE_32__["ModalUnloadPage"];
                      _context18.next = 4;
                      return this.modalController.getTop();

                    case 4:
                      _context18.t2 = _context18.sent;
                      _context18.t3 = {
                        card: this.item,
                        balances: this.balances
                      };
                      _context18.t4 = {
                        component: _context18.t1,
                        cssClass: 'modal-container',
                        presentingElement: _context18.t2,
                        componentProps: _context18.t3
                      };
                      _context18.next = 9;
                      return _context18.t0.create.call(_context18.t0, _context18.t4);

                    case 9:
                      modal = _context18.sent;
                      _context18.next = 12;
                      return modal.present();

                    case 12:
                      modal.onWillDismiss().then(function (_ref6) {
                        var data = _ref6.data;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                          var alert;
                          return regeneratorRuntime.wrap(function _callee17$(_context17) {
                            while (1) {
                              switch (_context17.prev = _context17.next) {
                                case 0:
                                  this.fetchTransactions(null, true);
                                  this.fetchBalanceEvent.next();

                                  if (data) {
                                    _context17.next = 4;
                                    break;
                                  }

                                  return _context17.abrupt("return");

                                case 4:
                                  _context17.next = 6;
                                  return this.alertController.create({
                                    header: this.translate.instant('common.unload-card-completed'),
                                    message: "".concat(this.translate.instant('common.unload-card'), " ").concat(data.message),
                                    buttons: ['OK']
                                  });

                                case 6:
                                  alert = _context17.sent;
                                  _context17.next = 9;
                                  return alert.present();

                                case 9:
                                  this.refreshBalance();

                                case 10:
                                case "end":
                                  return _context17.stop();
                              }
                            }
                          }, _callee17, this);
                        }));
                      });

                    case 13:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "openSwapModal",
          value: function openSwapModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var _this23 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.t0 = this.modalController;
                      _context20.t1 = _modal_swap_modal_swap_page__WEBPACK_IMPORTED_MODULE_30__["ModalSwapPage"];
                      _context20.next = 4;
                      return this.modalController.getTop();

                    case 4:
                      _context20.t2 = _context20.sent;
                      _context20.t3 = {
                        item: this.item,
                        balances: this.balances
                      };
                      _context20.t4 = {
                        component: _context20.t1,
                        cssClass: 'modal-container',
                        presentingElement: _context20.t2,
                        componentProps: _context20.t3
                      };
                      _context20.next = 9;
                      return _context20.t0.create.call(_context20.t0, _context20.t4);

                    case 9:
                      modal = _context20.sent;
                      _context20.next = 12;
                      return modal.present();

                    case 12:
                      modal.onWillDismiss().then(function (_ref7) {
                        var data = _ref7.data;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this23, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                          var alert;
                          return regeneratorRuntime.wrap(function _callee19$(_context19) {
                            while (1) {
                              switch (_context19.prev = _context19.next) {
                                case 0:
                                  this.fetchTransactions(null, true);
                                  this.fetchBalanceEvent.next();

                                  if (data) {
                                    _context19.next = 4;
                                    break;
                                  }

                                  return _context19.abrupt("return");

                                case 4:
                                  console.log(data);
                                  _context19.next = 7;
                                  return this.alertController.create({
                                    header: this.translate.instant('common.exchange-completed'),
                                    message: "".concat(data.destinationAmount, " ").concat(data.destinationCurrencyCode, " ").concat(this.translate.instant('common.has-been-credited')),
                                    buttons: ['OK']
                                  });

                                case 7:
                                  alert = _context19.sent;
                                  _context19.next = 10;
                                  return alert.present();

                                case 10:
                                  this.refreshBalance();

                                case 11:
                                case "end":
                                  return _context19.stop();
                              }
                            }
                          }, _callee19, this);
                        }));
                      });

                    case 13:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }, {
          key: "formatPan",
          value: function formatPan(pan) {
            return "".concat(pan.slice(0, 4), " ").concat(pan.slice(4, 8), " ").concat(pan.slice(8, 12), " ").concat(pan.slice(12));
          }
        }, {
          key: "getDescription",
          value: function getDescription(tx) {
            if (tx.merchantName) {
              switch (tx.transactionType) {
                case 'Auto_Sweep':
                  return "<b>".concat(this.translate.instant('card-view.auto-sweep'), "</b>: ") + tx.merchantName;

                case 'Fee_Debit':
                  var label = '';

                  switch (tx.labels.feeName) {
                    case 'INTERNATIONAL_ATM_FEE':
                    case 'ATM_FEE':
                      label = 'ATM Fee';
                      break;

                    case 'TRANSACTION_MARKUP':
                      label = "".concat(this.translate.instant('card-view.fx-fee'));
                      break;

                    case 'ATM_DECLINE_FEE':
                      label = 'ATM Decline Fee';
                      break;

                    case 'NON_ATM_DECLINE_FEE':
                      label = this.translate.instant('common.decline-fee');
                      break;

                    case 'ECOM_FEE':
                      label = "".concat(this.translate.instant('card-view.ecommerce-fee'));
                      break;
                  }

                  return label + ': ' + tx.merchantName;

                default:
                  return tx.merchantName;
              }
            }

            switch (tx.transactionType) {
              case 'Fee_Debit':
              case 'Fee_Waiver':
                var _label = '';

                switch (tx.labels.feeName) {
                  case 'ACCOUNT_MAINTENANCE_FEE':
                    _label = "".concat(this.translate.instant('card-view.maintenance-fee'));
                    break;

                  case 'ACCOUNT_INACTIVE_FEE':
                    _label = "".concat(this.translate.instant('card-view.inactivity-fee'));
                    break;
                }

                return _label;
            }

            if (tx.transactionType.includes('Wallet_Credit_Mode_Prefund')) {
              return "".concat(this.translate.instant('card-view.topup-from-wallet'));
            }

            if (tx.transactionType.includes('Wallet_Refund')) {
              return "".concat(this.translate.instant('card-view.unload-from-card'));
            }

            if (tx.transactionType.includes('Wallet_Fund_Transfer')) {
              return "".concat(this.translate.instant('common.currency-exchange'));
            }

            return tx.transactionType;
          }
        }, {
          key: "getTransactionColor",
          value: function getTransactionColor(tx) {
            if (tx.status === 'Declined') {
              return 'medium';
            }

            switch (tx.transactionType) {
              case 'Auto_Sweep':
                return 'primary';

              case 'Fee_Debit':
                return 'danger-alt';

              case 'Wallet_Fund_Transfer':
                return 'primary';

              default:
                return tx.debit ? 'danger' : 'success';
            }
          }
        }, {
          key: "getTransactionIcon",
          value: function getTransactionIcon(tx) {
            switch (tx.transactionType) {
              case 'Auto_Sweep':
                return 'swap-horizontal';

              case 'Fee_Debit':
                return 'arrow-down-circle';

              case 'Wallet_Fund_Transfer':
                return 'swap-horizontal-outline';

              default:
                return tx.debit ? 'arrow-down' : 'arrow-up';
            }
          }
        }, {
          key: "refreshBalance",
          value: function refreshBalance() {
            this.walletsService.fetch();
            this.transactionService.changeEvent.emit();
          }
        }]);

        return CardViewPage;
      }();

      CardViewPage.ctorParameters = function () {
        return [{
          type: _services_session_service__WEBPACK_IMPORTED_MODULE_23__["SessionService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: src_app_common_services_toastr_service__WEBPACK_IMPORTED_MODULE_15__["ToastrService"]
        }, {
          type: src_app_store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_17__["WalletsQuery"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _security_check_security_check_service__WEBPACK_IMPORTED_MODULE_22__["SecurityCheckService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]
        }, {
          type: src_app_store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_16__["CurrenciesQuery"]
        }, {
          type: src_app_store_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_18__["WalletsService"]
        }, {
          type: _services_transaction_service__WEBPACK_IMPORTED_MODULE_24__["TransactionService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
        }];
      };

      CardViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-card-view',
        template: _raw_loader_card_view_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_card_view_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CardViewPage);
      /***/
    },

    /***/
    "nuNh":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/card-view/modal-swap/modal-swap.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nuNh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border b-b-1\">\n    <ion-toolbar>\n        <ion-buttons slot=\"primary\">\n            <ion-button color=\"dark\" (click)=\"dismiss()\">\n                <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>{{ 'common.currency-exchange' | translate}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding px-3\">\n        <form\n            class=\"form-validation\"\n            #transactionForm=\"ngForm\"\n            [ngClass]=\"{ 'ng-submitted': transactionForm.submitted }\"\n            autocomplete=\"false\"\n            (ngSubmit)=\"topupCard()\"\n            novalidate\n        >\n            <div class=\"row\">\n                <div class=\"form-group col\">\n                    <label class=\"font-md\" for=\"sourceCurrencyCode\">{{ 'common.source' | translate }} ({{ 'common.card' | translate }})</label>\n                    <ng-select\n                        class=\"ng-select-lg ng-select-topup\"\n                        [placeholder]=\"'common.select-currency' | translate\"\n                        [(ngModel)]=\"swap.sourceCurrencyCode\"\n                        (ngModelChange)=\"getExchangeRate(); filterDestinationCurrencies()\"\n                        name=\"sourceCurrencyCode\"\n                        [items]=\"filteredCardBalances\"\n                        [clearable]=\"false\"\n                        [searchable]=\"false\"\n                        [required]=\"true\"\n                        appendTo=\".modal-container\"\n                        [compareWith]=\"compareCurrencies\"\n                        bindValue=\"curSymbol\"\n                    >\n                        <ng-template ng-label-tmp let-item=\"item\">\n                            <b class=\"mr-1\">{{ item.curSymbol }}</b>\n                            <span class=\"small text-muted\">{{ item.balance | amount: 2 }} {{ item.curSymbol }}</span>\n                        </ng-template>\n                        <ng-template ng-option-tmp let-item=\"item\">\n                            {{ item.curSymbol }}\n                            <span class=\"float-right small text-muted\">{{ item.balance | amount: 2 }} {{ item.curSymbol }}</span>\n                        </ng-template>\n                    </ng-select>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col\">\n                    <div class=\"d-flex justify-content-between\">\n                        <div class=\"d-flex\">\n                            <label class=\"font-md\"> {{ 'common.amount' | translate }} </label>\n                        </div>\n                        <a href (click)=\"useMax(); $event.preventDefault()\">{{ 'common.use-max' | translate }}</a>\n                    </div>\n                    <input\n                        type=\"number\"\n                        class=\"form-control form-control-lg\"\n                        id=\"amount\"\n                        name=\"amount\"\n                        [placeholder]=\"'0.00'\"\n                        [(ngModel)]=\"swap.amount\"\n                        #amount=\"ngModel\"\n                        required\n                    />\n                    <div *ngIf=\"amount.invalid && (transactionForm.submitted || amount.dirty)\" class=\"error-messages\">\n                        <div class=\"form-control-feedback\" *ngIf=\"amount?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col\">\n                    <label class=\"font-md\" for=\"destination\">{{ 'common.destination' | translate }} ({{ 'common.source' | translate }})</label>\n                    <ng-select\n                        class=\"ng-select-lg ng-select-topup\"\n                        [placeholder]=\"'common.select-currency' | translate\"\n                        [(ngModel)]=\"swap.destinationCurrencyCode\"\n                        (ngModelChange)=\"getExchangeRate()\"\n                        name=\"destinationCurrencyCode\"\n                        [items]=\"filteredDestinationCurrencies\"\n                        [clearable]=\"false\"\n                        [searchable]=\"false\"\n                        [required]=\"true\"\n                        appendTo=\".modal-container\"\n                    >\n                        <ng-template ng-label-tmp let-item=\"item\">\n                            <b class=\"mr-1\">{{ item }}</b>\n                            <span class=\"small text-muted\">{{ getCardBalance(item) | amount: 2 }} {{ item }}</span>\n                        </ng-template>\n                        <ng-template ng-option-tmp let-item=\"item\">\n                            {{ item }}\n                            <span class=\"float-right small text-muted\">{{ getCardBalance(item) | amount: 2 }} {{ item }}</span>\n                        </ng-template>\n                    </ng-select>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <table class=\"table\">\n                        <tr class=\"table-light\" *ngIf=\"isForexTopup()\">\n                            <td>{{ 'common.exchange-rate' | translate | sentenceCase }}</td>\n                            <td class=\"text-right\">\n                                <b\n                                    ><span *ngIf=\"!isGettingExchangeRate; else spinner\"\n                                        >1 {{ swap.sourceCurrencyCode }} = {{ exchangeRate | amount: 4 }} {{swap.destinationCurrencyCode}}</span\n                                    ></b\n                                >\n                            </td>\n                        </tr>\n                        <tr class=\"table-light\">\n                            <td>{{ 'common.amount-to-be-credited' | translate }}</td>\n                            <td class=\"text-right\"><b>{{ calculateAmount() | amount: 2 }} {{ swap.destinationCurrencyCode }}</b></td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"isLoading || isGettingExchangeRate\">\n                <ng-template #spinner><ion-spinner name=\"crescent\" class=\"font-md\"></ion-spinner></ng-template>\n                <span *ngIf=\"!isLoading; else spinner\">{{ 'common.submit' | translate }}</span>\n            </button>\n        </form>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "psES":
    /*!********************************************************************!*\
      !*** ./src/app/common/card-view/card-details/card-details.page.ts ***!
      \********************************************************************/

    /*! exports provided: CardDetailsPage */

    /***/
    function psES(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardDetailsPage", function () {
        return CardDetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-details.page.html */
      "hHbQ");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/pro-light-svg-icons */
      "WE53");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var CardDetailsPage = /*#__PURE__*/function () {
        function CardDetailsPage(modalController, http) {
          _classCallCheck(this, CardDetailsPage);

          this.modalController = modalController;
          this.http = http;
          this.faCopy = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCopy"];
        }

        _createClass(CardDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            this.http.get("/cards/".concat(this.item.id, "/details")).subscribe(function (details) {
              return _this24.details = details;
            });
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }, {
          key: "formatCardNumber",
          value: function formatCardNumber(cardNumber) {
            return "".concat(cardNumber.slice(0, 4), " ").concat(cardNumber.slice(4, 8), " ").concat(cardNumber.slice(8, 12), " ").concat(cardNumber.slice(12));
          }
        }, {
          key: "getBackgroundImageStyle",
          value: function getBackgroundImageStyle() {
            if (!this.backgroundImage) {
              return;
            }

            var styles = {
              backgroundImage: 'url(' + this.backgroundImage + ')',
              backgroundSize: 'cover'
            };
            return styles;
          }
        }]);

        return CardDetailsPage;
      }();

      CardDetailsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      CardDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'card-details',
        template: _raw_loader_card_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardDetailsPage);
      /***/
    },

    /***/
    "sbLD":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-cards/card-order/card-order-terms/card-order-terms.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sbLD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{ 'common.terms-and-conditions' | translate }}</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"modal.dismiss()\">&times;</button>\n</div>\n<div class=\"modal-subheader\">{{ 'card-order-terms.you-must-accept-the-terms' | translate }}</div>\n<div class=\"modal-body card-terms-container text-body\">\n    <ng-container *ngIf=\"isLoaded; else loadingContent\">\n        <div [innerHtml]=\"terms.description | safeHtml\"></div>\n    </ng-container>\n    <ng-template #loadingContent>\n        <svg class=\"spinner spinner-dark\" viewBox=\"0 0 50 50\">\n            <circle class=\"path\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\"></circle>\n        </svg>\n        <p class=\"mb-0 mt-5 text-center\">{{ 'common.loading-terms' | translate }}</p>\n    </ng-template>\n</div>\n<div class=\"modal-footer flex-column flex-md-row justify-content-center justify-content-md-end\">\n    <ng-container *ngIf=\"!viewOnly; else closeButton\">\n        <button class=\"btn btn-link mr-md-auto mb-2 mb-md-0\" (click)=\"scrollDown()\">{{ 'common.scroll-to-bottom' | translate }}</button>\n        <div class=\"d-flex justify-content-end\">\n            <button class=\"btn btn-default btn-w-sm\" (click)=\"modal.dismiss()\">Decline</button>\n            <button class=\"btn btn-primary btn-w-sm ml-1\" (click)=\"terms && accept()\" [disabled]=\"!isDown\">{{ 'common.accept' | translate }}</button>\n        </div>\n    </ng-container>\n    <ng-template #closeButton>\n        <div class=\"d-flex justify-content-end\">\n            <button class=\"btn btn-default btn-w-sm\" (click)=\"modal.dismiss()\">{{ 'common.close' | translate }}</button>\n        </div>\n    </ng-template>\n</div>\n";
      /***/
    },

    /***/
    "txKk":
    /*!*****************************************************************************************!*\
      !*** ./src/app/user-cards/card-order-confirmation/card-order-confirmation.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: CardOrderConfirmationComponent */

    /***/
    function txKk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardOrderConfirmationComponent", function () {
        return CardOrderConfirmationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_order_confirmation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-order-confirmation.component.html */
      "5uf+");
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


      var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/common/security-check/security-check.service */
      "i32w");
      /* harmony import */


      var src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/common/services/session.service */
      "6g7h");
      /* harmony import */


      var src_app_common_services_toastr_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/common/services/toastr.service */
      "N/y2");
      /* harmony import */


      var _card_order_card_order_terms_card_order_terms_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../card-order/card-order-terms/card-order-terms.component */
      "lCnd");

      var CardOrderConfirmationComponent = /*#__PURE__*/function () {
        function CardOrderConfirmationComponent(activeModal, ngbModal, http, router, securityCheckService, toastr, session, translate) {
          _classCallCheck(this, CardOrderConfirmationComponent);

          this.activeModal = activeModal;
          this.ngbModal = ngbModal;
          this.http = http;
          this.router = router;
          this.securityCheckService = securityCheckService;
          this.toastr = toastr;
          this.session = session;
          this.translate = translate;
          this.isLoading = false;
          this.subscriptrions = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
        }

        _createClass(CardOrderConfirmationComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptrions.unsubscribe();
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this25 = this;

            if (!this.cardOrderConfirmForm.valid) {
              return;
            }

            this.subscriptrions.add(this.securityCheckService.getScopePermission('banking').subscribe(function () {
              _this25.ngbModal.open(_card_order_card_order_terms_card_order_terms_component__WEBPACK_IMPORTED_MODULE_13__["CardOrderTermsComponent"], {
                windowClass: 'modal-primary',
                backdrop: 'static'
              }).result.then(function (terms) {
                _this25.isLoading = true;

                _this25.http.post('/card-orders', {
                  id: _this25.cardOrder.id,
                  type: _this25.cardOrder.type,
                  currency: {
                    code: _this25.cardOrder.currency.code
                  },
                  transaction: {
                    currency: {
                      code: _this25.cardOrder.currency.code
                    }
                  },
                  user: {
                    id: _this25.cardOrder.user.id
                  },
                  shippingAddress: _this25.cardOrder.shippingAddress,
                  terms: Object(lodash__WEBPACK_IMPORTED_MODULE_7__["pick"])(terms, ['name', 'accept', 'versionId'])
                }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
                  _this25.isLoading = false;
                })).subscribe(function () {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this25, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
                    return regeneratorRuntime.wrap(function _callee21$(_context21) {
                      while (1) {
                        switch (_context21.prev = _context21.next) {
                          case 0:
                            this.toastr.success(this.translate.instant('card-order-confirmation.card-order-confirmed'));
                            this.activeModal.close();

                            if (this.router.url.includes('admin')) {
                              _context21.next = 5;
                              break;
                            }

                            _context21.next = 5;
                            return this.router.navigate(['/cards/orders']);

                          case 5:
                          case "end":
                            return _context21.stop();
                        }
                      }
                    }, _callee21, this);
                  }));
                });
              }, function () {
                return undefined;
              });
            }));
          }
        }]);

        return CardOrderConfirmationComponent;
      }();

      CardOrderConfirmationComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_10__["SecurityCheckService"]
        }, {
          type: src_app_common_services_toastr_service__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]
        }, {
          type: src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }];
      };

      CardOrderConfirmationComponent.propDecorators = {
        cardOrderConfirmForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['cardOrderConfirmForm']
        }],
        cardOrder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CardOrderConfirmationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'card-order-confirmation',
        template: _raw_loader_card_order_confirmation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardOrderConfirmationComponent);
      /***/
    },

    /***/
    "yCW8":
    /*!********************************************************!*\
      !*** ./src/app/common/card-dummy/card-dummy.module.ts ***!
      \********************************************************/

    /*! exports provided: CardDummyModule */

    /***/
    function yCW8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardDummyModule", function () {
        return CardDummyModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common.module */
      "a6Df");
      /* harmony import */


      var _card_dummy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./card-dummy.component */
      "1+je");

      var CardDummyModule = /*#__PURE__*/_createClass(function CardDummyModule() {
        _classCallCheck(this, CardDummyModule);
      });

      CardDummyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_card_dummy_component__WEBPACK_IMPORTED_MODULE_4__["CardDummyComponent"]],
        imports: [_common_module__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
        exports: [_card_dummy_component__WEBPACK_IMPORTED_MODULE_4__["CardDummyComponent"]]
      })], CardDummyModule);
      /***/
    },

    /***/
    "zELP":
    /*!**************************************!*\
      !*** ./node_modules/scroll/index.js ***!
      \**************************************/

    /*! no static exports found */

    /***/
    function zELP(module, exports) {
      var E_NOSCROLL = new Error('Element already at target scroll position');
      var E_CANCELLED = new Error('Scroll cancelled');
      var min = Math.min;
      var ms = Date.now;
      module.exports = {
        left: make('scrollLeft'),
        top: make('scrollTop')
      };

      function make(prop) {
        return function scroll(el, to, opts, cb) {
          opts = opts || {};
          if (typeof opts == 'function') cb = opts, opts = {};
          if (typeof cb != 'function') cb = noop;
          var start = ms();
          var from = el[prop];
          var ease = opts.ease || inOutSine;
          var duration = !isNaN(opts.duration) ? +opts.duration : 350;
          var cancelled = false;
          return from === to ? cb(E_NOSCROLL, el[prop]) : requestAnimationFrame(animate), cancel;

          function cancel() {
            cancelled = true;
          }

          function animate(timestamp) {
            if (cancelled) return cb(E_CANCELLED, el[prop]);
            var now = ms();
            var time = min(1, (now - start) / duration);
            var eased = ease(time);
            el[prop] = eased * (to - from) + from;
            time < 1 ? requestAnimationFrame(animate) : requestAnimationFrame(function () {
              cb(null, el[prop]);
            });
          }
        };
      }

      function inOutSine(n) {
        return 0.5 * (1 - Math.cos(Math.PI * n));
      }

      function noop() {}
      /***/

    },

    /***/
    "zGa5":
    /*!********************************************************************!*\
      !*** ./src/app/common/card-view/modal-unload/modal-unload.page.ts ***!
      \********************************************************************/

    /*! exports provided: ModalUnloadPage */

    /***/
    function zGa5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalUnloadPage", function () {
        return ModalUnloadPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_unload_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-unload.page.html */
      "+XXr");
      /* harmony import */


      var _card_view_modal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../card-view-modal.scss */
      "W/nx");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/store/currencies/currencies.query */
      "4pv/");
      /* harmony import */


      var _services_accounting_fee_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/accounting/fee.service */
      "le6r");
      /* harmony import */


      var _services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../services/session.service */
      "6g7h");

      var ModalUnloadPage = /*#__PURE__*/function () {
        function ModalUnloadPage(http, session, modalController, feeService, currenciesQuery) {
          _classCallCheck(this, ModalUnloadPage);

          this.http = http;
          this.session = session;
          this.modalController = modalController;
          this.feeService = feeService;
          this.currenciesQuery = currenciesQuery;
          this.sourceCurrencyCode = 'USD';
          this.exchangeRate = '1';
          this.niumCurrencies = ['AUD', 'CAD', 'EUR', 'GBP', 'HKD', 'JPY', 'SGD', 'USD'];
          this.isLoading = false;
          this.isFetching = false;
          this.fetchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
        }

        _createClass(ModalUnloadPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this26 = this;

            this.currenciesQuery.selectEntity('USD').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function (usd) {
              if (usd) {
                _this26.destinationCurrency = usd;
              }
            });
            this.subscription.add(this.fetchEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () {
              _this26.isFetching = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function () {
              var _a, _b;

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])([_this26.feeService.fetch({
                type: 'deposit',
                method: 'card',
                currency: {
                  code: _this26.destinationCurrency.code
                },
                user: {
                  id: _this26.session.user.id
                }
              }), _this26.sourceCurrencyCode !== _this26.destinationCurrency.code ? _this26.http.post("/card-programs/".concat((_b = (_a = _this26.card.cardholder) === null || _a === void 0 ? void 0 : _a.cardProgram) === null || _b === void 0 ? void 0 : _b.id, "/get-exchange-rate"), {
                destinationCurrencyCode: _this26.destinationCurrency.code,
                sourceCurrencyCode: _this26.sourceCurrencyCode
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (response) {
                return response.exchangeRate;
              })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])('1')]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                _this26.isFetching = false;
              }));
            })).subscribe(function (_ref8) {
              var _ref9 = _slicedToArray(_ref8, 2),
                  fee = _ref9[0],
                  exchangeRate = _ref9[1];

              _this26.unloadCardFee = fee;
              _this26.exchangeRate = exchangeRate;
            }));
            this.fetchEvent.next();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }, {
          key: "submit",
          value: function submit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var _this27 = this;

              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      if (!this.unloadForm.invalid) {
                        _context22.next = 2;
                        break;
                      }

                      return _context22.abrupt("return");

                    case 2:
                      this.isLoading = true;
                      this.http.post("/cards/".concat(this.card.id, "/refund"), {
                        sourceCurrencyCode: this.sourceCurrencyCode,
                        amount: this.amount + '',
                        destinationCurrencyCode: this.destinationCurrency.code
                      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                        _this27.isLoading = false;
                      })).subscribe(function (response) {
                        _this27.modalController.dismiss(response);
                      });

                    case 4:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }, {
          key: "getCardBalance",
          value: function getCardBalance(code) {
            var found = this.balances.find(function (b) {
              return b.curSymbol === code;
            });

            if (found) {
              return found.balance + '';
            }

            return '0.00';
          }
        }, {
          key: "calculateFee",
          value: function calculateFee() {
            var _a, _b;

            var relativeFeeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(0);

            if ((_a = this.unloadCardFee) === null || _a === void 0 ? void 0 : _a.relative) {
              relativeFeeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(this.amount || 0).times(this.exchangeRate).times(this.unloadCardFee.relative || 0);

              if (this.unloadCardFee.min && relativeFeeAmount.isLessThan(this.unloadCardFee.min)) {
                relativeFeeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(this.unloadCardFee.min);
              } else if (this.unloadCardFee.max && relativeFeeAmount.isGreaterThan(this.unloadCardFee.max)) {
                relativeFeeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(this.unloadCardFee.max);
              }
            }

            return new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(((_b = this.unloadCardFee) === null || _b === void 0 ? void 0 : _b.fixed) || 0).plus(relativeFeeAmount).toFixed(2, 1);
          }
        }, {
          key: "calculateAmount",
          value: function calculateAmount() {
            if (!this.amount) {
              return '0';
            }

            return new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(this.amount).times(this.exchangeRate).minus(this.calculateFee()).toFixed(2, 1);
          }
        }]);

        return ModalUnloadPage;
      }();

      ModalUnloadPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _services_accounting_fee_service__WEBPACK_IMPORTED_MODULE_10__["FeeService"]
        }, {
          type: src_app_store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_9__["CurrenciesQuery"]
        }];
      };

      ModalUnloadPage.propDecorators = {
        card: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        balances: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        unloadForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['unloadForm']
        }]
      };
      ModalUnloadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-modal-unload',
        template: _raw_loader_modal_unload_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_card_view_modal_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModalUnloadPage);
      /***/
    },

    /***/
    "zZt8":
    /*!******************************************************!*\
      !*** ./src/app/common/card-view/card-view.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function zZt8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: transparent;\n}\n\n.background {\n  background: #21325b;\n  min-height: 420px;\n  width: 100%;\n  position: fixed;\n  top: 0;\n}\n\nion-fab-button {\n  --box-shadow: none;\n  border-radius: 50%;\n}\n\nion-fab-button.bg-primary {\n  --background: #2d4c89;\n  --color: var(--ion-color-primary);\n}\n\nion-fab-list {\n  right: 6px;\n}\n\nion-fab.change-pin {\n  border-radius: 50%;\n  right: 60px !important;\n}\n\n.dropdown-menu.show {\n  margin: 3.125rem -79px 0 !important;\n}\n\n.dropdown-toggle::after {\n  display: none !important;\n}\n\n.top-card {\n  color: #fff;\n  padding: 1.5rem 1.5rem 0 1.5rem;\n}\n\n.top-card .balances {\n  min-height: 70px;\n  margin-bottom: 0.5rem;\n}\n\n.top-card .balances .loader {\n  min-height: 120px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.top-card .data {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.top-card .data ul {\n  -webkit-padding-start: 0 !important;\n          padding-inline-start: 0 !important;\n  -webkit-margin-before: 0 !important;\n          margin-block-start: 0 !important;\n  -webkit-margin-after: 0 !important;\n          margin-block-end: 0 !important;\n}\n\n.top-card .data ul li {\n  list-style: none;\n}\n\n.top-card .data ul li .title {\n  font-weight: 400;\n  font-size: 11px;\n  text-transform: uppercase;\n  opacity: 0.7;\n}\n\n.top-card .data ul li p {\n  font-weight: 500;\n  font-size: 17px;\n}\n\n.top-card .pan {\n  font-weight: 500;\n  font-size: 20px;\n  letter-spacing: 1px;\n  text-align: center;\n  padding: 1rem 0 !important;\n}\n\n.top-card h1 {\n  margin: 2.25rem 0;\n  font-size: 2.25rem;\n  font-weight: 400;\n}\n\n.top-card ion-segment ion-segment-button {\n  --indicator-color: rgba(255, 255, 255, 0.1);\n}\n\n.top-card .primary-actions {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.top-card .primary-actions ion-col {\n  padding-top: 0 !important;\n}\n\n.top-card .primary-actions ion-button {\n  --background: rgba(66, 245, 93, 0.2);\n  --border-radius: 12px !important;\n  --box-shadow: none;\n  --color: var(--ion-color-success);\n  --border-checked: red !important;\n  height: 50px !important;\n}\n\n.top-card .custom-actions {\n  margin: 4px 2px;\n}\n\n.top-card .custom-actions .btn {\n  letter-spacing: 0.06em;\n  line-height: 12px;\n  font-size: 12px;\n  height: 50px !important;\n}\n\n.top-card .success-actions {\n  background: rgba(66, 135, 245, 0.3);\n  color: var(--ion-color-secondary);\n  border-top-left-radius: 12px;\n  border-bottom-left-radius: 12px;\n}\n\n.top-card .success-actions:hover {\n  background: rgba(66, 135, 245, 0.5);\n}\n\n.top-card .danger-actions {\n  background: rgba(245, 66, 99, 0.3);\n  color: var(--ion-color-danger);\n  border-top-right-radius: 12px;\n  border-bottom-right-radius: 12px;\n}\n\n.top-card .danger-actions:hover {\n  background: rgba(245, 66, 99, 0.5);\n}\n\n.section-list {\n  background-color: #fff;\n  border-top-left-radius: 1.25rem;\n  border-top-right-radius: 1.25rem;\n  overflow: hidden;\n  margin-top: 1rem;\n}\n\n.section-list ion-item {\n  --background: #fff;\n  --border-color: transparent;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #dfe7f5;\n}\n\n.section-list ion-item:last-child {\n  border-bottom: 0;\n}\n\n.section-list .thumb {\n  background-color: #dfe7f5;\n  width: 42px;\n  height: 42px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 1.5rem;\n  border-radius: 50%;\n  opacity: 0.9;\n}\n\n.section-list .thumb.primary {\n  background-color: var(--ion-color-primary-tint);\n}\n\n.section-list .thumb.success {\n  background-color: var(--ion-color-success-tint);\n}\n\n.section-list .thumb.warning {\n  background-color: var(--ion-color-warning-tint);\n}\n\n.section-list .thumb.danger {\n  background-color: #d4374c;\n}\n\n.section-list .thumb.danger-alt {\n  background-color: #ce6a59;\n}\n\n.section-list .thumb.medium {\n  background-color: var(--ion-color-medium-tint);\n}\n\n.section-list h5 {\n  color: #ee5a55;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhcmQtdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNFO0VBQ0UscUJBQUE7RUFDQSxpQ0FBQTtBQUNKOztBQUdBO0VBQ0UsVUFBQTtBQUFGOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQURKOztBQUtBO0VBQ0UsbUNBQUE7QUFGRjs7QUFLQTtFQUNFLHdCQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsK0JBQUE7QUFGRjs7QUFJRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFJSTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFGTjs7QUFNRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBSko7O0FBTUk7RUFDRSxtQ0FBQTtVQUFBLGtDQUFBO0VBQ0EsbUNBQUE7VUFBQSxnQ0FBQTtFQUNBLGtDQUFBO1VBQUEsOEJBQUE7QUFKTjs7QUFPSTtFQUNFLGdCQUFBO0FBTE47O0FBT007RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFMUjs7QUFRTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQU5SOztBQVdFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBVEo7O0FBWUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFWSjs7QUFjSTtFQUNFLDJDQUFBO0FBWk47O0FBZ0JFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQWRKOztBQWVJO0VBQ0UseUJBQUE7QUFiTjs7QUFlSTtFQUNFLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtBQWJOOztBQWlCRTtFQUNFLGVBQUE7QUFmSjs7QUFpQkk7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBZk47O0FBbUJFO0VBQ0UsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUFqQko7O0FBbUJJO0VBQ0UsbUNBQUE7QUFqQk47O0FBcUJFO0VBQ0Usa0NBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFuQko7O0FBcUJJO0VBQ0Usa0NBQUE7QUFuQk47O0FBd0JBO0VBQ0Usc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQXJCRjs7QUFzQkU7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FBcEJKOztBQXNCSTtFQUNFLGdCQUFBO0FBcEJOOztBQXVCRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQXJCSjs7QUF1Qkk7RUFDRSwrQ0FBQTtBQXJCTjs7QUF3Qkk7RUFDRSwrQ0FBQTtBQXRCTjs7QUF5Qkk7RUFDRSwrQ0FBQTtBQXZCTjs7QUEwQkk7RUFDRSx5QkFBQTtBQXhCTjs7QUEyQkk7RUFDRSx5QkFBQTtBQXpCTjs7QUE0Qkk7RUFDRSw4Q0FBQTtBQTFCTjs7QUE4QkU7RUFDRSxjQUFBO0VBQ0EsU0FBQTtBQTVCSiIsImZpbGUiOiJjYXJkLXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICMyMTMyNWI7IC8vIGxpbmVhci1ncmFkaWVudCgzNDZkZWcsIHJnYmEoOCwgMTgsIDQzLCAxKSAwJSwgcmdiYSg1OSwgNzIsIDE0MiwgMSkgMTAwJSk7IC8vICMwNjBmMjUgICAjM2I0ODhlXG4gIG1pbi1oZWlnaHQ6IDQyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgJi5iZy1wcmltYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICMyZDRjODk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG59XG5cbmlvbi1mYWItbGlzdCB7XG4gIHJpZ2h0OiA2cHg7XG59XG5cbmlvbi1mYWIge1xuICAmLmNoYW5nZS1waW4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICByaWdodDogNjBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5kcm9wZG93bi1tZW51LnNob3cge1xuICBtYXJnaW46IDMuMTI1cmVtIC03OXB4IDAgIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50b3AtY2FyZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxLjVyZW0gMS41cmVtIDAgMS41cmVtO1xuXG4gIC5iYWxhbmNlcyB7XG4gICAgbWluLWhlaWdodDogNzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG5cbiAgICAubG9hZGVyIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAuZGF0YSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIHVsIHtcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICB1bCBsaSB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuXG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucGFuIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtIDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIGgxIHtcbiAgICBtYXJnaW46IDIuMjVyZW0gMDtcbiAgICBmb250LXNpemU6IDIuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuXG4gIGlvbi1zZWdtZW50IHtcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgLS1pbmRpY2F0b3ItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICB9XG4gIH1cblxuICAucHJpbWFyeS1hY3Rpb25zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICBpb24tY29sIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDY2LCAyNDUsIDkzLCAwLjIpO1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgICAtLWJvcmRlci1jaGVja2VkOiByZWQgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5jdXN0b20tYWN0aW9ucyB7XG4gICAgbWFyZ2luOiA0cHggMnB4O1xuXG4gICAgLmJ0biB7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAuc3VjY2Vzcy1hY3Rpb25zIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDY2LCAxMzUsIDI0NSwgMC4zKTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDY2LCAxMzUsIDI0NSwgMC41KTtcbiAgICB9XG4gIH1cblxuICAuZGFuZ2VyLWFjdGlvbnMge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCA2NiwgOTksIDAuMyk7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgNjYsIDk5LCAwLjUpO1xuICAgIH1cbiAgfVxufVxuXG4uc2VjdGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMS4yNXJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEuMjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RmZTdmNTtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuICAudGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmU3ZjU7XG4gICAgd2lkdGg6IDQycHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG9wYWNpdHk6IDAuOTtcblxuICAgICYucHJpbWFyeSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcbiAgICB9XG5cbiAgICAmLnN1Y2Nlc3Mge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCk7XG4gICAgfVxuXG4gICAgJi53YXJuaW5nIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQpO1xuICAgIH1cblxuICAgICYuZGFuZ2VyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNDM3NGM7XG4gICAgfVxuXG4gICAgJi5kYW5nZXItYWx0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZTZhNTk7XG4gICAgfVxuXG4gICAgJi5tZWRpdW0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICB9XG4gIH1cblxuICBoNSB7XG4gICAgY29sb3I6ICNlZTVhNTU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~admin-admin-module~dashboard-dashboard-module~user-cards-user-cards-module~user-redemption-u~0405aa63-es5.js.map