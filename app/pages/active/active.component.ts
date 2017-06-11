import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, NgZone } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { GestureTypes, SwipeGestureEventData } from "ui/gestures";
import { registerElement } from "nativescript-angular/element-registry";
import { Page } from 'ui/page'
import { topmost } from "ui/frame"

@Component({
  moduleId: module.id,
  selector: "active",
  templateUrl: "./active.component.html",
  styleUrls: ["./active.css"],
})
export class ActiveComponent implements OnInit, AfterViewInit {
  private page: Page;
  private data$: Observable<{
    expense: { count: string, suffix: string },
    budget: { count: string, suffix: string }
  }[]>;

  constructor(
    // private zone: NgZone,
    private router: Router,
    ) {
    }

  format(input) {
    const suffix = input > 1000000 ? 'M' : 'K';
    const count = (input > 1000000 ? input / 1000000 : input / 1000).toFixed(1);
    return { count, suffix };
  }

  ngOnInit() {
    this.data$ = Observable.of(4).map(i => {
      const data = [];

      for (i; i > 0; i--) {
        const rand = () => Math.floor(Math.random() * 1000);
        const expense = this.format(rand() * i);
        const budget = this.format(rand() * i);
        data.push({ expense, budget });
      }

      return data;
    })
  }

  ngAfterViewInit() {
    this.page = <Page>topmost().currentPage;
    if(this.page)  {
      this.page.actionBarHidden = true;
      this.page.statusBarStyle = 'light';
    }
    else {
      console.dir(this.page);
    }
  }
}
