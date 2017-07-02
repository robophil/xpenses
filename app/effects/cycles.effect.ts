import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import 'rxjs/Rx';

import { AppState } from '../reducers';
import { CyclesActions } from '../actions/cycles.action';
import { CyclesService } from '../services/cycles.service';

@Injectable()
export class CyclesEffects {

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private cyclesActions: CyclesActions,
    private cycles: CyclesService
    ) {}

  // Initiate load of all appointments at App boot
  @Effect() boot$: Observable<Action> = this.store.take(1)
    .mapTo(this.cyclesActions.init())

  @Effect() init$: Observable<Action> = this.actions$
    .ofType(CyclesActions.INIT)
    .map(action => action.payload)
    .switchMap(payload => this.cycles.fetch(payload))
    .map(data => this.cyclesActions.init_complete(data))

  @Effect() create$: Observable<Action> = this.actions$
    .ofType(CyclesActions.CREATE)
    .map(action => action.payload)
    .switchMap(payload => this.cycles.create(payload))
    .map(data => this.cyclesActions.create_complete(data))

  @Effect() add_category$: Observable<Action> = this.actions$
    .ofType(CyclesActions.ADD_CATEGORY)
    .map(action => action.payload)
    .switchMap(payload => {
      const category = this.cycles.add_category(payload.amount, payload.category);
      return Observable.of(this.cyclesActions.add_category_complete(payload.id, category))
    })
}
