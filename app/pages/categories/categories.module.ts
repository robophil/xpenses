import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CategoriesComponent } from './categories.component';
import { CategoriesRouteModule } from './categories-route.module';
import { ModalModule } from './../../components/modal';
import { CreateModalComponent } from './create-modal.component';

@NgModule({
    declarations: [
      CategoriesComponent,
      CreateModalComponent,
    ],
    imports: [
      NativeScriptModule,
      NativeScriptFormsModule,
      ModalModule,
      CategoriesRouteModule
    ],
    exports: [CategoriesComponent],
    schemas: [NO_ERRORS_SCHEMA],
    entryComponents: [CreateModalComponent],
    providers: []
})
export class CategoriesModule {

}
