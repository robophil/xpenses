import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from "@ngrx/store";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/distinctUntilChanged';
import { BottomBar, BottomBarItem, TITLE_STATE, SelectedIndexChangedEventData, Notification } from 'nativescript-bottombar';
import { SwissArmyKnife } from 'nativescript-swiss-army-knife';
// import * as R from 'nativescript-gradient';
import { AppState, getCyclesData } from "../../reducers";

const transition = { name: "slide", duration: 300 };

@Component({
  moduleId: module.id,
	selector: 'main',
	templateUrl: 'main.component.html',
  styleUrls: ['main.css']
})
export class MainComponent implements OnInit, OnDestroy {
  public _bar: BottomBar;
  public hidden: boolean = false;
  public titleState: TITLE_STATE = TITLE_STATE.ALWAYS_SHOW;
  public inactiveColor: string = '#bbbbbb';
  public accentColor: string = '#e91e63';
  public cyclesCount: number;
  public Subs: Subscription[] = [];
  public items: BottomBarItem[];
  public pages = [
    "Categories",
    "Expenses",
    "Create",
    "Active",
    "Cycles",
    // "Info",
  ];

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private nsrouter: RouterExtensions,
  ) {
    this.Subs.push(this.store.let(getCyclesData()).subscribe((data) => {
      this.cyclesCount = data && data.length;
    }))
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      // console.log('params');
      // debugger
      // console.dir(params);
    })

    this.router.events
    .subscribe((page) => {
    })
    this.items = [
      new BottomBarItem(0, this.pages[0], "ic_list_white", "white"),
      new BottomBarItem(1, this.pages[1], "ic_attach_money_white", "white"),
      new BottomBarItem(2, this.pages[2], "ic_add_box_white", "white"),
      new BottomBarItem(3, this.pages[3], "ic_play_circle_outline_white", "white"),
      new BottomBarItem(4, this.pages[4], "ic_history_white", "white"),
      // new BottomBarItem(4, this.pages[4], "ic_info_outline_white", "white"),
    ];

  }

  tabLoaded(event) {
    this._bar = <BottomBar>event.object;
    this._bar.selectItem(-2); // Select Page 2 as default page
  }

  tabSelected(args: SelectedIndexChangedEventData) {
    const page = (this.pages[args.newIndex]).toLowerCase();
    // this._bar.selectItem(args.newIndex);
    if(page == 'create') {
      this.nsrouter.navigateByUrl('/'+page, { transition });
    } else {
      this.router.navigateByUrl('/main/'+page, { queryParams: { root: true } });
      // this.router.navigate(['/'+page], { replaceUrl: false });
    }
  }

  ngOnDestroy() {
    this.Subs.forEach(sub => sub.unsubscribe());
  }
}
