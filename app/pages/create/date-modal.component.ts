import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

@Component({
  selector: "date-modal",
  template: `
    <Modal (close)="close($event)">
      <StackLayout row="1" verticalAlignment="center" class="input-field">
        <DatePicker (dateChange)="onDateChanged($event)"></DatePicker>
        <Button fontSize="13" color="white" (tap)="onSelect()" class="mdi btn btn-primary" text="&#xE5CA; &nbsp; SELECT"></Button>
      </StackLayout>
    </Modal>
  `,
})
export class DateModalComponent {

  public constructor(private params: ModalDialogParams) {
  }

  ngOnInit() {
  }

  onDateChanged(args) {
    console.log(args.value);
  }

  onSelect() {

  }

  public close(res: string) {
    this.params.closeCallback(res);
  }
}
