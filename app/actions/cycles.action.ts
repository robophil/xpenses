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
  create(args : { content: string }): Action {
    return { type: CyclesActions.CREATE, payload: { content: args.content } };
  }

  static CREATE_COMPLETE = '[CYCLES] CREATE COMPLETE';
  create_complete(note): Action {
    return { type: CyclesActions.CREATE_COMPLETE, payload: note };
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
