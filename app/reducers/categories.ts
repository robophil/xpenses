import { Observable } from 'rxjs/Observable';
import { Store, Action } from '@ngrx/store';
import * as _ from 'lodash';

import { CategoriesModel } from '../models/category.model';
import { CategoriesActions } from '../actions/categories.action';

export type CategoriesData = { [id: number]: CategoriesModel };
export interface CategoriesState {
  selected: string;
  date: Date;
  status: boolean;
  ids: number[];
  data: CategoriesData;
  count: number;
}

const initialState: CategoriesState = {
  selected: '',
  count: 0,
  date: new Date,
  status: false,
  ids: [],
  data: null,
}

// Reducer
export function categories(state: CategoriesState = initialState, { type, payload }: Action): CategoriesState {
  switch (type) {
    case CategoriesActions.SELECT: { }

    case CategoriesActions.CREATE_COMPLETE: {
      const data = Object.assign({}, state.data, { [payload.id]: payload });
      const ids = [payload.id, ...state.ids];
      return Object.assign({}, state, { date: payload.date, selected: payload.id, status: true, ids, data });
    }

    case CategoriesActions.INIT_COMPLETE: {
      const ids = payload.map(data => data.id);
      const data = _.mapKeys(payload, 'id') as CategoriesData;

      return Object.assign({}, state, { status: false, count: ids.length, ids, data });
    }

    default: return state;
  }
};


// Selectors
export function getIds() {
  return (diary$: Observable<CategoriesState>) => diary$.map(t => t.ids).filter(ids => !!ids);
}
export function getData(ids) {
  return (diary$: Observable<CategoriesState>) => diary$
    .map(t => t.data)
    .filter(data => data !== null)
    .map(data => ids.map(id => data[id]));
}
export function getSelectedId() {
  return (diary$: Observable<CategoriesState>) => diary$.map(t => t.selected).filter(s => !!s.length);
}
export function getSelectedDate() {
  return (diary$: Observable<CategoriesState>) => diary$.map(t => t.date);
}
export function getSelected() {
  return (diary$: Observable<CategoriesState>) => diary$.filter(s => !!s.ids.length).map(t => t.data[t.selected]);
}
export function getCount() {
  return (diary$: Observable<CategoriesState>) => diary$.map(t => t.count);
}
