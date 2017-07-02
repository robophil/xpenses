import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { ActiveComponent } from './active.component';
import { ActiveRouteModule } from './active-route.module';
import { SlidesModule } from 'nativescript-ngx-slides';
import { ActiveViewComponent } from './view/view.component';
import { CycleComponent } from './view/cycle/cycle.component';
import { AddCategoryComponent } from "./view/add-category/add-category.component";
import { NSGradientDirectiveModule } from "nativescript-ng-gradient";
import { ModalModule } from './../../components/modal';
import { DropDownModule } from 'nativescript-drop-down/angular';

@NgModule({
  declarations: [
    ActiveComponent,
    CycleComponent,
    ActiveViewComponent,
    AddCategoryComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    ActiveRouteModule,
    NSGradientDirectiveModule,
    ModalModule,
    DropDownModule,
    SlidesModule
  ],
  exports: [ActiveComponent],
  entryComponents: [AddCategoryComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: []
})
export class ActiveModule { }
