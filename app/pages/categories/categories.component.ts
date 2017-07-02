import { CreateModalComponent } from './create-modal.component';
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import { CategoriesModel } from './../../models/category.model';
import { Component, ElementRef, ViewChild, OnInit, NgZone, ViewContainerRef } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { GestureTypes, SwipeGestureEventData } from "ui/gestures";
import { registerElement } from "nativescript-angular/element-registry";
import { Page } from 'ui/page'
import { topmost } from "ui/frame"
import { Store } from "@ngrx/store";
import { AppState, getCategoriesData } from './../../reducers';
import { CategoriesActions } from "../../actions/categories.action";

@Component({
  moduleId: module.id,
  selector: "categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.css"],
})
export class CategoriesComponent implements OnInit {
  public title = "Categories";
  private page: Page;
  public data$: Observable<CategoriesModel[]>;

  constructor(
    private modal: ModalDialogService,
    private vcRef: ViewContainerRef,
    private store: Store<AppState>,
    private zone: NgZone,
    private actions: CategoriesActions,
  ) {
    this.data$ = this.store.let(getCategoriesData());
  }

  onCreate() {
    let options = {
      context: {},
      fullscreen: false,
      viewContainerRef: this.vcRef
    };
    this.modal.showModal(CreateModalComponent, options).then(name => {
      this.store.dispatch(this.actions.create({ name }));
    });
  }

  ngOnInit() {
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
}
