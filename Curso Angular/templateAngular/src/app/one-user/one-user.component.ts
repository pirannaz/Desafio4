import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../apiServices/jsonplaceholder.service';
import { ActivatedRoute, ParamMap, } from '@angular/router';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.css']
})
export class OneUserComponent {
  //public id:any;
  public user:any
  
  constructor(private jsonplaceholderService: JsonplaceholderService,
                     private ruta: ActivatedRoute){
                      this.ruta.paramMap.subscribe((params: ParamMap) => {
                        this.oneUser(params.get('variable'));
                      });
                      }
    
    oneUser(id:any) {
      this.jsonplaceholderService.oneUser(id).subscribe(data =>{
        this.user = data;
      });
    }
  }


