import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

// Action types and creators
@Injectable()
export class CyclesActions {
  static SELECT = '[CYCLES] SELECT';
  select(date: Date): Action {
    return { type: CyclesActions.SELECT, payload: { date }};
  }

  static CREATE = '[CYCLES] CREATE';
  create({ budget }): Action {
    return { type: CyclesActions.CREATE, payload: { budget } };
  }

  static CREATE_COMPLETE = '[CYCLES] CREATE COMPLETE';
  create_complete(cycle): Action {
    return { type: CyclesActions.CREATE_COMPLETE, payload: cycle };
  }

  static ADD_CATEGORY = '[CYCLES] ADD CATEGORY';
  add_category({ id, amount, category }): Action {
    return { type: CyclesActions.ADD_CATEGORY, payload: { id, amount, category } };
  }

  static ADD_CATEGORY_COMPLETE = '[CYCLES] ADD CATEGORY COMPLETE';
  add_category_complete(id, category): Action {
    return { type: CyclesActions.ADD_CATEGORY_COMPLETE, payload: { id, category } };
  }

  static INIT = '[CYCLES] INIT';
  init(): Action {
    return { type: CyclesActions.INIT }
  }

  static INIT_COMPLETE = '[CYCLES] INIT_COMPLETE';
  init_complete(payload): Action {
    return { type: CyclesActions.INIT_COMPLETE, payload }
  }

  static FETCH = '[CYCLES] FETCH';
  fetch(): Action {
    return { type: CyclesActions.FETCH }
  }

  static FETCH_COMPLETE = '[CYCLES] FETCH_COMPLETE';
  fetch_complete(payload): Action {
    return { type: CyclesActions.FETCH_COMPLETE, payload }
  }
}
