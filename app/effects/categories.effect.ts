import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import 'rxjs/Rx';

import { AppState } from '../reducers';
import { CategoriesActions } from '../actions/categories.action';
import { CategoriesService } from '../services/categories.service';

@Injectable()
export class CategoriesEffects {

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private categoriesActions: CategoriesActions,
    private categories: CategoriesService
    ) {}

  // Initiate load of all appointments at App boot
  @Effect() boot$: Observable<Action> = this.store.take(1)
    .mapTo(this.categoriesActions.init())

  @Effect() init$: Observable<Action> = this.actions$
    .ofType(CategoriesActions.INIT)
    .map(action => action.payload)
    .switchMap(payload => this.categories.fetch(payload))
    .map(data => this.categoriesActions.init_complete(data))

  @Effect() create$: Observable<Action> = this.actions$
    .ofType(CategoriesActions.CREATE)
    .map(action => action.payload)
    .switchMap(payload => this.categories.create(payload))
    .map(data => this.categoriesActions.create_complete(data))
}
