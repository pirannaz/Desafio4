import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { JsonplaceholderService } from 'src/app/apiServices/jsonplaceholder.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  @Input() nick:any;
  @Input() variable: number = 0;
  
  constructor(){
      
  
    }


}
