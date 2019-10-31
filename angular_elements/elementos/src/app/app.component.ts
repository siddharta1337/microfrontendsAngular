import { Component, ViewEncapsulation, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-elemento",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {

  @Output() highlight = new EventEmitter<string>();
 
  constructor() {}
  miRotacion: string;

  ngOnInit() {
    this.miRotacion = `rotateZ(0deg)`;
  }

  onChange(valorSlider) {
    this.miRotacion = `rotateZ(${valorSlider}deg)`;
  }

  
  click() {
    this.highlight.emit('highlight');
  }
  
}
