import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { NativeScriptAnimationsModule } from "nativescript-angular/animations";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptAnimationsModule,
    AppRoutingModule,
    TNSFontIconModule.forRoot({
      'fa': './assets/font-awesome.css',
      // 'mat': './fonts/Google/material-icons.css',
      // 'ion': './assets/ionicons.css'
    }),
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
