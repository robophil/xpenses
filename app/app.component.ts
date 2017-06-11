import { Component, ElementRef, OnInit, ViewChild, NgZone } from "@angular/core";
import { trigger, transition, state, style, animate } from "@angular/animations";
import { Page } from 'ui/page'
import { topmost } from "ui/frame"
import { registerElement } from "nativescript-angular/element-registry";
import { GestureTypes, SwipeGestureEventData } from "ui/gestures";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { SlideUpDown } from './animation';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/do';



registerElement("CardView", () => require("nativescript-cardview").CardView);
registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html",
  styleUrls: ['./app.css'],
  animations: [
    trigger('slideUp', [
      state('active', style({ opacity: 1, transform: 'translateY(0%)', height: '*' })),
      state('inactive', style({ opacity: 0, transform: 'translateY(100%)', height: 0 })),
      transition('active <=> inactive', [animate('750ms cubic-bezier(0.44, 1.49, 1, 1)')]),
    ])
  ]
})
export class AppComponent implements OnInit {
  private page: Page;
  private suffix: string = 'K';
  private data$: Observable<{
    expense: { count: string, suffix: string },
    budget: { count: string, suffix: string }
  }[]>;
  private isShowMenu: boolean = false;
  private isShowTop: boolean = false;
  expenses;
  budget;
  @ViewChild('card') cardUi: ElementRef;

  constructor(private fonticon: TNSFontIconService, private zone: NgZone) {}

  showMenu() {
    this.isShowMenu = !this.isShowMenu;
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

      for(i; i > 0; i--) {
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
      this.zone.run(() => 0);

      if(args.direction === 8) {
        this.isShowTop = true;
      }
      else if(args.direction === 4) {
        this.isShowTop = false;
      }

      console.log("Swipe Direction: " + args.direction, this.isShowTop);
    });

    // this.page = <Page>topmost().currentPage;
    // this.page.actionBarHidden = true;
    // this.page.statusBarStyle = 'dark';
    // console.dir(this.page);
  }
}
