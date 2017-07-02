import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { CyclesModel, CyclesCategoryInterface } from '../models/cycle.model';
import { CategoryInterface } from '../models/category.model';

import toLocaleString from '../utils/toLocaleString';
import round from '../utils/toRound';
import { rand, rand2 } from '../utils/random';
export const sign = '₦';


@Injectable()
export class CyclesService {

  count(): number {
    return 0;
  }

  add_category(amout, { id, name }: CategoryInterface) {
    const value = round(amout), money = toLocaleString(value);
    return <CyclesCategoryInterface>{
      id,
      name,
      value,
      money,
      created: new Date
    };
  }

  create({ budget }): Observable<CyclesModel> {
    return Observable.of(<CyclesModel>{
      id: rand2(),
      sign,
      categories: [],
      progress: 0,
      balance: this.format(budget),
      expense: this.format(0),
      budget: this.format(budget),
      created: new Date
    });
  }

  format(input) {
    const value = round(input), money = toLocaleString(value);
    return { value, money };
  }

  fetch(params): Observable<CyclesModel[]> {
    return Observable.of(3).map(i => {
      const data = [];
      const id = rand2();

      for (i; i > 0; i--) {
        const expense = this.format(rand());
        const budget = this.format(rand());
        const balance = this.format(budget.value - expense.value);
        const progress = round(expense.value/budget.value, 1) * 100;
        const categories = [];

        data.push({ id, sign, balance, progress, categories, expense, budget, created: new Date });
      }

      return data;
    })
  }
}
