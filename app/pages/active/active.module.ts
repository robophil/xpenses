import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { ActiveComponent } from './active.component';
import { ActiveRouteModule } from './active-route.module';

@NgModule({
    declarations: [ActiveComponent],
    imports: [NativeScriptModule, NativeScriptFormsModule, ActiveRouteModule],
    exports: [ActiveComponent],
    schemas: [NO_ERRORS_SCHEMA],
    providers: []
})
export class ActiveModule {

}
