import { Component, ViewContainerRef, ElementRef, ViewChild, OnInit, AfterViewInit, NgZone } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { Observable } from "rxjs/Observable";
import { Page } from 'ui/page'
import { topmost } from "ui/frame"
import { alert } from "ui/dialogs"
import { Store } from "@ngrx/store";
import { AppState } from "../../reducers";
import { CyclesActions } from '../../actions/cycles.action';
import { sign } from "../../services/cycles.service";
import { PeriodModalComponent } from "./period-modal.component";
import { DateModalComponent } from "./date-modal.component";
import { ModalDialogService, ModalDialogParams } from "nativescript-angular/directives/dialogs";

@Component({
  moduleId: module.id,
  selector: "create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.css"],
})
export class CreateComponent implements OnInit, AfterViewInit {
  public sign = sign;

  constructor(
    private modal: ModalDialogService,
    private vcRef: ViewContainerRef,
    private store: Store<AppState>,
    private cycles: CyclesActions,
    private router: RouterExtensions,
  ) { }

  onCreate(budget1, budget2) {
    const budget = (+budget1) + ((+budget2) / 100);
    this.store.dispatch(this.cycles.create({ budget }));
    alert('SUCCESSFULLY CREATED').then(res => {
      console.dir(res);
      this.router.navigateByUrl('/active');
    });
    // setTimeout(() => this.router.navigateByUrl('/active'), 2000);
  }

  goBack() {
    this.router.backToPreviousPage();
  }

  onSelectPeriod() {
    let options = {
      context: {},
      fullscreen: true,
      viewContainerRef: this.vcRef
    };
    this.modal.showModal(PeriodModalComponent, options).then(res => {
      console.log(res);
    });
  }

  onChooseDate() {
    let options = {
      context: {},
      fullscreen: true,
      viewContainerRef: this.vcRef
    };
    this.modal.showModal(DateModalComponent, options).then(res => {
      console.log(res);
    });
  }

  ngOnInit() { }

  ngAfterViewInit() { }
}
