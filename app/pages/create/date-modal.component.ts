import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { Types, Orientation } from "nativescript-ng-gradient";

@Component({
  selector: "date-modal",
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
