"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var simulator_component_1 = require("./simulator.component");
var form_component_1 = require("./input-form/form.component");
var SimulatorModule = (function () {
    function SimulatorModule() {
    }
    return SimulatorModule;
}());
SimulatorModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            animations_1.NoopAnimationsModule,
            material_1.MdButtonModule,
            material_1.MdMenuModule,
            material_1.MdCardModule,
            material_1.MdToolbarModule,
            material_1.MdIconModule
        ],
        declarations: [simulator_component_1.SimulatorComponent, form_component_1.SimFormComponent],
        exports: [simulator_component_1.SimulatorComponent, form_component_1.SimFormComponent],
    })
], SimulatorModule);
exports.SimulatorModule = SimulatorModule;
//# sourceMappingURL=simulator.module.js.map