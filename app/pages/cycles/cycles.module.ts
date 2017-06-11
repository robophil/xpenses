import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CyclesComponent } from './cycles.component';
import { CyclesRouteModule } from './cycles-route.module';

@NgModule({
    declarations: [CyclesComponent],
    imports: [NativeScriptModule, NativeScriptFormsModule, CyclesRouteModule],
    exports: [CyclesComponent],
    schemas: [NO_ERRORS_SCHEMA],
    providers: []
})
export class CyclesModule {

}
