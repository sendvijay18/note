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

/***/ "./src/app/actions/audit-data.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/actions/audit-data.actions.ts ***!
  \***********************************************/
/*! exports provided: AuditDataActionTypes, ADD_NOTE, REMOVE_NOTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditDataActionTypes", function() { return AuditDataActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_NOTE", function() { return ADD_NOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_NOTE", function() { return REMOVE_NOTE; });
var AuditDataActionTypes;
(function (AuditDataActionTypes) {
    AuditDataActionTypes["ADD_NOTE"] = "[Note] Add Note";
    AuditDataActionTypes["REMOVE_NOTE"] = "[Note] Remove Note";
})(AuditDataActionTypes || (AuditDataActionTypes = {}));
var ADD_NOTE = /** @class */ (function () {
    function ADD_NOTE(_note) {
        this._note = _note;
        this.type = AuditDataActionTypes.ADD_NOTE;
    }
    return ADD_NOTE;
}());

var REMOVE_NOTE = /** @class */ (function () {
    function REMOVE_NOTE(_note) {
        this._note = _note;
        this.type = AuditDataActionTypes.REMOVE_NOTE;
    }
    return REMOVE_NOTE;
}());



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
/* harmony import */ var _new_note_note_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-note/note.component */ "./src/app/new-note/note.component.ts");
/* harmony import */ var _new_note_add_note_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-note/add-note.component */ "./src/app/new-note/add-note.component.ts");
/* harmony import */ var _new_note_edit_note_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-note/edit-note.component */ "./src/app/new-note/edit-note.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");







var routes = [{ path: 'note', component: _new_note_note_component__WEBPACK_IMPORTED_MODULE_3__["NoteComponent"] },
    { path: 'add-note', component: _new_note_add_note_component__WEBPACK_IMPORTED_MODULE_4__["AddNoteComponent"] },
    { path: 'edit-note', component: _new_note_edit_note_component__WEBPACK_IMPORTED_MODULE_5__["EditNoteComponent"] },
    { path: 'app-root', component: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] },
    { path: '**', redirectTo: '/note', pathMatch: 'full' }];
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

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
        this.title = 'Automate';
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_custom_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/custom.material */ "./src/app/shared/custom.material.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _new_note_note_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-note/note.component */ "./src/app/new-note/note.component.ts");
/* harmony import */ var _new_note_add_note_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-note/add-note.component */ "./src/app/new-note/add-note.component.ts");
/* harmony import */ var _new_note_edit_note_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-note/edit-note.component */ "./src/app/new-note/edit-note.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm5/ngx-export-as.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _note_overview_note_overview_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./note-overview/note-overview.component */ "./src/app/note-overview/note-overview.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _new_note_note_component__WEBPACK_IMPORTED_MODULE_7__["NoteComponent"],
                _new_note_add_note_component__WEBPACK_IMPORTED_MODULE_8__["AddNoteComponent"],
                _new_note_edit_note_component__WEBPACK_IMPORTED_MODULE_9__["EditNoteComponent"],
                _note_overview_note_overview_component__WEBPACK_IMPORTED_MODULE_20__["NoteOverviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _shared_custom_material__WEBPACK_IMPORTED_MODULE_3__["AutomateCustomMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterPipeModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_15__["ExportAsModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_12__["InMemoryWebApiModule"].forRoot(_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"]),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_17__["reducers"], {
                    metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_17__["metaReducers"],
                    runtimeChecks: {
                        strictStateImmutability: true,
                        strictActionImmutability: true,
                    }
                }),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__["StoreDevtoolsModule"].instrument() : []
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.createDb = function () {
        // let  policies =  [
        //  {  id:  1,  num:  'PO1', amount: 1000, userId: 1, clientId: 1, description: 'Insurance policy number PO1' },
        //  {  id:  2,  num:  'PO2', amount: 2000, userId: 1, clientId: 2, description: 'Insurance policy number PO2' },
        //  {  id:  3,  num:  'PO3', amount: 3000, userId: 1, clientId: 3, description: 'Insurance policy number PO3' },
        //  {  id:  4,  num:  'PO4', amount: 4000, userId: 1, clientId: 4, description: 'Insurance policy number PO4' }
        // ];
        var notesData = [
            {
                id: 1,
                title: "Test Title 1",
                content: "Test Content 1",
                noteTimeStamp: "12/11/2019, 20:02:34"
            },
            {
                id: 2,
                title: "Test Title 2",
                content: "Test Content 2",
                noteTimeStamp: "12/11/2019, 20:02:34"
            },
            {
                id: 3,
                title: "Vijay Kumar M",
                content: "sendvijay19@gmail.com",
                noteTimeStamp: "12/11/2019, 20:02:34"
            }
        ];
        return { notesData: notesData };
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/new-note/add-note.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-note/add-note.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\r\n        <h2 class=\"text-center\">Add Note</h2>\r\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\">\r\n          \r\n          <div class=\"form-group\">\r\n              <label for=\"title\">Title:</label>\r\n              <input type=\"text\" formControlName=\"title\" placeholder=\"Title\" name=\"title\" class=\"form-control\" id=\"titleId\">\r\n            </div>\r\n        \r\n            <div class=\"form-group\">\r\n              <label for=\"content\">content:</label>\r\n              <input formControlName=\"content\" placeholder=\"Content\" name=\"content\" class=\"form-control\" id=\"contentId\">\r\n            </div>\r\n        \r\n            <div class=\"form-group\">\r\n              <label for=\"noteTimeStamp\">noteTimeStamp:</label>\r\n              <input formControlName=\"noteTimeStamp\" placeholder=\"\" name=\"noteTimeStamp\" class=\"form-control\" id=\"noteTimeStampId\">\r\n            </div>\r\n      \r\n          <button class=\"btn btn-success\">Update</button>\r\n        </form>\r\n      </div>"

/***/ }),

/***/ "./src/app/new-note/add-note.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-note/add-note.component.ts ***!
  \************************************************/
/*! exports provided: AddNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNoteComponent", function() { return AddNoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note.service */ "./src/app/new-note/note.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _actions_audit_data_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/audit-data.actions */ "./src/app/actions/audit-data.actions.ts");





// import { ADD_NOTE } from '../actions/audit-data.actions';


var AddNoteComponent = /** @class */ (function () {
    function AddNoteComponent(formBuilder, router, noteService, _store) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.noteService = noteService;
        this._store = _store;
        this.getDate = new Date().toLocaleString();
    }
    AddNoteComponent.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            id: [],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            noteTimeStamp: [this.getDate, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    AddNoteComponent.prototype.onSubmit = function () {
        var _this = this;
        this.noteService.createNote(this.addForm.value)
            .subscribe(function (data) {
            var val = Object.assign({}, data);
            _this._store.dispatch(new _actions_audit_data_actions__WEBPACK_IMPORTED_MODULE_6__["ADD_NOTE"](val));
            _this.router.navigate(['note']);
        });
    };
    AddNoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-note',
            template: __webpack_require__(/*! ./add-note.component.html */ "./src/app/new-note/add-note.component.html"),
            styles: [__webpack_require__(/*! ./note.component.scss */ "./src/app/new-note/note.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], AddNoteComponent);
    return AddNoteComponent;
}());



/***/ }),

/***/ "./src/app/new-note/edit-note.component.html":
/*!***************************************************!*\
  !*** ./src/app/new-note/edit-note.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\r\n        <h2 class=\"text-center\">Edit Note</h2>\r\n        <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"title\">Title:</label>\r\n            <input type=\"text\" formControlName=\"title\" placeholder=\"Title\" name=\"title\" class=\"form-control\" id=\"titleId\">\r\n          </div>\r\n      \r\n          <div class=\"form-group\">\r\n            <label for=\"content\">content:</label>\r\n            <input formControlName=\"content\" placeholder=\"Content\" name=\"content\" class=\"form-control\" id=\"contentId\">\r\n          </div>\r\n      \r\n          <div class=\"form-group\">\r\n            <label for=\"noteTimeStamp\">Last Name:</label>\r\n            <input formControlName=\"noteTimeStamp\" placeholder=\"\" name=\"noteTimeStamp\" class=\"form-control\" id=\"noteTimeStampId\">\r\n          </div>\r\n      \r\n          <button class=\"btn btn-success\">Update</button>\r\n        </form>\r\n      </div>\r\n      "

/***/ }),

/***/ "./src/app/new-note/edit-note.component.ts":
/*!*************************************************!*\
  !*** ./src/app/new-note/edit-note.component.ts ***!
  \*************************************************/
/*! exports provided: EditNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNoteComponent", function() { return EditNoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _note_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./note.service */ "./src/app/new-note/note.service.ts");






var EditNoteComponent = /** @class */ (function () {
    function EditNoteComponent(formBuilder, router, noteService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.noteService = noteService;
        this.getDate = new Date().toLocaleString();
    }
    EditNoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = localStorage.getItem("editNoteId");
        if (!userId) {
            alert("Invalid action.");
            this.router.navigate(['note']);
            return;
        }
        this.editForm = this.formBuilder.group({
            id: [],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            noteTimeStamp: [this.getDate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.noteService.getNoteById(+userId)
            .subscribe(function (data) {
            _this.editForm.setValue(data);
        });
    };
    EditNoteComponent.prototype.onSubmit = function () {
        var _this = this;
        this.noteService.updateNote(this.editForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.router.navigate(['note']);
        }, function (error) {
            alert(error);
        });
    };
    EditNoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'edit-note',
            template: __webpack_require__(/*! ./edit-note.component.html */ "./src/app/new-note/edit-note.component.html"),
            styles: [__webpack_require__(/*! ./note.component.scss */ "./src/app/new-note/note.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _note_service__WEBPACK_IMPORTED_MODULE_5__["NoteService"]])
    ], EditNoteComponent);
    return EditNoteComponent;
}());



/***/ }),

/***/ "./src/app/new-note/note.component.html":
/*!**********************************************!*\
  !*** ./src/app/new-note/note.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container bg-light\">\n  <div class=\"login-box\">\n      <div style=\"padding:5px;\">\n          <h2 class=\"note-heading\"> Note Making</h2><br>\n          <note-overview></note-overview>\n          <button mat-mini-fab matTooltip=\"Add Note\" color=\"accent\" class=\"btn btn-danger\" (click)=\"addNote()\" style=\"margin:2px;\"><mat-icon>add</mat-icon></button> \n          \n          <input type=\"text\" [(ngModel)]=\"textFilter\" (keyup)=\"applyNGXFilter()\" placeholder=\"Type to filter by name\">\n          <input class=\"float-right\" matTooltip=\"Download\" type=\"image\" src=\"assets/downloadImg.jpg\" alt=\"Submit\" width=\"30\" height=\"30\" style=\"margin-right: 55px;\" (click)=\"exporttoFile()\">\n          <table id=\"myTableElementId\" class=\"table table-striped\">\n            <thead>\n            <tr>\n              <th class=\"hidden\">Id</th>\n              <th>Title</th>\n              <th>Content</th>\n              <th>TimeStamp</th>\n              <th>Action</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let note of noteList | filterBy: userFilter\">\n              <td class=\"hidden\">{{note.id}}</td>\n              <td>{{note.title}}</td>\n              <td>{{note.content}}</td>\n              <td>{{note.noteTimeStamp}}</td>\n              <td><button mat-mini-fab class=\"btn\" matTooltip=\"Delete\" (click)=\"deleteNote(note)\"><mat-icon>delete</mat-icon></button>\n                <button mat-mini-fab color=\"primary\" matTooltip=\"Modify\" class=\"btn btn-danger\" (click)=\"editNote(note)\" style=\"margin-left: 20px;\"><mat-icon>edit</mat-icon></button></td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/new-note/note.component.scss":
/*!**********************************************!*\
  !*** ./src/app/new-note/note.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1ub3RlL25vdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/new-note/note.component.ts":
/*!********************************************!*\
  !*** ./src/app/new-note/note.component.ts ***!
  \********************************************/
/*! exports provided: NoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteComponent", function() { return NoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note.service */ "./src/app/new-note/note.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm5/ngx-export-as.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");






var NoteComponent = /** @class */ (function () {
    function NoteComponent(router, filterPipe, noteService, exportAsService) {
        this.router = router;
        this.filterPipe = filterPipe;
        this.noteService = noteService;
        this.exportAsService = exportAsService;
        this.userFilter = { content: '' };
        this.textFilter = "";
        this.exportAsConfig = {
            type: 'csv',
            elementId: 'myTableElementId',
        };
    }
    NoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.noteService.getNotes()
            .subscribe(function (data) {
            _this.noteList = data;
        });
    };
    NoteComponent.prototype.deleteNote = function (note) {
        var _this = this;
        this.noteService.deleteNote(note.id)
            .subscribe(function (data) {
            _this.noteList = _this.noteList.filter(function (u) { return u !== note; });
        });
    };
    ;
    NoteComponent.prototype.editNote = function (note) {
        localStorage.removeItem("editNoteId");
        localStorage.setItem("editNoteId", note.id.toString());
        this.router.navigate(['edit-note']);
    };
    ;
    NoteComponent.prototype.addNote = function () {
        this.router.navigate(['add-note']);
    };
    ;
    NoteComponent.prototype.exporttoFile = function () {
        // download the file using old school javascript method
        this.exportAsService.save(this.exportAsConfig, 'My File Name');
        // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
        this.exportAsService.get(this.exportAsConfig).subscribe(function (content) {
            console.log(content);
        });
    };
    NoteComponent.prototype.applyNGXFilter = function () {
        // https://stackoverflow.com/questions/46289426/filtering-more-than-one-value-with-ngx-filter-pipe-angular
        this.userFilter = {
            $or: [
                { 'content': this.textFilter }
            ]
        };
    };
    NoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'note',
            template: __webpack_require__(/*! ./note.component.html */ "./src/app/new-note/note.component.html"),
            styles: [__webpack_require__(/*! ./note.component.scss */ "./src/app/new-note/note.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"], _note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"], ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"]])
    ], NoteComponent);
    return NoteComponent;
}());



/***/ }),

/***/ "./src/app/new-note/note.service.ts":
/*!******************************************!*\
  !*** ./src/app/new-note/note.service.ts ***!
  \******************************************/
/*! exports provided: NoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteService", function() { return NoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var NoteService = /** @class */ (function () {
    function NoteService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api/notesData';
    }
    NoteService.prototype.getNotes = function () {
        return this.http.get(this.baseUrl);
    };
    NoteService.prototype.getNoteById = function (id) {
        return this.http.get(this.baseUrl + '/' + id);
    };
    NoteService.prototype.createNote = function (note) {
        return this.http.post(this.baseUrl, note);
    };
    NoteService.prototype.updateNote = function (note) {
        return this.http.put(this.baseUrl + '/' + note.id, note);
    };
    NoteService.prototype.deleteNote = function (id) {
        return this.http.delete(this.baseUrl + '/' + id);
    };
    NoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NoteService);
    return NoteService;
}());



/***/ }),

/***/ "./src/app/note-overview/note-overview.component.css":
/*!***********************************************************!*\
  !*** ./src/app/note-overview/note-overview.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGUtb3ZlcnZpZXcvbm90ZS1vdmVydmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/note-overview/note-overview.component.html":
/*!************************************************************!*\
  !*** ./src/app/note-overview/note-overview.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"note-heading\">\n  last Upate Date : {{ getDate }} (Update using ADD_NOTE Reducer from Store)\n</p>\n"

/***/ }),

/***/ "./src/app/note-overview/note-overview.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/note-overview/note-overview.component.ts ***!
  \**********************************************************/
/*! exports provided: NoteOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteOverviewComponent", function() { return NoteOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var NoteOverviewComponent = /** @class */ (function () {
    function NoteOverviewComponent(store) {
        var _this = this;
        this.store = store;
        this.getDate = new Date().toLocaleString();
        store.select(function (state) { return state.lastupdateDate; })
            .subscribe(function (lastupdateDate) { return _this.lastupdateDate = lastupdateDate; });
    }
    NoteOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) { return state.lastupdateDate; }).subscribe(function (data) {
            console.log(data);
            _this.storeData = _this.store;
            _this.getDate = _this.storeData.actionsObserver._value._note.noteTimeStamp;
        });
    };
    NoteOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'note-overview',
            template: __webpack_require__(/*! ./note-overview.component.html */ "./src/app/note-overview/note-overview.component.html"),
            styles: [__webpack_require__(/*! ./note-overview.component.css */ "./src/app/note-overview/note-overview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], NoteOverviewComponent);
    return NoteOverviewComponent;
}());



/***/ }),

/***/ "./src/app/reducers/audit-note.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/reducers/audit-note.reducer.ts ***!
  \************************************************/
/*! exports provided: auditNoteFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auditNoteFeatureKey", function() { return auditNoteFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_audit_data_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/audit-data.actions */ "./src/app/actions/audit-data.actions.ts");

var auditNoteFeatureKey = 'auditNote';
var initialState = {
    lastupdateDate: new Date()
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_audit_data_actions__WEBPACK_IMPORTED_MODULE_0__["AuditDataActionTypes"].ADD_NOTE:
            return Object.assign({}, state, { lastupdateDate: action._note.noteTimeStamp
            });
        case _actions_audit_data_actions__WEBPACK_IMPORTED_MODULE_0__["AuditDataActionTypes"].REMOVE_NOTE:
            return Object.assign({}, state, {
                lastupdateDate: action._note.noteTimeStamp
            });
        default: return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_reducers_audit_note_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/reducers/audit-note.reducer */ "./src/app/reducers/audit-note.reducer.ts");


var reducers = {
    noteAppState: _app_reducers_audit_note_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
};
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/shared/custom.material.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/custom.material.ts ***!
  \*******************************************/
/*! exports provided: AutomateCustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomateCustomMaterialModule", function() { return AutomateCustomMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







var AutomateCustomMaterialModule = /** @class */ (function () {
    function AutomateCustomMaterialModule(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('more_vert', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/more_vert.svg'));
        iconRegistry.addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/fb.svg'));
        iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
        iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
        iconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'));
        iconRegistry.addSvgIcon('dashboard-black', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard-black.svg'));
        iconRegistry.addSvgIcon('star', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/star.svg'));
        iconRegistry.addSvgIcon('phone', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/phone.svg'));
        iconRegistry.addSvgIcon('email', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/email.svg'));
        iconRegistry.addSvgIcon('account_circle', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/account_circle.svg'));
        iconRegistry.addSvgIcon('event', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/event.svg'));
        iconRegistry.addSvgIcon('track_changes', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/track_changes.svg'));
        iconRegistry.addSvgIcon('language', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/language.svg'));
        iconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
        iconRegistry.addSvgIcon('book', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/book.svg'));
        iconRegistry.addSvgIcon('business', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/business.svg'));
        iconRegistry.addSvgIcon('place', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/place.svg'));
        iconRegistry.addSvgIcon('code', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/code.svg'));
        iconRegistry.addSvgIcon('help', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/help.svg'));
        iconRegistry.addSvgIcon('clear', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/clear.svg'));
        iconRegistry.addSvgIcon('vpn', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/vpn.svg'));
        iconRegistry.addSvgIcon('new', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/new.svg'));
        iconRegistry.addSvgIcon('cloud', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloud.svg'));
        iconRegistry.addSvgIcon('backspace', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/backspace.svg'));
        iconRegistry.addSvgIcon('add', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg'));
        iconRegistry.addSvgIcon('edit', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/edit.svg'));
        iconRegistry.addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'));
        iconRegistry.addSvgIcon('cached', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cached.svg'));
        iconRegistry.addSvgIcon('create', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/create.svg'));
        iconRegistry.addSvgIcon('employee', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/person.svg'));
        iconRegistry.addSvgIcon('employer', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/group.svg'));
        iconRegistry.addSvgIcon('home', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg'));
        iconRegistry.addSvgIcon('equalizer', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/equalizer.svg'));
        iconRegistry.addSvgIcon('security', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/security.svg'));
        iconRegistry.addSvgIcon('radio_on', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/radio_on.svg'));
        iconRegistry.addSvgIcon('radio_off', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/radio_off.svg'));
        iconRegistry.addSvgIcon('salary', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/salary.svg'));
        iconRegistry.addSvgIcon('drop_down', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/drop_down.svg'));
    }
    AutomateCustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"]
            ],
            exports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"]
            ],
            declarations: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], AutomateCustomMaterialModule);
    return AutomateCustomMaterialModule;
}());



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
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\projects\Automate\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map