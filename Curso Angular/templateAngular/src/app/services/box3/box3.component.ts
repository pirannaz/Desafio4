import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box3',
  templateUrl: './box3.component.html',
  styleUrls: ['./box3.component.css']
})
export class Box3Component {
  @Input() delay3:any;
  @Input() titulo3:any;
  @Input() texto3:any;
  @Input() icono3:any;

constructor() {

}

}
