import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CategoriesComponent } from './categories.component';
import { CategoriesRouteModule } from './categories-route.module';

@NgModule({
    declarations: [CategoriesComponent],
    imports: [NativeScriptModule, NativeScriptFormsModule, CategoriesRouteModule],
    exports: [CategoriesComponent],
    schemas: [NO_ERRORS_SCHEMA],
    providers: []
})
export class CategoriesModule {

}
