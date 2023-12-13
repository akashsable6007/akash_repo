import { Component } from '@angular/core';
import { Router } from '@angular/router';  //import section 
import { DataService } from '../data.service';

@Component({             // component directive: metadata of component
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
    //componenet class: properties, constructor, lifecycle hooks, methods etc.
        //property section
    
    //let/var/const city: "pune"   -in js 
    
    city: string = "pune"; //property
    surname: any = true;
    name: string = 'akash';
    name2!: string;
    name3: any;


  constructor(private router: Router, private dataService : DataService){} //constructor section 


  ngOnInit(){
    this.dataService.userName = this.name;
  }
  //lifecycle hooks, methods  
  signUpComp(){
    this.name3 = "omsairam";

    console.log("city>>", this.city);
    console.log("function is calling");
    this.test();
    this.router.navigateByUrl("signUp");
  }

  test(){
    console.log("test calling....");
    
  }

  directives(){
    this.router.navigateByUrl('directives')
  }

  

}
