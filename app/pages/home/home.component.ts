// import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SwipeGestureEventData } from 'ui/gestures';
import { Router, ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState, getCycles, getCyclesData } from "../../reducers";
import { CyclesModel, CycleInterface } from "../../models/cycle.model";
import toMoney from "../../utils/toMoney";
import { Observable } from "rxjs/Observable";
import { Types, Orientation } from "nativescript-ng-gradient";

@Component({
  moduleId: module.id,
	selector: 'home',
	templateUrl: 'home.component.html',
  styleUrls: ['home.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  data$: Observable<{ count: number, totals: { budget: number, expenses: number } }>;
  title = "";
  hiddenBottom = true;
  @ViewChild('showcase') showcase: ElementRef;
  public gColors = ['rgb(233, 30, 99)', 'rgb(167, 11, 65)', 'rgb(109, 10, 44)'];
  public gType = Types.LINEAR_GRADIENT;
  public gOrient = Orientation.TOP_BOTTOM;

  constructor(private store: Store<AppState>, private router: Router) {
    this.data$ = this.store.let(getCyclesData()).map((cycles: any[]) => {
      const totals: { budget: number, expenses: number } =
        cycles.reduce((acc, { budget, expense }) => {
          return { budget: acc.budget+budget.value, expense: acc.expense+expense.value };
        }, { budget: 0, expense: 0 });
      const count = cycles.length;

      return { count, totals };
    });
  }

  format(value: number): string {
    return value && toMoney(value);
  }

	ngOnInit() {}

	ngAfterViewInit() {
  }

  showcaseLoaded(args) {
    this.showcase.nativeElement.android.getParent().setClipToPadding(false);
    this.showcase.nativeElement.android.getParent().setClipChildren(false);
  }

  onSwipe(arg: SwipeGestureEventData) {
    if(arg.direction == 2) {
      this.hiddenBottom = false
      this.router.navigateByUrl('main/active');
    }
  }
}
