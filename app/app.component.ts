import { Component, ElementRef, OnInit, ViewChild, NgZone } from "@angular/core";
import { trigger, transition, state, style, animate } from "@angular/animations";
import { ActivatedRoute, Router } from "@angular/router";
import { Page } from 'ui/page'
import { topmost } from "ui/frame"
import { registerElement } from "nativescript-angular/element-registry";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { SlideUpDown } from './animation';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/distinctUntilChanged';
import { BottomBar, BottomBarItem, TITLE_STATE, SelectedIndexChangedEventData, Notification } from 'nativescript-bottombar';

registerElement('BottomBar', () => BottomBar);
registerElement("CardView", () => require("nativescript-cardview").CardView);
registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);


@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html",
  styleUrls: ['./app.css'],
  animations: [
    trigger('slideUp', [
      state('void', style({ opacity: 0, transform: 'translateY(100%)', height: '*' })),
      state('active', style({ opacity: 1, transform: 'translateY(0%)', height: '*' })),
      state('inactive', style({ opacity: 0, transform: 'translateY(100%)', height: 0 })),
      transition('void <=> active', [animate('750ms cubic-bezier(0.44, 1.49, 1, 1)')]),
      transition('void <=> inactive', [animate('750ms cubic-bezier(0.44, 1.49, 1, 1)')]),
      transition('active <=> inactive', [animate('750ms cubic-bezier(0.44, 1.49, 1, 1)')]),
    ])
  ]
})
export class AppComponent implements OnInit {
  private page: Page;
  private currentPage: string = 'active';
  public _bar: BottomBar;
  public hidden: boolean = false;
  public titleState: TITLE_STATE = TITLE_STATE.ALWAYS_SHOW;
  public inactiveColor: string = '#bbbbbb';
  public accentColor: string = '#e91e63';
  public items: Array<BottomBarItem>;
  public pages = [
    "Categories",
    "Expenses",
    "Active",
    "Cycles",
    "Info"
  ];

  constructor(
    private fonticon: TNSFontIconService,
    private zone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.router.events.map(({ url }: any) => url.split('/')[1]).distinctUntilChanged()
    .subscribe((page) => {
      console.log(page)
      // console.log(x.url)
    })
    this.items = [
      new BottomBarItem(0, this.pages[0], "ic_list_white", "white"),
      new BottomBarItem(1, this.pages[1], "ic_attach_money_white", "white"),
      new BottomBarItem(2, this.pages[2], "ic_play_circle_outline_white", "white", new Notification("white", "#e91e63", "1")),
      new BottomBarItem(3, this.pages[3], "ic_history_white", "white"),
      new BottomBarItem(4, this.pages[4], "ic_info_outline_white", "white"),
    ];

  }

  tabLoaded(event) {
    this._bar = <BottomBar>event.object;
    this._bar.selectItem(2); // Select Page 2 as default page
  }

  tabSelected(args: SelectedIndexChangedEventData) {
    const page = (this.pages[args.newIndex]).toLowerCase();
    // console.log(page);
    this.router.navigateByUrl(page);
    // this.router.navigateByUrl('/'+page);
    // this.router.navigate(['/'+page], { replaceUrl: false });
  }

  showMenu() {
    console.log('hey');
    this.hidden = false;
  }

  isActivePage(page: string) {
    return page.toLowerCase() === this.currentPage.toLowerCase();
  }
}
