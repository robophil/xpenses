import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

// Action types and creators
@Injectable()
export class CategoriesActions {
  static SELECT = '[CATEGORIES] SELECT';
  select(date: Date): Action {
    return { type: CategoriesActions.SELECT, payload: { date }};
  }

  static CREATE = '[CATEGORIES] CREATE';
  create({ name }): Action {
    return { type: CategoriesActions.CREATE, payload: { name } };
  }

  static CREATE_COMPLETE = '[CATEGORIES] CREATE COMPLETE';
  create_complete(category): Action {
    return { type: CategoriesActions.CREATE_COMPLETE, payload: category };
  }

  static INIT = '[CATEGORIES] INIT';
  init(): Action {
    return { type: CategoriesActions.INIT }
  }

  static INIT_COMPLETE = '[CATEGORIES] INIT_COMPLETE';
  init_complete(payload): Action {
    return { type: CategoriesActions.INIT_COMPLETE, payload }
  }

  static FETCH = '[CATEGORIES] FETCH';
  fetch(): Action {
    return { type: CategoriesActions.FETCH }
  }

  static FETCH_COMPLETE = '[CATEGORIES] FETCH_COMPLETE';
  fetch_complete(payload): Action {
    return { type: CategoriesActions.FETCH_COMPLETE, payload }
  }
}
