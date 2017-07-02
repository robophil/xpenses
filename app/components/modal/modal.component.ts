import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "Modal",
  template: `
    <StackLayout [backgroundColor]="backgroundColor" [color]="color">

      <StackLayout visibility="{{ dismiss ? 'visible' : 'collapsed' }}">
        <Button class="close" [horizontalAlignment]="dismissAlign" [text]="dismissText" (tap)="close.emit()"></Button>
      </StackLayout>

      <ng-content></ng-content>

    </StackLayout>
  `,
  styles: [`
    .close {
      width: 35;
      background-color: transparent;
      padding: 0 5;
      font-size: 35;
      border-width: 1;
      border-color: transparent;
    }
  `]
})
export class ModalComponent {
  @Input() color: string = '#ccc';
  @Input() backgroundColor: string = 'transparent';

  @Input() dismiss: boolean = true;
  @Input() dismissText: string = 'X';
  @Input() dismissAlign: string = 'right';
  @Input() dismissColor: string = '#ccc';

  @Output() close = new EventEmitter<void>();
}
