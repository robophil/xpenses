import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { ActiveComponent } from './active.component';
import { ActiveViewComponent } from './view/view.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forChild([
      { path: '', component: ActiveComponent, children: [
        { path: '', component: ActiveViewComponent },
      ]}
    ])
  ],
  exports: [NativeScriptRouterModule]
})

export class ActiveRouteModule { }
