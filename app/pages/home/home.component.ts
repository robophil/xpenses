import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SwipeGestureEventData } from 'ui/gestures';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  moduleId: module.id,
	selector: 'home',
	templateUrl: 'home.component.html',
  styleUrls: ['home.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  title = "";

  constructor(private router: Router) { }

	ngOnInit() { }

	ngAfterViewInit() {
  }

  onSwipe(arg: SwipeGestureEventData) {
    if(arg.direction == 2) {
      this.router.navigateByUrl('main/active');
    }
  }
}
