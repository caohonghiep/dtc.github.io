(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sub-modules-auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/auth.container.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/auth.container.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/active-account/active-account.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/pages/active-account/active-account.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content\">\n  <form class=\"form-signin text-center\">\n    <img src=\"assets/images/logo.png\" alt=\"\" width=\"72\" height=\"72\">\n    <h1 class=\"header h3 mb-3\">Active Your Account</h1>\n    <div *ngIf=\"email\" class=\"message text-warning\"> Code will be sent to email: {{email}}</div>\n\n    <label for=\"password\" class=\"sr-only\">User Name </label>\n    <input id=\"password\" name=\"password\" [(ngModel)]=\"username\"  type=\"text\"  class=\"form-control\" placeholder=\"User Name\" required=\"\">\n\n    <label for=\"code\" class=\"sr-only\">Verification Code</label>\n    <input id=\"code\" name=\"code\" [(ngModel)]=\"verificationCode\" type=\"text\" class=\"form-control\" placeholder=\"Code\" required=\"\" autofocus=\"\">\n\n    <div class=\"message text-danger\">{{ errorMessage }}</div>\n    <div class=\"sign-action\">\n<!--      <button id=\"resendCodeButton\" type=\"button\" (click)=\"resendActiveCode()\" class=\"btn btn-outline-success\">Resend Code</button>-->\n      <button id=\"resetPasswordButton\" class=\"btn btn-primary\" [disabled]=\"!username || !verificationCode\" (click)=\"activeAccount()\">Active Account</button>\n    </div>\n    <div class=\"message\">\n      <a href=\"javascript:void(0)\" routerLink=\"/auth/sign-in\" class=\"text-primary\"> Back to Sign In</a>\n      &nbsp;or&nbsp;\n      <a href=\"javascript:void(0)\" routerLink=\"/auth/resend-active-code\" class=\"text-primary\"> Resend Active Code</a>\n    </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/change-password/change-password.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/pages/change-password/change-password.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <form class=\"form-signin text-center\">\n    <img src=\"assets/images/logo.png\" alt=\"\" width=\"72\" height=\"72\">\n    <h1 class=\"header h3 mb-3\">Change Your Password</h1>\n    <label for=\"oldPassword\" class=\"sr-only\">Old Password</label>\n    <input id=\"oldPassword\" name=\"oldPassword\" [(ngModel)]=\"oldPassword\" type=\"password\" class=\"form-control\" placeholder=\"Old Password\" required=\"\" autofocus=\"\">\n    <label for=\"newPassword\" class=\"sr-only\">New Password</label>\n    <input id=\"newPassword\" name=\"newPassword\" [(ngModel)]=\"newPassword\"  type=\"password\"  class=\"form-control\" placeholder=\"New Password\" required=\"\">\n\n    <div class=\"login-error text-danger\">{{ errorMessage }}</div>\n    <div class=\"sign-action\">\n      <button id=\"forgetPasswordButton\" type=\"button\" routerLink=\"/home\" class=\"btn btn-outline-success\">Cancel</button>\n      <button id=\"signInButton\" class=\"btn btn-primary\" [disabled]=\"!oldPassword || !newPassword\" (click)=\"changePassword()\">Change Password</button>\n    </div>\n\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/forget-password/forget-password.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/pages/forget-password/forget-password.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <form class=\"form-signin text-center\">\n    <img src=\"assets/images/logo.png\" alt=\"\" width=\"72\" height=\"72\">\n    <h1 class=\"header h3 mb-3\">Reset your password</h1>\n    <label for=\"username\" class=\"sr-only\">Email address</label>\n    <input id=\"username\" name=\"username\" [(ngModel)]=\"username\" class=\"form-control\" placeholder=\"User Name\" required=\"\" autofocus=\"\">\n\n    <div class=\"login-error text-danger\">{{ errorMessage }}</div>\n    <div class=\"sign-action\">\n      <button id=\"backToSignInButton\" type=\"button\" routerLink=\"/auth/sign-in\" class=\"btn btn-outline-success\">Back to Sign in</button>\n      <button id=\"sendCodeButton\" class=\"btn btn-primary\" (click)=\"sendVerificationCode()\" [disabled]=\"!username\">Send Code</button>\n    </div>\n\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/resend-active-code/resend-active-code.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/pages/resend-active-code/resend-active-code.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <form class=\"form-signin text-center\">\n    <img src=\"assets/images/logo.png\" alt=\"\" width=\"72\" height=\"72\">\n    <h1 class=\"header h3 mb-3\">Send A New Active Code</h1>\n    <label for=\"username\" class=\"sr-only\">Email address</label>\n    <input id=\"username\" name=\"username\" [(ngModel)]=\"username\" class=\"form-control\" placeholder=\"User Name\" required=\"\" autofocus=\"\">\n\n    <div class=\"login-error text-danger\">{{ errorMessage }}</div>\n    <div class=\"sign-action\">\n      <button id=\"backToSignInButton\" type=\"button\" (click)=\"backToActiveAccount()\" class=\"btn btn-outline-success\">Back to Active Account</button>\n      <button id=\"sendCodeButton\" class=\"btn btn-primary\" (click)=\"resendActiveAccountCode()\" [disabled]=\"!username\">Send Code</button>\n    </div>\n\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/reset-password/reset-password.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/pages/reset-password/reset-password.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content\">\n  <form class=\"form-signin text-center\">\n    <img src=\"assets/images/logo.png\" alt=\"\" width=\"72\" height=\"72\">\n    <h1 class=\"header h3 mb-3\">Reset Your Password</h1>\n    <div *ngIf=\"email\" class=\"message text-warning\"> Code will be sent to email: {{email}}</div>\n    <label for=\"code\" class=\"sr-only\">Verification Code</label>\n    <input id=\"code\" name=\"code\" [(ngModel)]=\"verificationCode\" type=\"text\" class=\"form-control\" placeholder=\"Code\" required=\"\" autofocus=\"\">\n    <label for=\"password\" class=\"sr-only\">New Password</label>\n    <input id=\"password\" name=\"password\" [(ngModel)]=\"password\"  type=\"password\"  class=\"form-control\" placeholder=\"New Password\" required=\"\">\n\n    <div class=\"message text-danger\">{{ errorMessage }}</div>\n    <div class=\"sign-action\">\n      <button id=\"resendCodeButton\" type=\"button\" routerLink=\"/auth/forget-password\" class=\"btn btn-outline-success\">Resend Code</button>\n      <button id=\"resetPasswordButton\" class=\"btn btn-primary\" [disabled]=\"!password || !verificationCode\" (click)=\"resetPassword()\">Reset Password</button>\n    </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/sign-in/sign-in.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/pages/sign-in/sign-in.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div id=\"main-content\">-->\n<!--  <div class=\"container-fluid\">-->\n<!--&lt;!&ndash;    <amplify-authenticator [signUpConfig]=\"signUpConfig\"></amplify-authenticator>&ndash;&gt;-->\n<!--  </div>-->\n<!--</div>-->\n\n<div class=\"content\">\n  <form class=\"form-signin text-center\">\n    <img src=\"assets/images/logo.png\" alt=\"\" width=\"64\" height=\"64\">\n    <h1 class=\"header h3 mb-3\">Sign In to You Account</h1>\n    <label for=\"username\" class=\"sr-only\">User Name</label>\n    <input id=\"username\" name=\"username\" [(ngModel)]=\"username\" type=\"text\" class=\"form-control\" placeholder=\"User Name\" required=\"\" autofocus=\"\">\n    <label for=\"password\" class=\"sr-only\">Password</label>\n    <input id=\"password\" name=\"password\" [(ngModel)]=\"password\"  type=\"password\"  class=\"form-control\" placeholder=\"Password\" required=\"\">\n\n    <div class=\"login-error text-danger\">{{ errorMessage }}</div>\n    <div class=\"sign-action\">\n<!--      <button id=\"forgetPasswordButton\" type=\"button\" routerLink=\"/auth/forget-password\" class=\"btn btn-outline-success\">Forget Password</button>-->\n      <button id=\"signInButton\" class=\"btn btn-primary\" [disabled]=\"!password || !username\" (click)=\"signIn()\">Sign in</button>\n    </div>\n    <div class=\"message\">\n      <a href=\"javascript:void(0)\" routerLink=\"/auth/forget-password\" class=\"text-primary\"> Forget Password</a>\n      &nbsp;or&nbsp;\n      <a href=\"javascript:void(0)\" routerLink=\"/auth/active-account\" class=\"text-primary\"> Active Your Account</a>\n    </div>\n\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/sign-up/sign-up.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/pages/sign-up/sign-up.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content\">\n  <form class=\"form-signin text-center\">\n    <img src=\"assets/images/logo.png\" alt=\"\" width=\"64\" height=\"64\">\n    <h1 class=\"header h3 mb-3\">Create A New Account</h1>\n\n    <label for=\"username\" class=\"sr-only\">User Name</label>\n    <input id=\"username\" name=\"username\" [(ngModel)]=\"username\" type=\"text\" class=\"form-control\" placeholder=\"User Name\" required=\"\" autofocus=\"\">\n    <label for=\"password\" class=\"sr-only\">Email</label>\n    <input id=\"email\" name=\"email\" [(ngModel)]=\"email\"  type=\"text\"  class=\"form-control\" placeholder=\"Email\" required=\"\">\n    <label for=\"password\" class=\"sr-only\">Password</label>\n    <input id=\"password\" name=\"password\" [(ngModel)]=\"password\"  type=\"password\"  class=\"form-control\" placeholder=\"Password\" required=\"\">\n\n    <div class=\"login-error text-danger\">{{ errorMessage }}</div>\n    <div class=\"sign-action\">\n      <button id=\"forgetPasswordButton\" type=\"button\" routerLink=\"/auth/home\" class=\"btn btn-outline-success\"> Cancel </button>\n      <button id=\"signInButton\" class=\"btn btn-primary\" [disabled]=\"!password || !username||!email\" (click)=\"signUp()\">Create Account </button>\n    </div>\n  </form>\n</div>\n"

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
/* harmony import */ var _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/sign-in/sign-in.component */ "./src/app/sub-modules/auth/pages/sign-in/sign-in.component.ts");
/* harmony import */ var _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/forget-password/forget-password.component */ "./src/app/sub-modules/auth/pages/forget-password/forget-password.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ "./src/app/sub-modules/auth/pages/reset-password/reset-password.component.ts");
/* harmony import */ var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/sign-up/sign-up.component */ "./src/app/sub-modules/auth/pages/sign-up/sign-up.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/sub-modules/auth/guards/auth.guard.ts");
/* harmony import */ var _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/change-password/change-password.component */ "./src/app/sub-modules/auth/pages/change-password/change-password.component.ts");
/* harmony import */ var _pages_active_account_active_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/active-account/active-account.component */ "./src/app/sub-modules/auth/pages/active-account/active-account.component.ts");
/* harmony import */ var _pages_resend_active_code_resend_active_code_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/resend-active-code/resend-active-code.component */ "./src/app/sub-modules/auth/pages/resend-active-code/resend-active-code.component.ts");












const routes = [
    {
        path: '',
        component: _auth_container__WEBPACK_IMPORTED_MODULE_3__["AuthContainer"],
        children: [
            {
                path: 'sign-up',
                component: _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
            },
            {
                path: 'active-account',
                component: _pages_active_account_active_account_component__WEBPACK_IMPORTED_MODULE_10__["ActiveAccountComponent"]
            },
            {
                path: 'resend-active-code',
                component: _pages_resend_active_code_resend_active_code_component__WEBPACK_IMPORTED_MODULE_11__["ResendActiveCodeComponent"]
            },
            {
                path: 'change-password',
                component: _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
            },
            {
                path: 'sign-in',
                component: _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"]
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

module.exports = "::ng-deep html,\n::ng-deep .content {\n  height: 100%;\n  width: 100%;\n}\n::ng-deep .content {\n  position: fixed;\n  display: flex;\n  align-items: center;\n  padding: 40px;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  margin: 0;\n  padding: 0;\n  background-image: url(/assets/images/bg1.png);\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n::ng-deep .content .header {\n  font-size: 20px;\n  color: var(--primary);\n  font-weight: bold;\n}\n::ng-deep .content .form-signin {\n  width: 100%;\n  max-width: 400px;\n  padding: 15px 50px 20px;\n  margin: auto;\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.5), 0px 8px 10px 1px rgba(0, 0, 0, 0.4), 0px 3px 14px 2px rgba(0, 0, 0, 0.3);\n}\n::ng-deep .content .form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n}\n::ng-deep .content .form-signin .form-control:focus {\n  z-index: 2;\n}\n::ng-deep .content .form-signin .message {\n  margin-bottom: 4px;\n  margin-top: 4px;\n  font-size: 14px;\n}\n::ng-deep .content .form-signin .sign-action {\n  margin-top: 16px;\n}\n::ng-deep .content .form-signin .sign-action > button {\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9DOlxcREVWXFx3b3Jrc3BhY2VzXFxpY2xpbmljXFxkdGMtdWkvc3JjXFxhcHBcXHN1Yi1tb2R1bGVzXFxhdXRoXFxhdXRoLmNvbnRhaW5lci5zY3NzIiwic3JjL2FwcC9zdWItbW9kdWxlcy9hdXRoL2F1dGguY29udGFpbmVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0VBRUUsWUFBQTtFQUNBLFdBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFFQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsNkNBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNGSjtBREdJO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNETjtBRElJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBR0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlIQUFBO0FDSk47QURNTTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0pSO0FETVE7RUFDRSxVQUFBO0FDSlY7QURRTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNOUjtBRFNNO0VBQ0UsZ0JBQUE7QUNQUjtBRFNRO0VBQ0UsZ0JBQUE7QUNQViIsImZpbGUiOiJzcmMvYXBwL3N1Yi1tb2R1bGVzL2F1dGgvYXV0aC5jb250YWluZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgaHRtbCxcclxuICAuY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2JnMS5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLXNpZ25pbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDUwcHggMjBweDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAvL21hcmdpbjogMjBweDtcclxuICAgICAgLy9kaXNwbGF5OiBibG9jaztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNSksIDBweCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpLCAwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuXHJcbiAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaWduLWFjdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuXHJcbiAgICAgICAgPiBidXR0b24ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiIsIjo6bmctZGVlcCBodG1sLFxuOjpuZy1kZWVwIC5jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbjo6bmctZGVlcCAuY29udGVudCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYmcxLnBuZyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbjo6bmctZGVlcCAuY29udGVudCAuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuOjpuZy1kZWVwIC5jb250ZW50IC5mb3JtLXNpZ25pbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBwYWRkaW5nOiAxNXB4IDUwcHggMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC41KSwgMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCksIDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuOjpuZy1kZWVwIC5jb250ZW50IC5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG46Om5nLWRlZXAgLmNvbnRlbnQgLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICB6LWluZGV4OiAyO1xufVxuOjpuZy1kZWVwIC5jb250ZW50IC5mb3JtLXNpZ25pbiAubWVzc2FnZSB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG46Om5nLWRlZXAgLmNvbnRlbnQgLmZvcm0tc2lnbmluIC5zaWduLWFjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG46Om5nLWRlZXAgLmNvbnRlbnQgLmZvcm0tc2lnbmluIC5zaWduLWFjdGlvbiA+IGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59Il19 */"

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
        // this.router.navigate(['/auth/sign-in']);
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

// https://codepen.io/Lewitje/pen/BNNJjo


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
/* harmony import */ var _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/sign-in/sign-in.component */ "./src/app/sub-modules/auth/pages/sign-in/sign-in.component.ts");
/* harmony import */ var aws_amplify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aws-amplify-angular */ "./node_modules/aws-amplify-angular/dist/index.js");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ic-core */ "./src/app/sub-modules/ic-core/index.ts");
/* harmony import */ var _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/forget-password/forget-password.component */ "./src/app/sub-modules/auth/pages/forget-password/forget-password.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ "./src/app/sub-modules/auth/pages/reset-password/reset-password.component.ts");
/* harmony import */ var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/sign-up/sign-up.component */ "./src/app/sub-modules/auth/pages/sign-up/sign-up.component.ts");
/* harmony import */ var _pages_active_account_active_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/active-account/active-account.component */ "./src/app/sub-modules/auth/pages/active-account/active-account.component.ts");
/* harmony import */ var _pages_resend_active_code_resend_active_code_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/resend-active-code/resend-active-code.component */ "./src/app/sub-modules/auth/pages/resend-active-code/resend-active-code.component.ts");
/* harmony import */ var _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/change-password/change-password.component */ "./src/app/sub-modules/auth/pages/change-password/change-password.component.ts");














let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _auth_container__WEBPACK_IMPORTED_MODULE_4__["AuthContainer"],
            _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"],
            _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgetPasswordComponent"],
            _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"],
            _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"],
            _pages_active_account_active_account_component__WEBPACK_IMPORTED_MODULE_11__["ActiveAccountComponent"],
            _pages_resend_active_code_resend_active_code_component__WEBPACK_IMPORTED_MODULE_12__["ResendActiveCodeComponent"],
            _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_13__["ChangePasswordComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
            aws_amplify_angular__WEBPACK_IMPORTED_MODULE_6__["AmplifyAngularModule"],
            _ic_core__WEBPACK_IMPORTED_MODULE_7__["IcCoreModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/sub-modules/auth/pages/active-account/active-account.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/active-account/active-account.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .form-signin {\n  font-size: 16px;\n}\n.content .form-signin img {\n  margin-bottom: 0;\n}\n.content .form-signin:focus {\n  z-index: 2;\n}\n.content input[type=text] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.content input[type=password] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.content .message .text-primary {\n  font-style: italic;\n  font-size: 13px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9hY3RpdmUtYWNjb3VudC9DOlxcREVWXFx3b3Jrc3BhY2VzXFxpY2xpbmljXFxkdGMtdWkvc3JjXFxhcHBcXHN1Yi1tb2R1bGVzXFxhdXRoXFxwYWdlc1xcYWN0aXZlLWFjY291bnRcXGFjdGl2ZS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdWItbW9kdWxlcy9hdXRoL3BhZ2VzL2FjdGl2ZS1hY2NvdW50L2FjdGl2ZS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQ0FKO0FEQ0k7RUFDRSxnQkFBQTtBQ0NOO0FERUk7RUFDRSxVQUFBO0FDQU47QURJRTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQ0ZKO0FES0U7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUNISjtBRE9JO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0xOIiwiZmlsZSI6InNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9hY3RpdmUtYWNjb3VudC9hY3RpdmUtYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAuZm9ybS1zaWduaW4ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICB9XHJcblxyXG4gIC5tZXNzYWdlIHtcclxuICAgIC50ZXh0LXByaW1hcnl7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCIuY29udGVudCAuZm9ybS1zaWduaW4ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGVudCAuZm9ybS1zaWduaW4gaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jb250ZW50IC5mb3JtLXNpZ25pbjpmb2N1cyB7XG4gIHotaW5kZXg6IDI7XG59XG4uY29udGVudCBpbnB1dFt0eXBlPXRleHRdIHtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4uY29udGVudCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuLmNvbnRlbnQgLm1lc3NhZ2UgLnRleHQtcHJpbWFyeSB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/sub-modules/auth/pages/active-account/active-account.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/active-account/active-account.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ActiveAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveAccountComponent", function() { return ActiveAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ic-core */ "./src/app/sub-modules/ic-core/index.ts");





let ActiveAccountComponent = class ActiveAccountComponent {
    constructor(route, router, authService, pageLoaderService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.pageLoaderService = pageLoaderService;
        this.loginUrl = 'auth/sign-in';
    }
    ngOnInit() {
        this.email = this.route.snapshot.queryParams.email;
        this.username = this.route.snapshot.queryParams.username;
        this.verificationCode = this.route.snapshot.queryParams.code || '';
    }
    resendActiveCode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const routerLink = 'auth/resend-active-code';
            yield this.router.navigate([routerLink], { queryParams: { username: this.username, email: this.email } });
        });
    }
    activeAccount() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pageLoaderService.showPageLoader();
            const result = yield this.authService.activeAccount(this.username, this.verificationCode);
            this.pageLoaderService.hidePageLoader();
            if (result.result) {
                yield this.router.navigate([this.loginUrl]);
            }
            else {
                this.errorMessage = `Error: ${result.error}`;
            }
        });
    }
};
ActiveAccountComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"] }
];
ActiveAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-active-account',
        template: __webpack_require__(/*! raw-loader!./active-account.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/active-account/active-account.component.html"),
        styles: [__webpack_require__(/*! ./active-account.component.scss */ "./src/app/sub-modules/auth/pages/active-account/active-account.component.scss")]
    })
], ActiveAccountComponent);



/***/ }),

/***/ "./src/app/sub-modules/auth/pages/change-password/change-password.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/change-password/change-password.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .form-signin {\n  font-size: 16px;\n}\n.content .form-signin img {\n  margin-bottom: 0;\n}\n.content .form-signin:focus {\n  z-index: 2;\n}\n.content input[type=text] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.content input[type=password] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQvQzpcXERFVlxcd29ya3NwYWNlc1xcaWNsaW5pY1xcZHRjLXVpL3NyY1xcYXBwXFxzdWItbW9kdWxlc1xcYXV0aFxccGFnZXNcXGNoYW5nZS1wYXNzd29yZFxcY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdWItbW9kdWxlcy9hdXRoL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0FDQUo7QURDSTtFQUNFLGdCQUFBO0FDQ047QURFSTtFQUNFLFVBQUE7QUNBTjtBRElFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FDRko7QURLRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIC5mb3JtLXNpZ25pbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIH1cclxufVxyXG5cclxuIiwiLmNvbnRlbnQgLmZvcm0tc2lnbmluIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbnRlbnQgLmZvcm0tc2lnbmluIGltZyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uY29udGVudCAuZm9ybS1zaWduaW46Zm9jdXMge1xuICB6LWluZGV4OiAyO1xufVxuLmNvbnRlbnQgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuLmNvbnRlbnQgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sub-modules/auth/pages/change-password/change-password.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/change-password/change-password.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ic-core */ "./src/app/sub-modules/ic-core/index.ts");





let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(route, router, authService, pageLoaderService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.pageLoaderService = pageLoaderService;
        this.loginUrl = 'auth/sign-in';
    }
    ngOnInit() {
    }
    changePassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pageLoaderService.showPageLoader();
            const result = yield this.authService.changePassword(this.oldPassword, this.newPassword);
            this.pageLoaderService.hidePageLoader();
            if (result.result) {
                this.authService.signOut();
                // await this.router.navigate([this.loginUrl]);
            }
            else {
                this.errorMessage = `Error: ${result.error}`;
            }
        });
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"] }
];
ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-change-password',
        template: __webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/change-password/change-password.component.html"),
        styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/sub-modules/auth/pages/change-password/change-password.component.scss")]
    })
], ChangePasswordComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ic-core */ "./src/app/sub-modules/ic-core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ForgetPasswordComponent = class ForgetPasswordComponent {
    constructor(router, authService, pageLoaderService) {
        this.router = router;
        this.authService = authService;
        this.pageLoaderService = pageLoaderService;
        this.resetPasswordUrl = '/auth/reset-password';
    }
    ngOnInit() {
    }
    sendVerificationCode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pageLoaderService.showPageLoader();
            const result = yield this.authService.forgetPassword(this.username);
            this.pageLoaderService.hidePageLoader();
            if (result.result) {
                this.router.navigate([this.resetPasswordUrl], { queryParams: { username: this.username, email: result.email } });
            }
            else {
                this.errorMessage = `Error: ${result.error}`;
            }
        });
    }
};
ForgetPasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _ic_core__WEBPACK_IMPORTED_MODULE_3__["PageLoaderService"] }
];
ForgetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-forget-password',
        template: __webpack_require__(/*! raw-loader!./forget-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/forget-password/forget-password.component.html"),
        styles: [__webpack_require__(/*! ./forget-password.component.scss */ "./src/app/sub-modules/auth/pages/forget-password/forget-password.component.scss")]
    })
], ForgetPasswordComponent);



/***/ }),

/***/ "./src/app/sub-modules/auth/pages/resend-active-code/resend-active-code.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/resend-active-code/resend-active-code.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .form-signin {\n  font-size: 14px;\n}\n.content .form-signin img {\n  margin-bottom: 0;\n}\n.content .form-signin:focus {\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9yZXNlbmQtYWN0aXZlLWNvZGUvQzpcXERFVlxcd29ya3NwYWNlc1xcaWNsaW5pY1xcZHRjLXVpL3NyY1xcYXBwXFxzdWItbW9kdWxlc1xcYXV0aFxccGFnZXNcXHJlc2VuZC1hY3RpdmUtY29kZVxccmVzZW5kLWFjdGl2ZS1jb2RlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdWItbW9kdWxlcy9hdXRoL3BhZ2VzL3Jlc2VuZC1hY3RpdmUtY29kZS9yZXNlbmQtYWN0aXZlLWNvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0FDQUo7QURDSTtFQUNFLGdCQUFBO0FDQ047QURFSTtFQUNFLFVBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL3N1Yi1tb2R1bGVzL2F1dGgvcGFnZXMvcmVzZW5kLWFjdGl2ZS1jb2RlL3Jlc2VuZC1hY3RpdmUtY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAuZm9ybS1zaWduaW4ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiIsIi5jb250ZW50IC5mb3JtLXNpZ25pbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb250ZW50IC5mb3JtLXNpZ25pbiBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmNvbnRlbnQgLmZvcm0tc2lnbmluOmZvY3VzIHtcbiAgei1pbmRleDogMjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sub-modules/auth/pages/resend-active-code/resend-active-code.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/resend-active-code/resend-active-code.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ResendActiveCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResendActiveCodeComponent", function() { return ResendActiveCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ic-core */ "./src/app/sub-modules/ic-core/index.ts");





let ResendActiveCodeComponent = class ResendActiveCodeComponent {
    constructor(route, router, authService, pageLoaderService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.pageLoaderService = pageLoaderService;
        this.returnUrl = 'auth/active-account';
    }
    ngOnInit() {
        this.email = this.route.snapshot.queryParams.email;
        this.username = this.route.snapshot.queryParams.username;
    }
    resendActiveAccountCode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pageLoaderService.showPageLoader();
            const result = yield this.authService.resendActiveAccountCode(this.username);
            this.pageLoaderService.hidePageLoader();
            if (result.result) {
                yield this.backToActiveAccount();
            }
            else {
                this.errorMessage = `Error: ${result.error}`;
            }
        });
    }
    backToActiveAccount() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigate([this.returnUrl], { queryParams: { username: this.username, email: this.email } });
        });
    }
};
ResendActiveCodeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"] }
];
ResendActiveCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-resend-active-code',
        template: __webpack_require__(/*! raw-loader!./resend-active-code.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/resend-active-code/resend-active-code.component.html"),
        styles: [__webpack_require__(/*! ./resend-active-code.component.scss */ "./src/app/sub-modules/auth/pages/resend-active-code/resend-active-code.component.scss")]
    })
], ResendActiveCodeComponent);



/***/ }),

/***/ "./src/app/sub-modules/auth/pages/reset-password/reset-password.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/reset-password/reset-password.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .form-signin {\n  font-size: 16px;\n}\n.content .form-signin img {\n  margin-bottom: 0;\n}\n.content .form-signin:focus {\n  z-index: 2;\n}\n.content input[type=text] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.content input[type=password] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9yZXNldC1wYXNzd29yZC9DOlxcREVWXFx3b3Jrc3BhY2VzXFxpY2xpbmljXFxkdGMtdWkvc3JjXFxhcHBcXHN1Yi1tb2R1bGVzXFxhdXRoXFxwYWdlc1xccmVzZXQtcGFzc3dvcmRcXHJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdWItbW9kdWxlcy9hdXRoL3BhZ2VzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQ0FKO0FEQ0k7RUFDRSxnQkFBQTtBQ0NOO0FERUk7RUFDRSxVQUFBO0FDQU47QURJRTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQ0ZKO0FES0U7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3N1Yi1tb2R1bGVzL2F1dGgvcGFnZXMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgLmZvcm0tc2lnbmluIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4iLCIuY29udGVudCAuZm9ybS1zaWduaW4ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGVudCAuZm9ybS1zaWduaW4gaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jb250ZW50IC5mb3JtLXNpZ25pbjpmb2N1cyB7XG4gIHotaW5kZXg6IDI7XG59XG4uY29udGVudCBpbnB1dFt0eXBlPXRleHRdIHtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4uY29udGVudCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ic-core */ "./src/app/sub-modules/ic-core/index.ts");





let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(route, router, authService, pageLoaderService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.pageLoaderService = pageLoaderService;
        this.loginUrl = 'auth/sign-in';
    }
    ngOnInit() {
        this.email = this.route.snapshot.queryParams.email;
        this.username = this.route.snapshot.queryParams.username;
        this.verificationCode = this.route.snapshot.queryParams.code || '';
        // if (!!this.username) {
        //   this.router.navigate(['./']);
        // }
    }
    resetPassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pageLoaderService.showPageLoader();
            const result = yield this.authService.resetPassword(this.username, this.verificationCode, this.password);
            this.pageLoaderService.hidePageLoader();
            if (result.result) {
                yield this.router.navigate([this.loginUrl]);
            }
            else {
                this.errorMessage = `Error: ${result.error}`;
            }
        });
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"] }
];
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-login',
        template: __webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/reset-password/reset-password.component.html"),
        styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/sub-modules/auth/pages/reset-password/reset-password.component.scss")]
    })
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/sub-modules/auth/pages/sign-in/sign-in.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/sign-in/sign-in.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .form-signin {\n  font-size: 16px;\n}\n.content .form-signin img {\n  margin-bottom: 0;\n}\n.content .form-signin:focus {\n  z-index: 2;\n}\n.content input[type=text] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.content input[type=password] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.content .message .text-primary {\n  font-style: italic;\n  font-size: 13px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9zaWduLWluL0M6XFxERVZcXHdvcmtzcGFjZXNcXGljbGluaWNcXGR0Yy11aS9zcmNcXGFwcFxcc3ViLW1vZHVsZXNcXGF1dGhcXHBhZ2VzXFxzaWduLWluXFxzaWduLWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdWItbW9kdWxlcy9hdXRoL3BhZ2VzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUNBSjtBRENJO0VBQ0UsZ0JBQUE7QUNDTjtBREVJO0VBQ0UsVUFBQTtBQ0FOO0FESUU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUNGSjtBREtFO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDSEo7QURNSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNKTiIsImZpbGUiOiJzcmMvYXBwL3N1Yi1tb2R1bGVzL2F1dGgvcGFnZXMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIC5mb3JtLXNpZ25pbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIH1cclxuICAubWVzc2FnZSB7XHJcbiAgICAudGV4dC1wcmltYXJ5e1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIiwiLmNvbnRlbnQgLmZvcm0tc2lnbmluIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbnRlbnQgLmZvcm0tc2lnbmluIGltZyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uY29udGVudCAuZm9ybS1zaWduaW46Zm9jdXMge1xuICB6LWluZGV4OiAyO1xufVxuLmNvbnRlbnQgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuLmNvbnRlbnQgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cbi5jb250ZW50IC5tZXNzYWdlIC50ZXh0LXByaW1hcnkge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/sub-modules/auth/pages/sign-in/sign-in.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/sign-in/sign-in.component.ts ***!
  \*********************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ic-core */ "./src/app/sub-modules/ic-core/index.ts");





let SignInComponent = class SignInComponent {
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
    constructor(route, router, authService, pageLoaderService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.pageLoaderService = pageLoaderService;
    }
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
        this.authService.addSignInListener((data) => {
            this.router.navigate([this.returnUrl]);
        });
    }
    signIn() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pageLoaderService.showPageLoader();
            const result = yield this.authService.signIn(this.username, this.password);
            this.pageLoaderService.hidePageLoader();
            if (result.result) {
                // await this.router.navigate([this.returnUrl]); => ngOnInit()
            }
            else {
                this.errorMessage = `Error: ${result.error}`;
            }
        });
    }
};
SignInComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"] }
];
SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-sign-in',
        template: __webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/sign-in/sign-in.component.html"),
        styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/sub-modules/auth/pages/sign-in/sign-in.component.scss")]
    })
], SignInComponent);



/***/ }),

/***/ "./src/app/sub-modules/auth/pages/sign-up/sign-up.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/sign-up/sign-up.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .form-signin {\n  font-size: 16px;\n}\n.content .form-signin img {\n  margin-bottom: 0;\n}\n.content .form-signin:focus {\n  z-index: 2;\n}\n.content input[name=email] {\n  margin-bottom: -1px;\n  border-radius: 0;\n}\n.content input[name=username] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.content input[type=password] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9zaWduLXVwL0M6XFxERVZcXHdvcmtzcGFjZXNcXGljbGluaWNcXGR0Yy11aS9zcmNcXGFwcFxcc3ViLW1vZHVsZXNcXGF1dGhcXHBhZ2VzXFxzaWduLXVwXFxzaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdWItbW9kdWxlcy9hdXRoL3BhZ2VzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUNBSjtBRENJO0VBQ0UsZ0JBQUE7QUNDTjtBREVJO0VBQ0UsVUFBQTtBQ0FOO0FESUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDRko7QURLRTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQ0hKO0FETUU7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3N1Yi1tb2R1bGVzL2F1dGgvcGFnZXMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIC5mb3JtLXNpZ25pbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXRbbmFtZT1cImVtYWlsXCJdIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbbmFtZT1cInVzZXJuYW1lXCJdIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICB9XHJcbn1cclxuXHJcbiIsIi5jb250ZW50IC5mb3JtLXNpZ25pbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250ZW50IC5mb3JtLXNpZ25pbiBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmNvbnRlbnQgLmZvcm0tc2lnbmluOmZvY3VzIHtcbiAgei1pbmRleDogMjtcbn1cbi5jb250ZW50IGlucHV0W25hbWU9ZW1haWxdIHtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jb250ZW50IGlucHV0W25hbWU9dXNlcm5hbWVdIHtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4uY29udGVudCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/sub-modules/auth/pages/sign-up/sign-up.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/sign-up/sign-up.component.ts ***!
  \*********************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ic-core */ "./src/app/sub-modules/ic-core/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let SignUpComponent = class SignUpComponent {
    constructor(route, router, authService, pageLoaderService, dialog) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.pageLoaderService = pageLoaderService;
        this.dialog = dialog;
        this.returnUrl = 'auth/active-account';
    }
    ngOnInit() {
    }
    signUp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pageLoaderService.showPageLoader();
            const result = yield this.authService.signUp(this.username, this.email, this.password);
            this.pageLoaderService.hidePageLoader();
            if (result.result) {
                const dialogRef = this.dialog.open(_ic_core__WEBPACK_IMPORTED_MODULE_4__["AlertDialog"], {
                    width: '300px',
                    data: `Account Has Been Created!`
                });
                dialogRef.afterClosed().subscribe(() => {
                    this.router.navigate([this.returnUrl], { queryParams: { username: this.username, email: this.email } });
                });
            }
            else {
                this.errorMessage = `Error: ${result.error}`;
            }
        });
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-sign-up',
        template: __webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/sign-up/sign-up.component.html"),
        styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/sub-modules/auth/pages/sign-up/sign-up.component.scss")]
    })
], SignUpComponent);



/***/ })

}]);
//# sourceMappingURL=sub-modules-auth-auth-module-es2015.js.map