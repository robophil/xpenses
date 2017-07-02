"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var CreateModalComponent = (function () {
    function CreateModalComponent(params) {
        this.params = params;
    }
    CreateModalComponent.prototype.onSelect = function (value) {
        this.params.closeCallback(value);
    };
    return CreateModalComponent;
}());
CreateModalComponent = __decorate([
    core_1.Component({
        selector: "category-create-modal",
        template: "\n    <StackLayout class=\"form p-15 m-b-20\" width=\"90%\">\n\n      <label class=\"h5 text-center text-muted m-y-10\" text=\"Category name\"></label>\n\n      <StackLayout orientation=\"horizontal\" class=\"input-field\">\n        <label class=\"mdi text-center text-muted\" text=\"&#xE065;\"></label>\n        <TextField class=\"input p-y-10 p-x-5\" #field autocorrect=\"true\" returnKeyType=\"done\" (returnPress)=\"onSelect(field.text)\"></TextField>\n      </StackLayout>\n\n    </StackLayout>\n  ",
        styles: ["\n    .input-field {\n      margin: 20 0;\n    }\n\n    .input-field Label {\n      font-size: 20;\n      padding: 5;\n    }\n\n    .input-field TextField {\n      font-size: 30;\n      width: 100%;\n      margin: 0;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
], CreateModalComponent);
exports.CreateModalComponent = CreateModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsbUVBQTRFO0FBaUM1RSxJQUFhLG9CQUFvQjtJQUMvQiw4QkFBMkIsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7SUFDcEQsQ0FBQztJQUVELHVDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSxvQkFBb0I7SUEvQmhDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLFFBQVEsRUFBRSx5ZkFXVDtRQUNELE1BQU0sRUFBRSxDQUFDLHFPQWVSLENBQUM7S0FDSCxDQUFDO3FDQUVtQywyQkFBaUI7R0FEekMsb0JBQW9CLENBT2hDO0FBUFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJjYXRlZ29yeS1jcmVhdGUtbW9kYWxcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmb3JtIHAtMTUgbS1iLTIwXCIgd2lkdGg9XCI5MCVcIj5cblxuICAgICAgPGxhYmVsIGNsYXNzPVwiaDUgdGV4dC1jZW50ZXIgdGV4dC1tdXRlZCBtLXktMTBcIiB0ZXh0PVwiQ2F0ZWdvcnkgbmFtZVwiPjwvbGFiZWw+XG5cbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cIm1kaSB0ZXh0LWNlbnRlciB0ZXh0LW11dGVkXCIgdGV4dD1cIiYjeEUwNjU7XCI+PC9sYWJlbD5cbiAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0IHAteS0xMCBwLXgtNVwiICNmaWVsZCBhdXRvY29ycmVjdD1cInRydWVcIiByZXR1cm5LZXlUeXBlPVwiZG9uZVwiIChyZXR1cm5QcmVzcyk9XCJvblNlbGVjdChmaWVsZC50ZXh0KVwiPjwvVGV4dEZpZWxkPlxuICAgICAgPC9TdGFja0xheW91dD5cblxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICAuaW5wdXQtZmllbGQge1xuICAgICAgbWFyZ2luOiAyMCAwO1xuICAgIH1cblxuICAgIC5pbnB1dC1maWVsZCBMYWJlbCB7XG4gICAgICBmb250LXNpemU6IDIwO1xuICAgICAgcGFkZGluZzogNTtcbiAgICB9XG5cbiAgICAuaW5wdXQtZmllbGQgVGV4dEZpZWxkIHtcbiAgICAgIGZvbnQtc2l6ZTogMzA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZU1vZGFsQ29tcG9uZW50IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xuICB9XG5cbiAgb25TZWxlY3QodmFsdWUpIHtcbiAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHZhbHVlKTtcbiAgfVxufVxuIl19