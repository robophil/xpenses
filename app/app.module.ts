import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { NativeScriptAnimationsModule } from "nativescript-angular/animations";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NSNgRxDebuggerModule } from "ns-ngrx-debugger";

import { STORE } from './reducers';
import { SERVICES } from './services';
import { EFFECTS } from './effects';
import { ACTIONS } from './actions';

@NgModule({
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptAnimationsModule,
    AppRoutingModule,
    NSNgRxDebuggerModule,
    TNSFontIconModule.forRoot({
      'fa': './assets/font-awesome.css',
      'mdi': './fonts/Google/material-icons.css',
      // 'ion': './assets/ionicons.css'
    }),
    ...STORE,
    ...EFFECTS,
  ],
  providers: [
    ModalDialogService,
    ...SERVICES,
    ...ACTIONS,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
