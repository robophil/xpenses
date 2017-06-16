import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { ActiveComponent } from './active.component';
import { ActiveCreateComponent } from './create/create.component';
import { ActiveViewComponent } from './view/view.component';
import { ActiveOpenComponent } from './open/open.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forChild([
      { path: 'active', component: ActiveComponent, children: [
        { path: '', component: ActiveViewComponent },
        { path: 'create', component: ActiveCreateComponent },
        { path: 'open', children: [
        // { path: 'open', component: ActiveOpenComponent, children: [
          { path: ':id', component: ActiveOpenComponent },
        ]},
      ]}
    ])
  ],
  exports: [NativeScriptRouterModule]
})

export class ActiveRouteModule { }
