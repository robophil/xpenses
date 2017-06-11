import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { InfoComponent } from './info.component';
import { InfoRouteModule } from './info-route.module';

@NgModule({
    declarations: [InfoComponent],
    imports: [NativeScriptModule, NativeScriptFormsModule, InfoRouteModule],
    exports: [InfoComponent],
    schemas: [NO_ERRORS_SCHEMA],
    providers: []
})
export class InfoModule {

}
