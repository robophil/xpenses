import { Component, EventEmitter, ViewChild, Input, Output, OnInit, AfterViewInit } from "@angular/core";
import { SlidesComponent } from 'nativescript-ngx-slides/slides/app/slides/slides.component';

@Component({
  moduleId: module.id,
  selector: "active-slides",
  templateUrl: "./slides.component.html",
  styleUrls: ["./slides.css"],
})
export class ActiveSlidesComponent implements OnInit, AfterViewInit {
  @Input() public data: any[];
  @Output() public create = new EventEmitter<void>();
  @ViewChild('slidesEl') slides: SlidesComponent;

  createCycle() {
    this.create.emit();
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.slides.GoToSlide(this.data.length); // Switch to the last added active slide
  }
}
