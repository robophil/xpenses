import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import { Store } from "@ngrx/store";
import { AppState, getCategoriesData } from "../../../../reducers";
import { CategoryInterface } from "../../../../models/category.model";
import { Observable } from "rxjs/Observable";
import { SelectedIndexChangedEventData, ValueList } from "nativescript-drop-down";
import { sign } from "../../../../utils/toMoney";

@Component({
  moduleId: module.id,
	selector: 'add-category',
	templateUrl: './add-category.component.html',
	styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent implements OnInit {
  data$: Observable<ValueList<string>>;
  money_sign: string = sign;
  selectedIndex: number;
  selectedCategory: CategoryInterface;
  selectedAmount: number = 0;

  public constructor(
    private params: ModalDialogParams,
    private store$: Store<AppState>,
    ) {
    this.data$ = store$.let(getCategoriesData());
  }

  onSelectCategory(category: CategoryInterface) {
    this.selectedCategory = category;
  }

  mapToDropdown(categories: CategoryInterface[]) {
    return categories.map(({ name }) => name);
  }

  public onDone() {
    if(!this.selectedCategory) {
      return alert('Please make an Expense selection');
    }
    this.params.closeCallback({
      amount: this.selectedAmount,
      category: this.selectedCategory
    });
  }

	ngOnInit() { }
}
