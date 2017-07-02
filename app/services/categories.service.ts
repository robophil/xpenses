import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { CategoriesModel } from '../models/category.model';
import { rand2 } from '../utils/random';

@Injectable()
export class CategoriesService {

  count(): number {
    return 0;
  }

  create({ name }): Observable<CategoriesModel> {
    return Observable.of(<CategoriesModel>{
      id: rand2(),
      name,
      created: new Date
    });
  }

  fetch(params): Observable<CategoriesModel[]> {
    return Observable.of(1).map(i => {
      const data = [];

      for (i; i > 0; i--) {
        const id = rand2(), name = 'Category '+id;
        data.push({ id, name });
      }

      return data;
    })
  }
}
