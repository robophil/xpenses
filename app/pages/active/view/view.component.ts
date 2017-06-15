import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, NgZone } from "@angular/core";
// import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Observable } from "rxjs/Observable";
import { Page } from 'ui/page'
import { topmost } from "ui/frame"
import { SlidesModule } from 'nativescript-ngx-slides';
import { SlidesComponent } from 'nativescript-ngx-slides/slides/app/slides/slides.component';

const transition = { name: "slide", duration: 300 };

@Component({
  moduleId: module.id,
  selector: "active-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.css"],
})
export class ActiveViewComponent implements OnInit, AfterViewInit {
  public page: Page;
  public data$: Observable<{
    expense: { count: string, suffix: string },
    budget: { count: string, suffix: string }
  }[]>;
  public slides: SlidesComponent;

  constructor(
    private router: RouterExtensions,
  ) { }

  openCycle() {
    console.log('open');
    this.router.navigateByUrl('/active/open', { transition });
  }

  createCycle() {
    this.router.navigateByUrl('/active/create', { transition });
  }

  format(input) {
    const suffix = input > 1000000 ? 'M' : 'K';
    const count = (input > 1000000 ? input / 1000000 : input / 1000).toFixed(1);
    return { count, suffix };
  }

  ngOnInit() {
    this.data$ = Observable.of(2).map(i => {
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
  }
}
