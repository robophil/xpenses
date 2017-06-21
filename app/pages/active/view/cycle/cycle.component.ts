import { Component, EventEmitter, ElementRef, Input, Output, ViewChild, OnInit, AfterViewInit, NgZone } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { GestureTypes, SwipeGestureEventData } from "ui/gestures";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { Observable } from "rxjs/Observable";
import { Page } from 'ui/page'
import { topmost } from "ui/frame"
import { CycleInterface } from '../../../../models/cycle.model';

@Component({
  moduleId: module.id,
  selector: "Cycle",
  templateUrl: "./cycle.component.html",
  styleUrls: ["./cycle.css"],
})
export class CycleComponent implements OnInit, AfterViewInit {
  hidden;
  public title = "Cycles";
  @Input() data: CycleInterface;
  @Output() public open = new EventEmitter<void>();
  @Output() public create = new EventEmitter<void>();

  constructor(private router: RouterExtensions) {
  }

  createCycle() {
    this.create.emit();
  }

  getIsExpenseOk() {
    return true;
    // return this.cycle.budget > this.cycle.expense;
  }

  addExpense() {

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

  ngAfterViewInit() {}
}
