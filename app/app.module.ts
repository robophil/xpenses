import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptAnimationsModule } from "nativescript-angular/animations";
// import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptAnimationsModule,
    // AppRoutingModule
		TNSFontIconModule.forRoot({
			// 'fa': './assets/font-awesome.css',
			'fa': './assets/font-awesome.min.css',
			// 'mat': './fonts/Google/material-icons.css',
			// 'ion': './assets/ionicons.css'
		})
  ],
  declarations: [
    AppComponent,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
