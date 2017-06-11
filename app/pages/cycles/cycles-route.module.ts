import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { CyclesComponent } from './cycles.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forChild([
      { path: 'cycles', component: CyclesComponent }
    ])
  ],
  exports: [NativeScriptRouterModule]
})

export class CyclesRouteModule { }
