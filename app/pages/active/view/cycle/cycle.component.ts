import { Component, EventEmitter, ElementRef, Input, Output, ViewChild, OnInit, AfterViewInit, NgZone } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { GestureTypes, SwipeGestureEventData } from "ui/gestures";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { Observable } from "rxjs/Observable";
import { Page } from 'ui/page'
import { View } from 'ui/core/view';
import { topmost } from "ui/frame"
import { CycleInterface } from '../../../../models/cycle.model';

declare const android: any;

@Component({
  moduleId: module.id,
  selector: "Cycle",
  templateUrl: "./cycle.component.html",
  styleUrls: ["./cycle.css"],
})
export class CycleComponent implements OnInit, AfterViewInit {
  hidden;
  private page: Page;
  public title = "Cycles";
  @Input() data: CycleInterface;
  @Output() public open = new EventEmitter<void>();
  @Output() public create = new EventEmitter<void>();
  @ViewChild('newBtn') newBtnEl: ElementRef;

  constructor(private router: RouterExtensions) {
    this.page = topmost().currentPage;
  }

  createCycle() {
    this.create.emit();
  }

  getIsExpenseOk() {
    return true;
    // return this.cycle.budget > this.cycle.expense;
  }

  addExpense() {
    console.log('add expense');
  }

  doneCycle() {

  }

  onLoaded(event) {
    // console.log('onLoaded');
  }

  onItemLoading(event) {
    // console.log('onItemLoading');
  }

  onItemTap(event) {
    // console.log('onItemTap');
  }

  ngOnInit() {
    this.hidden = this.data.expense ? false : true;
    // console.log(this.hidden);
  }

  ngAfterViewInit() {
    const btn = this.page.getViewById('newBtn');
    // debugger;
    // drop shadow
    this.newBtnEl.nativeElement
    // this.newBtnEl.nativeElement
    // view
      // .android.setBackgroundResource(android.R.drawable.dialog_holo_light_frame)
  }
}
