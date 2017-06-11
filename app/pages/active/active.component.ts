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
  private isShowTop: boolean = false;
  private suffix: string = 'K';
  expenses;
  budget;
  @ViewChild('card') cardUi: ElementRef;

  constructor(
    private zone: NgZone,
    private router: Router,
    ) {
    }

  format(input) {
    const suffix = input > 1000000 ? 'M' : 'K';
    const count = (input > 1000000 ? input / 1000000 : input / 1000).toFixed(1);
    return { count, suffix };
  }

  ngOnInit() {
    this.expenses = { count: 12, suffix: 'k' };
    this.budget = { count: 12, suffix: 'k' };

    this.data$ = Observable.of(10).map(i => {
      const data = [];

      for (i; i > 0; i--) {
        const rand = () => Math.floor(Math.random() * 1000);
        const expense = this.format(rand() * i);
        const budget = this.format(rand() * i);
        data.push({ expense, budget });
      }

      return data;
    })
    // .do(x => console.dir(x))
    // .subscribe();

    this.cardUi.nativeElement.on(GestureTypes.swipe, (args: SwipeGestureEventData) => {
      /**
       * 8 - down
       * 4 - up
       * 2 - right
       * 1 - left
       */

      if (args.direction === 8) {
        this.isShowTop = true;
      }
      else if (args.direction === 4) {
        this.isShowTop = false;
      }

      this.zone.run(() => 0);
      console.log("Swipe Direction: " + args.direction, this.isShowTop);
    });

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
