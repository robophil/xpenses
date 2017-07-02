import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import { Store } from "@ngrx/store";
import { AppState, getCategoriesData } from "../../../../reducers";
import { CategoryInterface } from "../../../../models/category.model";
import { Observable } from "rxjs/Observable";

@Component({
  moduleId: module.id,
	selector: 'add-category',
	templateUrl: 'add-category.component.html',
	styleUrls: ['add-category.component.css']
})

export class AddCategoryComponent implements OnInit {
  data$: Observable<CategoryInterface[]>;

  public constructor(
    private params: ModalDialogParams,
    private store$: Store<AppState>,
    ) {
      this.data$ = store$.let(getCategoriesData())
  }

  onSelect() {

  }

  public close(res: string) {
    this.params.closeCallback(res);
  }

	ngOnInit() { }
}
