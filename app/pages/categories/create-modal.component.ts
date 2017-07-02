import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

@Component({
  selector: "category-create-modal",
  template: `
    <StackLayout class="form p-15 m-b-20" width="90%">

      <label class="h5 text-center text-muted m-y-10" text="Category name"></label>

      <StackLayout orientation="horizontal" class="input-field">
        <label class="mdi text-center text-muted" text="&#xE065;"></label>
        <TextField class="input p-y-10 p-x-5" #field autocorrect="true" returnKeyType="done" (returnPress)="onSelect(field.text)"></TextField>
      </StackLayout>

    </StackLayout>
  `,
  styles: [`
    .input-field {
      margin: 20 0;
    }

    .input-field Label {
      font-size: 20;
      padding: 5;
    }

    .input-field TextField {
      font-size: 30;
      width: 100%;
      margin: 0;
    }
  `]
})
export class CreateModalComponent {
  public constructor(private params: ModalDialogParams) {
  }

  onSelect(value) {
    this.params.closeCallback(value);
  }
}
