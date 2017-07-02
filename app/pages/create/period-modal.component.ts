import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

@Component({
  selector: "period-modal",
  template: `
    <Modal (close)="close($event)">
      <StackLayout row="1" verticalAlignment="center" class="input-field">
        <ListPicker [items]="items" selectedIndex="0" (selectedIndexChange)="selectedIndexChanged($event)" class="p-30"></ListPicker>

        <Button fontSize="13" color="white" (tap)="onSelect()" class="mdi btn btn-primary" text="&#xE5CA; &nbsp; SELECT"></Button>
      </StackLayout>
    </Modal>
  `,
})
export class PeriodModalComponent {
  public items = ["1 Day", "3 Days", "1 Week", "2 Weeks", "1 Month", "3 Months", "6 Months", "1 Year"];

  public constructor(private params: ModalDialogParams) {
  }

  ngOnInit() {
  }

  selectedIndexChanged(args) {
    console.log(args.object.selectedIndex);
  }

  onSelect() {

  }

  public close(res: string) {
    this.params.closeCallback(res);
  }
}
