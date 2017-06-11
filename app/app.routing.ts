import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ActiveModule } from './pages/active';
import { CategoriesModule } from './pages/categories';
import { CyclesModule } from './pages/cycles';
import { ExpensesModule } from './pages/expenses';
import { InfoModule } from './pages/info';

const routes: Routes = [
  { path: '', redirectTo: '/active', pathMatch: 'full' }
];

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot(routes),
    ActiveModule,
    CategoriesModule,
    CyclesModule,
    ExpensesModule,
    InfoModule,
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
