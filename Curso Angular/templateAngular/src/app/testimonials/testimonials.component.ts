import { Component } from '@angular/core';
import { JsonplaceholderService } from '../apiServices/jsonplaceholder.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  users:any = [];

constructor(private jsonplaceholderService: JsonplaceholderService){
  this.jsonplaceholderService.allUser().subscribe(data => {
    //console.log('All Users:', data);
    this.users = data;
    });

  }

}
