import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { ActiveComponent } from './active.component';
import { CycleComponent } from './cycle/cycle.component';
import { ActiveRouteModule } from './active-route.module';
import { SlidesModule } from 'nativescript-ngx-slides';
import { ActiveCreateComponent } from './create/create.component';
import { ActiveViewComponent } from './view/view.component';
import { ActiveSlidesComponent } from './slides/slides.component';
import { ActiveOpenComponent } from './open/open.component';

@NgModule({
  declarations: [
    ActiveComponent,
    CycleComponent,
    ActiveCreateComponent,
    ActiveOpenComponent,
    ActiveViewComponent,
    ActiveSlidesComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    ActiveRouteModule,
    SlidesModule
  ],
  exports: [ActiveComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: []
})
export class ActiveModule { }
