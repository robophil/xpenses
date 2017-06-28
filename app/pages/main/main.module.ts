import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { MainComponent } from './main.component';
import { MainRouteModule } from './main-route.module';
import { NSGradientDirectiveModule } from "nativescript-ng-gradient";

@NgModule({
    declarations: [MainComponent],
    imports: [
      NativeScriptModule,
      NativeScriptFormsModule,
      MainRouteModule,
      NSGradientDirectiveModule
    ],
    exports: [MainComponent],
    schemas: [NO_ERRORS_SCHEMA],
    providers: []
})
export class MainModule {

}
