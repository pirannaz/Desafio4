import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.css']
})
export class Box2Component {
  @Input() delay2:any;
  @Input() titulo2:any;
  @Input() texto2:any;
  @Input() icono2:any;

constructor() {

}


}
