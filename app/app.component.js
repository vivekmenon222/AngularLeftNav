"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var leftmenu_component_1 = require('./leftmenu/leftmenu.component');
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'APP COMPONENT TITLE';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n<table width=\"90%;\" style=\"height:100%\"  border=\"1\">\n    <tr style=\"text-align:center;height: 100px;\">\n        <td colspan=\"2\">{{pageTitle}}</td>\n    </tr>\n    <tr style=\"text-align:center;height:100%;\">\n        <td valign=\"top\" style=\"width: 100px;height:100%;background-color: yellow\">\n       <left-menu></left-menu>\n\n        </td>\n        <td>main page</td>\n    </tr>\n</table>\n     ",
            directives: [leftmenu_component_1.LeftMenu]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map