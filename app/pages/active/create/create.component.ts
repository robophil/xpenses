import { Component, ViewContainerRef, ElementRef, ViewChild, OnInit, AfterViewInit, NgZone } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { Observable } from "rxjs/Observable";
import { Page } from 'ui/page'
import { topmost } from "ui/frame"
import { Store } from "@ngrx/store";
import { AppState } from "../../../reducers";
import { CyclesActions } from '../../../actions/cycles.action';
import { sign } from "../../../services/cycles.service";
import { Types, Orientation } from "nativescript-ng-gradient";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";

@Component({
  selector: "my-modal",
  template: `
    <GridLayout [nsgrad]="gColors" [nsgradOrient]="gOrient" height="100%" verticalAlignment="center" rows="auto, *">
      <StackLayout  row="1" verticalAlignment="center" class="input-field">
        <DatePicker></DatePicker>
        <!--<DatePicker [day]="" [month]="" [year]=""></DatePicker>-->
      </StackLayout>
      <AbsoluteLayout row="1">
        <StackLayout width="100%">
          <Button marginTop="20" color="#e6e6e6" backgroundColor="transparent" horizontalAlignment="right" fontSize="25" text="X" (tap)="close('framework')"></Button>
        </StackLayout>
      </AbsoluteLayout>
    </GridLayout>
  `,
})
export class DateModalComponent {
  public gColors = ['#ffffff', '#f6f6f6'];
  public gOrient = Orientation.TOP_BOTTOM;

  public constructor(private params: ModalDialogParams) {
  }

  ngOnInit() {
  }

  public close(res: string) {
    this.params.closeCallback(res);
  }
}

@Component({
  moduleId: module.id,
  selector: "active-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.css"],
})
export class ActiveCreateComponent implements OnInit, AfterViewInit {
  public sign = sign;
  items;

  constructor(
    private modal: ModalDialogService,
    private vcRef: ViewContainerRef,
    private store: Store<AppState>,
    private cycles: CyclesActions,
    private router: RouterExtensions,
  ) {
    this.items = ["1 Day", "3 Days", "1 Week", "2 Weeks", "1 Month", "3 Months", "6 Months", "1 Year"];
  }

  onCreate(budget1, budget2) {
    const budget = (+budget1) + ((+budget2) / 100);
    this.store.dispatch(this.cycles.create({ budget }));
    alert('SUCCESSFULLY CREATED');
    setTimeout(() => this.router.navigateByUrl('/active'), 2000);
  }

  goBack() {
    this.router.backToPreviousPage();
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
