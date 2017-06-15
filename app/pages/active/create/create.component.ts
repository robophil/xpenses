import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, NgZone } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { Observable } from "rxjs/Observable";
import { Page } from 'ui/page'
import { topmost } from "ui/frame"

@Component({
  moduleId: module.id,
  selector: "active-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.css"],
})
export class ActiveCreateComponent implements OnInit, AfterViewInit {

  constructor(private router: RouterExtensions) {
  }

  goBack() {
    // this.router.back();
    this.router.backToPreviousPage();
  }

  ngOnInit() {}

  ngAfterViewInit() {}
}
