(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sub-modules-auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/auth.container.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/auth.container.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/pages/login/login.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\">\n  <div class=\"container-fluid\">\n    <amplify-authenticator [signUpConfig]=\"signUpConfig\"></amplify-authenticator>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/sub-modules/auth/auth-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/sub-modules/auth/auth-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.container */ "./src/app/sub-modules/auth/auth.container.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/sub-modules/auth/pages/login/login.component.ts");





const routes = [
    {
        path: '',
        component: _auth_container__WEBPACK_IMPORTED_MODULE_3__["AuthContainer"],
        children: [
            {
                path: 'login',
                component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            }
        ]
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/sub-modules/auth/auth.container.scss":
/*!******************************************************!*\
  !*** ./src/app/sub-modules/auth/auth.container.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Yi1tb2R1bGVzL2F1dGgvYXV0aC5jb250YWluZXIuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sub-modules/auth/auth.container.ts":
/*!****************************************************!*\
  !*** ./src/app/sub-modules/auth/auth.container.ts ***!
  \****************************************************/
/*! exports provided: AuthContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContainer", function() { return AuthContainer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthContainer = 
// tslint:disable-next-line:component-class-suffix
class AuthContainer {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        // this.router.navigate(['/auth/login']);
    }
};
AuthContainer.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthContainer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-auth',
        template: __webpack_require__(/*! raw-loader!./auth.container.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/auth.container.html"),
        styles: [__webpack_require__(/*! ./auth.container.scss */ "./src/app/sub-modules/auth/auth.container.scss")]
    })
    // tslint:disable-next-line:component-class-suffix
], AuthContainer);



/***/ }),

/***/ "./src/app/sub-modules/auth/auth.module.ts":
/*!*************************************************!*\
  !*** ./src/app/sub-modules/auth/auth.module.ts ***!
  \*************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/sub-modules/auth/auth-routing.module.ts");
/* harmony import */ var _auth_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.container */ "./src/app/sub-modules/auth/auth.container.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/sub-modules/auth/pages/login/login.component.ts");
/* harmony import */ var aws_amplify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aws-amplify-angular */ "./node_modules/aws-amplify-angular/dist/index.js");







let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _auth_container__WEBPACK_IMPORTED_MODULE_4__["AuthContainer"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
            aws_amplify_angular__WEBPACK_IMPORTED_MODULE_6__["AmplifyAngularModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/sub-modules/auth/pages/login/login.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/login/login.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-content {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  margin: 0;\n  padding: 0;\n  background-image: url(\"/assets/images/bg-01.jpg\");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n#main-content .container-fluid {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator {\n  padding: 20px;\n  margin: 20px;\n  display: block;\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.5), 0px 8px 10px 1px rgba(0, 0, 0, 0.4), 0px 3px 14px 2px rgba(0, 0, 0, 0.3);\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-header {\n  font-weight: bold;\n  font-size: 16px;\n  margin-bottom: 16px;\n  color: var(--primary);\n  text-align: center;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row .amplify-form-action, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row .amplify-form-signup, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row .amplify-form-actions-left, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row .amplify-form-cell-right, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row amplify-form-cell-left, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row .amplify-form-action, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row .amplify-form-signup, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row .amplify-form-actions-left, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row .amplify-form-cell-right, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row amplify-form-cell-left, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-actions .amplify-form-action, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-actions .amplify-form-signup, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-actions .amplify-form-actions-left, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-actions .amplify-form-cell-right, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-actions amplify-form-cell-left {\n  display: block;\n  text-align: center;\n  font-size: 12px;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row .amplify-form-link, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row .amplify-form-link, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-actions .amplify-form-link {\n  cursor: pointer;\n  font-style: italic;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row .amplify-input-label, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row .amplify-input-label {\n  color: var(--primary);\n  width: 120px;\n  text-align: right;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row input, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row input {\n  width: 220px;\n  margin: 4px;\n  padding: 0 4px;\n  display: inline-block;\n  padding: 4px 8px;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row input::-webkit-input-placeholder, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row input::-webkit-input-placeholder {\n  font-style: italic;\n  font-size: 12px;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row input::-moz-placeholder, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row input::-moz-placeholder {\n  font-style: italic;\n  font-size: 12px;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row input::-ms-input-placeholder, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row input::-ms-input-placeholder {\n  font-style: italic;\n  font-size: 12px;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row input::placeholder, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row input::placeholder {\n  font-style: italic;\n  font-size: 12px;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row .amplify-input-group, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row .amplify-input-group {\n  display: inline;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row .amplify-input-group .amplify-input-group-item, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row .amplify-input-group .amplify-input-group-item {\n  display: inline;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row .amplify-input-group .amplify-input-group-item .amplify-select-phone-country, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row .amplify-input-group .amplify-input-group-item .amplify-select-phone-country {\n  display: none;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-actions .amplify-form-cell-left, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-actions .amplify-form-cell-right {\n  margin: 4px;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-actions .amplify-form-cell-right button {\n  font-size: 14px;\n  background-color: var(--primary);\n  color: white;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  position: relative;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  outline: 0;\n  border: none;\n  -webkit-tap-highlight-color: transparent;\n  display: inline-block;\n  white-space: nowrap;\n  text-decoration: none;\n  vertical-align: baseline;\n  text-align: center;\n  min-width: 64px;\n  line-height: 30px;\n  padding: 0 12px;\n  border-radius: 4px;\n  overflow: visible;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  transition: background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-alert .amplify-alert-body {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-alert .amplify-alert-body .amplify-alert-icon {\n  color: var(--danger);\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-alert .amplify-alert-body .amplify-alert-message {\n  color: var(--danger);\n  margin-left: 8px;\n  margin-right: 8px;\n  font-size: 12px;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-alert .amplify-alert-body .amplify-alert-close {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9sb2dpbi9DOlxcREVWXFx3b3Jrc3BhY2VzXFxpY2xpbmljXFxkdGMtdWkvc3JjXFxhcHBcXHN1Yi1tb2R1bGVzXFxhdXRoXFxwYWdlc1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdWItbW9kdWxlcy9hdXRoL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpREFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKO0FERU07RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUVBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUhBQUE7QUNEUjtBRE9jO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDTGhCO0FEVWdCO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1JsQjtBRFVnQjtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ1JsQjtBRGFnQjtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDWGxCO0FEY2dCO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdFQUFBO0FDWmxCO0FEYWtCO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDWHBCO0FEU2tCO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDWHBCO0FEU2tCO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDWHBCO0FEU2tCO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDWHBCO0FEaUJnQjtFQUNFLGVBQUE7QUNmbEI7QURnQmtCO0VBQ0UsZUFBQTtBQ2RwQjtBRGVvQjtFQUNFLGFBQUE7QUNidEI7QURxQmdCO0VBQ0UsV0FBQTtBQ25CbEI7QUR1QmtCO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLCtHQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsMkdBQUE7QUNyQnBCO0FEK0JZO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUM3QmQ7QUQrQmM7RUFDRSxvQkFBQTtBQzdCaEI7QURnQ2M7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDOUJoQjtBRGlDYztFQUNFLGFBQUE7QUMvQmhCIiwiZmlsZSI6InNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iZy0wMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIDo6bmctZGVlcCB7XHJcbiAgICAgIGFtcGxpZnktYXV0aGVudGljYXRvciB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgLy9tYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC41KSwgMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCksIDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5cclxuICAgICAgICAuYW1wbGlmeS1jb250YWluZXIge1xyXG5cclxuICAgICAgICAgIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgLmFtcGxpZnktZm9ybS1ib2R5IHtcclxuICAgICAgICAgICAgICAuYW1wbGlmeS1mb3JtLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgLmFtcGxpZnktZm9ybS1yb3csIC5hbXBsaWZ5LWFtcGxpZnktZm9ybS1yb3csIC5hbXBsaWZ5LWZvcm0tYWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAuYW1wbGlmeS1mb3JtLWFjdGlvbiwgLmFtcGxpZnktZm9ybS1zaWdudXAsIC5hbXBsaWZ5LWZvcm0tYWN0aW9ucy1sZWZ0LCAuYW1wbGlmeS1mb3JtLWNlbGwtcmlnaHQsIGFtcGxpZnktZm9ybS1jZWxsLWxlZnQge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYW1wbGlmeS1mb3JtLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5hbXBsaWZ5LWZvcm0tcm93LCAuYW1wbGlmeS1hbXBsaWZ5LWZvcm0tcm93IHtcclxuICAgICAgICAgICAgICAgIC5hbXBsaWZ5LWlucHV0LWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDRweDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA0cHg7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmFtcGxpZnktaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgIC5hbXBsaWZ5LWlucHV0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgICAgICAgICAuYW1wbGlmeS1zZWxlY3QtcGhvbmUtY291bnRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5hbXBsaWZ5LWZvcm0tYWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAuYW1wbGlmeS1mb3JtLWNlbGwtbGVmdCwgLmFtcGxpZnktZm9ybS1jZWxsLXJpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmFtcGxpZnktZm9ybS1jZWxsLXJpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDY0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjRzIGN1YmljLWJlemllciguMjUsIC44LCAuMjUsIDEpLCBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwgMCwgLjIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYW1wbGlmeS1hbGVydCB7XHJcbiAgICAgICAgICAgIC5hbXBsaWZ5LWFsZXJ0LWJvZHkge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgLmFtcGxpZnktYWxlcnQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5hbXBsaWZ5LWFsZXJ0LW1lc3NhZ2Uge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuYW1wbGlmeS1hbGVydC1jbG9zZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vPiBkaXYgPiBhbXBsaWZ5LWF1dGhlbnRpY2F0b3ItY29yZSA+IGRpdiA+IGFtcGxpZnktYXV0aC1zaWduLWluLWNvcmUgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYuYW1wbGlmeS1mb3JtLXJvdy5hbXBsaWZ5LXNpZ25pbi1wYXNzd29yZCA+IHNwYW5cclxuIiwiI21haW4tY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZy0wMS5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbiNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCA6Om5nLWRlZXAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIHtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNSksIDBweCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpLCAwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbiNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCA6Om5nLWRlZXAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIC5hbXBsaWZ5LWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWJvZHkgLmFtcGxpZnktZm9ybS1oZWFkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCA6Om5nLWRlZXAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIC5hbXBsaWZ5LWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWJvZHkgLmFtcGxpZnktZm9ybS1yb3cgLmFtcGxpZnktZm9ybS1hY3Rpb24sICNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCA6Om5nLWRlZXAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIC5hbXBsaWZ5LWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWJvZHkgLmFtcGxpZnktZm9ybS1yb3cgLmFtcGxpZnktZm9ybS1zaWdudXAsICNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCA6Om5nLWRlZXAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIC5hbXBsaWZ5LWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWJvZHkgLmFtcGxpZnktZm9ybS1yb3cgLmFtcGxpZnktZm9ybS1hY3Rpb25zLWxlZnQsICNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCA6Om5nLWRlZXAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIC5hbXBsaWZ5LWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWJvZHkgLmFtcGxpZnktZm9ybS1yb3cgLmFtcGxpZnktZm9ybS1jZWxsLXJpZ2h0LCAjbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWZvcm0tcm93IGFtcGxpZnktZm9ybS1jZWxsLWxlZnQsICNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCA6Om5nLWRlZXAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIC5hbXBsaWZ5LWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWJvZHkgLmFtcGxpZnktYW1wbGlmeS1mb3JtLXJvdyAuYW1wbGlmeS1mb3JtLWFjdGlvbiwgI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1hbXBsaWZ5LWZvcm0tcm93IC5hbXBsaWZ5LWZvcm0tc2lnbnVwLCAjbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWFtcGxpZnktZm9ybS1yb3cgLmFtcGxpZnktZm9ybS1hY3Rpb25zLWxlZnQsICNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCA6Om5nLWRlZXAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIC5hbXBsaWZ5LWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWJvZHkgLmFtcGxpZnktYW1wbGlmeS1mb3JtLXJvdyAuYW1wbGlmeS1mb3JtLWNlbGwtcmlnaHQsICNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCA6Om5nLWRlZXAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIC5hbXBsaWZ5LWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWJvZHkgLmFtcGxpZnktYW1wbGlmeS1mb3JtLXJvdyBhbXBsaWZ5LWZvcm0tY2VsbC1sZWZ0LCAjbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWZvcm0tYWN0aW9ucyAuYW1wbGlmeS1mb3JtLWFjdGlvbiwgI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1mb3JtLWFjdGlvbnMgLmFtcGxpZnktZm9ybS1zaWdudXAsICNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCA6Om5nLWRlZXAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIC5hbXBsaWZ5LWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWJvZHkgLmFtcGxpZnktZm9ybS1hY3Rpb25zIC5hbXBsaWZ5LWZvcm0tYWN0aW9ucy1sZWZ0LCAjbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWZvcm0tYWN0aW9ucyAuYW1wbGlmeS1mb3JtLWNlbGwtcmlnaHQsICNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCA6Om5nLWRlZXAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIC5hbXBsaWZ5LWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWJvZHkgLmFtcGxpZnktZm9ybS1hY3Rpb25zIGFtcGxpZnktZm9ybS1jZWxsLWxlZnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG59XG4jbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWZvcm0tcm93IC5hbXBsaWZ5LWZvcm0tbGluaywgI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1hbXBsaWZ5LWZvcm0tcm93IC5hbXBsaWZ5LWZvcm0tbGluaywgI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1mb3JtLWFjdGlvbnMgLmFtcGxpZnktZm9ybS1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4jbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWZvcm0tcm93IC5hbXBsaWZ5LWlucHV0LWxhYmVsLCAjbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWFtcGxpZnktZm9ybS1yb3cgLmFtcGxpZnktaW5wdXQtbGFiZWwge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIHdpZHRoOiAxMjBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4jbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWZvcm0tcm93IGlucHV0LCAjbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWFtcGxpZnktZm9ybS1yb3cgaW5wdXQge1xuICB3aWR0aDogMjIwcHg7XG4gIG1hcmdpbjogNHB4O1xuICBwYWRkaW5nOiAwIDRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG4jbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWZvcm0tcm93IGlucHV0OjpwbGFjZWhvbGRlciwgI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1hbXBsaWZ5LWZvcm0tcm93IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1mb3JtLXJvdyAuYW1wbGlmeS1pbnB1dC1ncm91cCwgI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1hbXBsaWZ5LWZvcm0tcm93IC5hbXBsaWZ5LWlucHV0LWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1mb3JtLXJvdyAuYW1wbGlmeS1pbnB1dC1ncm91cCAuYW1wbGlmeS1pbnB1dC1ncm91cC1pdGVtLCAjbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWFtcGxpZnktZm9ybS1yb3cgLmFtcGxpZnktaW5wdXQtZ3JvdXAgLmFtcGxpZnktaW5wdXQtZ3JvdXAtaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbiNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCA6Om5nLWRlZXAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIC5hbXBsaWZ5LWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWJvZHkgLmFtcGxpZnktZm9ybS1yb3cgLmFtcGxpZnktaW5wdXQtZ3JvdXAgLmFtcGxpZnktaW5wdXQtZ3JvdXAtaXRlbSAuYW1wbGlmeS1zZWxlY3QtcGhvbmUtY291bnRyeSwgI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1hbXBsaWZ5LWZvcm0tcm93IC5hbXBsaWZ5LWlucHV0LWdyb3VwIC5hbXBsaWZ5LWlucHV0LWdyb3VwLWl0ZW0gLmFtcGxpZnktc2VsZWN0LXBob25lLWNvdW50cnkge1xuICBkaXNwbGF5OiBub25lO1xufVxuI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1mb3JtLWFjdGlvbnMgLmFtcGxpZnktZm9ybS1jZWxsLWxlZnQsICNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCA6Om5nLWRlZXAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIC5hbXBsaWZ5LWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWJvZHkgLmFtcGxpZnktZm9ybS1hY3Rpb25zIC5hbXBsaWZ5LWZvcm0tY2VsbC1yaWdodCB7XG4gIG1hcmdpbjogNHB4O1xufVxuI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1mb3JtLWFjdGlvbnMgLmFtcGxpZnktZm9ybS1jZWxsLXJpZ2h0IGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogMDtcbiAgYm9yZGVyOiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogNjRweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDAgMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLCBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG59XG4jbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktYWxlcnQgLmFtcGxpZnktYWxlcnQtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWFsZXJ0IC5hbXBsaWZ5LWFsZXJ0LWJvZHkgLmFtcGxpZnktYWxlcnQtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xufVxuI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWFsZXJ0IC5hbXBsaWZ5LWFsZXJ0LWJvZHkgLmFtcGxpZnktYWxlcnQtbWVzc2FnZSB7XG4gIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWFsZXJ0IC5hbXBsaWZ5LWFsZXJ0LWJvZHkgLmFtcGxpZnktYWxlcnQtY2xvc2Uge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/sub-modules/auth/pages/login/login.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/login/login.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");




let LoginComponent = class LoginComponent {
    constructor(route, router, authService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.signUpConfig = {
            header: 'Create A New Account',
            usernameAttributes: 'username',
            hideAllDefaults: true,
            defaultCountryCode: '84',
            signUpFields: [
                {
                    label: 'User Name',
                    key: 'username',
                    required: true,
                    displayOrder: 1,
                    type: 'string',
                },
                {
                    label: 'Your Email',
                    key: 'email',
                    required: true,
                    displayOrder: 2,
                    type: 'string',
                },
                {
                    label: 'Password',
                    key: 'password',
                    required: true,
                    displayOrder: 3,
                    type: 'password'
                },
                {
                    label: 'Phone Number',
                    key: 'phone_number',
                    required: true,
                    displayOrder: 4,
                    type: 'string'
                }
            ]
        };
    }
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
        this.authService.addSignInListener((data) => {
            this.router.navigate([this.returnUrl]);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/sub-modules/auth/pages/login/login.component.scss")]
    })
], LoginComponent);



/***/ })

}]);
//# sourceMappingURL=sub-modules-auth-auth-module-es2015.js.map