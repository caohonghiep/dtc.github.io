(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sub-modules-auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/auth.container.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/auth.container.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/forget-password/forget-password.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/pages/forget-password/forget-password.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <form class=\"form-signin text-center\">\n    <img src=\"assets/images/logo.png\" alt=\"\" width=\"72\" height=\"72\">\n    <h1 class=\"header h3 mb-3 font-weight-normal\">Reset your password</h1>\n    <label for=\"username\" class=\"sr-only\">Email address</label>\n    <input id=\"username\" name=\"username\" [(ngModel)]=\"username\" class=\"form-control\" placeholder=\"User Name\" required=\"\" autofocus=\"\">\n\n    <div class=\"login-error text-danger\">{{ errorMessage }}</div>\n    <div class=\"sign-action\">\n      <button id=\"backToSignInButton\" type=\"button\" routerLink=\"/auth/login\" class=\"btn btn-outline-info\">Back to Sign in</button>\n      <button id=\"sendCodeButton\" class=\"btn btn-secondary\" (click)=\"sendVerificationCode()\" [class.btn-success]=\"!!username\" [disabled]=\"!username\">Send Code</button>\n    </div>\n\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/pages/login/login.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div id=\"main-content\">-->\n<!--  <div class=\"container-fluid\">-->\n<!--&lt;!&ndash;    <amplify-authenticator [signUpConfig]=\"signUpConfig\"></amplify-authenticator>&ndash;&gt;-->\n<!--  </div>-->\n<!--</div>-->\n\n<div class=\"content\">\n  <form class=\"form-signin text-center\">\n    <img src=\"assets/images/logo.png\" alt=\"\" width=\"72\" height=\"72\">\n    <h1 class=\"header h3 mb-3 font-weight-normal\">Member Login</h1>\n    <label for=\"username\" class=\"sr-only\">User Name</label>\n    <input id=\"username\" name=\"username\" [(ngModel)]=\"username\" type=\"text\" class=\"form-control\" placeholder=\"User Name\" required=\"\" autofocus=\"\">\n    <label for=\"password\" class=\"sr-only\">Password</label>\n    <input id=\"password\" name=\"password\" [(ngModel)]=\"password\"  type=\"password\"  class=\"form-control\" placeholder=\"Password\" required=\"\">\n\n    <div class=\"login-error text-danger\">{{ errorMessage }}</div>\n    <div class=\"sign-action\">\n      <button id=\"forgetPasswordButton\" type=\"button\" routerLink=\"/auth/forget-password\" class=\"btn btn-outline-info\">Forget Password</button>\n      <button id=\"signInButton\" class=\"btn btn-secondary\" [class.btn-success]=\"!!password && !!username\" [disabled]=\"!password || !username\" (click)=\"signIn()\">Sign in</button>\n    </div>\n\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/reset-password/reset-password.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/pages/reset-password/reset-password.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content\">\n  <form class=\"form-signin text-center\">\n    <img src=\"assets/images/logo.png\" alt=\"\" width=\"72\" height=\"72\">\n    <h1 class=\"header h3 mb-3 font-weight-normal\">Confirm Code</h1>\n    <div *ngIf=\"email\" class=\"message text-warning\"> Code will be sent to email: {{email}}</div>\n    <label for=\"code\" class=\"sr-only\">Verification Code</label>\n    <input id=\"code\" name=\"code\" [(ngModel)]=\"verificationCode\" type=\"text\" class=\"form-control\" placeholder=\"Code\" required=\"\" autofocus=\"\">\n    <label for=\"password\" class=\"sr-only\">New Password</label>\n    <input id=\"password\" name=\"password\" [(ngModel)]=\"password\"  type=\"password\"  class=\"form-control\" placeholder=\"New Password\" required=\"\">\n\n    <div class=\"message text-danger\">{{ errorMessage }}</div>\n    <div class=\"sign-action\">\n      <button id=\"resendCodeButton\" type=\"button\" routerLink=\"/auth/forget-password\" class=\"btn btn-outline-info\">Resend Code</button>\n      <button id=\"resetPasswordButton\" class=\"btn btn-secondary\" [class.btn-success]=\"!!password && !!verificationCode\" [disabled]=\"!password || !verificationCode\" (click)=\"resetPassword()\">Reset Password</button>\n    </div>\n  </form>\n\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.container */ "./src/app/sub-modules/auth/auth.container.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/sub-modules/auth/pages/login/login.component.ts");
/* harmony import */ var _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/forget-password/forget-password.component */ "./src/app/sub-modules/auth/pages/forget-password/forget-password.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ "./src/app/sub-modules/auth/pages/reset-password/reset-password.component.ts");







var routes = [
    {
        path: '',
        component: _auth_container__WEBPACK_IMPORTED_MODULE_3__["AuthContainer"],
        children: [
            {
                path: 'login',
                component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            },
            {
                path: 'forget-password',
                component: _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordComponent"]
            },
            {
                path: 'reset-password',
                component: _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"]
            },
        ]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/sub-modules/auth/auth.container.scss":
/*!******************************************************!*\
  !*** ./src/app/sub-modules/auth/auth.container.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep html,\n::ng-deep .content {\n  height: 100%;\n  width: 100%;\n}\n::ng-deep .content {\n  position: fixed;\n  display: flex;\n  align-items: center;\n  padding: 40px;\n  background-color: #f5f5f5;\n  justify-content: center;\n}\n::ng-deep .content .header {\n  font-size: 24px;\n}\n::ng-deep .content .form-signin {\n  width: 100%;\n  max-width: 400px;\n  padding: 15px 50px 20px;\n  margin: auto;\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.5), 0px 8px 10px 1px rgba(0, 0, 0, 0.4), 0px 3px 14px 2px rgba(0, 0, 0, 0.3);\n}\n::ng-deep .content .form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n}\n::ng-deep .content .form-signin .form-control:focus {\n  z-index: 2;\n}\n::ng-deep .content .form-signin .message {\n  margin-bottom: 4px;\n  margin-top: 4px;\n  font-size: 14px;\n}\n::ng-deep .content .form-signin .sign-action {\n  margin-top: 16px;\n}\n::ng-deep .content .form-signin .sign-action > button {\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9DOlxcREVWXFx3b3Jrc3BhY2VzXFxpY2xpbmljXFxkdGMtdWkvc3JjXFxhcHBcXHN1Yi1tb2R1bGVzXFxhdXRoXFxhdXRoLmNvbnRhaW5lci5zY3NzIiwic3JjL2FwcC9zdWItbW9kdWxlcy9hdXRoL2F1dGguY29udGFpbmVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0VBRUUsWUFBQTtFQUNBLFdBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FDREo7QURHSTtFQUNFLGVBQUE7QUNETjtBRElJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBR0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlIQUFBO0FDSk47QURNTTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0pSO0FETVE7RUFDRSxVQUFBO0FDSlY7QURRTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNOUjtBRFNNO0VBQ0UsZ0JBQUE7QUNQUjtBRFNRO0VBQ0UsZ0JBQUE7QUNQViIsImZpbGUiOiJzcmMvYXBwL3N1Yi1tb2R1bGVzL2F1dGgvYXV0aC5jb250YWluZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgaHRtbCxcclxuICAuY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLXNpZ25pbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDUwcHggMjBweDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAvL21hcmdpbjogMjBweDtcclxuICAgICAgLy9kaXNwbGF5OiBibG9jaztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNSksIDBweCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpLCAwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuXHJcbiAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaWduLWFjdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuXHJcbiAgICAgICAgPiBidXR0b24ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiIsIjo6bmctZGVlcCBodG1sLFxuOjpuZy1kZWVwIC5jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbjo6bmctZGVlcCAuY29udGVudCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46Om5nLWRlZXAgLmNvbnRlbnQgLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbjo6bmctZGVlcCAuY29udGVudCAuZm9ybS1zaWduaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgcGFkZGluZzogMTVweCA1MHB4IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNSksIDBweCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpLCAwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbjo6bmctZGVlcCAuY29udGVudCAuZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuOjpuZy1kZWVwIC5jb250ZW50IC5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgei1pbmRleDogMjtcbn1cbjo6bmctZGVlcCAuY29udGVudCAuZm9ybS1zaWduaW4gLm1lc3NhZ2Uge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOjpuZy1kZWVwIC5jb250ZW50IC5mb3JtLXNpZ25pbiAuc2lnbi1hY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuOjpuZy1kZWVwIC5jb250ZW50IC5mb3JtLXNpZ25pbiAuc2lnbi1hY3Rpb24gPiBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthContainer = /** @class */ (function () {
    function AuthContainer(router) {
        this.router = router;
    }
    AuthContainer.prototype.ngOnInit = function () {
        // this.router.navigate(['/auth/login']);
    };
    AuthContainer.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthContainer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ic-auth',
            template: __webpack_require__(/*! raw-loader!./auth.container.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/auth.container.html"),
            styles: [__webpack_require__(/*! ./auth.container.scss */ "./src/app/sub-modules/auth/auth.container.scss")]
        })
        // tslint:disable-next-line:component-class-suffix
    ], AuthContainer);
    return AuthContainer;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/sub-modules/auth/auth-routing.module.ts");
/* harmony import */ var _auth_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.container */ "./src/app/sub-modules/auth/auth.container.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/sub-modules/auth/pages/login/login.component.ts");
/* harmony import */ var aws_amplify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aws-amplify-angular */ "./node_modules/aws-amplify-angular/dist/index.js");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ic-core */ "./src/app/sub-modules/ic-core/index.ts");
/* harmony import */ var _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/forget-password/forget-password.component */ "./src/app/sub-modules/auth/pages/forget-password/forget-password.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ "./src/app/sub-modules/auth/pages/reset-password/reset-password.component.ts");










var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _auth_container__WEBPACK_IMPORTED_MODULE_4__["AuthContainer"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgetPasswordComponent"],
                _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                aws_amplify_angular__WEBPACK_IMPORTED_MODULE_6__["AmplifyAngularModule"],
                _ic_core__WEBPACK_IMPORTED_MODULE_7__["IcCoreModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/sub-modules/auth/pages/forget-password/forget-password.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/forget-password/forget-password.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .form-signin {\n  font-size: 14px;\n}\n.content .form-signin img {\n  margin-bottom: 0;\n}\n.content .form-signin:focus {\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9mb3JnZXQtcGFzc3dvcmQvQzpcXERFVlxcd29ya3NwYWNlc1xcaWNsaW5pY1xcZHRjLXVpL3NyY1xcYXBwXFxzdWItbW9kdWxlc1xcYXV0aFxccGFnZXNcXGZvcmdldC1wYXNzd29yZFxcZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdWItbW9kdWxlcy9hdXRoL3BhZ2VzL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0FDQUo7QURDSTtFQUNFLGdCQUFBO0FDQ047QURFSTtFQUNFLFVBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL3N1Yi1tb2R1bGVzL2F1dGgvcGFnZXMvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAuZm9ybS1zaWduaW4ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiIsIi5jb250ZW50IC5mb3JtLXNpZ25pbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb250ZW50IC5mb3JtLXNpZ25pbiBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmNvbnRlbnQgLmZvcm0tc2lnbmluOmZvY3VzIHtcbiAgei1pbmRleDogMjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sub-modules/auth/pages/forget-password/forget-password.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/forget-password/forget-password.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ic-core */ "./src/app/sub-modules/ic-core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(router, authService, pageLoaderService) {
        this.router = router;
        this.authService = authService;
        this.pageLoaderService = pageLoaderService;
        this.resetPasswordUrl = '/auth/reset-password';
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetPasswordComponent.prototype.sendVerificationCode = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pageLoaderService.showPageLoader();
                        return [4 /*yield*/, this.authService.forgetPassword(this.username)];
                    case 1:
                        result = _a.sent();
                        this.pageLoaderService.hidePageLoader();
                        if (result.result) {
                            this.router.navigate([this.resetPasswordUrl], { queryParams: { username: this.username, email: result.email } });
                        }
                        else {
                            this.errorMessage = "Error: " + result.error;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgetPasswordComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _ic_core__WEBPACK_IMPORTED_MODULE_3__["PageLoaderService"] }
    ]; };
    ForgetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ic-forget-password',
            template: __webpack_require__(/*! raw-loader!./forget-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/forget-password/forget-password.component.html"),
            styles: [__webpack_require__(/*! ./forget-password.component.scss */ "./src/app/sub-modules/auth/pages/forget-password/forget-password.component.scss")]
        })
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/sub-modules/auth/pages/login/login.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/login/login.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .header {\n  font-size: 24px;\n}\n.content .form-signin {\n  font-size: 16px;\n}\n.content .form-signin img {\n  margin-bottom: 0;\n}\n.content .form-signin:focus {\n  z-index: 2;\n}\n.content input[type=text] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.content input[type=password] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9sb2dpbi9DOlxcREVWXFx3b3Jrc3BhY2VzXFxpY2xpbmljXFxkdGMtdWkvc3JjXFxhcHBcXHN1Yi1tb2R1bGVzXFxhdXRoXFxwYWdlc1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdWItbW9kdWxlcy9hdXRoL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0FDREo7QURFSTtFQUNFLGdCQUFBO0FDQU47QURHSTtFQUNFLFVBQUE7QUNETjtBREtFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FDSEo7QURNRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAuaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcblxyXG4gIC5mb3JtLXNpZ25pbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIH1cclxufVxyXG5cclxuIiwiLmNvbnRlbnQgLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5jb250ZW50IC5mb3JtLXNpZ25pbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250ZW50IC5mb3JtLXNpZ25pbiBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmNvbnRlbnQgLmZvcm0tc2lnbmluOmZvY3VzIHtcbiAgei1pbmRleDogMjtcbn1cbi5jb250ZW50IGlucHV0W3R5cGU9dGV4dF0ge1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5jb250ZW50IGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ic-core */ "./src/app/sub-modules/ic-core/index.ts");





var LoginComponent = /** @class */ (function () {
    /*
    private signUpConfig = {
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
    */
    function LoginComponent(route, router, authService, pageLoaderService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.pageLoaderService = pageLoaderService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
        this.authService.addSignInListener(function (data) {
            _this.router.navigate([_this.returnUrl]);
        });
    };
    LoginComponent.prototype.signIn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pageLoaderService.showPageLoader();
                        return [4 /*yield*/, this.authService.signIn(this.username, this.password)];
                    case 1:
                        result = _a.sent();
                        this.pageLoaderService.hidePageLoader();
                        if (result.result) {
                            // await this.router.navigate([this.returnUrl]); => ngOnInit()
                        }
                        else {
                            this.errorMessage = "Error: " + result.error;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ic-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/sub-modules/auth/pages/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/sub-modules/auth/pages/reset-password/reset-password.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/reset-password/reset-password.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .header {\n  font-size: 24px;\n}\n.content .form-signin {\n  font-size: 16px;\n}\n.content .form-signin img {\n  margin-bottom: 0;\n}\n.content .form-signin:focus {\n  z-index: 2;\n}\n.content input[type=text] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.content input[type=password] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9yZXNldC1wYXNzd29yZC9DOlxcREVWXFx3b3Jrc3BhY2VzXFxpY2xpbmljXFxkdGMtdWkvc3JjXFxhcHBcXHN1Yi1tb2R1bGVzXFxhdXRoXFxwYWdlc1xccmVzZXQtcGFzc3dvcmRcXHJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdWItbW9kdWxlcy9hdXRoL3BhZ2VzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0FDREo7QURFSTtFQUNFLGdCQUFBO0FDQU47QURHSTtFQUNFLFVBQUE7QUNETjtBREtFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FDSEo7QURNRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAuaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcblxyXG4gIC5mb3JtLXNpZ25pbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIH1cclxufVxyXG5cclxuIiwiLmNvbnRlbnQgLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5jb250ZW50IC5mb3JtLXNpZ25pbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250ZW50IC5mb3JtLXNpZ25pbiBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmNvbnRlbnQgLmZvcm0tc2lnbmluOmZvY3VzIHtcbiAgei1pbmRleDogMjtcbn1cbi5jb250ZW50IGlucHV0W3R5cGU9dGV4dF0ge1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5jb250ZW50IGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/sub-modules/auth/pages/reset-password/reset-password.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/reset-password/reset-password.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ic-core */ "./src/app/sub-modules/ic-core/index.ts");





var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(route, router, authService, pageLoaderService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.pageLoaderService = pageLoaderService;
        this.loginUrl = 'auth/login';
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.email = this.route.snapshot.queryParams.email;
        this.username = this.route.snapshot.queryParams.username;
        this.verificationCode = this.route.snapshot.queryParams.code || '';
        // if (!!this.username) {
        //   this.router.navigate(['./']);
        // }
    };
    ResetPasswordComponent.prototype.resetPassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pageLoaderService.showPageLoader();
                        return [4 /*yield*/, this.authService.resetPassword(this.username, this.verificationCode, this.password)];
                    case 1:
                        result = _a.sent();
                        this.pageLoaderService.hidePageLoader();
                        if (!result.result) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.router.navigate([this.loginUrl])];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.errorMessage = "Error: " + result.error;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ResetPasswordComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"] }
    ]; };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ic-login',
            template: __webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/sub-modules/auth/pages/reset-password/reset-password.component.scss")]
        })
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ })

}]);
//# sourceMappingURL=sub-modules-auth-auth-module-es5.js.map