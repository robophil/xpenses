import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CreateComponent } from './create.component';
import { PeriodModalComponent } from './period-modal.component';
import { ModalModule } from './../../components/modal';
import { DateModalComponent } from './date-modal.component';
import { ActiveRouteModule } from './create-route.module';

@NgModule({
  declarations: [
    CreateComponent,
    DateModalComponent,
    PeriodModalComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    ModalModule,
    ActiveRouteModule,
  ],
  exports: [CreateComponent],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [DateModalComponent, PeriodModalComponent],
  providers: []
})
export class CreateModule { }
