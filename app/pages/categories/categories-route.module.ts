import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { CategoriesComponent } from './categories.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forChild([
      { path: '', component: CategoriesComponent }
    ])
  ],
  exports: [NativeScriptRouterModule]
})

export class CategoriesRouteModule { }
