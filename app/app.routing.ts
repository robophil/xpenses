import { NgModule } from "@angular/core";
import { PreloadAllModules } from '@angular/router';
import { NativeScriptRouterModule, } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { CreateModule } from './pages/create';
import { HomeModule } from './pages/home';
import { MainModule } from './pages/main';

const routes: Routes = [
  // { path: '', redirectTo: 'create', pathMatch: 'full' },
  { path: '', redirectTo: 'main/active', pathMatch: 'full' },
  // { path: '', redirectTo: 'main/categories', pathMatch: 'full' },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
    HomeModule,
    CreateModule,
    MainModule,
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
