import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent {
   surName: any;

  // constructor is not a lifecyclehooks its component 
  // external dependices we can load via constructor
  // 
  constructor( private dataService: DataService){
    console.warn( "constructor is calling ");
    
  };
  name:any;
  // <!--  A componenet instance has a lifecyle that starts when angular  instentious the component class and 
  //   renders the component view and its child view .  -->

  //ngOnchange()
  //ngOnInit()
  //ngDoCheck()
  //ngAfterContentInit()
  //ngOnDestory()
  //ngAfterContentChecked()
  //ngAfterViewInit()
  //ngAfterViewChecked()

    ngOnChange(){
      console.warn("onchange is calling "); // if compo has inputbound property then onchange is trigger first then trigger onint
      
    }


    ngOnInit(){
      this.name = this.dataService.userName;
      console.warn("onit is call");
      
    }

    ngDoCheck(){
      console.warn("do check calling ");
    }

    ngAfterContentInit(){
      console.warn("nAfterContentInit is calling");
      
    }
    ngAfterContentChecked(){
      console.warn("AfterContentchecked is calling");
      
    }
    ngAfterViewInit(){
      console.warn("after viwes init");
      
    }
    ngAfterViewChecked(){
      console.warn("view checked");
      
    }
    ngOnDestory(){
      console.warn("ondestroy call");
      
    }
  }
