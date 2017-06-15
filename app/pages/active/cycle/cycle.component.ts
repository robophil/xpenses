import { Component, EventEmitter, ElementRef, Input, Output, ViewChild, OnInit, AfterViewInit, NgZone } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { GestureTypes, SwipeGestureEventData } from "ui/gestures";

@Component({
  moduleId: module.id,
  selector: "Cycle",
  templateUrl: "./cycle.component.html",
  styleUrls: ["./cycle.css"],
})
export class CycleComponent implements OnInit, AfterViewInit {
  private isShowTop: boolean;
  @Input() item: {
    expense: { count: string, suffix: string },
    budget: { count: string, suffix: string }
  }[];
  @ViewChild('card') cardUi: ElementRef;
  @Output() public open = new EventEmitter<void>();

  constructor(
    private zone: NgZone,
    private router: Router,
    ) {
    }

  openCycle() {
    this.open.emit();
  }

  ngAfterViewInit() {
    // console.dir(this.data)
    // this.cardUi.nativeElement.on(GestureTypes.swipe, (args: SwipeGestureEventData) => {
    //   //  * 8 - down
    //   //  * 4 - up
    //   //  * 2 - right
    //   //  * 1 - left

    //   if (args.direction === 8) {
    //     this.isShowTop = true;
    //   }
    //   else if (args.direction === 4) {
    //     this.isShowTop = false;
    //   }

    //   this.zone.run(() => 0);
    //   console.log("Swipe Direction: " + args.direction, this.isShowTop);
    // });

  }

  ngOnInit() {
  }
}
