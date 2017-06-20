import { Observable } from 'rxjs/Observable';
import { Store, Action } from '@ngrx/store';
import * as _ from 'lodash';

import { CyclesModel } from '../models/cycle.model';
import { CyclesActions } from '../actions/cycles.action';

export type CyclesData = { [id: number]: CyclesModel };
export interface CyclesState {
  selected: string;
  date: Date;
  status: boolean;
  ids: number[];
  data: CyclesData;
  count: number;
}

const initialState: CyclesState = {
  selected: '',
  count: 0,
  date: new Date,
  status: false,
  ids: [],
  data: null,
}

// Reducer
export function cycles(state: CyclesState = initialState, { type, payload }: Action): CyclesState {
  switch (type) {
    case CyclesActions.SELECT: { }

    case CyclesActions.CREATE_COMPLETE: {
      const data = Object.assign({}, state.data, { [payload.id]: payload });
      const ids = [payload.id, ...state.ids];
      return Object.assign({}, state, { date: payload.date, selected: payload.id, status: true, ids, data });
    }

    case CyclesActions.INIT_COMPLETE: {
      const ids = payload.map(data => data.id);
      const data = _.mapKeys(payload, 'id') as CyclesData;

      return Object.assign({}, state, { status: false, count: ids.length, ids, data });
    }

    default: return state;
  }
};


// Selectors
export function getIds() {
  return (diary$: Observable<CyclesState>) => diary$.map(t => t.ids).filter(ids => !!ids);
}
export function getData(ids) {
  return (diary$: Observable<CyclesState>) => diary$
    .map(t => t.data)
    .filter(data => data !== null)
    .map(data => ids.map(id => data[id]));
}
export function getSelectedId() {
  return (diary$: Observable<CyclesState>) => diary$.map(t => t.selected).filter(s => !!s.length);
}
export function getSelectedDate() {
  return (diary$: Observable<CyclesState>) => diary$.map(t => t.date);
}
export function getSelected() {
  return (diary$: Observable<CyclesState>) => diary$.filter(s => !!s.ids.length).map(t => t.data[t.selected]);
}
export function getCount() {
  return (diary$: Observable<CyclesState>) => diary$.map(t => t.count);
}
