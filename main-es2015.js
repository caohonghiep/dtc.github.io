(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sub-modules/accounts/accounts.module": [
		"./src/app/sub-modules/accounts/accounts.module.ts",
		"sub-modules-accounts-accounts-module"
	],
	"./sub-modules/appointments/appointments.module": [
		"./src/app/sub-modules/appointments/appointments.module.ts",
		"sub-modules-appointments-appointments-module"
	],
	"./sub-modules/auth/auth.module": [
		"./src/app/sub-modules/auth/auth.module.ts",
		"sub-modules-auth-auth-module"
	],
	"./sub-modules/debts/debts.module": [
		"./src/app/sub-modules/debts/debts.module.ts",
		"sub-modules-debts-debts-module"
	],
	"./sub-modules/equipments/equipments.module": [
		"./src/app/sub-modules/equipments/equipments.module.ts",
		"sub-modules-equipments-equipments-module"
	],
	"./sub-modules/reports/reports.module": [
		"./src/app/sub-modules/reports/reports.module.ts",
		"sub-modules-reports-reports-module"
	],
	"./sub-modules/storage/storage.module": [
		"./src/app/sub-modules/storage/storage.module.ts",
		"sub-modules-storage-storage-module"
	],
	"./sub-modules/tasks/tasks.module": [
		"./src/app/sub-modules/tasks/tasks.module.ts",
		"sub-modules-tasks-tasks-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.container.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.container.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ic-page-loader></ic-page-loader>\n<div id=\"wrapper\">\n  <ic-header *ngIf=\"!isAuthenticationUrl()\"></ic-header>\n  <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\">\n<div class=\"container-fluid\" style=\"padding-top: 25px\">\n  <div class=\"row clearfix\">\n    <div class=\"col-lg-12\">\n      <div class=\"card text-center\">\n        <div class=\"body\">\n          <div id=\"shortcutContainer\" class=\"row clearfix row justify-content-center\">\n            <div *ngFor=\"let shortcut of shortCutIcons\" class=\"col-lg-3 col-md-3 col-6\">\n              <div class=\"body\">\n                <i id=\"{{shortcut.id}}\" [ngClass]=\"shortcut.icon\" class=\"fa fa-4x\"  routerLink=\"{{shortcut.link}}\"></i>\n                <h4>{{shortcut.title}}</h4>\n              </div>\n            </div>\n<!--\n            <div class=\"col-lg-3 col-md-3 col-6\">\n              <div class=\"body\">\n                <i id=\"appointmentsIcon\" class=\"fa fa-calendar fa-4x\" routerLink=\"/appointments\"></i>\n                <h4>Appointments</h4>\n              </div>\n            </div>\n\n            <div class=\"col-lg-3 col-md-3 col-6\">\n              <div class=\"body\">\n                <i id=\"employeesIcon\" class=\"fa icon-users fa-4x\" routerLink=\"/accounts/employees\"></i>\n                <h4>Employees</h4>\n              </div>\n            </div>\n\n            <div class=\"col-lg-3 col-md-3 col-6\">\n              <div class=\"body\">\n                <i id=\"reportsIcon\" class=\"fa  fa-bar-chart-o fa-4x\" routerLink=\"/reports\"></i>\n                <h4>Reports</h4>\n              </div>\n            </div>\n\n            <div class=\"col-lg-3 col-md-3 col-6\">\n              <div class=\"body\">\n                <i id=\"customersDebtsIcon\" class=\"fa  fa-money fa-4x\" routerLink=\"/debts/customers\"></i>\n                <h4>Customer's Debt</h4>\n              </div>\n            </div>\n\n            <div class=\"col-lg-3 col-md-3 col-6\">\n              <div class=\"body\">\n                <i id=\"suppliersDebtsIcon\" class=\"fa  fa-money fa-4x\" routerLink=\"/debts/suppliers\"></i>\n                <h4>Supplier's Debt</h4>\n              </div>\n            </div>\n\n            <div class=\"col-lg-3 col-md-3 col-6\">\n              <div class=\"body\">\n                <i id=\"equipmentsIcon\" class=\"fa fa-fax fa-4x\" routerLink=\"/equipments\"></i>\n                <h4>Equipments</h4>\n              </div>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-6\">\n              <div class=\"body\">\n                <i id=\"storageIcon\" class=\"fa icon-home fa-4x\" routerLink=\"/storage/products\"></i>\n                <h4>Storage</h4>\n              </div>\n            </div>\n\n\n            <div class=\"col-lg-3 col-md-3 col-6\">\n              <div class=\"body\">\n                <i id=\"settingIcon\" class=\"fa icon-settings fa-4x\" routerLink=\"/setting\"></i>\n                <h4>Setting</h4>\n              </div>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-6\">\n              <div class=\"body\">\n                <i id=\"tasksIcon\" class=\"fa fa-list fa-4x\" routerLink=\"/tasks\"></i>\n                <h4>Follow_Up</h4>\n              </div>\n            </div>\n-->\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/ic-core/components/chips-autocomplete/chips-autocomplete.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/ic-core/components/chips-autocomplete/chips-autocomplete.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"chip-list\">\r\n  <mat-chip-list #chipList aria-label=\"Fruit selection\">\r\n    <mat-chip\r\n      *ngFor=\"let item of selectedItems\"\r\n      [selectable]=\"selectable\"\r\n      [removable]=\"removable\"\r\n      (removed)=\"remove(item)\">\r\n      {{item}}\r\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <input\r\n      placeholder=\"{{placeholder}}\"\r\n      #input\r\n      [formControl]=\"inputCtrl\"\r\n      [matAutocomplete]=\"auto\"\r\n      [matChipInputFor]=\"chipList\"\r\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n      [matChipInputAddOnBlur]=\"addOnBlur\"\r\n      (matChipInputTokenEnd)=\"add($event)\">\r\n  </mat-chip-list>\r\n  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n    <mat-option *ngFor=\"let item of filteredItems | async\" [value]=\"item\">\r\n      {{item}}\r\n    </mat-option>\r\n  </mat-autocomplete>\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/ic-core/components/confirm-dialog/confirm.dialog.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/ic-core/components/confirm-dialog/confirm.dialog.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title></h1>\n<div mat-dialog-content>\n  <p>{{message}}</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-flat-button color=\"warn\" (click)=\"onNoClick()\">No</button>\n  <button mat-raised-button [mat-dialog-close]=\"true\" cdkFocusInitial>Yes</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/ic-core/components/header/header.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/ic-core/components/header/header.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-left\">\n      <!--\n      <div class=\"navbar-btn\">\n        <a href=\"index.html\"><img src=\"assets/images/icon-light.svg\" alt=\"HexaBit Logo\" class=\"img-fluid logo\"></a>\n        <button type=\"button\" class=\"btn-toggle-offcanvas\"><i class=\"lnr lnr-menu fa fa-bars\"></i></button>\n      </div>\n      <a href=\"javascript:void(0);\" class=\"icon-menu btn-toggle-fullwidth\"><i class=\"fa fa-arrow-left\"></i></a>-->\n      <ul class=\"nav navbar-nav\">\n        <li class=\"dropdown dropdown-animated scale-right\">\n          <a href=\"javascript:void(0);\" class=\"dropdown-toggle icon-menu\" data-toggle=\"dropdown\"><i class=\"icon-grid\"></i></a>\n          <ul class=\"dropdown-menu menu-icon app_menu\">\n            <li>\n              <a class=\"#\">\n                <i class=\"icon-envelope\"></i>\n                <span>Inbox</span>\n              </a>\n            </li>\n            <li>\n              <a class=\"#\">\n                <i class=\"icon-bubbles\"></i>\n                <span>Chat</span>\n              </a>\n            </li>\n            <li>\n              <a class=\"#\">\n                <i class=\"icon-list\"></i>\n                <span>Task</span>\n              </a>\n            </li>\n            <li>\n              <a class=\"#\">\n                <i class=\"icon-globe\"></i>\n                <span>Blog</span>\n              </a>\n            </li>\n          </ul>\n        </li>\n        <li><a href=\"app-calendar.html\" class=\"icon-menu d-none d-sm-block d-md-none d-lg-block\"><i class=\"icon-calendar\"></i></a></li>\n        <li><a href=\"app-chat.html\" class=\"icon-menu d-none d-sm-block\"><i class=\"icon-bubbles\"></i></a></li>\n      </ul>\n    </div>\n\n    <div class=\"navbar-right\">\n      <!--        <form id=\"navbar-search\" class=\"navbar-form search-form\">-->\n      <!--          <input value=\"\" class=\"form-control\" placeholder=\"Search here...\" type=\"text\">-->\n      <!--          <button type=\"button\" class=\"btn btn-default\"><i class=\"icon-magnifier\"></i></button>-->\n      <!--        </form>-->\n\n      <div id=\"navbar-menu\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"dropdown dropdown-animated scale-left\">\n            <a href=\"javascript:void(0);\" class=\"dropdown-toggle icon-menu\" data-toggle=\"dropdown\">\n              <i class=\"icon-envelope\"></i>\n              <span class=\"notification-dot\"></span>\n            </a>\n            <ul class=\"dropdown-menu right_chat email\">\n              <li>\n                <a href=\"javascript:void(0);\">\n                  <div class=\"media\">\n                    <img class=\"media-object \" src=\"assets/images/xs/avatar.jpg\" alt=\"\">\n                    <div class=\"media-body\">\n                      <span class=\"name\">James Wert <small class=\"float-right\">Just now</small></span>\n                      <span class=\"message\">Lorem ipsum Veniam aliquip culpa laboris minim tempor</span>\n                    </div>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0);\">\n                  <div class=\"media\">\n                    <img class=\"media-object \" src=\"assets/images/xs/avatar.jpg\" alt=\"\">\n                    <div class=\"media-body\">\n                      <span class=\"name\">Folisise Chosielie <small class=\"float-right\">12min ago</small></span>\n                      <span class=\"message\">There are many variations of Lorem Ipsum available, but the majority</span>\n                    </div>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0);\">\n                  <div class=\"media\">\n                    <img class=\"media-object \" src=\"assets/images/xs/avatar.jpg\" alt=\"\">\n                    <div class=\"media-body\">\n                      <span class=\"name\">Ava Alexander <small class=\"float-right\">38min ago</small></span>\n                      <span class=\"message\">Many desktop publishing packages and web page editors</span>\n                    </div>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0);\">\n                  <div class=\"media mb-0\">\n                    <img class=\"media-object \" src=\"assets/images/xs/avatar.jpg\" alt=\"\">\n                    <div class=\"media-body\">\n                      <span class=\"name\">Debra Stewart <small class=\"float-right\">2hr ago</small></span>\n                      <span class=\"message\">Contrary to popular belief, Lorem Ipsum is not simply random text</span>\n                    </div>\n                  </div>\n                </a>\n              </li>\n            </ul>\n          </li>\n          <li class=\"dropdown dropdown-animated scale-left\">\n            <a href=\"javascript:void(0);\" class=\"dropdown-toggle icon-menu\" data-toggle=\"dropdown\">\n              <i class=\"icon-bell\"></i>\n              <span class=\"notification-dot\"></span>\n            </a>\n            <ul class=\"dropdown-menu feeds_widget\">\n              <li class=\"header\">You have 5 new Notifications</li>\n              <li>\n                <a href=\"javascript:void(0);\">\n                  <div class=\"feeds-left\"><i class=\"fa fa-thumbs-o-up text-success\"></i></div>\n                  <div class=\"feeds-body\">\n                    <h4 class=\"title text-success\">7 New Feedback <small class=\"float-right text-muted\">Today</small></h4>\n                    <small>It will give a smart finishing to your site</small>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0);\">\n                  <div class=\"feeds-left\"><i class=\"fa fa-user\"></i></div>\n                  <div class=\"feeds-body\">\n                    <h4 class=\"title\">New User <small class=\"float-right text-muted\">10:45</small></h4>\n                    <small>I feel great! Thanks team</small>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0);\">\n                  <div class=\"feeds-left\"><i class=\"fa fa-question-circle text-warning\"></i></div>\n                  <div class=\"feeds-body\">\n                    <h4 class=\"title text-warning\">Server Warning <small class=\"float-right text-muted\">10:50</small></h4>\n                    <small>Your connection is not private</small>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0);\">\n                  <div class=\"feeds-left\"><i class=\"fa fa-check text-danger\"></i></div>\n                  <div class=\"feeds-body\">\n                    <h4 class=\"title text-danger\">Issue Fixed <small class=\"float-right text-muted\">11:05</small></h4>\n                    <small>WE have fix all Design bug with Responsive</small>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0);\">\n                  <div class=\"feeds-left\"><i class=\"fa fa-shopping-basket\"></i></div>\n                  <div class=\"feeds-body\">\n                    <h4 class=\"title\">7 New Orders <small class=\"float-right text-muted\">11:35</small></h4>\n                    <small>You received a new oder from Tina.</small>\n                  </div>\n                </a>\n              </li>\n            </ul>\n          </li>\n          <li><a href=\"javascript:void(0);\" class=\"right_toggle icon-menu\" title=\"Right Menu\"><i class=\"icon-settings\"></i></a></li>\n<!--      Sign Out Icon -->\n          <li>\n            <a href=\"javascript:void(0);\" class=\"icon-menu\" title=\"Sign Out\">\n              <i class=\"icon-power\" (click)=\"signOut()\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/ic-core/components/nav/nav.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/ic-core/components/nav/nav.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\">\n  <div class=\"row clearfix\">\n    <div class=\"col-md-6 col-sm-12\">\n      <h2 id=\"page-title\">\n        {{title}}\n      </h2>\n    </div>\n    <div class=\"col-md-6 col-sm-12 text-right\">\n      <ul id=\"page-breadcrumb\" class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\"><a routerLink=\"/\"><i class=\"icon-home\"></i></a></li>\n        <li *ngFor=\"let item of breadcrumb\" class=\"breadcrumb-item\">\n          <a *ngIf=\"item.link; else noneLink\" [routerLink]=\"item.link\">\n            {{item.title}}\n          </a>\n          <ng-template #noneLink>\n            {{item.title}}\n          </ng-template>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/ic-core/components/page-loader/page-loader.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/ic-core/components/page-loader/page-loader.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Loader -->\n<div class=\"page-loader-wrapper\" #loaderWrapper>\n  <div class=\"loader\">\n    <div class=\"m-t-30\">\n      <img src=\"/assets/images/logo.png\" width=\"48\" height=\"48\">\n    </div>\n    <p>Please wait...</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/ic-core/pages/abstract-page/abstract-page.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/ic-core/pages/abstract-page/abstract-page.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>abstract-page works!</p>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _sub_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sub-modules/auth/guards/auth.guard */ "./src/app/sub-modules/auth/guards/auth.guard.ts");





const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: './sub-modules/auth/auth.module#AuthModule'
    },
    // { path: 'secure', component: SecureComponent, pathMatch: 'full' },
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        canActivate: [_sub_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'accounts',
        loadChildren: './sub-modules/accounts/accounts.module#AccountsModule',
        canActivate: [_sub_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'appointments',
        loadChildren: './sub-modules/appointments/appointments.module#AppointmentsModule',
        canActivate: [_sub_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'debts',
        loadChildren: './sub-modules/debts/debts.module#DebtsModule',
        canActivate: [_sub_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'reports',
        loadChildren: './sub-modules/reports/reports.module#ReportsModule',
        canActivate: [_sub_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'storage',
        loadChildren: './sub-modules/storage/storage.module#StorageModule',
        canActivate: [_sub_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'tasks',
        loadChildren: './sub-modules/tasks/tasks.module#TasksModule',
        canActivate: [_sub_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'equipments',
        loadChildren: './sub-modules/equipments/equipments.module#EquipmentsModule',
        canActivate: [_sub_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.container.scss":
/*!************************************!*\
  !*** ./src/app/app.container.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb250YWluZXIuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.container.ts":
/*!**********************************!*\
  !*** ./src/app/app.container.ts ***!
  \**********************************/
/*! exports provided: AppContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContainer", function() { return AppContainer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sub_modules_ic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sub-modules/ic-core */ "./src/app/sub-modules/ic-core/index.ts");





let AppContainer = 
// tslint:disable-next-line:component-class-suffix
class AppContainer {
    constructor(translate, router, pageLoaderService) {
        this.translate = translate;
        this.router = router;
        this.pageLoaderService = pageLoaderService;
        translate.setDefaultLang('en');
    }
    ngAfterViewInit() {
        this.pageLoaderService.hidePageLoader();
    }
    switchLanguage(language) {
        this.translate.use(language);
    }
    isAuthenticationUrl() {
        return this.router.url.startsWith('/auth/login');
    }
};
AppContainer.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _sub_modules_ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"] }
];
AppContainer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-root',
        template: __webpack_require__(/*! raw-loader!./app.container.html */ "./node_modules/raw-loader/index.js!./src/app/app.container.html"),
        styles: [__webpack_require__(/*! ./app.container.scss */ "./src/app/app.container.scss")]
    })
    // tslint:disable-next-line:component-class-suffix
], AppContainer);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.container */ "./src/app/app.container.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _sub_modules_ic_core_ic_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sub-modules/ic-core/ic-core.module */ "./src/app/sub-modules/ic-core/ic-core.module.ts");
/* harmony import */ var _sub_modules_generated_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sub-modules/generated-api */ "./src/app/sub-modules/generated-api/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var aws_amplify_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! aws-amplify-angular */ "./node_modules/aws-amplify-angular/dist/index.js");















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http);
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_container__WEBPACK_IMPORTED_MODULE_4__["AppContainer"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                }
            }),
            _sub_modules_ic_core_ic_core_module__WEBPACK_IMPORTED_MODULE_10__["IcCoreModule"].forRoot(),
            _sub_modules_generated_api__WEBPACK_IMPORTED_MODULE_11__["ApiModule"].forRoot(new _sub_modules_generated_api__WEBPACK_IMPORTED_MODULE_11__["Configuration"]()),
            aws_amplify_angular__WEBPACK_IMPORTED_MODULE_14__["AmplifyAngularModule"]
        ],
        providers: [aws_amplify_angular__WEBPACK_IMPORTED_MODULE_14__["AmplifyService"]],
        bootstrap: [_app_container__WEBPACK_IMPORTED_MODULE_4__["AppContainer"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");












































let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_43__["FlexLayoutModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nhttps://getbootstrap.com/docs/4.0/layout/overview/\n\n// Small devices (landscape phones, 576px and up)\n@media (min-width: 576px) { ... }\n\n// Medium devices (tablets, 768px and up)\n@media (min-width: 768px) { ... }\n\n// Large devices (desktops, 992px and up)\n@media (min-width: 992px) { ... }\n\n// Extra large devices (large desktops, 1200px and up)\n@media (min-width: 1200px) { ... }\n\nhttps://github.com/angular/flex-layout/wiki/Responsive-API\nlg = screen and (min-width: 1280px) and (max-width: 1919.99px)\nlt-xl = screen and (max-width: 1919.99px)\ngt-md = screen and (min-width: 1280px)\ngt-sm = screen and (min-width: 960px)\ngt-xs = screen and (min-width: 600px)\n*/\n.fa.fa-4x {\n  padding: 32px;\n  border-radius: 50%;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  color: dodgerblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcREVWXFx3b3Jrc3BhY2VzXFxpY2xpbmljXFxkdGMtdWkvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FBd0JBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0dBQUE7RUFDQSxpQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qXHJcbmh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzQuMC9sYXlvdXQvb3ZlcnZpZXcvXHJcblxyXG4vLyBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgeyAuLi4gfVxyXG5cclxuLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cClcclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IC4uLiB9XHJcblxyXG4vLyBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsgLi4uIH1cclxuXHJcbi8vIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7IC4uLiB9XHJcblxyXG5odHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9mbGV4LWxheW91dC93aWtpL1Jlc3BvbnNpdmUtQVBJXHJcbmxnID0gc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5Ljk5cHgpXHJcbmx0LXhsID0gc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5Ljk5cHgpXHJcbmd0LW1kID0gc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpXHJcbmd0LXNtID0gc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweClcclxuZ3QteHMgPSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxyXG4qL1xyXG5cclxuXHJcbi5mYS5mYS00eHtcclxuICBwYWRkaW5nOiAzMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgY29sb3I6IGRvZGdlcmJsdWU7XHJcbn1cclxuIiwiLypcbmh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzQuMC9sYXlvdXQvb3ZlcnZpZXcvXG5cbi8vIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cClcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgeyAuLi4gfVxuXG4vLyBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IC4uLiB9XG5cbi8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsgLi4uIH1cblxuLy8gRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7IC4uLiB9XG5cbmh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2ZsZXgtbGF5b3V0L3dpa2kvUmVzcG9uc2l2ZS1BUElcbmxnID0gc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5Ljk5cHgpXG5sdC14bCA9IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkxOS45OXB4KVxuZ3QtbWQgPSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweClcbmd0LXNtID0gc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweClcbmd0LXhzID0gc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcbiovXG4uZmEuZmEtNHgge1xuICBwYWRkaW5nOiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgY29sb3I6IGRvZGdlcmJsdWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sub_modules_ic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sub-modules/ic-core */ "./src/app/sub-modules/ic-core/index.ts");



let HomeComponent = class HomeComponent {
    constructor(elementRef, utility) {
        this.elementRef = elementRef;
        this.utility = utility;
        this.shortCutIcons = [];
    }
    ngOnInit() {
        this.shortCutIcons = [
            {
                id: 'customersIcon',
                title: 'Customers',
                icon: 'fa-users',
                link: '/accounts/customers',
                badge: '10'
            },
            {
                id: 'appointmentsIcon',
                title: 'Appointments',
                icon: 'fa-calendar',
                link: '/appointments',
                badge: '10'
            },
            {
                id: 'employeesIcon',
                title: 'Employees',
                icon: 'icon-users',
                link: '/accounts/employees'
            },
            {
                id: 'reportsIcon',
                title: 'Reports',
                icon: 'fa-bar-chart-o',
                link: '/reports',
                badge: '50'
            },
            {
                id: 'customersDebtsIcon',
                title: 'Customer\'s Debt',
                icon: 'fa-money',
                link: '/debts/customers',
                badge: '8'
            },
            {
                id: 'suppliersDebtsIcon',
                title: 'Supplier\'s Debt',
                icon: 'fa-money',
                link: '/debts/suppliers',
                badge: '9'
            },
            {
                id: 'equipmentsIcon',
                title: 'Equipments',
                icon: 'fa-fax',
                link: '/equipments'
            },
            {
                id: 'storageIcon',
                title: 'Storage',
                icon: 'icon-home',
                link: '/storage/products'
            },
            {
                id: 'settingIcon',
                title: 'Setting',
                icon: 'icon-settings',
                link: '/setting'
            },
            {
                id: 'tasksIcon',
                title: 'Follow_Up',
                icon: 'fa-list',
                link: '/tasks',
                badge: ''
            }
        ];
    }
    ngAfterViewInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _sub_modules_ic_core__WEBPACK_IMPORTED_MODULE_2__["UtilityService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/sub-modules/auth/guards/auth.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/sub-modules/auth/guards/auth.guard.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.authService.isSignedIn()) {
                return true;
            }
            else {
                this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
                return false;
            }
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/sub-modules/auth/services/auth.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/sub-modules/auth/services/auth.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var aws_amplify_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify-angular */ "./node_modules/aws-amplify-angular/dist/index.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib/index.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AuthService = class AuthService {
    constructor(amplifyService, router) {
        this.amplifyService = amplifyService;
        this.router = router;
        this.signedInUser = null;
        this.signInActions = [];
        this.signOutActions = [];
        this.listenSignInOut();
    }
    listenSignInOut() {
        this.amplifyService.authStateChange$
            .subscribe(authState => {
            if (authState.state === 'signedIn') {
                if (!!authState.user) {
                    this.signedInUser = authState.user;
                    this.executeSignInActions({ user: this.signedInUser });
                }
                else {
                    if (!!this.signedInUser) {
                        const prevSignedInUser = this.signedInUser;
                        this.signedInUser = null;
                        this.executeSignOutActions({ user: prevSignedInUser });
                    }
                }
            }
        });
    }
    isSignedIn() {
        return !!this.signedInUser;
    }
    signOut() {
        aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signOut({})
            .then(data => {
            this.router.navigate(['/auth/login']);
        })
            .catch(err => console.log(err));
    }
    executeSignInActions(user) {
        this.signInActions.forEach(action => action({ user }));
    }
    executeSignOutActions(user) {
        this.signOutActions.forEach(action => action({ user }));
    }
    addSignOutListener(action) {
        this.signOutActions.push(action);
    }
    addSignInListener(action) {
        this.signInActions.push(action);
    }
    removeSignOutListener(action) {
        this.signOutActions = this.signOutActions.filter(actionItem => actionItem === action);
    }
    removeSignInListener(action) {
        this.signInActions = this.signInActions.filter(actionItem => actionItem === action);
    }
};
AuthService.ctorParameters = () => [
    { type: aws_amplify_angular__WEBPACK_IMPORTED_MODULE_2__["AmplifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/sub-modules/generated-api/api.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/sub-modules/generated-api/api.module.ts ***!
  \*********************************************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration */ "./src/app/sub-modules/generated-api/configuration.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _api_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/customer.service */ "./src/app/sub-modules/generated-api/api/customer.service.ts");
/* harmony import */ var _api_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/employee.service */ "./src/app/sub-modules/generated-api/api/employee.service.ts");

var ApiModule_1;





let ApiModule = ApiModule_1 = class ApiModule {
    constructor(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    static forRoot(configurationFactory) {
        return {
            ngModule: ApiModule_1,
            providers: [{ provide: _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"], useValue: configurationFactory }]
        };
    }
};
ApiModule.ctorParameters = () => [
    { type: ApiModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
ApiModule = ApiModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [],
        declarations: [],
        exports: [],
        providers: [
            _api_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"],
            _api_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"]
        ]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
], ApiModule);



/***/ }),

/***/ "./src/app/sub-modules/generated-api/api/api.ts":
/*!******************************************************!*\
  !*** ./src/app/sub-modules/generated-api/api/api.ts ***!
  \******************************************************/
/*! exports provided: APIS, CustomerService, EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return APIS; });
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer.service */ "./src/app/sub-modules/generated-api/api/customer.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return _customer_service__WEBPACK_IMPORTED_MODULE_0__["CustomerService"]; });

/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee.service */ "./src/app/sub-modules/generated-api/api/employee.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return _employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]; });





const APIS = [_customer_service__WEBPACK_IMPORTED_MODULE_0__["CustomerService"], _employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]];


/***/ }),

/***/ "./src/app/sub-modules/generated-api/api/customer.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/sub-modules/generated-api/api/customer.service.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../encoder */ "./src/app/sub-modules/generated-api/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../variables */ "./src/app/sub-modules/generated-api/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../configuration */ "./src/app/sub-modules/generated-api/configuration.ts");
/**
 * DTClinic APIs
 * This is an API spec of Service Collections and Instances exposed by Dan Thanh Clinic.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: dainguyen4dtclinic@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */




// import { ResponsesBadRequest } from '../model/responsesBadRequest';
// import { ResponsesNotFound } from '../model/responsesNotFound';
// import { ResponsesUnauthorized } from '../model/responsesUnauthorized';


let CustomerService = class CustomerService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://virtserver.swaggerhub.com/caohonghiep/dtc-mock/1.0.0';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    addCustomer(data, observe = 'body', reportProgress = false) {
        if (data === null || data === undefined) {
            throw new Error('Required parameter data was null or undefined when calling addCustomer.');
        }
        let headers = this.defaultHeaders;
        // authentication (apiKey) required
        if (this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }
        // authentication (appId) required
        if (this.configuration.apiKeys["X-APP-ID"]) {
            headers = headers.set('X-APP-ID', this.configuration.apiKeys["X-APP-ID"]);
        }
        // to determine the Accept header
        let httpHeaderAccepts = [];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/customers`, data, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    customersGET(offset, limit, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', limit);
        }
        let headers = this.defaultHeaders;
        // authentication (apiKey) required
        if (this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }
        // authentication (appId) required
        if (this.configuration.apiKeys["X-APP-ID"]) {
            headers = headers.set('X-APP-ID', this.configuration.apiKeys["X-APP-ID"]);
        }
        // to determine the Accept header
        let httpHeaderAccepts = [];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.get(`${this.basePath}/customers`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    deleteCustomer(customerId, observe = 'body', reportProgress = false) {
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling deleteCustomer.');
        }
        let headers = this.defaultHeaders;
        // authentication (apiKey) required
        if (this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }
        // authentication (appId) required
        if (this.configuration.apiKeys["X-APP-ID"]) {
            headers = headers.set('X-APP-ID', this.configuration.apiKeys["X-APP-ID"]);
        }
        // to determine the Accept header
        let httpHeaderAccepts = [];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.delete(`${this.basePath}/customers/${encodeURIComponent(String(customerId))}`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getCustomerCollectionOption(observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        // authentication (apiKey) required
        if (this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }
        // authentication (appId) required
        if (this.configuration.apiKeys["X-APP-ID"]) {
            headers = headers.set('X-APP-ID', this.configuration.apiKeys["X-APP-ID"]);
        }
        // to determine the Accept header
        let httpHeaderAccepts = [];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.options(`${this.basePath}/customers`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getCustomerInstance(customerId, observe = 'body', reportProgress = false) {
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling getCustomerInstance.');
        }
        let headers = this.defaultHeaders;
        // authentication (apiKey) required
        if (this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }
        // authentication (appId) required
        if (this.configuration.apiKeys["X-APP-ID"]) {
            headers = headers.set('X-APP-ID', this.configuration.apiKeys["X-APP-ID"]);
        }
        // to determine the Accept header
        let httpHeaderAccepts = [];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.get(`${this.basePath}/customers/${encodeURIComponent(String(customerId))}`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateCustomer(data, observe = 'body', reportProgress = false) {
        if (data === null || data === undefined) {
            throw new Error('Required parameter data was null or undefined when calling updateCustomer.');
        }
        let headers = this.defaultHeaders;
        // authentication (apiKey) required
        if (this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }
        // authentication (appId) required
        if (this.configuration.apiKeys["X-APP-ID"]) {
            headers = headers.set('X-APP-ID', this.configuration.apiKeys["X-APP-ID"]);
        }
        // to determine the Accept header
        let httpHeaderAccepts = [];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(`${this.basePath}/customers`, data, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateCustomerAttributes(customerId, observe = 'body', reportProgress = false) {
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling updateCustomerAttributes.');
        }
        let headers = this.defaultHeaders;
        // authentication (apiKey) required
        if (this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }
        // authentication (appId) required
        if (this.configuration.apiKeys["X-APP-ID"]) {
            headers = headers.set('X-APP-ID', this.configuration.apiKeys["X-APP-ID"]);
        }
        // to determine the Accept header
        let httpHeaderAccepts = [];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.patch(`${this.basePath}/customers/${encodeURIComponent(String(customerId))}`, null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
};
CustomerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"],] }] },
    { type: _configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
], CustomerService);



/***/ }),

/***/ "./src/app/sub-modules/generated-api/api/employee.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/sub-modules/generated-api/api/employee.service.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/sub-modules/generated-api/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/sub-modules/generated-api/configuration.ts");
/**
 * DTClinic APIs
 * This is an API spec of Service Collections and Instances exposed by Dan Thanh Clinic.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: dainguyen4dtclinic@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */



// import { ResponsesUnauthorized } from '../model/responsesUnauthorized';


let EmployeeService = class EmployeeService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://virtserver.swaggerhub.com/caohonghiep/dtc-mock/1.0.0';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    getCustomerInstanceOption(customerId, observe = 'body', reportProgress = false) {
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling getCustomerInstanceOption.');
        }
        let headers = this.defaultHeaders;
        // authentication (apiKey) required
        if (this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }
        // authentication (appId) required
        if (this.configuration.apiKeys["X-APP-ID"]) {
            headers = headers.set('X-APP-ID', this.configuration.apiKeys["X-APP-ID"]);
        }
        // to determine the Accept header
        let httpHeaderAccepts = [];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.options(`${this.basePath}/customers/${encodeURIComponent(String(customerId))}`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
};
EmployeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"],] }] },
    { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
], EmployeeService);



/***/ }),

/***/ "./src/app/sub-modules/generated-api/configuration.ts":
/*!************************************************************!*\
  !*** ./src/app/sub-modules/generated-api/configuration.ts ***!
  \************************************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
class Configuration {
    constructor(configurationParameters = {}) {
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }
    /**
     * Select the correct content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param contentTypes - the array of content types that are available for selection
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderContentType(contentTypes) {
        if (contentTypes.length == 0) {
            return undefined;
        }
        let type = contentTypes.find(x => this.isJsonMime(x));
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    }
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param accepts - the array of content types that are available for selection.
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderAccept(accepts) {
        if (accepts.length == 0) {
            return undefined;
        }
        let type = accepts.find(x => this.isJsonMime(x));
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    }
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    isJsonMime(mime) {
        const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}
Configuration.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/sub-modules/generated-api/encoder.ts":
/*!******************************************************!*\
  !*** ./src/app/sub-modules/generated-api/encoder.ts ***!
  \******************************************************/
/*! exports provided: CustomHttpUrlEncodingCodec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpUrlEncodingCodec", function() { return CustomHttpUrlEncodingCodec; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");

/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
class CustomHttpUrlEncodingCodec extends _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpUrlEncodingCodec"] {
    encodeKey(k) {
        k = super.encodeKey(k);
        return k.replace(/\+/gi, '%2B');
    }
    encodeValue(v) {
        v = super.encodeValue(v);
        return v.replace(/\+/gi, '%2B');
    }
}


/***/ }),

/***/ "./src/app/sub-modules/generated-api/index.ts":
/*!****************************************************!*\
  !*** ./src/app/sub-modules/generated-api/index.ts ***!
  \****************************************************/
/*! exports provided: APIS, BASE_PATH, COLLECTION_FORMATS, Configuration, ApiModule, CustomerService, EmployeeService, Address, Phone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ "./src/app/sub-modules/generated-api/api/api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["APIS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["CustomerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["EmployeeService"]; });

/* harmony import */ var _model_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/models */ "./src/app/sub-modules/generated-api/model/models.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["Address"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Phone", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["Phone"]; });

/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ "./src/app/sub-modules/generated-api/variables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return _variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return _variables__WEBPACK_IMPORTED_MODULE_2__["COLLECTION_FORMATS"]; });

/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration */ "./src/app/sub-modules/generated-api/configuration.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]; });

/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.module */ "./src/app/sub-modules/generated-api/api.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return _api_module__WEBPACK_IMPORTED_MODULE_4__["ApiModule"]; });








/***/ }),

/***/ "./src/app/sub-modules/generated-api/model/address.ts":
/*!************************************************************!*\
  !*** ./src/app/sub-modules/generated-api/model/address.ts ***!
  \************************************************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/**
 * DTClinic APIs
 * This is an API spec of Service Collections and Instances exposed by Dan Thanh Clinic.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: dainguyen4dtclinic@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
class Address {
    toString() {
        return `${this.street}, ${this.district}, ${this.city}`;
    }
}


/***/ }),

/***/ "./src/app/sub-modules/generated-api/model/models.ts":
/*!***********************************************************!*\
  !*** ./src/app/sub-modules/generated-api/model/models.ts ***!
  \***********************************************************/
/*! exports provided: Address, Phone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address */ "./src/app/sub-modules/generated-api/model/address.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return _address__WEBPACK_IMPORTED_MODULE_0__["Address"]; });

/* harmony import */ var _phone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone */ "./src/app/sub-modules/generated-api/model/phone.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Phone", function() { return _phone__WEBPACK_IMPORTED_MODULE_1__["Phone"]; });





/***/ }),

/***/ "./src/app/sub-modules/generated-api/model/phone.ts":
/*!**********************************************************!*\
  !*** ./src/app/sub-modules/generated-api/model/phone.ts ***!
  \**********************************************************/
/*! exports provided: Phone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phone", function() { return Phone; });
/**
 * DTClinic APIs
 * This is an API spec of Service Collections and Instances exposed by Dan Thanh Clinic.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: dainguyen4dtclinic@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var Phone;
(function (Phone) {
    Phone.TypeEnum = {
        Home: 'home',
        Mobile: 'mobile'
    };
})(Phone || (Phone = {}));


/***/ }),

/***/ "./src/app/sub-modules/generated-api/variables.ts":
/*!********************************************************!*\
  !*** ./src/app/sub-modules/generated-api/variables.ts ***!
  \********************************************************/
/*! exports provided: BASE_PATH, COLLECTION_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return BASE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return COLLECTION_FORMATS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
const COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};


/***/ }),

/***/ "./src/app/sub-modules/ic-core/components/chips-autocomplete/chips-autocomplete.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/sub-modules/ic-core/components/chips-autocomplete/chips-autocomplete.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chip-list {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvaWMtY29yZS9jb21wb25lbnRzL2NoaXBzLWF1dG9jb21wbGV0ZS9DOlxcREVWXFx3b3Jrc3BhY2VzXFxpY2xpbmljXFxkdGMtdWkvc3JjXFxhcHBcXHN1Yi1tb2R1bGVzXFxpYy1jb3JlXFxjb21wb25lbnRzXFxjaGlwcy1hdXRvY29tcGxldGVcXGNoaXBzLWF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3ViLW1vZHVsZXMvaWMtY29yZS9jb21wb25lbnRzL2NoaXBzLWF1dG9jb21wbGV0ZS9jaGlwcy1hdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zdWItbW9kdWxlcy9pYy1jb3JlL2NvbXBvbmVudHMvY2hpcHMtYXV0b2NvbXBsZXRlL2NoaXBzLWF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGlwLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIi5jaGlwLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sub-modules/ic-core/components/chips-autocomplete/chips-autocomplete.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/sub-modules/ic-core/components/chips-autocomplete/chips-autocomplete.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ChipsAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsAutocompleteComponent", function() { return ChipsAutocompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ChipsAutocompleteComponent = class ChipsAutocompleteComponent {
    constructor() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.inputCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.filteredItems = this.inputCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((item) => this._filter(item)));
    }
    add(event) {
        // if (!this.matAutocomplete.isOpen) {
        const input = event.input;
        const value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.selectedItems.push(value.trim());
            this.onAdd.emit(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
        this.inputCtrl.setValue(null);
        // }
    }
    remove(fruit) {
        const index = this.selectedItems.indexOf(fruit);
        if (index >= 0) {
            const value = this.selectedItems.splice(index, 1);
            this.onRemove.emit(value[0]);
        }
    }
    selected(event) {
        this.selectedItems.push(event.option.viewValue);
        this.inputElement.nativeElement.value = '';
        this.inputCtrl.setValue(null);
        this.onAdd.emit(event.option.viewValue);
    }
    _filter(value) {
        const unSelectedItems = this.allItems.filter(item => !this.selectedItems.includes(item));
        if (value) {
            const filterValue = value.toLowerCase();
            return unSelectedItems.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
        }
        else {
            return unSelectedItems;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], ChipsAutocompleteComponent.prototype, "placeholder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], ChipsAutocompleteComponent.prototype, "selectedItems", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], ChipsAutocompleteComponent.prototype, "allItems", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], ChipsAutocompleteComponent.prototype, "onAdd", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], ChipsAutocompleteComponent.prototype, "onRemove", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('input', { static: false })
], ChipsAutocompleteComponent.prototype, "inputElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('auto', { static: false })
], ChipsAutocompleteComponent.prototype, "matAutocomplete", void 0);
ChipsAutocompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ic-chips-autocomplete',
        template: __webpack_require__(/*! raw-loader!./chips-autocomplete.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/ic-core/components/chips-autocomplete/chips-autocomplete.component.html"),
        styles: [__webpack_require__(/*! ./chips-autocomplete.component.scss */ "./src/app/sub-modules/ic-core/components/chips-autocomplete/chips-autocomplete.component.scss")]
    })
], ChipsAutocompleteComponent);



/***/ }),

/***/ "./src/app/sub-modules/ic-core/components/confirm-dialog/confirm.dialog.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/sub-modules/ic-core/components/confirm-dialog/confirm.dialog.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-actions {\n  justify-content: center;\n}\n.mat-dialog-actions button:first-child {\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvaWMtY29yZS9jb21wb25lbnRzL2NvbmZpcm0tZGlhbG9nL0M6XFxERVZcXHdvcmtzcGFjZXNcXGljbGluaWNcXGR0Yy11aS9zcmNcXGFwcFxcc3ViLW1vZHVsZXNcXGljLWNvcmVcXGNvbXBvbmVudHNcXGNvbmZpcm0tZGlhbG9nXFxjb25maXJtLmRpYWxvZy5zY3NzIiwic3JjL2FwcC9zdWItbW9kdWxlcy9pYy1jb3JlL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS5kaWFsb2cuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FDQ0Y7QURBRTtFQUNFLGdCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9zdWItbW9kdWxlcy9pYy1jb3JlL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS5kaWFsb2cuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWFjdGlvbnN7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYnV0dG9uOmZpcnN0LWNoaWxke1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICB9XHJcbn1cclxuIiwiLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1hdC1kaWFsb2ctYWN0aW9ucyBidXR0b246Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/sub-modules/ic-core/components/confirm-dialog/confirm.dialog.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/sub-modules/ic-core/components/confirm-dialog/confirm.dialog.ts ***!
  \*********************************************************************************/
/*! exports provided: ConfirmDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialog", function() { return ConfirmDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let ConfirmDialog = 
// tslint:disable-next-line:component-class-suffix
class ConfirmDialog {
    constructor(dialogRef, message) {
        this.dialogRef = dialogRef;
        this.message = message;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
ConfirmDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ConfirmDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-confirm-dialog',
        template: __webpack_require__(/*! raw-loader!./confirm.dialog.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/ic-core/components/confirm-dialog/confirm.dialog.html"),
        styles: [__webpack_require__(/*! ./confirm.dialog.scss */ "./src/app/sub-modules/ic-core/components/confirm-dialog/confirm.dialog.scss")]
    })
    // tslint:disable-next-line:component-class-suffix
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ConfirmDialog);



/***/ }),

/***/ "./src/app/sub-modules/ic-core/components/header/header.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/sub-modules/ic-core/components/header/header.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Yi1tb2R1bGVzL2ljLWNvcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sub-modules/ic-core/components/header/header.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/sub-modules/ic-core/components/header/header.component.ts ***!
  \***************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    signOut() {
        this.authService.signOut();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/ic-core/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/sub-modules/ic-core/components/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/sub-modules/ic-core/components/nav/nav.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/sub-modules/ic-core/components/nav/nav.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block-header h2#page-title {\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: bold;\n  color: #000;\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvaWMtY29yZS9jb21wb25lbnRzL25hdi9DOlxcREVWXFx3b3Jrc3BhY2VzXFxpY2xpbmljXFxkdGMtdWkvc3JjXFxhcHBcXHN1Yi1tb2R1bGVzXFxpYy1jb3JlXFxjb21wb25lbnRzXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3ViLW1vZHVsZXMvaWMtY29yZS9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvc3ViLW1vZHVsZXMvaWMtY29yZS9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2staGVhZGVye1xyXG4gIGgyI3BhZ2UtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIH1cclxufVxyXG4iLCIuYmxvY2staGVhZGVyIGgyI3BhZ2UtdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sub-modules/ic-core/components/nav/nav.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sub-modules/ic-core/components/nav/nav.component.ts ***!
  \*********************************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavComponent.prototype, "breadcrumb", void 0);
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-nav',
        template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/ic-core/components/nav/nav.component.html"),
        styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/sub-modules/ic-core/components/nav/nav.component.scss")]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/sub-modules/ic-core/components/page-loader/page-loader.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/sub-modules/ic-core/components/page-loader/page-loader.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Yi1tb2R1bGVzL2ljLWNvcmUvY29tcG9uZW50cy9wYWdlLWxvYWRlci9wYWdlLWxvYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sub-modules/ic-core/components/page-loader/page-loader.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/sub-modules/ic-core/components/page-loader/page-loader.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PageLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLoaderComponent", function() { return PageLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_page_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/page-loader.service */ "./src/app/sub-modules/ic-core/services/page-loader.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);



// @ts-ignore

let PageLoaderComponent = class PageLoaderComponent {
    constructor(pageLoaderService) {
        this.pageLoaderService = pageLoaderService;
    }
    ngOnInit() {
        if (!this.show) {
            this.hide();
        }
        this.pageLoaderService.pageLoaderComponent = this;
    }
    show() {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()(this.loaderWrapper.nativeElement).fadeIn();
    }
    hide() {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()(this.loaderWrapper.nativeElement).fadeOut();
    }
};
PageLoaderComponent.ctorParameters = () => [
    { type: _services_page_loader_service__WEBPACK_IMPORTED_MODULE_2__["PageLoaderService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageLoaderComponent.prototype, "shown", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaderWrapper', { static: true })
], PageLoaderComponent.prototype, "loaderWrapper", void 0);
PageLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-page-loader',
        template: __webpack_require__(/*! raw-loader!./page-loader.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/ic-core/components/page-loader/page-loader.component.html"),
        styles: [__webpack_require__(/*! ./page-loader.component.scss */ "./src/app/sub-modules/ic-core/components/page-loader/page-loader.component.scss")]
    })
], PageLoaderComponent);



/***/ }),

/***/ "./src/app/sub-modules/ic-core/ic-core.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/sub-modules/ic-core/ic-core.module.ts ***!
  \*******************************************************/
/*! exports provided: providers, IcCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return providers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IcCoreModule", function() { return IcCoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/sub-modules/ic-core/components/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _components_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page-loader/page-loader.component */ "./src/app/sub-modules/ic-core/components/page-loader/page-loader.component.ts");
/* harmony import */ var _services_page_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/page-loader.service */ "./src/app/sub-modules/ic-core/services/page-loader.service.ts");
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/utility.service */ "./src/app/sub-modules/ic-core/services/utility.service.ts");
/* harmony import */ var _pages_abstract_page_abstract_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/abstract-page/abstract-page.component */ "./src/app/sub-modules/ic-core/pages/abstract-page/abstract-page.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/sub-modules/ic-core/components/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_chips_autocomplete_chips_autocomplete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/chips-autocomplete/chips-autocomplete.component */ "./src/app/sub-modules/ic-core/components/chips-autocomplete/chips-autocomplete.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../material-module */ "./src/app/material-module.ts");
/* harmony import */ var _components_confirm_dialog_confirm_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/confirm-dialog/confirm.dialog */ "./src/app/sub-modules/ic-core/components/confirm-dialog/confirm.dialog.ts");

var IcCoreModule_1;















const components = [
    _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
    _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
    _components_chips_autocomplete_chips_autocomplete_component__WEBPACK_IMPORTED_MODULE_13__["ChipsAutocompleteComponent"],
    _components_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_6__["PageLoaderComponent"],
    _pages_abstract_page_abstract_page_component__WEBPACK_IMPORTED_MODULE_9__["AbstractPageComponent"]
];
const entryComponents = [
    _components_confirm_dialog_confirm_dialog__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialog"]
];
const providers = [
    _services_page_loader_service__WEBPACK_IMPORTED_MODULE_7__["PageLoaderService"],
    _services_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"]
];
const modules = [
    _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
    _material_module__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"]
];
let IcCoreModule = IcCoreModule_1 = class IcCoreModule {
    static forRoot() {
        return {
            ngModule: IcCoreModule_1,
            providers: [...providers]
        };
    }
};
IcCoreModule = IcCoreModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            ...components,
            ...entryComponents
        ],
        entryComponents,
        imports: [
            ...modules,
        ],
        exports: [
            ...components,
            ...entryComponents,
            ...modules
        ]
    })
], IcCoreModule);



/***/ }),

/***/ "./src/app/sub-modules/ic-core/index.ts":
/*!**********************************************!*\
  !*** ./src/app/sub-modules/ic-core/index.ts ***!
  \**********************************************/
/*! exports provided: HeaderComponent, PageLoaderComponent, NavComponent, ChipsAutocompleteComponent, ConfirmDialog, AbstractPageComponent, PageLoaderService, UtilityService, providers, IcCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/sub-modules/ic-core/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]; });

/* harmony import */ var _components_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page-loader/page-loader.component */ "./src/app/sub-modules/ic-core/components/page-loader/page-loader.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageLoaderComponent", function() { return _components_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_1__["PageLoaderComponent"]; });

/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/sub-modules/ic-core/components/nav/nav.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]; });

/* harmony import */ var _components_chips_autocomplete_chips_autocomplete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/chips-autocomplete/chips-autocomplete.component */ "./src/app/sub-modules/ic-core/components/chips-autocomplete/chips-autocomplete.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipsAutocompleteComponent", function() { return _components_chips_autocomplete_chips_autocomplete_component__WEBPACK_IMPORTED_MODULE_3__["ChipsAutocompleteComponent"]; });

/* harmony import */ var _components_confirm_dialog_confirm_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/confirm-dialog/confirm.dialog */ "./src/app/sub-modules/ic-core/components/confirm-dialog/confirm.dialog.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialog", function() { return _components_confirm_dialog_confirm_dialog__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialog"]; });

/* harmony import */ var _pages_abstract_page_abstract_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/abstract-page/abstract-page.component */ "./src/app/sub-modules/ic-core/pages/abstract-page/abstract-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractPageComponent", function() { return _pages_abstract_page_abstract_page_component__WEBPACK_IMPORTED_MODULE_5__["AbstractPageComponent"]; });

/* harmony import */ var _services_page_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/page-loader.service */ "./src/app/sub-modules/ic-core/services/page-loader.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageLoaderService", function() { return _services_page_loader_service__WEBPACK_IMPORTED_MODULE_6__["PageLoaderService"]; });

/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/utility.service */ "./src/app/sub-modules/ic-core/services/utility.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return _services_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"]; });

/* harmony import */ var _ic_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ic-core.module */ "./src/app/sub-modules/ic-core/ic-core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return _ic_core_module__WEBPACK_IMPORTED_MODULE_8__["providers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IcCoreModule", function() { return _ic_core_module__WEBPACK_IMPORTED_MODULE_8__["IcCoreModule"]; });












/***/ }),

/***/ "./src/app/sub-modules/ic-core/pages/abstract-page/abstract-page.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/sub-modules/ic-core/pages/abstract-page/abstract-page.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Yi1tb2R1bGVzL2ljLWNvcmUvcGFnZXMvYWJzdHJhY3QtcGFnZS9hYnN0cmFjdC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sub-modules/ic-core/pages/abstract-page/abstract-page.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/sub-modules/ic-core/pages/abstract-page/abstract-page.component.ts ***!
  \************************************************************************************/
/*! exports provided: AbstractPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractPageComponent", function() { return AbstractPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AbstractPageComponent = class AbstractPageComponent {
    constructor(pageTitle, breadcrumb) {
        this.pageTitle = pageTitle;
        this.breadcrumb = breadcrumb;
    }
};
AbstractPageComponent.ctorParameters = () => [
    { type: String },
    { type: Array }
];
AbstractPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-abstract-page',
        template: __webpack_require__(/*! raw-loader!./abstract-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/ic-core/pages/abstract-page/abstract-page.component.html"),
        styles: [__webpack_require__(/*! ./abstract-page.component.scss */ "./src/app/sub-modules/ic-core/pages/abstract-page/abstract-page.component.scss")]
    })
], AbstractPageComponent);



/***/ }),

/***/ "./src/app/sub-modules/ic-core/services/page-loader.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sub-modules/ic-core/services/page-loader.service.ts ***!
  \*********************************************************************/
/*! exports provided: PageLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLoaderService", function() { return PageLoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PageLoaderService = class PageLoaderService {
    constructor(router) {
        this.router = router;
        this.loaderCounter = 0;
        setTimeout(() => {
            this.listenRouterChange();
        }, 1000);
    }
    listenRouterChange() {
        this.router.events.subscribe(event => {
            switch (true) {
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]: {
                    this.showPageLoader();
                    break;
                }
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]: {
                    this.hidePageLoader();
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }
    showPageLoader() {
        if (this.loaderCounter < 0) {
            this.loaderCounter = 0;
        }
        this.loaderCounter++;
        this.pageLoaderComponent.show();
    }
    hidePageLoader() {
        if (this.loaderCounter > 0) {
            this.loaderCounter--;
        }
        if (this.loaderCounter === 0) {
            this.pageLoaderComponent.hide();
        }
    }
};
PageLoaderService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PageLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PageLoaderService);



/***/ }),

/***/ "./src/app/sub-modules/ic-core/services/utility.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/sub-modules/ic-core/services/utility.service.ts ***!
  \*****************************************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UtilityService = class UtilityService {
    getViewPortHeight() {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    getViewPortWidth() {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
};
UtilityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UtilityService);



/***/ }),

/***/ "./src/aws-exports.ts":
/*!****************************!*\
  !*** ./src/aws-exports.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.
// const awsmobile = {
//   aws_project_region: 'us-east-1',
//   aws_cognito_identity_pool_id: 'us-east-1:dd666108-6650-422b-85fe-ae91bd670fc6',
//   aws_cognito_region: 'us-east-1',
//   aws_user_pools_id: 'us-east-1_TRDM39IAs',
//   aws_user_pools_web_client_id: '197o3lckkcjfqncn1krmfvh839',
//   oauth: {}
// };
// https://console.aws.amazon.com/cognito/users/?region=us-east-1#/pool/us-east-1_ejQhP1J5d/details?_k=r7ecg6
//https://console.aws.amazon.com/cognito/code/?region=us-east-1&pool=us-east-1:bfb28f48-47ac-44f0-8b7c-23d504526fb9&token=18b10fc22e261e1e398c5ec1538731d4292795641847a7af37f06a0b8548c70e&response=%7B%22authRole%22%3A%22arn%3Aaws%3Aiam%3A%3A548865720880%3Arole%2FCognito_dtc_demoAuth_Role%22%2C%22unauthRole%22%3A%22arn%3Aaws%3Aiam%3A%3A548865720880%3Arole%2FCognito_dtc_demoUnauth_Role%22%7D
// https://console.aws.amazon.com/cognito/pool/?region=us-east-1&id=us-east-1:bfb28f48-47ac-44f0-8b7c-23d504526fb9
const awsmobile = {
    aws_project_region: 'us-east-1',
    aws_cognito_identity_pool_id: 'us-east-1:bfb28f48-47ac-44f0-8b7c-23d504526fb9',
    aws_cognito_region: 'us-east-1',
    aws_user_pools_id: 'us-east-1_ejQhP1J5d',
    aws_user_pools_web_client_id: '71hte8f8lgbgscs7hhcrg6q12p',
    oauth: {}
};
/* harmony default export */ __webpack_exports__["default"] = (awsmobile);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib/index.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aws-exports */ "./src/aws-exports.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




aws_amplify__WEBPACK_IMPORTED_MODULE_2___default.a.configure(_aws_exports__WEBPACK_IMPORTED_MODULE_3__["default"]);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_6__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\DEV\workspaces\iclinic\dtc-ui\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map