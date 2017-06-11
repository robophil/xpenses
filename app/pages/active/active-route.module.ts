import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { ActiveComponent } from './active.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forChild([
      { path: 'active', component: ActiveComponent }
    ])
  ],
  exports: [NativeScriptRouterModule]
})

export class ActiveRouteModule { }
