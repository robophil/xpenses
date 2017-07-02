import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { ModalComponent } from "./modal.component";

@NgModule({
  declarations: [ ModalComponent ],
  exports: [ ModalComponent ],
  bootstrap: [ModalComponent],
  imports: [ NativeScriptModule ],
  providers: [ ModalDialogService ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ModalModule { }
