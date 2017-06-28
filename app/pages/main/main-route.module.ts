import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { MainComponent } from './main.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forChild([
      { path: 'main', component: MainComponent, children: [
        { path: '', redirectTo: 'active', pathMatch: 'full' },
        { path: 'cycles', loadChildren: 'pages/cycles#CyclesModule' },
        { path: 'active', loadChildren: 'pages/active#ActiveModule' },
        { path: 'categories', loadChildren: 'pages/categories#CategoriesModule' },
        { path: 'expenses', loadChildren: 'pages/expenses#ExpensesModule' },
        { path: 'info', loadChildren: 'pages/info#InfoModule' },
      ]},
    ]),
  ],
  exports: [NativeScriptRouterModule]
})

export class MainRouteModule { }
