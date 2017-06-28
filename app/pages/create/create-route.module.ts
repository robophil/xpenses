import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { CreateComponent } from './create.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forChild([
      { path: 'create', component: CreateComponent }
    ])
  ],
  exports: [NativeScriptRouterModule]
})

export class ActiveRouteModule { }
