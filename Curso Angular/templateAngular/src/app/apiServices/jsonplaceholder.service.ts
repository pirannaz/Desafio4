import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  url = 'https://jsonplaceholder.typicode.com/';

  constructor(private http:HttpClient) { }

allUser(){
    return this.http.get(this.url + 'users/');
}

oneUser(variable:number){
  return this.http.get(this.url + 'users/' + variable);
}

}
