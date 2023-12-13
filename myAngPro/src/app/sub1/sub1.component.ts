import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component {

  data1 :any;
  constructor(private dataService: DataService){}

  ngOnInt(){
    this.dataService.data.subscribe(res=>{
      this.data1
    })
  }
}
