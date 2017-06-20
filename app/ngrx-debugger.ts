import { Component, ElementRef, OnInit, ViewChild, NgZone } from "@angular/core";
import { Store, Action } from "@ngrx/store";
import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: "nativescript-store-debugger",
  template: `
    <Label class="show" (tap)="show = !show" text="Show Debug Panel"></Label>
    <StackLayout *ngIf="show">
      <StackLayout *ngIf="states$ | async as states">
        <ListView [items]="states" class="panel">
          <ng-template let-item="item">
            <GridLayout class="state" columns="*, auto, auto">
              <Label class="info" [text]="item"></Label>
              <Label col="1" class="btn" (tap)="dump(item)" text="DUMP" ></Label>
              <Label col="2" class="btn" (tap)="expand(item)" text="EXPAND" ></Label>
            </GridLayout>
          </ng-template>
        </ListView>
        <StackLayout class="panel expanded" *ngIf="expanded">
          <ListView [items]="expanded">
            <ng-template let-item="item">
              <GridLayout class="state" columns="*, auto">
                <Label class="info" [text]="item"></Label>
                <Label col="1" class="btn" (tap)="dump(item)" text="DUMP" ></Label>
              </GridLayout>
            </ng-template>
          </ListView>
        </StackLayout>
      </StackLayout>
    </StackLayout>
  `,
  styles: [`
    .show {
      width: 100%;
      color: darkgray;
      padding: 5;
      background-color: white;
      text-align: center;
      text-transform: uppercase;
    }
    .panel {
      padding: 3;
      background-color: #f6f6f6;
    }
    .panel .btn {
      font-size: 12;
      padding: 3;
      color: darkgray;
      border-width: 1;
      border-color: #eee;
    }
    .panel .state {
      padding: 5;
      vertical-align: center;
    }
    .panel .state Label.info {
      color: darkgray;
      font-size: 13;
      text-transform: uppercase;
    }
    .expanded {}
    .expanded .state {
      background-color: #eee;
    }
  `]
})
export class NgrxDebugger implements OnInit {
  states$: Observable<any[]>;
  states: Object;
  Sub: Subscription;
  selected: string;
  expanded: Object;
  show = false;

  constructor(private store$: Store<any>, private actions$: Actions){}

  ngOnInit() {
    this.Sub = this.actions$.do((action) => console.log("ACTION: [ " + action.type + " ]"))
      .subscribe();

    this.states$ = this.store$
      .distinctUntilChanged()
      .do(states => this.states = states)
      .map(states => Object.keys(states));
  }

  dump(state) {
    let debug;
    if(this.selected && this.states[this.selected][state])
      debug = this.states[this.selected][state];
    else
      debug = this.states[state]

    typeof debug == 'string' ? console.log(debug) : console.dir(debug);
  }

  expand(state) {
    this.selected = this.selected == state ? false : state;
    this.expanded = this.selected && Object.keys(this.states[this.selected]);
  }

  ngOnDestroy() {
    this.Sub.unsubscribe();
  }
}

