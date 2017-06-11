import { Component, ElementRef, ViewChild, OnInit, NgZone } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { GestureTypes, SwipeGestureEventData } from "ui/gestures";
import { registerElement } from "nativescript-angular/element-registry";
import { Page } from 'ui/page'
import { topmost } from "ui/frame"

@Component({
  moduleId: module.id,
  selector: "categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.css"],
})
export class CategoriesComponent implements OnInit {
  private page: Page;
  public data$: Observable<{ id: any, value: string }[]>;

  constructor(
    private zone: NgZone,
  ) {
  }

  ngOnInit() {

    this.data$ = Observable.of(10).map(id => {
      const data = [];

      for (id; id > 0; id--) {
        const value = 'Category ' + Math.floor(Math.random() * 10);
        data.push({ id, value });
      }

      return data;
    })
    // .do(x => console.dir(x))
    // .subscribe();
  }

  onLoaded(event) {
    console.log('onLoaded');
  }

  onItemLoading(event) {
    console.log('onItemLoading');
  }

  onItemTap(event) {
    console.log('onItemTap');
  }

}
