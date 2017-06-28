import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { ActiveComponent } from './active.component';
import { ActiveRouteModule } from './active-route.module';
import { SlidesModule } from 'nativescript-ngx-slides';
import { ActiveViewComponent } from './view/view.component';
import { CycleComponent } from './view/cycle/cycle.component';
import { ActiveSlidesComponent } from './view/slides/slides.component';
import { NSGradientDirectiveModule } from "nativescript-ng-gradient";

@NgModule({
  declarations: [
    ActiveComponent,
    CycleComponent,
    ActiveViewComponent,
    ActiveSlidesComponent,
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    ActiveRouteModule,
    NSGradientDirectiveModule,
    SlidesModule
  ],
  exports: [ActiveComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: []
})
export class ActiveModule { }
