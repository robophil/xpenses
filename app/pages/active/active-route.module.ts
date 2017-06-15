import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { ActiveComponent } from './active.component';
import { ActiveCreateComponent } from './create/create.component';
import { ActiveViewComponent } from './view/view.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forChild([
      // { path: 'active', component: ActiveViewComponent }
      // { path: 'active', component: ActiveComponent }
      { path: 'active', component: ActiveComponent, children: [
        { path: '', component: ActiveViewComponent },
        { path: 'create', component: ActiveCreateComponent }
      ]}
    ])
  ],
  exports: [NativeScriptRouterModule]
})

export class ActiveRouteModule { }
