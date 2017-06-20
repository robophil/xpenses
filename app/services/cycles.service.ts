import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

import { CyclesModel } from '../models/cycle.model';

export const sign = '₦';
const round = (num) => +(Math.round(+(num + 'e+2'))  + 'e-2');
const rand = () => (Math.random() * 10000);
const rand2 = () => Math.floor(Math.random() * 10000);

@Injectable()
export class CyclesService {

  count(): number {
    return 0;
  }

  create({ budget }): Observable<CyclesModel> {
    return Observable.of({
      id: rand2(),
      sign,
      categories: [],
      expense: this.format(0),
      budget: this.format(budget),
      created: new Date
    });
  }

  format(input) {
    const suffix = input > 1000000 ? 'M' : 'K';
    const count = round(+input);
    return { count, suffix };
  }

  fetch(params): Observable<CyclesModel[]> {
    return Observable.of(5).map(i => {
      const data = [];
      const id = rand2();

      for (i; i > 0; i--) {
        const expense = this.format(rand());
        const budget = this.format(rand());
        const categories = [];

        for (let j = 10; j > 0; j--) {
          const id_2 = rand().toFixed(0), name = 'Category_'+id_2, value = rand().toFixed(2);
          categories.push({ id: id_2, name, value, created: new Date() });
        }

        data.push({ id, sign, categories, expense, budget, created: new Date });
      }

      return data;
    })
  }
}
