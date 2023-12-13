import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent {


  // Subject is a special types of observable that allow values to be 
  // multicasted to many observer. the subject are also observaer because they can subcribe to an other .
  // observiable and get value from it, which it will multicast to all of its subcriber
  
data = "akash"
  constructor(private dataService: DataService){}

  ngOnInt(){
    this.dataService.data.next(this.data)
  }
}
