import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forChild([
      { path: 'home', component: HomeComponent }
    ])
  ],
  exports: [NativeScriptRouterModule]
})

export class HomeRouteModule { }
