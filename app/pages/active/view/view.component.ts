import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, NgZone } from "@angular/core";
// import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Observable } from "rxjs/Observable";
import { Page } from 'ui/page'
import { topmost } from "ui/frame"
import { SlidesModule } from 'nativescript-ngx-slides';
import { SlidesComponent } from 'nativescript-ngx-slides/slides/app/slides/slides.component';
import { CycleInterface } from '../../../models/cycle.model';

const transition = { name: "slide", duration: 300 };

@Component({
  moduleId: module.id,
  selector: "active-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.css"],
})
export class ActiveViewComponent implements OnInit, AfterViewInit {
  public page: Page;
  public data$: Observable<CycleInterface[]>;
  public slides: SlidesComponent;

  constructor(
    private router: RouterExtensions,
  ) { }

  openCycle() {
    console.log('open');
    this.router.navigateByUrl('/active/open/', { transition });
  }

  createCycle() {
    this.router.navigateByUrl('/active/create', { transition });
  }

  format(input) {
    const suffix = input > 1000000 ? 'M' : 'K';
    const count = +input.toFixed(2);
    return { count, suffix };
  }

  ngOnInit() {
    this.data$ = Observable.of(5).map(i => {
      const data = [];
      const rand = () => (Math.random() * 10000);
      // const rand = () => Math.floor(Math.random() * 10000);
      const id = rand();
      const sign = '₦';

      for (i; i > 0; i--) {
        const expense = this.format(rand());
        const budget = this.format(rand());
        const categories = [];

        for (let j = 10; j > 0; j--) {
          const id_2 = rand().toFixed(0), name = 'Category_'+id_2, value = rand().toFixed(2);
          categories.push({ id: id_2, name, value, created: new Date() });
        }

        data.push({ id, sign, categories, expense, budget, created: new Date });
      }

      return data;
    })
  }

  ngAfterViewInit() {
  }
}
