import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CreateComponent } from './create.component';
import { PeriodModalComponent } from './period-modal.component';
import { DateModalComponent } from './date-modal.component';
import { ActiveRouteModule } from './create-route.module';
import { SlidesModule } from 'nativescript-ngx-slides';
import { NSGradientDirectiveModule } from "nativescript-ng-gradient";

@NgModule({
  declarations: [
    CreateComponent,
    DateModalComponent,
    DateModalComponent,
    PeriodModalComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    ActiveRouteModule,
    NSGradientDirectiveModule,
    SlidesModule
  ],
  exports: [CreateComponent],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [DateModalComponent, PeriodModalComponent],
  providers: []
})
export class CreateModule { }
