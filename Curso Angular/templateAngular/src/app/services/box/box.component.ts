import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input() delay:any;
  @Input() titulo:any;
  @Input() texto:any;
  @Input() icono:any;

constructor() {

}


}
