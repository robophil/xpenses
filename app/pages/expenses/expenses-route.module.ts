import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { ExpensesComponent } from './expenses.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forChild([
      { path: '', component: ExpensesComponent }
    ])
  ],
  exports: [NativeScriptRouterModule]
})

export class ExpensesRouteModule { }
