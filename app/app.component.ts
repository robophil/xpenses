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

registerElement("CardView", () => require("nativescript-cardview").CardView);
registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);


@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html",
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
  private isShowMenu: boolean = true;
  private isShowTop: boolean = false;
  private currentPage: string = 'active';

  constructor(
    private fonticon: TNSFontIconService,
    private zone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
    ) {
      this.route.paramMap.subscribe(x => {
        console.dir(x)
      })
      // this.router.isActive
    }

  goTo(page: string) {
    console.log('page:' + page);
    // this.router.navigate(['/'+page], { replaceUrl: false });
    // this.router.navigate(['/'+page], { replaceUrl: true });
  }

  showMenu() {
    this.isShowMenu = !this.isShowMenu;
  }

  isActivePage(page: string) {
    return page.toLowerCase() === this.currentPage.toLowerCase();
  }

  ngOnInit() {
  }
}
