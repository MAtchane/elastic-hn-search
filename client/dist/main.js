(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_search_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/search/wrapper/wrapper.component */ "./src/app/components/search/wrapper/wrapper.component.ts");




var routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: _components_search_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["WrapperComponent"] },
    { path: '**', component: _components_search_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["WrapperComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-wrapper {\r\n    position: relative;\r\n    min-height: 100vh;\r\n}\r\n\r\n.main-wrapper {\r\n    background-color: #FEFEFE;\r\n    margin: 0 2%;\r\n    padding-bottom: 120px;    /* Footer height */\r\n\r\n}\r\n\r\n@media only screen and (min-width: 800px) {\r\n    .main-wrapper {\r\n        margin: 0 3%;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1000px) {\r\n    .main-wrapper {\r\n        margin: 0 5%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixxQkFBcUIsS0FBSyxrQkFBa0I7O0FBRWhEOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ubWFpbi13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRUZFRkU7XHJcbiAgICBtYXJnaW46IDAgMiU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTIwcHg7ICAgIC8qIEZvb3RlciBoZWlnaHQgKi9cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAgIC5tYWluLXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbjogMCAzJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5tYWluLXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbjogMCA1JTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-wrapper\">\n  <app-header></app-header>\n  <div class=\"main-wrapper\">\n    <router-outlet></router-outlet>\n  </div>\n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-timeago */ "./node_modules/ngx-timeago/fesm5/ngx-timeago.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_search_search_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/search/search.module */ "./src/app/components/search/search.module.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                ngx_timeago__WEBPACK_IMPORTED_MODULE_5__["TimeagoModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _components_search_search_module__WEBPACK_IMPORTED_MODULE_11__["SearchModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    font-size: 14px;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    min-height: 60px;\n    text-align: center;\n    background-color: white;\n    color: #1D1D1B;\n    padding-top: 20px;\n    width: 100%;\n    border-top: 2px solid #ff6600;\n    background-color: #1D1D1B;\n    color: #FEFFF3;\n}\n\n.footer>* {\n    display: inline;\n}\n\n.credits {\n    margin: auto;\n    margin-right: 20px;\n    padding-left: 20px;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n}\n\n.credits p {\n    margin: 10px 60px;\n}\n\n.links {\n    -webkit-padding-start: 20px;\n            padding-inline-start: 20px;\n    border-left: 1px solid;\n}\n\n.link {\n    padding-right: 20px;\n    display: inline;\n}\n\n.link a {\n    color: inherit;\n    text-decoration: none;\n}\n\n.link a:hover {\n    text-decoration: underline;\n}\n\n@media only screen and (max-width: 530px) {\n    .footer {\n        width: 100%;\n        border-top: 2px solid #ff6600;\n        background-color: #1D1D1B;\n        color: #FEFFF3;\n    }\n\n    .credits {\n        display: block !important;\n        margin-right: auto;\n        padding-left: 0px;\n        margin-bottom: 10px;\n    }\n\n    .links {\n        -webkit-padding-start: 0px;\n                padding-inline-start: 0px;\n        border-left: none;\n    }\n    \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkJBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCw2QkFBNkI7UUFDN0IseUJBQXlCO1FBQ3pCLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSwwQkFBeUI7Z0JBQXpCLHlCQUF5QjtRQUN6QixpQkFBaUI7SUFDckI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiAjMUQxRDFCO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZmY2NjAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRDFEMUI7XG4gICAgY29sb3I6ICNGRUZGRjM7XG59XG5cbi5mb290ZXI+KiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uY3JlZGl0cyB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uY3JlZGl0cyBwIHtcbiAgICBtYXJnaW46IDEwcHggNjBweDtcbn1cblxuLmxpbmtzIHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMjBweDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkO1xufVxuXG4ubGluayB7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5saW5rIGEge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxpbmsgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMwcHgpIHtcbiAgICAuZm9vdGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZmY2NjAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQxRDFCO1xuICAgICAgICBjb2xvcjogI0ZFRkZGMztcbiAgICB9XG5cbiAgICAuY3JlZGl0cyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLmxpbmtzIHtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgfVxuICAgIFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <p class=\"credits\">&copy; 2019 Mosab ATCHANE</p>\n  <ul class=\"links\">\n    <li class=\"link\"><a class=\"header-link\" href={{github}}>Github</a></li>\n    <li class=\"link\"><a class=\"header-link\" href={{personalWebsite}}>Website</a></li>\n    <li class=\"link\"><a class=\"header-link\" href={{linkedin}}>LinkedIn</a></li>\n    <li class=\"link\"><a href=\"mailto:{{myEmail}}?=subject=Feedback for Elastic HN Search\">Feedback</a></li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.github = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].github;
        this.linkedin = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].linkedin;
        this.personalWebsite = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].personalWebsite;
        this.myEmail = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].myEmail;
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-wrapper {\r\n    padding: 5px 1%;\r\n    /* background-color: #E86329; */\r\n    background-color: #ff6600;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n@media only screen and (min-width: 800px)  {\r\n    .header-wrapper {\r\n        padding: 5px 2%;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1000px)  {\r\n    .header-wrapper {\r\n        padding: 5px 3%;\r\n    }\r\n}\r\n\r\n.logo {\r\n    font-size: 1.5em;\r\n    color: white;\r\n    border: 3px solid white;\r\n    margin-right: 5px;\r\n    padding: 0px 6px;\r\n}\r\n\r\na {\r\n    color: inherit;\r\n    text-decoration: inherit;\r\n  }\r\n\r\n.header-links {\r\n    justify-self: flex-end;\r\n}\r\n\r\n.header-link {\r\n    display: inline-block;\r\n}\r\n\r\n.header-link img {\r\n    padding-left: 5%;\r\n    width: 36px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtFQUMxQjs7QUFFRjtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiA1cHggMSU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRTg2MzI5OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjYwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSAge1xyXG4gICAgLmhlYWRlci13cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMiU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSAge1xyXG4gICAgLmhlYWRlci13cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMyU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZzogMHB4IDZweDtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcclxuICB9XHJcblxyXG4uaGVhZGVyLWxpbmtzIHtcclxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5oZWFkZXItbGluayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5oZWFkZXItbGluayBpbWcge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-wrapper\">\n  <span class=\"logo\">Elastic HN Search</span>\n  <span class=\"header-links\">\n    <!-- <a class=\"header-link\" href={{faqUrl}}><img src=\"../../../assets/icons/_ionicons_svg_md-information-circle.svg\" alt=\"About me\"></a> -->\n    <a class=\"header-link\" href={{githubRepo}}><img src=\"../../../assets/icons/_ionicons_svg_logo-github.svg\" alt=\"github repo\"></a>\n  </span>\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.githubRepo = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].githubRepo;
        this.faqUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].faqUrl;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-found-txt {\n    font-size: 54px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90LWZvdW5kLXR4dCB7XG4gICAgZm9udC1zaXplOiA1NHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"not-found-txt\">\n  Not Found :/\n</p>\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/search/input/input.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/search/input/input.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-wrapper {\r\n    display: flex;\r\n    flex-direction: row;\r\n    font-size: 18px;\r\n    align-items: baseline;\r\n    margin: 20px auto;\r\n}\r\n\r\n.input-form-field {\r\n    flex-grow: 2;\r\n}\r\n\r\n.filters-buttons {\r\n    margin-left: 3%;\r\n}\r\n\r\nmat-form-field.filters-buttons {\r\n    max-width: 80px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvaW5wdXQvaW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9pbnB1dC9pbnB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG5cclxuLmlucHV0LWZvcm0tZmllbGQge1xyXG4gICAgZmxleC1ncm93OiAyO1xyXG59XHJcblxyXG4uZmlsdGVycy1idXR0b25zIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQuZmlsdGVycy1idXR0b25zIHtcclxuICAgIG1heC13aWR0aDogODBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/search/input/input.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/search/input/input.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"input-wrapper\" [formGroup]=\"searchForm\">\n  <mat-form-field class=\"input-form-field\">\n    <input matInput type=\"search\" formControlName=\"searchField\" placeholder=\"Type a keyword, e.g. Java\" (keydown.enter)=\"search()\" autofocus>\n    <button mat-button type=\"button\" *ngIf=\"searchValue\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearSearchField()\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n    <mat-form-field class=\"filters-buttons\">\n      <mat-label>Sort by</mat-label>\n      <select matNativeControl formControlName=\"sortField\">\n        <option value=\"desc\">Newest</option>\n        <option value=\"asc\">Oldest</option>\n      </select>\n    </mat-form-field>\n</form>"

/***/ }),

/***/ "./src/app/components/search/input/input.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/search/input/input.component.ts ***!
  \************************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_models_search_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/models/search-request */ "./src/app/shared/models/search-request.ts");





var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.newSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchValue = '';
        this.sortBy = 'desc';
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            searchField: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.searchValue),
            sortField: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.sortBy),
        });
    }
    InputComponent.prototype.ngOnInit = function () {
        var _this = this;
        var emitSearchEvent = function () { return _this.search(); };
        this.searchForm.get('searchField').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (val) {
            _this.searchValue = val;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (val) { return val !== null && val !== '' && val.replace(/\s/g, '') !== ''; })).subscribe(emitSearchEvent);
        this.searchForm.get('sortField').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (val) { return _this.sortBy = val; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500)).subscribe(emitSearchEvent);
    };
    InputComponent.prototype.clearSearchField = function () {
        this.searchForm.get('searchField').setValue('');
    };
    InputComponent.prototype.search = function () {
        this.newSearch.emit(new _shared_models_search_request__WEBPACK_IMPORTED_MODULE_4__["SearchRequest"](this.searchValue, this.sortBy));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputComponent.prototype, "newSearch", void 0);
    InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/components/search/input/input.component.html"),
            styles: [__webpack_require__(/*! ./input.component.css */ "./src/app/components/search/input/input.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/components/search/post/post.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/search/post/post.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-wrapper {\r\n  padding: 2px 10px;\r\n  margin: 6px 0px;\r\n  background-color: #F6F6EF;\r\n}\r\n\r\n.post-title-bordered {\r\n  padding-bottom: 6px; \r\n  border-bottom: solid 1px #ff6600;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content; \r\n}\r\n\r\n.post-text {\r\n  color: #828282;\r\n  margin-top: 10px;\r\n  padding: 6px;\r\n  /* white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis; */\r\n}\r\n\r\np.text-highlight::first-letter {\r\n  text-transform: lowercase;\r\n}\r\n\r\n.post-time {\r\n  color: #999999;\r\n}\r\n\r\np {\r\n    margin: 0% auto;\r\n}\r\n\r\na {\r\n  color: inherit;\r\n  text-decoration: inherit;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWjs7NEJBRTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC13cmFwcGVyIHtcclxuICBwYWRkaW5nOiAycHggMTBweDtcclxuICBtYXJnaW46IDZweCAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZFRjtcclxufVxyXG5cclxuLnBvc3QtdGl0bGUtYm9yZGVyZWQge1xyXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7IFxyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZmY2NjAwO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDsgXHJcbn1cclxuXHJcbi5wb3N0LXRleHQge1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIC8qIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgKi9cclxufVxyXG5cclxucC50ZXh0LWhpZ2hsaWdodDo6Zmlyc3QtbGV0dGVyIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG59XHJcblxyXG4ucG9zdC10aW1lIHtcclxuICBjb2xvcjogIzk5OTk5OTtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW46IDAlIGF1dG87XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/search/post/post.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/search/post/post.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"post-wrapper mat-elevation-z1\" [@fadeAnimation]>\n  <div>\n    <a [class.post-title-bordered]=\"data.textHighlights\"  class=\"post-title mat-body-strong\" href=\"{{getUrl(data)}}\">{{data.title}}</a>\n  </div>\n  \n  <div *ngIf=\"data.textHighlights\" class=\"post-text mat-body\" title=\"{{data.text}}\">\n    <p class=\"text-highlight\" *ngFor=\"let highlight of data.textHighlights\" [innerHTML]=\"highlight\"></p>\n  </div>\n  <!-- <div *ngIf=\"data.textHighlights\" [innerHTML]=\"data.text\" class=\"post-text mat-body\">\n  </div> -->\n  <div>\n    <p class=\"post-time mat-caption\">\n      {{data.time*1000  | timeago:live}}\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/search/post/post.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/search/post/post.component.ts ***!
  \**********************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_hn_post_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/hn-post.model */ "./src/app/shared/models/hn-post.model.ts");
/* harmony import */ var src_app_shared_animations_fade_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/animations/fade.animation */ "./src/app/shared/animations/fade.animation.ts");




/**
 * A representation of a hn post.
 */
var PostComponent = /** @class */ (function () {
    function PostComponent() {
        this.hnItemLink = 'https://news.ycombinator.com/item?id=';
    }
    PostComponent.prototype.getUrl = function (item) {
        return item.url !== null ? item.url : this.getHnUrl(item);
    };
    PostComponent.prototype.getHnUrl = function (item) {
        return this.hnItemLink + item.id;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_models_hn_post_model__WEBPACK_IMPORTED_MODULE_2__["HnPost"])
    ], PostComponent.prototype, "data", void 0);
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/components/search/post/post.component.html"),
            animations: [src_app_shared_animations_fade_animation__WEBPACK_IMPORTED_MODULE_3__["fadeAnimation"]],
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/components/search/post/post.component.css")]
        })
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/search/search.module.ts ***!
  \****************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-timeago */ "./node_modules/ngx-timeago/fesm5/ngx-timeago.js");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./input/input.component */ "./src/app/components/search/input/input.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post/post.component */ "./src/app/components/search/post/post.component.ts");
/* harmony import */ var _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wrapper/wrapper.component */ "./src/app/components/search/wrapper/wrapper.component.ts");














var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_13__["WrapperComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_11__["InputComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_12__["PostComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                ngx_timeago__WEBPACK_IMPORTED_MODULE_10__["TimeagoModule"].forChild()
            ]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ }),

/***/ "./src/app/components/search/wrapper/wrapper.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/search/wrapper/wrapper.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3dyYXBwZXIvd3JhcHBlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/search/wrapper/wrapper.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/search/wrapper/wrapper.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-input (newSearch)=\"onNewSearch($event)\"></app-input>\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading; else results\"></mat-progress-bar>\n<ng-template #results>\n    <div class=\"results-list\">\n        <app-post *ngFor=\"let result of results$ | async\" [data]=\"result\"></app-post>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/search/wrapper/wrapper.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/search/wrapper/wrapper.component.ts ***!
  \****************************************************************/
/*! exports provided: WrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperComponent", function() { return WrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/search.service */ "./src/app/shared/services/search.service.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");






/**
 * Wraps the search logic (input + search results).
 */
var WrapperComponent = /** @class */ (function () {
    function WrapperComponent(searchService, errSnackBar) {
        this.searchService = searchService;
        this.errSnackBar = errSnackBar;
        this.loading = false;
        this.defaultSize = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].defaultSize;
        this.defaultSorting = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].defaultSorting;
    }
    WrapperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.results$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.loading = true;
        this.searchService.getLastItems(this.defaultSize, this.defaultSorting).subscribe(function (val) {
            _this.loading = false;
            _this.results$.next(val);
        }, function (err) {
            _this.loading = false;
            _this.openErrSnackBar(err);
        });
    };
    WrapperComponent.prototype.onNewSearch = function ($event) {
        var _this = this;
        this.loading = true;
        this.searchService.searchFor($event).subscribe(function (val) {
            console.log(val);
            _this.loading = false;
            _this.results$.next(val);
        }, function (err) {
            _this.loading = false;
            _this.openErrSnackBar(err);
        });
    };
    WrapperComponent.prototype.openErrSnackBar = function (err) {
        this.errSnackBar.open(err['message'], '', {
            duration: 3000,
        });
    };
    WrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wrapper',
            template: __webpack_require__(/*! ./wrapper.component.html */ "./src/app/components/search/wrapper/wrapper.component.html"),
            styles: [__webpack_require__(/*! ./wrapper.component.css */ "./src/app/components/search/wrapper/wrapper.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], WrapperComponent);
    return WrapperComponent;
}());



/***/ }),

/***/ "./src/app/shared/animations/fade.animation.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/animations/fade.animation.ts ***!
  \*****************************************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

/**
 * A simple fade in/out animation.
 */
var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200)),
]);


/***/ }),

/***/ "./src/app/shared/models/hn-post.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/hn-post.model.ts ***!
  \************************************************/
/*! exports provided: HnPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HnPost", function() { return HnPost; });
var HnPost = /** @class */ (function () {
    function HnPost() {
    }
    HnPost.prototype.deserialize = function (input) {
        Object.assign(this, input);
        return this;
    };
    return HnPost;
}());



/***/ }),

/***/ "./src/app/shared/models/search-request.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/models/search-request.ts ***!
  \*************************************************/
/*! exports provided: SearchRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRequest", function() { return SearchRequest; });
var SearchRequest = /** @class */ (function () {
    function SearchRequest(term, sortBy) {
        this.term = term;
        this.sortBy = sortBy;
    }
    return SearchRequest;
}());



/***/ }),

/***/ "./src/app/shared/services/search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.apiEndpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint;
        this.searchEndpoint = this.apiEndpoint + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].searchContext;
        this.getLastEndpoint = this.apiEndpoint + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].getLastContext;
    }
    SearchService.prototype.searchFor = function (searchRequest) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('term', searchRequest.term);
        params = params.append('sortBy', searchRequest.sortBy);
        return this.http.get(this.searchEndpoint, { params: params });
    };
    SearchService.prototype.getLastItems = function (size, sortBy) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('size', String(size));
        params = params.append('sortBy', sortBy);
        return this.http.get(this.getLastEndpoint, { params: params });
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    apiEndpoint: 'http://localhost:8080/api/v1/hn/items',
    searchContext: '/search',
    getLastContext: '/last',
    defaultSorting: 'DESC',
    defaultSize: 10,
    github: 'https://github.com/MAtchane',
    linkedin: 'https://linkedin.com/in/matchane',
    githubRepo: 'https://github.com/MAtchane/elastic-hn-search',
    faqUrl: '/faq',
    personalWebsite: 'https://matchane.github.io/',
    myEmail: 'mosab.atchane@gmail.com'
};


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
var environment = {
    production: false,
    apiEndpoint: 'http://localhost:8080/api/v1/hn/items',
    searchContext: '/search',
    getLastContext: '/last',
    defaultSorting: 'DESC',
    defaultSize: 10,
    github: 'https://github.com/MAtchane',
    linkedin: 'https://linkedin.com/in/matchane',
    githubRepo: 'https://github.com/MAtchane/elastic-hn-search',
    faqUrl: '/faq',
    personalWebsite: 'https://matchane.github.io/',
    myEmail: 'mosab.atchane@gmail.com'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /d/Source/hn-jobs-search/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map