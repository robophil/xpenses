import { Component, ViewContainerRef, EventEmitter, ElementRef, Input, Output, ViewChild, OnInit, AfterViewInit, NgZone } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { GestureTypes, SwipeGestureEventData } from "ui/gestures";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { Observable } from "rxjs/Observable";
import { Page } from 'ui/page'
import { View } from 'ui/core/view';
import { topmost } from "ui/frame"
import { CycleInterface } from '../../../../models/cycle.model';
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import { AddCategoryComponent } from "../add-category/add-category.component";

declare const android: any;

@Component({
  moduleId: module.id,
  selector: "Cycle",
  templateUrl: "./cycle.component.html",
  styleUrls: ["./cycle.css"],
})
export class CycleComponent implements OnInit, AfterViewInit {
  private page: Page;
  public title = "Cycles";
  @Input() total: number;
  @Input() position: number;
  @Input() data: CycleInterface;
  @Output() public open = new EventEmitter<void>();
  @Output() public create = new EventEmitter<{ id, amount, category }>();

  constructor(
    private router: RouterExtensions,
    private modal: ModalDialogService,
    private vcRef: ViewContainerRef,
    ) {
    this.page = topmost().currentPage;
  }

  getIsExpenseOk() {
    return true;
    // return this.cycle.budget > this.cycle.expense;
  }

  addExpense() {
    let options = {
      context: {},
      fullscreen: false,
      viewContainerRef: this.vcRef
    };
    this.modal.showModal(AddCategoryComponent, options).then(params => {
      if(params) {
        this.create.emit({ id: this.data.id, amount: params.amount, category: params.category });
      }
    });
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

  hasNext() {
    return this.position < this.total;
  }

  hasPrev() {
    return this.position != 1;
  }

  ngOnInit() {
    console.dir(this.data.categories);
  }

  ngAfterViewInit() {
  }
}
