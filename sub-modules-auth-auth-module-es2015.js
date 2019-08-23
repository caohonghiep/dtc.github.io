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

module.exports = "#main-content {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  margin: 0;\n  padding: 0;\n  background-image: url(\"/assets/images/bg-01.jpg\");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n#main-content .container-fluid {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator {\n  padding: 20px;\n  margin: 20px;\n  display: block;\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.5), 0px 8px 10px 1px rgba(0, 0, 0, 0.4), 0px 3px 14px 2px rgba(0, 0, 0, 0.3);\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-header {\n  font-weight: bold;\n  font-size: 16px;\n  margin-bottom: 16px;\n  color: var(--primary);\n  text-align: center;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row .amplify-form-action, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row .amplify-form-signup, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row .amplify-form-actions-left, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row .amplify-form-cell-right, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row amplify-form-cell-left, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row .amplify-form-action, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row .amplify-form-signup, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row .amplify-form-actions-left, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row .amplify-form-cell-right, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row amplify-form-cell-left, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-actions .amplify-form-action, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-actions .amplify-form-signup, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-actions .amplify-form-actions-left, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-actions .amplify-form-cell-right, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-actions amplify-form-cell-left {\n  display: block;\n  text-align: center;\n  font-size: 12px;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row .amplify-form-link, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row .amplify-form-link, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-actions .amplify-form-link {\n  cursor: pointer;\n  font-style: italic;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row .amplify-input-label, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row .amplify-input-label {\n  color: var(--primary);\n  width: 120px;\n  text-align: right;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row input, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row input {\n  width: 220px;\n  margin: 0 4px;\n  padding: 0 4px;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row input::-webkit-input-placeholder, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row input::-webkit-input-placeholder {\n  font-style: italic;\n  font-size: 12px;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row input::-moz-placeholder, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row input::-moz-placeholder {\n  font-style: italic;\n  font-size: 12px;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row input::-ms-input-placeholder, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row input::-ms-input-placeholder {\n  font-style: italic;\n  font-size: 12px;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row input::placeholder, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row input::placeholder {\n  font-style: italic;\n  font-size: 12px;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row .amplify-input-group, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row .amplify-input-group {\n  display: inline;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row .amplify-input-group .amplify-input-group-item, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row .amplify-input-group .amplify-input-group-item {\n  display: inline;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-row .amplify-input-group .amplify-input-group-item .amplify-select-phone-country, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-amplify-form-row .amplify-input-group .amplify-input-group-item .amplify-select-phone-country {\n  display: none;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-actions .amplify-form-cell-left, #main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-actions .amplify-form-cell-right {\n  margin: 4px;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-form-container .amplify-form-body .amplify-form-actions .amplify-form-cell-right button {\n  font-size: 14px;\n  background-color: var(--primary);\n  color: white;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  position: relative;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  outline: 0;\n  border: none;\n  -webkit-tap-highlight-color: transparent;\n  display: inline-block;\n  white-space: nowrap;\n  text-decoration: none;\n  vertical-align: baseline;\n  text-align: center;\n  min-width: 64px;\n  line-height: 30px;\n  padding: 0 12px;\n  border-radius: 4px;\n  overflow: visible;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  transition: background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-alert .amplify-alert-body {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-alert .amplify-alert-body .amplify-alert-icon {\n  color: var(--danger);\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-alert .amplify-alert-body .amplify-alert-message {\n  color: var(--danger);\n  margin-left: 8px;\n  margin-right: 8px;\n  font-size: 12px;\n}\n#main-content .container-fluid ::ng-deep amplify-authenticator .amplify-container .amplify-alert .amplify-alert-body .amplify-alert-close {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9sb2dpbi9DOlxcREVWXFx3b3Jrc3BhY2VzXFxpY2xpbmljXFxkdGMtdWkvc3JjXFxhcHBcXHN1Yi1tb2R1bGVzXFxhdXRoXFxwYWdlc1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdWItbW9kdWxlcy9hdXRoL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpREFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKO0FERU07RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUVBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUhBQUE7QUNEUjtBRE9jO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDTGhCO0FEVWdCO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1JsQjtBRFVnQjtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ1JsQjtBRGFnQjtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDWGxCO0FEY2dCO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDWmxCO0FEY2tCO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDWnBCO0FEVWtCO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDWnBCO0FEVWtCO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDWnBCO0FEVWtCO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDWnBCO0FEa0JnQjtFQUNFLGVBQUE7QUNoQmxCO0FEaUJrQjtFQUNFLGVBQUE7QUNmcEI7QURnQm9CO0VBQ0UsYUFBQTtBQ2R0QjtBRHNCZ0I7RUFDRSxXQUFBO0FDcEJsQjtBRHdCa0I7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsK0dBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSwyR0FBQTtBQ3RCcEI7QURnQ1k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQzlCZDtBRGdDYztFQUNFLG9CQUFBO0FDOUJoQjtBRGlDYztFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUMvQmhCO0FEa0NjO0VBQ0UsYUFBQTtBQ2hDaEIiLCJmaWxlIjoic3JjL2FwcC9zdWItbW9kdWxlcy9hdXRoL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4tY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnLTAxLmpwZycpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgOjpuZy1kZWVwIHtcclxuICAgICAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAvL21heC13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40KSwgMHB4IDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblxyXG4gICAgICAgIC5hbXBsaWZ5LWNvbnRhaW5lciB7XHJcblxyXG4gICAgICAgICAgLmFtcGxpZnktZm9ybS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAuYW1wbGlmeS1mb3JtLWJvZHkge1xyXG4gICAgICAgICAgICAgIC5hbXBsaWZ5LWZvcm0taGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAuYW1wbGlmeS1mb3JtLXJvdywgLmFtcGxpZnktYW1wbGlmeS1mb3JtLXJvdywgLmFtcGxpZnktZm9ybS1hY3Rpb25zIHtcclxuICAgICAgICAgICAgICAgIC5hbXBsaWZ5LWZvcm0tYWN0aW9uLCAuYW1wbGlmeS1mb3JtLXNpZ251cCwgLmFtcGxpZnktZm9ybS1hY3Rpb25zLWxlZnQsIC5hbXBsaWZ5LWZvcm0tY2VsbC1yaWdodCwgYW1wbGlmeS1mb3JtLWNlbGwtbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hbXBsaWZ5LWZvcm0tbGluayB7XHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmFtcGxpZnktZm9ybS1yb3csIC5hbXBsaWZ5LWFtcGxpZnktZm9ybS1yb3cge1xyXG4gICAgICAgICAgICAgICAgLmFtcGxpZnktaW5wdXQtbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hbXBsaWZ5LWlucHV0LWdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICAgICAgICAuYW1wbGlmeS1pbnB1dC1ncm91cC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgLmFtcGxpZnktc2VsZWN0LXBob25lLWNvdW50cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuYW1wbGlmeS1mb3JtLWFjdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgLmFtcGxpZnktZm9ybS1jZWxsLWxlZnQsIC5hbXBsaWZ5LWZvcm0tY2VsbC1yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hbXBsaWZ5LWZvcm0tY2VsbC1yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA2NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC40cyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKSwgYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFtcGxpZnktYWxlcnQge1xyXG4gICAgICAgICAgICAuYW1wbGlmeS1hbGVydC1ib2R5IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgIC5hbXBsaWZ5LWFsZXJ0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuYW1wbGlmeS1hbGVydC1tZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmFtcGxpZnktYWxlcnQtY2xvc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG4vLz4gZGl2ID4gYW1wbGlmeS1hdXRoZW50aWNhdG9yLWNvcmUgPiBkaXYgPiBhbXBsaWZ5LWF1dGgtc2lnbi1pbi1jb3JlID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2LmFtcGxpZnktZm9ybS1yb3cuYW1wbGlmeS1zaWduaW4tcGFzc3dvcmQgPiBzcGFuXHJcbiIsIiNtYWluLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmctMDEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4jbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40KSwgMHB4IDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4jbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWZvcm0taGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWZvcm0tcm93IC5hbXBsaWZ5LWZvcm0tYWN0aW9uLCAjbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWZvcm0tcm93IC5hbXBsaWZ5LWZvcm0tc2lnbnVwLCAjbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWZvcm0tcm93IC5hbXBsaWZ5LWZvcm0tYWN0aW9ucy1sZWZ0LCAjbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWZvcm0tcm93IC5hbXBsaWZ5LWZvcm0tY2VsbC1yaWdodCwgI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1mb3JtLXJvdyBhbXBsaWZ5LWZvcm0tY2VsbC1sZWZ0LCAjbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWFtcGxpZnktZm9ybS1yb3cgLmFtcGxpZnktZm9ybS1hY3Rpb24sICNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCA6Om5nLWRlZXAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIC5hbXBsaWZ5LWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWJvZHkgLmFtcGxpZnktYW1wbGlmeS1mb3JtLXJvdyAuYW1wbGlmeS1mb3JtLXNpZ251cCwgI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1hbXBsaWZ5LWZvcm0tcm93IC5hbXBsaWZ5LWZvcm0tYWN0aW9ucy1sZWZ0LCAjbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWFtcGxpZnktZm9ybS1yb3cgLmFtcGxpZnktZm9ybS1jZWxsLXJpZ2h0LCAjbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWFtcGxpZnktZm9ybS1yb3cgYW1wbGlmeS1mb3JtLWNlbGwtbGVmdCwgI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1mb3JtLWFjdGlvbnMgLmFtcGxpZnktZm9ybS1hY3Rpb24sICNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCA6Om5nLWRlZXAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIC5hbXBsaWZ5LWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWJvZHkgLmFtcGxpZnktZm9ybS1hY3Rpb25zIC5hbXBsaWZ5LWZvcm0tc2lnbnVwLCAjbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWZvcm0tYWN0aW9ucyAuYW1wbGlmeS1mb3JtLWFjdGlvbnMtbGVmdCwgI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1mb3JtLWFjdGlvbnMgLmFtcGxpZnktZm9ybS1jZWxsLXJpZ2h0LCAjbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWZvcm0tYWN0aW9ucyBhbXBsaWZ5LWZvcm0tY2VsbC1sZWZ0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1mb3JtLXJvdyAuYW1wbGlmeS1mb3JtLWxpbmssICNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCA6Om5nLWRlZXAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIC5hbXBsaWZ5LWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWJvZHkgLmFtcGxpZnktYW1wbGlmeS1mb3JtLXJvdyAuYW1wbGlmeS1mb3JtLWxpbmssICNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCA6Om5nLWRlZXAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIC5hbXBsaWZ5LWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWJvZHkgLmFtcGxpZnktZm9ybS1hY3Rpb25zIC5hbXBsaWZ5LWZvcm0tbGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1mb3JtLXJvdyAuYW1wbGlmeS1pbnB1dC1sYWJlbCwgI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1hbXBsaWZ5LWZvcm0tcm93IC5hbXBsaWZ5LWlucHV0LWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB3aWR0aDogMTIwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1mb3JtLXJvdyBpbnB1dCwgI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1hbXBsaWZ5LWZvcm0tcm93IGlucHV0IHtcbiAgd2lkdGg6IDIyMHB4O1xuICBtYXJnaW46IDAgNHB4O1xuICBwYWRkaW5nOiAwIDRweDtcbn1cbiNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCA6Om5nLWRlZXAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIC5hbXBsaWZ5LWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWJvZHkgLmFtcGxpZnktZm9ybS1yb3cgaW5wdXQ6OnBsYWNlaG9sZGVyLCAjbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWFtcGxpZnktZm9ybS1yb3cgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDEycHg7XG59XG4jbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWZvcm0tcm93IC5hbXBsaWZ5LWlucHV0LWdyb3VwLCAjbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWFtcGxpZnktZm9ybS1yb3cgLmFtcGxpZnktaW5wdXQtZ3JvdXAge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4jbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWZvcm0tcm93IC5hbXBsaWZ5LWlucHV0LWdyb3VwIC5hbXBsaWZ5LWlucHV0LWdyb3VwLWl0ZW0sICNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCA6Om5nLWRlZXAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIC5hbXBsaWZ5LWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWNvbnRhaW5lciAuYW1wbGlmeS1mb3JtLWJvZHkgLmFtcGxpZnktYW1wbGlmeS1mb3JtLXJvdyAuYW1wbGlmeS1pbnB1dC1ncm91cCAuYW1wbGlmeS1pbnB1dC1ncm91cC1pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1mb3JtLXJvdyAuYW1wbGlmeS1pbnB1dC1ncm91cCAuYW1wbGlmeS1pbnB1dC1ncm91cC1pdGVtIC5hbXBsaWZ5LXNlbGVjdC1waG9uZS1jb3VudHJ5LCAjbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWFtcGxpZnktZm9ybS1yb3cgLmFtcGxpZnktaW5wdXQtZ3JvdXAgLmFtcGxpZnktaW5wdXQtZ3JvdXAtaXRlbSAuYW1wbGlmeS1zZWxlY3QtcGhvbmUtY291bnRyeSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWZvcm0tYWN0aW9ucyAuYW1wbGlmeS1mb3JtLWNlbGwtbGVmdCwgI21haW4tY29udGVudCAuY29udGFpbmVyLWZsdWlkIDo6bmctZGVlcCBhbXBsaWZ5LWF1dGhlbnRpY2F0b3IgLmFtcGxpZnktY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tY29udGFpbmVyIC5hbXBsaWZ5LWZvcm0tYm9keSAuYW1wbGlmeS1mb3JtLWFjdGlvbnMgLmFtcGxpZnktZm9ybS1jZWxsLXJpZ2h0IHtcbiAgbWFyZ2luOiA0cHg7XG59XG4jbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1jb250YWluZXIgLmFtcGxpZnktZm9ybS1ib2R5IC5hbXBsaWZ5LWZvcm0tYWN0aW9ucyAuYW1wbGlmeS1mb3JtLWNlbGwtcmlnaHQgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLXdpZHRoOiA2NHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksIGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbn1cbiNtYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCA6Om5nLWRlZXAgYW1wbGlmeS1hdXRoZW50aWNhdG9yIC5hbXBsaWZ5LWNvbnRhaW5lciAuYW1wbGlmeS1hbGVydCAuYW1wbGlmeS1hbGVydC1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktYWxlcnQgLmFtcGxpZnktYWxlcnQtYm9keSAuYW1wbGlmeS1hbGVydC1pY29uIHtcbiAgY29sb3I6IHZhcigtLWRhbmdlcik7XG59XG4jbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktYWxlcnQgLmFtcGxpZnktYWxlcnQtYm9keSAuYW1wbGlmeS1hbGVydC1tZXNzYWdlIHtcbiAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4jbWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQgOjpuZy1kZWVwIGFtcGxpZnktYXV0aGVudGljYXRvciAuYW1wbGlmeS1jb250YWluZXIgLmFtcGxpZnktYWxlcnQgLmFtcGxpZnktYWxlcnQtYm9keSAuYW1wbGlmeS1hbGVydC1jbG9zZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

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