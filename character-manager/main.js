(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/joel/Development/newera-rpg/character-manager-webapp/src/main.ts */"zUnb");


/***/ }),

/***/ "1Hbz":
/*!*****************************************************************************!*\
  !*** ./src/app/character-editor/model/character/primary-attribute-level.ts ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrimaryAttributeLevel; });
/* harmony import */ var _attribute_level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute-level */ "fIzE");

class PrimaryAttributeLevel extends _attribute_level__WEBPACK_IMPORTED_MODULE_0__["default"] {
}


/***/ }),

/***/ "3q1C":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/character-editor/components/attribute-editor/components/primary-attribute-input/primary-attribute-input.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: PrimaryAttributeInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryAttributeInputComponent", function() { return PrimaryAttributeInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_character_primary_attribute_level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../model/character/primary-attribute-level */ "1Hbz");



class PrimaryAttributeInputComponent {
    constructor() {
        this.attributeLevelUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    incrementLevel() {
        const update = new _model_character_primary_attribute_level__WEBPACK_IMPORTED_MODULE_1__["default"](this.attributeLevel.attribute, this.attributeLevel.level + 1);
        this.attributeLevelUpdated.emit(update);
    }
    decrementLevel() {
        const update = new _model_character_primary_attribute_level__WEBPACK_IMPORTED_MODULE_1__["default"](this.attributeLevel.attribute, this.attributeLevel.level - 1);
        this.attributeLevelUpdated.emit(update);
    }
}
PrimaryAttributeInputComponent.ɵfac = function PrimaryAttributeInputComponent_Factory(t) { return new (t || PrimaryAttributeInputComponent)(); };
PrimaryAttributeInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrimaryAttributeInputComponent, selectors: [["newera-primary-attribute-input"]], inputs: { attributeLevel: "attributeLevel" }, outputs: { attributeLevelUpdated: "attributeLevelUpdated" }, decls: 9, vars: 5, consts: [[3, "id"], [3, "disabled", "click"]], template: function PrimaryAttributeInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrimaryAttributeInputComponent_Template_button_click_5_listener() { return ctx.incrementLevel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrimaryAttributeInputComponent_Template_button_click_7_listener() { return ctx.decrementLevel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.attributeLevel.attribute.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.attributeLevel.attribute.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.attributeLevel.level);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.attributeLevel.level >= 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.attributeLevel.level <= 0);
    } }, styles: [":host > div {\n  display: grid;\n  grid-template-columns: 12ch 3ch repeat(2, 24px);\n  grid-column-gap: 1ch;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaW1hcnktYXR0cmlidXRlLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLCtDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQURGIiwiZmlsZSI6InByaW1hcnktYXR0cmlidXRlLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJ1dHRvbi1zaXplOiAyNHB4O1xuXG46aG9zdCA+IGRpdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTJjaCAzY2ggcmVwZWF0KDIsICRidXR0b24tc2l6ZSk7XG4gIGdyaWQtY29sdW1uLWdhcDogMWNoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4iXX0= */"], encapsulation: 3 });


/***/ }),

/***/ "AytR":
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

/***/ "Jn76":
/*!********************************************************************************************!*\
  !*** ./src/app/character-editor/components/attribute-editor/attribute-editor.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AttributeEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeEditorComponent", function() { return AttributeEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_character_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/character.service */ "cCl1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_primary_attribute_input_primary_attribute_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/primary-attribute-input/primary-attribute-input.component */ "3q1C");
/* harmony import */ var _components_secondary_attribute_input_secondary_attribute_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/secondary-attribute-input/secondary-attribute-input.component */ "xl/6");





function AttributeEditorComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "newera-primary-attribute-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("attributeLevelUpdated", function AttributeEditorComponent_ng_container_13_Template_newera_primary_attribute_input_attributeLevelUpdated_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.updatePrimaryAttributeLevel($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const attributeLevel_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeLevel", attributeLevel_r2);
} }
function AttributeEditorComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "newera-secondary-attribute-input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const attributeLevel_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeLevel", attributeLevel_r5);
} }
class AttributeEditorComponent {
    constructor(characterService) {
        this.characterService = characterService;
        this.primaryAttributeLevels$ = this.characterService.primaryAttributeLevels$;
        this.secondaryAttributeLevels$ = this.characterService.secondaryAttributeLevels$;
        this.attributePointsAvailable$ = this.characterService.attributePointsAvailable$;
        this.attributePointsSpent$ = this.characterService.attributePointsSpent$;
    }
    updatePrimaryAttributeLevel(attributeLevel) {
        this.characterService.updatePrimaryAttributeLevel(attributeLevel);
    }
}
AttributeEditorComponent.ɵfac = function AttributeEditorComponent_Factory(t) { return new (t || AttributeEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_character_service__WEBPACK_IMPORTED_MODULE_1__["CharacterService"])); };
AttributeEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttributeEditorComponent, selectors: [["newera-attribute-editor"]], decls: 18, vars: 12, consts: [["id", "attribute-points"], ["id", "attribute-selection"], ["id", "attributes-primary"], [4, "ngFor", "ngForOf"], ["id", "attributes-secondary"], [3, "attributeLevel", "attributeLevelUpdated"], [3, "attributeLevel"]], template: function AttributeEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Attributpunkte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "verwendet von");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AttributeEditorComponent_ng_container_13_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AttributeEditorComponent_ng_container_16_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.attributePointsSpent$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, ctx.attributePointsAvailable$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, ctx.primaryAttributeLevels$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 10, ctx.secondaryAttributeLevels$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_primary_attribute_input_primary_attribute_input_component__WEBPACK_IMPORTED_MODULE_3__["PrimaryAttributeInputComponent"], _components_secondary_attribute_input_secondary_attribute_input_component__WEBPACK_IMPORTED_MODULE_4__["SecondaryAttributeInputComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [":host {\n  display: inline-block;\n}\n\n#attribute-points {\n  display: grid;\n  grid-template-columns: repeat(4, -webkit-max-content);\n  grid-template-columns: repeat(4, max-content);\n  grid-column-gap: 1ch;\n  margin-bottom: 1em;\n}\n\n#attribute-selection {\n  display: grid;\n  grid-template-columns: repeat(2, -webkit-max-content);\n  grid-template-columns: repeat(2, max-content);\n  grid-column-gap: 3ch;\n}\n\n#attributes-primary, #attributes-secondary {\n  display: grid;\n  grid-template-rows: 1.5em;\n  grid-row-gap: 0.5em;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2F0dHJpYnV0ZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHFEQUFBO0VBQUEsNkNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EscURBQUE7RUFBQSw2Q0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiYXR0cmlidXRlLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jYXR0cmlidXRlLXBvaW50cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1heC1jb250ZW50KTtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxY2g7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuI2F0dHJpYnV0ZS1zZWxlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtYXgtY29udGVudCk7XG4gIGdyaWQtY29sdW1uLWdhcDogM2NoO1xufVxuXG4jYXR0cmlidXRlcy1wcmltYXJ5LCAjYXR0cmlidXRlcy1zZWNvbmRhcnkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuNWVtO1xuICBncmlkLXJvdy1nYXA6IDAuNWVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */"], encapsulation: 3 });


/***/ }),

/***/ "KEqC":
/*!**************************************************************!*\
  !*** ./src/app/character-editor/services/setting.service.ts ***!
  \**************************************************************/
/*! exports provided: SettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return SettingService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class SettingService {
    constructor(http) {
        this.setting$$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.setting$ = this.setting$$.asObservable();
        this.primaryAttributes$ = this.setting$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(setting => setting.attributes.primary));
        this.primaryAttributesById$ = this.primaryAttributes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(mapById));
        this.secondaryAttributes$ = this.setting$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(setting => setting.attributes.secondary));
        this.secondaryAttributesById$ = this.secondaryAttributes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(mapById));
        this.skills$ = this.setting$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(setting => setting.skills));
        this.skillsById$ = this.skills$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(mapById));
        this.talents$ = this.setting$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(setting => setting.talents));
        http.get(`http://localhost:3000/setting`)
            .subscribe(this.setting$$);
    }
}
SettingService.ɵfac = function SettingService_Factory(t) { return new (t || SettingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SettingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SettingService, factory: SettingService.ɵfac, providedIn: 'root' });
function mapById(list) {
    const map = new Map();
    list.forEach(entry => map.set(entry.id, entry));
    return map;
}


/***/ }),

/***/ "MpUk":
/*!**************************************************************************************!*\
  !*** ./src/app/character-editor/components/talent-editor/talent-editor.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TalentEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentEditorComponent", function() { return TalentEditorComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/setting.service */ "KEqC");
/* harmony import */ var _services_character_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/character.service */ "cCl1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_talent_input_talent_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/talent-input/talent-input.component */ "gOIg");






function TalentEditorComponent_newera_talent_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "newera-talent-input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TalentEditorComponent_newera_talent_input_2_Template_newera_talent_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const talent_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.unlearnTalent(talent_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const talent_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("talent", talent_r2);
} }
function TalentEditorComponent_newera_talent_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "newera-talent-input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TalentEditorComponent_newera_talent_input_5_Template_newera_talent_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const talent_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.learnTalent(talent_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const talent_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("talent", talent_r5);
} }
class TalentEditorComponent {
    constructor(settingService, characterService) {
        this.settingService = settingService;
        this.characterService = characterService;
        this.talentsLearned$ = this.characterService.talents$;
        this.talentsAvailable$ = this.characterService.talentsUnknown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(talents => talents.sort((talent1, talent2) => talent1.name.localeCompare(talent2.name))));
    }
    ngOnInit() {
    }
    learnTalent(talent) {
        this.characterService.learnTalent(talent);
    }
    unlearnTalent(talent) {
        this.characterService.unlearnTalent(talent);
    }
}
TalentEditorComponent.ɵfac = function TalentEditorComponent_Factory(t) { return new (t || TalentEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_character_service__WEBPACK_IMPORTED_MODULE_3__["CharacterService"])); };
TalentEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TalentEditorComponent, selectors: [["newera-talent-editor"]], decls: 7, vars: 6, consts: [["id", "talent-selection"], ["id", "talents-learned"], [3, "talent", "click", 4, "ngFor", "ngForOf"], ["id", "talents-available"], [3, "talent", "click"]], template: function TalentEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TalentEditorComponent_newera_talent_input_2_Template, 1, 1, "newera-talent-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TalentEditorComponent_newera_talent_input_5_Template, 1, 1, "newera-talent-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx.talentsLearned$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, ctx.talentsAvailable$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_talent_input_talent_input_component__WEBPACK_IMPORTED_MODULE_5__["TalentInputComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["#talent-selection {\n  display: grid;\n  grid-template-columns: repeat(2, 40ch);\n  grid-column-gap: 4ch;\n}\n\n#talents-learned, #talents-available {\n  display: grid;\n  grid-auto-rows: -webkit-max-content;\n  grid-auto-rows: max-content;\n  grid-row-gap: 1em;\n  height: 24em;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RhbGVudC1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InRhbGVudC1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGFsZW50LXNlbGVjdGlvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDQwY2gpO1xuICBncmlkLWNvbHVtbi1nYXA6IDRjaDtcbn1cblxuI3RhbGVudHMtbGVhcm5lZCwgI3RhbGVudHMtYXZhaWxhYmxlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xuICBncmlkLXJvdy1nYXA6IDFlbTtcbiAgaGVpZ2h0OiAyNGVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4iXX0= */"], encapsulation: 3 });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _character_editor_character_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character-editor/character-editor.component */ "bafx");


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "newera-character-editor");
    } }, directives: [_character_editor_character_editor_component__WEBPACK_IMPORTED_MODULE_1__["CharacterEditorComponent"]], encapsulation: 2 });


/***/ }),

/***/ "WBTl":
/*!*****************************************************************!*\
  !*** ./src/app/character-editor/model/character/skill-level.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SkillLevel; });
class SkillLevel {
    constructor(skill, level) {
        this.skill = skill;
        this.level = level;
    }
}


/***/ }),

/***/ "Y2j8":
/*!*******************************************************************************!*\
  !*** ./src/app/character-editor/model/character/secondary-attribute-level.ts ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SecondaryAttributeLevel; });
/* harmony import */ var _attribute_level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute-level */ "fIzE");

class SecondaryAttributeLevel extends _attribute_level__WEBPACK_IMPORTED_MODULE_0__["default"] {
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _character_editor_character_editor_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character-editor/character-editor.module */ "od5B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _character_editor_character_editor_module__WEBPACK_IMPORTED_MODULE_2__["CharacterEditorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _character_editor_character_editor_module__WEBPACK_IMPORTED_MODULE_2__["CharacterEditorModule"]] }); })();


/***/ }),

/***/ "bafx":
/*!****************************************************************!*\
  !*** ./src/app/character-editor/character-editor.component.ts ***!
  \****************************************************************/
/*! exports provided: CharacterEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterEditorComponent", function() { return CharacterEditorComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_character_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/character.service */ "cCl1");
/* harmony import */ var _components_level_input_level_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/level-input/level-input.component */ "n0Gt");
/* harmony import */ var _components_attribute_editor_attribute_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/attribute-editor/attribute-editor.component */ "Jn76");
/* harmony import */ var _components_skill_editor_skill_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/skill-editor/skill-editor.component */ "bnUY");
/* harmony import */ var _components_talent_editor_talent_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/talent-editor/talent-editor.component */ "MpUk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








class CharacterEditorComponent {
    constructor(characterService) {
        this.characterService = characterService;
        this.character$ = this.characterService.character$;
        this.characterJSON = this.character$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(character => JSON.stringify(character, null, 2)));
    }
}
CharacterEditorComponent.ɵfac = function CharacterEditorComponent_Factory(t) { return new (t || CharacterEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_character_service__WEBPACK_IMPORTED_MODULE_2__["CharacterService"])); };
CharacterEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CharacterEditorComponent, selectors: [["newera-character-editor"]], decls: 17, vars: 3, consts: [[2, "margin-top", "10em"]], template: function CharacterEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "NewEra Charakter-Editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "newera-level-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "newera-attribute-editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Fertigkeiten");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "newera-skill-editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Talente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "newera-talent-editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Debug");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 1, ctx.characterJSON));
    } }, directives: [_components_level_input_level_input_component__WEBPACK_IMPORTED_MODULE_3__["LevelInputComponent"], _components_attribute_editor_attribute_editor_component__WEBPACK_IMPORTED_MODULE_4__["AttributeEditorComponent"], _components_skill_editor_skill_editor_component__WEBPACK_IMPORTED_MODULE_5__["SkillEditorComponent"], _components_talent_editor_talent_editor_component__WEBPACK_IMPORTED_MODULE_6__["TalentEditorComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin: 5%;\n  padding: 2em;\n  border: grey dashed 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoYXJhY3Rlci1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUNGIiwiZmlsZSI6ImNoYXJhY3Rlci1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDUlO1xuICBwYWRkaW5nOiAyZW07XG4gIGJvcmRlcjogZ3JleSBkYXNoZWQgMXB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "bnUY":
/*!************************************************************************************!*\
  !*** ./src/app/character-editor/components/skill-editor/skill-editor.component.ts ***!
  \************************************************************************************/
/*! exports provided: SkillEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillEditorComponent", function() { return SkillEditorComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _model_character_skill_level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/character/skill-level */ "WBTl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/setting.service */ "KEqC");
/* harmony import */ var _services_character_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/character.service */ "cCl1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SkillEditorComponent_ng_container_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SkillEditorComponent_ng_container_21_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SkillEditorComponent_ng_container_21_div_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const skillLevel_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.incrementSkillLevel(skillLevel_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "+ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SkillEditorComponent_ng_container_21_div_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const skillLevel_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.decrementSkillLevel(skillLevel_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SkillEditorComponent_ng_container_21_div_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const skillLevel_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.forgetSkill(skillLevel_r2.skill); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skillLevel_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](skillLevel_r2.skill.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](skillLevel_r2.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", skillLevel_r2.level >= 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", skillLevel_r2.level <= 0);
} }
function SkillEditorComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SkillEditorComponent_ng_container_21_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SkillEditorComponent_ng_container_21_div_2_Template, 12, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const skillLevel_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", skillLevel_r2 == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", skillLevel_r2 != null);
} }
function SkillEditorComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SkillEditorComponent_ng_container_26_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const skill_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.learnSkill(skill_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u2190");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const skill_r13 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", skill_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, ctx_r1.skillLearningDisabled$));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](skill_r13.name);
} }
class SkillEditorComponent {
    constructor(settingService, characterService) {
        this.settingService = settingService;
        this.characterService = characterService;
        this.skillsUnknown$ = this.characterService.skillsUnknown$;
        this.skillLevels$ = this.characterService.skillLevels$;
        this.skillsLearnable$ = this.characterService.skillsLearnable$;
        this.skillLearningDisabled$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.skillLevels$,
            this.skillsLearnable$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(([skillLevels, skillsLearnable]) => skillLevels.length >= skillsLearnable), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(skillLearningDisabled => console.debug({ skillLearningDisabled })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["shareReplay"])());
        this.skillSlots$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.skillLevels$,
            this.skillsLearnable$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(([skillLevels, skillsLearnable]) => {
            let slots;
            if (skillLevels.length < skillsLearnable) {
                const placeholders = new Array(skillsLearnable - skillLevels.length).fill(null);
                slots = [...skillLevels, ...placeholders];
            }
            else {
                slots = skillLevels;
            }
            return slots;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(skillSlots => console.debug({ skillSlots })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["shareReplay"])());
        this.skillPointsAvailable$ = this.characterService.skillsPointsAvailable$;
        this.skillPointsSpent$ = this.characterService.skillPointsSpent$;
    }
    ngOnInit() {
    }
    learnSkill(skill) {
        this.characterService.learnSkill(skill);
    }
    forgetSkill(skill) {
        this.characterService.unlearnSkill(skill);
    }
    incrementSkillLevel(skillLevel) {
        this.characterService.updateSkillLevel(new _model_character_skill_level__WEBPACK_IMPORTED_MODULE_2__["default"](skillLevel.skill, skillLevel.level + 1));
    }
    decrementSkillLevel(skillLevel) {
        this.characterService.updateSkillLevel(new _model_character_skill_level__WEBPACK_IMPORTED_MODULE_2__["default"](skillLevel.skill, skillLevel.level - 1));
    }
}
SkillEditorComponent.ɵfac = function SkillEditorComponent_Factory(t) { return new (t || SkillEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_character_service__WEBPACK_IMPORTED_MODULE_5__["CharacterService"])); };
SkillEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SkillEditorComponent, selectors: [["newera-skill-editor"]], decls: 28, vars: 15, consts: [["id", "skill-header"], ["id", "skill-amount"], ["id", "skill-points"], ["id", "skill-selection"], ["id", "skills-learned"], [4, "ngFor", "ngForOf"], ["id", "skills-available"], ["class", "skill-slot", 4, "ngIf"], [1, "skill-slot"], [1, "placeholder"], [3, "disabled", "click"], [3, "click"], [1, "skill-option", 3, "id"]], template: function SkillEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Fertigkeiten erlernbar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Fertigkeitspunkte");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "verwendet von");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Gelernt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, SkillEditorComponent_ng_container_21_Template, 3, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Verf\u00FCgbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, SkillEditorComponent_ng_container_26_Template, 7, 5, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 5, ctx.skillsLearnable$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 7, ctx.skillPointsSpent$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 9, ctx.skillPointsAvailable$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 11, ctx.skillSlots$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 13, ctx.skillsUnknown$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [":host {\n  display: inline-block;\n}\n\n#skill-points {\n  display: grid;\n  grid-template-columns: repeat(4, -webkit-max-content);\n  grid-template-columns: repeat(4, max-content);\n  grid-column-gap: 1ch;\n}\n\n#skill-selection {\n  display: grid;\n  grid-template-columns: 40ch 30ch;\n  grid-template-rows: -webkit-min-content 20em;\n  grid-template-rows: min-content 20em;\n  grid-auto-flow: column;\n  grid-column-gap: 3em;\n}\n\n#skills-learned, #skills-available {\n  display: grid;\n  grid-auto-rows: 1.5em;\n  grid-row-gap: 0.5em;\n  overflow-y: scroll;\n}\n\n.skill-slot, .skill-option {\n  display: flex;\n  justify-content: space-between;\n}\n\n.placeholder {\n  flex-grow: 1;\n  border-bottom: black dashed 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NraWxsLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EscURBQUE7RUFBQSw2Q0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0Q0FBQTtFQUFBLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7QUFDRiIsImZpbGUiOiJza2lsbC1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuI3NraWxsLXBvaW50cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1heC1jb250ZW50KTtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxY2g7XG59XG5cbiNza2lsbC1zZWxlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwY2ggMzBjaDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAyMGVtO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBncmlkLWNvbHVtbi1nYXA6IDNlbTtcbn1cblxuI3NraWxscy1sZWFybmVkLCAjc2tpbGxzLWF2YWlsYWJsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1yb3dzOiAxLjVlbTtcbiAgZ3JpZC1yb3ctZ2FwOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uc2tpbGwtc2xvdCwgLnNraWxsLW9wdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgZmxleC1ncm93OiAxO1xuICBib3JkZXItYm90dG9tOiBibGFjayBkYXNoZWQgMXB4O1xufVxuIl19 */"], encapsulation: 3 });


/***/ }),

/***/ "cCl1":
/*!****************************************************************!*\
  !*** ./src/app/character-editor/services/character.service.ts ***!
  \****************************************************************/
/*! exports provided: CharacterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterService", function() { return CharacterService; });
/* harmony import */ var _model_character_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/character/character */ "w2CN");
/* harmony import */ var _model_character_primary_attribute_level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/character/primary-attribute-level */ "1Hbz");
/* harmony import */ var _model_character_secondary_attribute_level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/character/secondary-attribute-level */ "Y2j8");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _model_character_skill_level__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/character/skill-level */ "WBTl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./setting.service */ "KEqC");
/* harmony import */ var _level_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./level.service */ "qpvx");









class CharacterService {
    constructor(settingService, levelService) {
        this.settingService = settingService;
        this.levelService = levelService;
        this.level$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.level$ = this.level$$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
        this.primaryAttributeLevels$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.primaryAttributeLevels$ = this.primaryAttributeLevels$$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(primaryAttributeLevels => console.debug({ primaryAttributeLevels })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
        this.secondaryAttributeLevels$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.settingService.secondaryAttributes$,
            this.primaryAttributeLevels$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([secondaryAttributes, primaryAttributeLevels]) => this.calculateSecondaryAttributeLevels(secondaryAttributes, primaryAttributeLevels)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(secondaryAttributeLevels => console.debug({ secondaryAttributeLevels })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
        this.attributePointsAvailable$ = this.level$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(level => this.levelService
            .getAvailableAttributePoints(level, true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(attributePointsAvailable => console.debug({ attributePointsAvailable })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
        this.attributePointsSpent$ = this.primaryAttributeLevels$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(attributeLevels => attributeLevels
            .map(attributeLevel => attributeLevel.level)
            .map(level => this.levelService.getCumulativeAttributeLevelCost(level))
            .reduce((total, value) => total + value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(attributePointsSpent => console.debug({ attributePointsSpent })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
        this.skillsLearnable$ = this.primaryAttributeLevels$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(primaryAttributeLevels => primaryAttributeLevels.find(attributeLevel => attributeLevel.attribute.id === "memory").level), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(skillsLearnable => console.debug({ skillsLearnable })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
        this.skillsPointsAvailable$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.level$,
            this.secondaryAttributeLevels$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([characterLevel, secondaryAttributeLevels]) => {
            const insightLevel = secondaryAttributeLevels.find(attributeLevel => attributeLevel.attribute.id === "insight").level;
            return this.levelService.getSkillsPointsAvailable(characterLevel, insightLevel);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(skillsPointsAvailable => console.debug({ skillsPointsAvailable })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
        this.skillLevels$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.skillLevels$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.skillLevels$$,
            this.skillsLearnable$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([skillLevels, skillsLearnable]) => {
            if (skillsLearnable < skillLevels.length) {
                return skillLevels.slice(0, skillsLearnable);
            }
            return skillLevels;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(skillLevels => console.debug({ skillLevels })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
        this.skillsUnknown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.settingService.skills$,
            this.skillLevels$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([skills, skillLevels]) => {
            const learnedSkillIds = new Set(skillLevels.map(sl => sl.skill.id));
            return skills.filter(skill => !learnedSkillIds.has(skill.id));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(skillsUnknown => console.debug({ skillsUnknown })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
        this.talents$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.talents$ = this.talents$$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(talents => console.debug({ talents })));
        this.talentsUnknown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.settingService.talents$,
            this.talents$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([allTalents, learnedTalents]) => {
            const learnedTalentIds = new Set(learnedTalents.map(talent => talent.id));
            return allTalents.filter(talent => !learnedTalentIds.has(talent.id));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(talentsUnknown => console.debug({ talentsUnknown })));
        this.skillPointsSpent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.skillLevels$,
            this.talents$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([skillLevels, talents]) => {
            let spent = 0;
            if (skillLevels.length > 0) {
                spent += skillLevels
                    .map(sl => sl.level)
                    .map(level => this.levelService.getCumulativeSkillLevelCost(level))
                    .reduce((total, value) => total + value);
            }
            if (talents.length > 0) {
                spent += talents.map(t => t.cost)
                    .reduce((total, value) => total + value);
            }
            return spent;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(skillPointsSpent => console.debug({ skillPointsSpent })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
        this.character$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.level$,
            this.primaryAttributeLevels$,
            this.secondaryAttributeLevels$,
            this.skillLevels$,
            this.talents$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([level, primaryAttributeLevels, secondaryAttributeLevels, skillLevels, talents]) => {
            return new _model_character_character__WEBPACK_IMPORTED_MODULE_0__["default"](level, primaryAttributeLevels, secondaryAttributeLevels, skillLevels, talents);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(character => console.debug({ character })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.subscriptions.add(this.settingService.setting$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(setting => {
            this.setting = setting;
            this.createCharacter();
        }));
        this.subscriptions.add(this.character$
            .subscribe(character => this.character = character));
        this.subscriptions.add(this.skillsLearnable$
            .subscribe(skillsLearnable => this.skillsLearnable = skillsLearnable));
    }
    createCharacter() {
        const primaryAttributeLevels = this.setting.attributes.primary
            .map(attribute => new _model_character_primary_attribute_level__WEBPACK_IMPORTED_MODULE_1__["default"](attribute, 10));
        this.level$$.next(1);
        this.primaryAttributeLevels$$.next(primaryAttributeLevels);
        this.skillLevels$$.next([]);
        this.talents$$.next([]);
    }
    updateCharacterLevel(level) {
        if (level < 0 || level > 20)
            return;
        this.level$$.next(level);
    }
    updatePrimaryAttributeLevel(update) {
        const level = update.level;
        const id = update.attribute.id;
        console.info("update primary attribute", { id, level });
        if (level < 0 || level > 20)
            return;
        const primaryAttributeLevels = this.character.primaryAttributeLevels;
        const index = primaryAttributeLevels.findIndex(attributeLevel => attributeLevel.attribute.id === id);
        primaryAttributeLevels[index] = update;
        this.primaryAttributeLevels$$.next(primaryAttributeLevels);
    }
    learnSkill(skill) {
        console.info("learn skill", skill.id);
        if (this.character.skillLevels.length >= this.skillsLearnable)
            return;
        const skillLevel = new _model_character_skill_level__WEBPACK_IMPORTED_MODULE_5__["default"](skill, 0);
        const skillLevels = [...this.character.skillLevels, skillLevel];
        this.skillLevels$$.next(skillLevels);
    }
    unlearnSkill(skill) {
        const id = skill.id;
        console.info("unlearn skill", id);
        const skillLevels = this.character.skillLevels.filter(sl => sl.skill.id !== id);
        this.skillLevels$$.next(skillLevels);
    }
    updateSkillLevel(update) {
        const level = update.level;
        const id = update.skill.id;
        console.info("update skill level", { id, level });
        if (level < 0 || level > 7)
            return;
        const index = this.character.skillLevels.findIndex(sl => sl.skill.id === id);
        const skillLevels = this.character.skillLevels;
        skillLevels[index] = update;
        this.skillLevels$$.next(skillLevels);
    }
    learnTalent(talent) {
        console.info("learn talent", talent.id);
        const talents = [...this.character.talents, talent];
        this.talents$$.next(talents);
    }
    unlearnTalent(talent) {
        const id = talent.id;
        console.info("unlearn talent", id);
        const talents = this.character.talents.filter(t => t.id !== id);
        this.talents$$.next(talents);
    }
    calculateSecondaryAttributeLevels(secondaryAttributes, primaryAttributeLevels) {
        return secondaryAttributes.map(attribute => {
            const dependencies = attribute.dependencies.map(dependency => primaryAttributeLevels.find(attributeLevel => dependency.id === attributeLevel.attribute.id));
            const level = dependencies.map(attributeLevel => attributeLevel.level)
                .reduce((total, value) => total += value)
                / dependencies.length;
            return new _model_character_secondary_attribute_level__WEBPACK_IMPORTED_MODULE_2__["default"](attribute, level);
        });
    }
}
CharacterService.ɵfac = function CharacterService_Factory(t) { return new (t || CharacterService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_setting_service__WEBPACK_IMPORTED_MODULE_7__["SettingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_level_service__WEBPACK_IMPORTED_MODULE_8__["LevelService"])); };
CharacterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: CharacterService, factory: CharacterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fIzE":
/*!*********************************************************************!*\
  !*** ./src/app/character-editor/model/character/attribute-level.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AttributeLevel; });
class AttributeLevel {
    constructor(attribute, level) {
        this.attribute = attribute;
        this.level = level;
    }
}


/***/ }),

/***/ "gOIg":
/*!*************************************************************************************************************!*\
  !*** ./src/app/character-editor/components/talent-editor/components/talent-input/talent-input.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: TalentInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentInputComponent", function() { return TalentInputComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_character_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/character.service */ "cCl1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TalentInputComponent_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const requirement_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", requirement_r4.name, " ", requirement_r4.level, "");
} }
function TalentInputComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TalentInputComponent_div_10_ng_container_1_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.talent.requirements.attributes);
} }
function TalentInputComponent_div_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const requirement_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", requirement_r6.name, " ", requirement_r6.level, "");
} }
function TalentInputComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TalentInputComponent_div_11_ng_container_1_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.talent.requirements.skills);
} }
function TalentInputComponent_div_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const requirement_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](requirement_r8.name);
} }
function TalentInputComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TalentInputComponent_div_12_ng_container_1_Template, 3, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.talent.requirements.talents);
} }
class TalentInputComponent {
    constructor(characterService) {
        this.characterService = characterService;
        this.disabled$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([
            this.characterService.primaryAttributeLevels$,
            this.characterService.secondaryAttributeLevels$,
            this.characterService.skillLevels$,
            this.characterService.talents$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(([primaryAttributeLevels, secondaryAttributeLevels, skillLevels, talents]) => {
            const allAttributes = [...primaryAttributeLevels, ...secondaryAttributeLevels];
            const attributesMissing = this.talent.requirements.attributes.length > 0
                ? this.talent.requirements.attributes
                    .map(r => allAttributes.find(a => a.attribute.id === r.id).level < r.level)
                    .some(disabled => disabled)
                : false;
            return attributesMissing;
        }));
    }
    ngOnInit() {
    }
}
TalentInputComponent.ɵfac = function TalentInputComponent_Factory(t) { return new (t || TalentInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_character_service__WEBPACK_IMPORTED_MODULE_3__["CharacterService"])); };
TalentInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TalentInputComponent, selectors: [["newera-talent-input"]], inputs: { talent: "talent" }, decls: 13, vars: 11, consts: [[1, "talent", 3, "id"], [1, "talent-header"], [1, "innate"], [1, "cost"], [1, "talent-requirements"], ["class", "talent-requirements-category", 4, "ngIf"], [1, "talent-requirements-category"], [4, "ngFor", "ngForOf"], [1, "talent-requirement"]], template: function TalentInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TalentInputComponent_div_10_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, TalentInputComponent_div_11_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TalentInputComponent_div_12_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 9, ctx.disabled$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.talent.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.talent.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.talent.innate ? "angeboren" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.talent.cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.talent.requirements.attributes.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.talent.requirements.skills.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.talent.requirements.talents.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".talent-header {\n  display: grid;\n  grid-template-columns: -webkit-max-content auto 6ch 3ch;\n  grid-template-columns: max-content auto 6ch 3ch;\n}\n\n.disabled {\n  background-color: grey;\n}\n\n.innate {\n  font-size: 75%;\n}\n\n.innate, .cost {\n  justify-self: flex-end;\n}\n\n.talent-requirements {\n  font-size: 75%;\n  flex-wrap: wrap;\n  width: 75%;\n}\n\n.talent-requirement:not(:last-child):after {\n  content: \",\";\n  margin-right: 0.5ch;\n}\n\n.label:after {\n  margin-right: 1ch;\n}\n\n.label:after {\n  content: \":\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RhbGVudC1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1REFBQTtFQUFBLCtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtBQUVGIiwiZmlsZSI6InRhbGVudC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWxlbnQtaGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCBhdXRvIDZjaCAzY2g7XG59XG5cbi5kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi5pbm5hdGUge1xuICBmb250LXNpemU6IDc1JTtcbn1cblxuLmlubmF0ZSwgLmNvc3Qge1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xufVxuXG4udGFsZW50LXJlcXVpcmVtZW50cyB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi50YWxlbnQtcmVxdWlyZW1lbnQ6bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiLFwiO1xuICBtYXJnaW4tcmlnaHQ6IDAuNWNoO1xufVxuXG4ubGFiZWw6YWZ0ZXIge1xuICBtYXJnaW4tcmlnaHQ6IDFjaDtcbn1cbi5sYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiOlwiO1xufVxuXG4iXX0= */"], encapsulation: 3 });


/***/ }),

/***/ "n0Gt":
/*!**********************************************************************************!*\
  !*** ./src/app/character-editor/components/level-input/level-input.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LevelInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelInputComponent", function() { return LevelInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_character_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/character.service */ "cCl1");


class LevelInputComponent {
    constructor(characterService) {
        this.characterService = characterService;
        ;
        this.subscription = this.characterService.level$
            .subscribe(level => this.level = level);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    incrementLevel() {
        this.characterService.updateCharacterLevel(this.level + 1);
    }
    decrementLevel() {
        this.characterService.updateCharacterLevel(this.level - 1);
    }
}
LevelInputComponent.ɵfac = function LevelInputComponent_Factory(t) { return new (t || LevelInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_character_service__WEBPACK_IMPORTED_MODULE_1__["CharacterService"])); };
LevelInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LevelInputComponent, selectors: [["newera-level-input"]], decls: 8, vars: 3, consts: [[3, "disabled", "click"]], template: function LevelInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Charakterstufe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LevelInputComponent_Template_button_click_4_listener() { return ctx.incrementLevel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LevelInputComponent_Template_button_click_6_listener() { return ctx.decrementLevel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.level);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.level >= 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.level <= 0);
    } }, styles: [":host {\n  display: grid;\n  grid-template-columns: repeat(4, -webkit-min-content);\n  grid-template-columns: repeat(4, min-content);\n  grid-column-gap: 1ch;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xldmVsLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHFEQUFBO0VBQUEsNkNBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoibGV2ZWwtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbi1jb250ZW50KTtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxY2g7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuIl19 */"], encapsulation: 3 });


/***/ }),

/***/ "od5B":
/*!*************************************************************!*\
  !*** ./src/app/character-editor/character-editor.module.ts ***!
  \*************************************************************/
/*! exports provided: CharacterEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterEditorModule", function() { return CharacterEditorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _character_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character-editor.component */ "bafx");
/* harmony import */ var _components_attribute_editor_attribute_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/attribute-editor/attribute-editor.component */ "Jn76");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_attribute_editor_components_primary_attribute_input_primary_attribute_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/attribute-editor/components/primary-attribute-input/primary-attribute-input.component */ "3q1C");
/* harmony import */ var _components_attribute_editor_components_secondary_attribute_input_secondary_attribute_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/attribute-editor/components/secondary-attribute-input/secondary-attribute-input.component */ "xl/6");
/* harmony import */ var _components_level_input_level_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/level-input/level-input.component */ "n0Gt");
/* harmony import */ var _components_skill_editor_skill_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/skill-editor/skill-editor.component */ "bnUY");
/* harmony import */ var _components_talent_editor_talent_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/talent-editor/talent-editor.component */ "MpUk");
/* harmony import */ var _components_talent_editor_components_talent_input_talent_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/talent-editor/components/talent-input/talent-input.component */ "gOIg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class CharacterEditorModule {
}
CharacterEditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: CharacterEditorModule });
CharacterEditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function CharacterEditorModule_Factory(t) { return new (t || CharacterEditorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](CharacterEditorModule, { declarations: [_character_editor_component__WEBPACK_IMPORTED_MODULE_1__["CharacterEditorComponent"], _components_attribute_editor_attribute_editor_component__WEBPACK_IMPORTED_MODULE_2__["AttributeEditorComponent"], _components_level_input_level_input_component__WEBPACK_IMPORTED_MODULE_6__["LevelInputComponent"], _components_attribute_editor_components_primary_attribute_input_primary_attribute_input_component__WEBPACK_IMPORTED_MODULE_4__["PrimaryAttributeInputComponent"], _components_attribute_editor_components_secondary_attribute_input_secondary_attribute_input_component__WEBPACK_IMPORTED_MODULE_5__["SecondaryAttributeInputComponent"], _components_level_input_level_input_component__WEBPACK_IMPORTED_MODULE_6__["LevelInputComponent"], _components_skill_editor_skill_editor_component__WEBPACK_IMPORTED_MODULE_7__["SkillEditorComponent"], _components_talent_editor_talent_editor_component__WEBPACK_IMPORTED_MODULE_8__["TalentEditorComponent"], _components_talent_editor_components_talent_input_talent_input_component__WEBPACK_IMPORTED_MODULE_9__["TalentInputComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]], exports: [_character_editor_component__WEBPACK_IMPORTED_MODULE_1__["CharacterEditorComponent"]] }); })();


/***/ }),

/***/ "qpvx":
/*!************************************************************!*\
  !*** ./src/app/character-editor/services/level.service.ts ***!
  \************************************************************/
/*! exports provided: LevelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelService", function() { return LevelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LevelService {
    constructor() {
        this.skillLevelCost = [0, 1, 2, 3, 4, 6, 8, 10];
        this.cumulativeSkillLevelCost = cumulative(this.skillLevelCost);
        const attributeLevelCost = [1, 2, 3, 4, 6, 8, 10, 13, 16, 20];
        const cumulativeAttributeLevelCost = cumulative(attributeLevelCost);
        this.attributeLevelCost = mirrored(attributeLevelCost);
        this.cumulativeAttributeLevelCost = mirrored(cumulativeAttributeLevelCost);
        console.info(this);
    }
    getCumulativeAttributeLevelCost(level) {
        return this.cumulativeAttributeLevelCost[level];
    }
    getSkillsPointsAvailable(characterLevel, insightLevel) {
        return 10 + insightLevel + insightLevel * characterLevel;
    }
    getCumulativeSkillLevelCost(level) {
        return this.cumulativeSkillLevelCost[level];
    }
    getAvailableAttributePoints(level, heroic) {
        if (level <= 0)
            return 0;
        const byLevel = (level * (level + 1)) / 2;
        if (heroic) {
            return byLevel + 4;
        }
        else {
            return byLevel;
        }
    }
}
LevelService.ɵfac = function LevelService_Factory(t) { return new (t || LevelService)(); };
LevelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LevelService, factory: LevelService.ɵfac, providedIn: 'root' });
function cumulative(values) {
    const cumulative = [];
    let total = 0;
    values.forEach(value => {
        total += value;
        cumulative.push(total);
    });
    return cumulative;
}
function mirrored(values, center = 0) {
    const mirrored = [];
    const copy = [...values];
    copy.reverse();
    mirrored.push(...copy.map(v => -v));
    mirrored.push(center);
    copy.reverse();
    mirrored.push(...copy);
    return mirrored;
}


/***/ }),

/***/ "w2CN":
/*!***************************************************************!*\
  !*** ./src/app/character-editor/model/character/character.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Character; });
class Character {
    constructor(level, primaryAttributeLevels, secondaryAttributeLevels, skillLevels, talents) {
        this.level = level;
        this.primaryAttributeLevels = primaryAttributeLevels;
        this.secondaryAttributeLevels = secondaryAttributeLevels;
        this.skillLevels = skillLevels;
        this.talents = talents;
    }
}


/***/ }),

/***/ "xl/6":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/character-editor/components/attribute-editor/components/secondary-attribute-input/secondary-attribute-input.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: SecondaryAttributeInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryAttributeInputComponent", function() { return SecondaryAttributeInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SecondaryAttributeInputComponent {
    constructor() { }
    ngOnInit() {
    }
}
SecondaryAttributeInputComponent.ɵfac = function SecondaryAttributeInputComponent_Factory(t) { return new (t || SecondaryAttributeInputComponent)(); };
SecondaryAttributeInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecondaryAttributeInputComponent, selectors: [["newera-secondary-attribute-input"]], inputs: { attributeLevel: "attributeLevel" }, decls: 5, vars: 3, consts: [[3, "id"]], template: function SecondaryAttributeInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.attributeLevel.attribute.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.attributeLevel.attribute.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.attributeLevel.level);
    } }, styles: [":host > div {\n  display: grid;\n  grid-template-columns: 12ch 3ch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NlY29uZGFyeS1hdHRyaWJ1dGUtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7QUFDRiIsImZpbGUiOiJzZWNvbmRhcnktYXR0cmlidXRlLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgPiBkaXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEyY2ggM2NoO1xufVxuIl19 */"], encapsulation: 3 });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
    defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].ShadowDom
})
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map