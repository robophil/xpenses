"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var element_registry_1 = require("nativescript-angular/element-registry");
var gestures_1 = require("ui/gestures");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/observable/of");
require("rxjs/add/observable/range");
require("rxjs/add/operator/do");
element_registry_1.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
element_registry_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
var AppComponent = (function () {
    function AppComponent(fonticon, zone) {
        this.fonticon = fonticon;
        this.zone = zone;
        this.suffix = 'K';
        this.isShowMenu = false;
        this.isShowTop = false;
    }
    AppComponent.prototype.showMenu = function () {
        this.isShowMenu = !this.isShowMenu;
    };
    AppComponent.prototype.format = function (input) {
        var suffix = input > 1000000 ? 'M' : 'K';
        var count = (input > 1000000 ? input / 1000000 : input / 1000).toFixed(1);
        return { count: count, suffix: suffix };
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.expenses = { count: 12, suffix: 'k' };
        this.budget = { count: 12, suffix: 'k' };
        this.data$ = Observable_1.Observable.of(10).map(function (i) {
            var data = [];
            for (i; i > 0; i--) {
                var rand = function () { return Math.floor(Math.random() * 1000); };
                var expense = _this.format(rand() * i);
                var budget = _this.format(rand() * i);
                data.push({ expense: expense, budget: budget });
            }
            return data;
        });
        // .do(x => console.dir(x))
        // .subscribe();
        this.cardUi.nativeElement.on(gestures_1.GestureTypes.swipe, function (args) {
            /**
             * 8 - down
             * 4 - up
             * 2 - right
             * 1 - left
             */
            _this.zone.run(function () { return 0; });
            if (args.direction === 8) {
                _this.isShowTop = true;
            }
            else if (args.direction === 4) {
                _this.isShowTop = false;
            }
            console.log("Swipe Direction: " + args.direction, _this.isShowTop);
        });
        // this.page = <Page>topmost().currentPage;
        // this.page.actionBarHidden = true;
        // this.page.statusBarStyle = 'dark';
        // console.dir(this.page);
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('card'),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "cardUi", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "app.component.html",
        styleUrls: ['./app.css'],
        animations: [
            animations_1.trigger('slideUp', [
                animations_1.state('active', animations_1.style({ opacity: 1, transform: 'translateY(0%)', height: '*' })),
                animations_1.state('inactive', animations_1.style({ opacity: 0, transform: 'translateY(100%)', height: 0 })),
                animations_1.transition('active <=> inactive', [animations_1.animate('750ms cubic-bezier(0.44, 1.49, 1, 1)')]),
            ])
        ]
    }),
    __metadata("design:paramtypes", [nativescript_ngx_fonticon_1.TNSFontIconService, core_1.NgZone])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUY7QUFDakYsa0RBQWlGO0FBR2pGLDBFQUF3RTtBQUN4RSx3Q0FBa0U7QUFDbEUsdUVBQStEO0FBRS9ELDhDQUE2QztBQUM3QyxpQ0FBK0I7QUFDL0Isa0NBQWdDO0FBQ2hDLHFDQUFtQztBQUNuQyxnQ0FBOEI7QUFJOUIsa0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQzdFLGtDQUFlLENBQUMsS0FBSyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxHQUFHLEVBQWhELENBQWdELENBQUMsQ0FBQztBQWMvRSxJQUFhLFlBQVk7SUFhdkIsc0JBQW9CLFFBQTRCLEVBQVUsSUFBWTtRQUFsRCxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFYOUQsV0FBTSxHQUFXLEdBQUcsQ0FBQztRQUtyQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFLc0MsQ0FBQztJQUUxRSwrQkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDckMsQ0FBQztJQUVELDZCQUFNLEdBQU4sVUFBTyxLQUFLO1FBQ1YsSUFBTSxNQUFNLEdBQUcsS0FBSyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNDLElBQU0sS0FBSyxHQUFHLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxLQUFLLEdBQUcsT0FBTyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsTUFBTSxD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LEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2xGLHVCQUFVLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxvQkFBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQzthQUNyRixDQUFDO1NBQ0g7S0FDRixDQUFDO3FDQWM4Qiw4Q0FBa0IsRUFBZ0IsYUFBTTtHQWIzRCxZQUFZLENBbUV4QjtBQW5FWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBzdGF0ZSwgc3R5bGUsIGFuaW1hdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMsIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XG5pbXBvcnQgeyBTbGlkZVVwRG93biB9IGZyb20gJy4vYW5pbWF0aW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9yYW5nZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcblxuXG5cbnJlZ2lzdGVyRWxlbWVudChcIkNhcmRWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIikuQ2FyZFZpZXcpO1xucmVnaXN0ZXJFbGVtZW50KFwiRmFiXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZmxvYXRpbmdhY3Rpb25idXR0b25cIikuRmFiKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc2xpZGVVcCcsIFtcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJywgaGVpZ2h0OiAnKicgfSkpLFxuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJywgaGVpZ2h0OiAwIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA8PT4gaW5hY3RpdmUnLCBbYW5pbWF0ZSgnNzUwbXMgY3ViaWMtYmV6aWVyKDAuNDQsIDEuNDksIDEsIDEpJyldKSxcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgcGFnZTogUGFnZTtcbiAgcHJpdmF0ZSBzdWZmaXg6IHN0cmluZyA9ICdLJztcbiAgcHJpdmF0ZSBkYXRhJDogT2JzZXJ2YWJsZTx7XG4gICAgZXhwZW5zZTogeyBjb3VudDogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyB9LFxuICAgIGJ1ZGdldDogeyBjb3VudDogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyB9XG4gIH1bXT47XG4gIHByaXZhdGUgaXNTaG93TWVudTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGlzU2hvd1RvcDogYm9vbGVhbiA9IGZhbHNlO1xuICBleHBlbnNlcztcbiAgYnVkZ2V0O1xuICBAVmlld0NoaWxkKCdjYXJkJykgY2FyZFVpOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgc2hvd01lbnUoKSB7XG4gICAgdGhpcy5pc1Nob3dNZW51ID0gIXRoaXMuaXNTaG93TWVudTtcbiAgfVxuXG4gIGZvcm1hdChpbnB1dCkge1xuICAgIGNvbnN0IHN1ZmZpeCA9IGlucHV0ID4gMTAwMDAwMCA/ICdNJyA6ICdLJztcbiAgICBjb25zdCBjb3VudCA9IChpbnB1dCA+IDEwMDAwMDAgPyBpbnB1dCAvIDEwMDAwMDAgOiBpbnB1dCAvIDEwMDApLnRvRml4ZWQoMSk7XG4gICAgcmV0dXJuIHsgY291bnQsIHN1ZmZpeCB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5leHBlbnNlcyA9IHsgY291bnQ6IDEyLCBzdWZmaXg6ICdrJyB9O1xuICAgIHRoaXMuYnVkZ2V0ID0geyBjb3VudDogMTIsIHN1ZmZpeDogJ2snIH07XG4gICAgdGhpcy5kYXRhJCA9IE9ic2VydmFibGUub2YoMTApLm1hcChpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcblxuICAgICAgZm9yKGk7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgcmFuZCA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICAgICAgICBjb25zdCBleHBlbnNlID0gdGhpcy5mb3JtYXQocmFuZCgpICogaSk7XG4gICAgICAgIGNvbnN0IGJ1ZGdldCA9IHRoaXMuZm9ybWF0KHJhbmQoKSAqIGkpO1xuICAgICAgICBkYXRhLnB1c2goeyBleHBlbnNlLCBidWRnZXQgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pXG4gICAgLy8gLmRvKHggPT4gY29uc29sZS5kaXIoeCkpXG4gICAgLy8gLnN1YnNjcmliZSgpO1xuXG4gICAgdGhpcy5jYXJkVWkubmF0aXZlRWxlbWVudC5vbihHZXN0dXJlVHlwZXMuc3dpcGUsIChhcmdzOiBTd2lwZUdlc3R1cmVFdmVudERhdGEpID0+IHtcbiAgICAgIC8qKlxuICAgICAgICogOCAtIGRvd25cbiAgICAgICAqIDQgLSB1cFxuICAgICAgICogMiAtIHJpZ2h0XG4gICAgICAgKiAxIC0gbGVmdFxuICAgICAgICovXG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IDApO1xuXG4gICAgICBpZihhcmdzLmRpcmVjdGlvbiA9PT0gOCkge1xuICAgICAgICB0aGlzLmlzU2hvd1RvcCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGFyZ3MuZGlyZWN0aW9uID09PSA0KSB7XG4gICAgICAgIHRoaXMuaXNTaG93VG9wID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiU3dpcGUgRGlyZWN0aW9uOiBcIiArIGFyZ3MuZGlyZWN0aW9uLCB0aGlzLmlzU2hvd1RvcCk7XG4gICAgfSk7XG5cbiAgICAvLyB0aGlzLnBhZ2UgPSA8UGFnZT50b3Btb3N0KCkuY3VycmVudFBhZ2U7XG4gICAgLy8gdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgLy8gdGhpcy5wYWdlLnN0YXR1c0JhclN0eWxlID0gJ2RhcmsnO1xuICAgIC8vIGNvbnNvbGUuZGlyKHRoaXMucGFnZSk7XG4gIH1cbn1cbiJdfQ==