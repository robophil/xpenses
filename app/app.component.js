"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_swiss_army_knife_1 = require("nativescript-swiss-army-knife");
// registerElement('Ripple', () => require('nativescript-ripple').Ripple);
element_registry_1.registerElement('BottomBar', function () { return require('nativescript-bottombar').BottomBar; });
element_registry_1.registerElement('CardView', function () { return require('nativescript-cardview').CardView; });
element_registry_1.registerElement('Fab', function () { return require('nativescript-floatingactionbutton').Fab; });
var AppComponent = (function () {
    function AppComponent() {
        this.showDebugger = true;
        this.title = "xPenses";
        this.currentPage = 'active';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.ngAfterViewInit = function () {
        nativescript_swiss_army_knife_1.SwissArmyKnife.setAndroidStatusBarColor('#a90040');
    };
    AppComponent.prototype.ngOnDestroy = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "./app.component.html",
        styleUrls: ['./app.css'],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkc7QUFHM0csMEVBQXdFO0FBRXhFLCtFQUErRDtBQUUvRCwwRUFBMEU7QUFDMUUsa0NBQWUsQ0FBQyxXQUFXLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLFNBQVMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDO0FBQ2hGLGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUM3RSxrQ0FBZSxDQUFDLEtBQUssRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsR0FBRyxFQUFoRCxDQUFnRCxDQUFDLENBQUM7QUFPL0UsSUFBYSxZQUFZO0lBTHpCO1FBTVMsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUVqQixnQkFBVyxHQUFXLFFBQVEsQ0FBQztJQVN6QyxDQUFDO0lBUEMsK0JBQVEsR0FBUixjQUFZLENBQUM7SUFFYixzQ0FBZSxHQUFmO1FBQ0UsOENBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsa0NBQVcsR0FBWCxjQUFnQixDQUFDO0lBQ25CLG1CQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxZQUFZO0lBTHhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQztLQUN6QixDQUFDO0dBQ1csWUFBWSxDQWF4QjtBQWJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCB7IFN3aXNzQXJteUtuaWZlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXN3aXNzLWFybXkta25pZmUnO1xuXG4vLyByZWdpc3RlckVsZW1lbnQoJ1JpcHBsZScsICgpID0+IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1yaXBwbGUnKS5SaXBwbGUpO1xucmVnaXN0ZXJFbGVtZW50KCdCb3R0b21CYXInLCAoKSA9PiByZXF1aXJlKCduYXRpdmVzY3JpcHQtYm90dG9tYmFyJykuQm90dG9tQmFyKTtcbnJlZ2lzdGVyRWxlbWVudCgnQ2FyZFZpZXcnLCAoKSA9PiByZXF1aXJlKCduYXRpdmVzY3JpcHQtY2FyZHZpZXcnKS5DYXJkVmlldyk7XG5yZWdpc3RlckVsZW1lbnQoJ0ZhYicsICgpID0+IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1mbG9hdGluZ2FjdGlvbmJ1dHRvbicpLkZhYik7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBzaG93RGVidWdnZXIgPSB0cnVlO1xuICBwdWJsaWMgdGl0bGUgPSBcInhQZW5zZXNcIjtcbiAgcHJpdmF0ZSBwYWdlOiBQYWdlO1xuICBwcml2YXRlIGN1cnJlbnRQYWdlOiBzdHJpbmcgPSAnYWN0aXZlJztcblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIFN3aXNzQXJteUtuaWZlLnNldEFuZHJvaWRTdGF0dXNCYXJDb2xvcignI2E5MDA0MCcpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7IH1cbn1cbiJdfQ==