import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, NgZone } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { Observable } from "rxjs/Observable";
import { Page } from 'ui/page'
import { topmost } from "ui/frame"

@Component({
  moduleId: module.id,
  selector: "active-open",
  templateUrl: "./open.component.html",
  styleUrls: ["./open.css"],
})
export class ActiveOpenComponent implements OnInit, AfterViewInit {
  public cycle: {
    expense: number;
    budget: number;
  };
  public data$: Observable<{
    id: number,
    name: string,
    value: number
  }[]>;

  constructor(private router: RouterExtensions) {
  }

  getIsExpenseOk() {
    return this.cycle.budget > this.cycle.expense;
  }

  addExpense() {

  }

  doneCycle() {

  }

  goBack() {
    this.router.backToPreviousPage();
  }

  onLoaded(event) {
    // console.log('onLoaded');
  }

  onItemLoading(event) {
    // console.log('onItemLoading');
  }

  onItemTap(event) {
    // console.log('onItemTap');
  }

  ngOnInit() {
    const rand = () => Math.floor(Math.random() * 1000);
    this.cycle = { expense: rand(), budget: rand() };
    this.data$ = Observable.of(2).map(o => {
      const data = [];

      for (let i = 10; i > 0; i--) {
        const id = rand(), name = 'category_'+rand(), value = rand();
        data.push({ id: id, name, value });
      }

      return data;
    })
  }

  ngAfterViewInit() {}
}
