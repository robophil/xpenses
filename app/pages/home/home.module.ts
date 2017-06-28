import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { HomeComponent } from './home.component';
import { HomeRouteModule } from './home-route.module';
import { NSGradientDirectiveModule } from "nativescript-ng-gradient";

@NgModule({
    declarations: [HomeComponent],
    imports: [
      NativeScriptModule,
      NativeScriptFormsModule,
      HomeRouteModule,
      NSGradientDirectiveModule
    ],
    exports: [HomeComponent],
    schemas: [NO_ERRORS_SCHEMA],
    providers: []
})
export class HomeModule {

}
