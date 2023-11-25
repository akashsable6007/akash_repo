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




data: any = "we are learning string interpolation";
}
