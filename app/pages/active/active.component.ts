import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, NgZone } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { GestureTypes, SwipeGestureEventData } from "ui/gestures";
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

  constructor(
    // private zone: NgZone,
    private router: Router,
    ) {
    }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.page = <Page>topmost().currentPage;
    if(this.page)  {
      // this.page.actionBarHidden = true;
      this.page.statusBarStyle = 'light';
    }
    else {
      console.dir(this.page);
    }
  }
}
