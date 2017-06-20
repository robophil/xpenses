import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

import { CyclesModel } from '../models/cycle.model';

@Injectable()
export class CyclesService {

  count(): number {
    return 0;
  }

  format(input) {
    const suffix = input > 1000000 ? 'M' : 'K';
    const count = +input.toFixed(2);
    return { count, suffix };
  }

  fetch(params): Observable<CyclesModel[]> {
    return Observable.of(5).map(i => {
      const data = [];
      const rand = () => (Math.random() * 10000);
      // const rand = () => Math.floor(Math.random() * 10000);
      const id = rand();
      const sign = '₦';

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
