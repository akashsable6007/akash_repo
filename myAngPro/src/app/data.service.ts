import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
   userName: any;

   data = new Subject();
  

  constructor() { }

  // Services :>> to declear global property , reuseable function logic 
  
}
