import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, NgZone } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { Observable } from "rxjs/Observable";
import { Page } from 'ui/page'
import { topmost } from "ui/frame"
import { Store } from "@ngrx/store";
import { AppState } from "../../../reducers";
import { CyclesActions } from '../../../actions/cycles.action';
import { sign } from "../../../services/cycles.service";
@Component({
  moduleId: module.id,
  selector: "active-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.css"],
})
export class ActiveCreateComponent implements OnInit, AfterViewInit {
  public sign = sign;

  constructor(
    private store: Store<AppState>,
    private cycles: CyclesActions,
    private router: RouterExtensions,
    ) {
  }

  onCreate(budget1, budget2) {
    const budget = (+budget1)+((+budget2)/100);
    this.store.dispatch(this.cycles.create({ budget }));
    // alert('yay');
    setTimeout(() => this.router.navigateByUrl('/active'), 2000);
  }

  goBack() {
    // this.router.back();
    this.router.backToPreviousPage();
  }

  ngOnInit() { }

  ngAfterViewInit() { }
}
