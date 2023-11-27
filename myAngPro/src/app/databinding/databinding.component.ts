import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
// DB: communication between component and the DOM
// Types of databinding 

// 1. One Way Databinding :> is a simple one way communication where html template is changed when we make changes in typescript code.
// types of One Way DB:> 1. String Interpolation {{}} :> String Interpolation is a one-way databinding technique which is used to display data from
                                                    //   ts to view(template) using curly braces.
                      // 2. property binding []
                      // 3. event binding () 

// 2. Two Way Databinding :[()]



//1. example of String interpolation
data: any = "we are learning string interpolation";
amount: number = 90000;
// schoolName! = String ;
ismatch = true;
clickEventData : any;

city: any = "satara";




// <!-- asignment is not possible with interpolation   -->
// <!-- "=" is called assignment operator and it assign the value to the variable/property

// <!-- "==" equality operator -->
// <!-- we can use equality operator with interpolation in form of true/false -->
// <!-- equality only check data value-->
// <!-- it compaires values only -->
// <!-- overlapping og num and string datatype error -->

// <!-- === is check data and dataypes aslo || it check dataype as well as value-->
// <!-- this is also equality operator it compaire value as well as datatypes  -->
test(){
  return 50;
}

// 2. Property Binding []
 name = "akash";


 // 3. Event binding ()
 clickEvent(){
  this.clickEventData = "8474748"
 }

}
