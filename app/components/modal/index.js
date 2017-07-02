"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var modal_component_1 = require("./modal.component");
var ModalModule = (function () {
    function ModalModule() {
    }
    return ModalModule;
}());
ModalModule = __decorate([
    core_1.NgModule({
        declarations: [modal_component_1.ModalComponent],
        exports: [modal_component_1.ModalComponent],
        bootstrap: [modal_component_1.ModalComponent],
        imports: [nativescript_module_1.NativeScriptModule],
        providers: [modal_dialog_1.ModalDialogService],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], ModalModule);
exports.ModalModule = ModalModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsa0VBQXVFO0FBQ3ZFLHFEQUFtRDtBQVVuRCxJQUFhLFdBQVc7SUFBeEI7SUFBMkIsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQUE1QixJQUE0QjtBQUFmLFdBQVc7SUFSdkIsZUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUUsZ0NBQWMsQ0FBRTtRQUNoQyxPQUFPLEVBQUUsQ0FBRSxnQ0FBYyxDQUFFO1FBQzNCLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7UUFDM0IsT0FBTyxFQUFFLENBQUUsd0NBQWtCLENBQUU7UUFDL0IsU0FBUyxFQUFFLENBQUUsaUNBQWtCLENBQUU7UUFDakMsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7S0FDNUIsQ0FBQztHQUNXLFdBQVcsQ0FBSTtBQUFmLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vbW9kYWwuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogWyBNb2RhbENvbXBvbmVudCBdLFxuICBleHBvcnRzOiBbIE1vZGFsQ29tcG9uZW50IF0sXG4gIGJvb3RzdHJhcDogW01vZGFsQ29tcG9uZW50XSxcbiAgaW1wb3J0czogWyBOYXRpdmVTY3JpcHRNb2R1bGUgXSxcbiAgcHJvdmlkZXJzOiBbIE1vZGFsRGlhbG9nU2VydmljZSBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxNb2R1bGUgeyB9XG4iXX0=