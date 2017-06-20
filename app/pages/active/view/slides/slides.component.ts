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
  @ViewChild('slidesEl') slides: SlidesComponent;
  @Output() public create = new EventEmitter<void>();
  count: number;

  createCycle() {
    this.create.emit();
  }

  ngOnInit() {
    this.count = this.data.length;
    // Add create button Before
    this.data.unshift({});
    // Add create button After
    if(this.data.length) {
      this.data.push({});
    }
  }

  ngAfterViewInit() {
    if(this.count)
      this.slides.GoToSlide(1);
    // this.slides.GoToSlide(this.data.length-2); // Switch to the last added active slide
  }
}
