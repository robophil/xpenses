import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "Modal",
  template: `
    <GridLayout padding="20" [verticalAlignment]="align" rows="auto, *">

      <ng-content row="1"></ng-content>

      <AbsoluteLayout *ngIf="dismiss" row="1">
        <StackLayout width="100%">
          <Button marginTop="-15" marginRight="-20" color="#ccc" backgroundColor="transparent" horizontalAlignment="right" fontSize="25" text="X" (tap)="remove('framework')"></Button>
        </StackLayout>
      </AbsoluteLayout>
    </GridLayout>
  `,
})
export class ModalComponent implements OnInit {
  @Input() align: string = 'center';
  @Input() dismiss: boolean = true;
  @Output() close = new EventEmitter<any>();

  ngOnInit() {
  }

  public remove(res: string) {
    this.close.emit(res);
  }
}
