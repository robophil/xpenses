import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { InfoComponent } from './info.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forChild([
      { path: 'info', component: InfoComponent }
    ])
  ],
  exports: [NativeScriptRouterModule]
})

export class InfoRouteModule { }
