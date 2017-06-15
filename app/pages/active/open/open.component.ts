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
  public data$: Observable<{
    id: number,
    name: string,
    value: number
  }[]>;

  constructor(private router: RouterExtensions) {
  }

  goBack() {
    // this.router.back();
    this.router.backToPreviousPage();
  }

  ngOnInit() {
    this.data$ = Observable.of(2).map(o => {
      const data = [];
      const rand = () => Math.floor(Math.random() * 1000);

      for (let i = 10; i > 0; i--) {
        const id = rand(), name = 'category_'+rand(), value = rand();
        data.push({ id: id, name, value });
      }

      return data;
    })
  }

  ngAfterViewInit() {}
}
