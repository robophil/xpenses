import { Component, ElementRef, OnInit, OnDestroy, AfterViewInit, ViewChild, NgZone } from "@angular/core";
import { Page } from 'ui/page'
import { topmost } from "ui/frame"
import { registerElement } from "nativescript-angular/element-registry";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { SwissArmyKnife } from 'nativescript-swiss-army-knife';

registerElement('Ripple', () => require('nativescript-ripple').Ripple);
registerElement('BottomBar', () => require('nativescript-bottombar').BottomBar);
registerElement('CardView', () => require('nativescript-cardview').CardView);
registerElement('Fab', () => require('nativescript-floatingactionbutton').Fab);

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html",
  styleUrls: ['./app.css'],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  public showDebugger = true;
  public title = "xPenses";
  private page: Page;
  private currentPage: string = 'active';

  ngOnInit() {}

  ngAfterViewInit() {
    SwissArmyKnife.setAndroidStatusBarColor('#a90040');
  }

  ngOnDestroy() { }
}
