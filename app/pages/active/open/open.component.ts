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

  constructor(private router: RouterExtensions) {
  }

  goBack() {
    // this.router.back();
    this.router.backToPreviousPage();
  }

  ngOnInit() {}

  ngAfterViewInit() {}
}
