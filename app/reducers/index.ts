import { Store as S, StoreModule, Action } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Observable } from 'rxjs/Observable';

import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core';
import * as Cycles from './cycles';
import { environment } from '../environments/environment';

export const reducers = {
  test: () => {
    return { a: 'hey'+Math.floor(Math.random()*1000) }
  },
  cycles: Cycles.cycles,
};

export interface AppState {
  test: Object;
  cycles: Cycles.CyclesState;
};

const prod = combineReducers(reducers);
const dev = compose(combineReducers)(reducers);
export function redux(state: any, action: any) {
  return environment.production ? prod(state, action) : dev(state, action);
}

export const STORE = [
  StoreModule.provideStore(redux),
];

// Selectors
export function getCycles() {
  return (state$: S<AppState>) => state$.select(s => s.cycles);
}
export function getCyclesIds() {
  return compose(Cycles.getIds(), getCycles());
}
export function getCyclesSelectedId() {
  return compose(Cycles.getSelectedId(), getCycles());
}
export function getCyclesSelectedDate() {
  return compose(Cycles.getSelectedDate(), getCycles());
}
export function getCyclesDataRaw() {
  return (state$: S<AppState>) => state$.select(s => s.cycles.data);
}
export function getCyclesData() {
  return (state$: S<AppState>) => state$
    .let(getCyclesIds())
    .switchMap(ids => state$.let(compose(Cycles.getData(ids), getCycles())));
}
