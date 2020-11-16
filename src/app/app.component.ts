import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Counter App';

  count:number = 0;

//Handle  Increse not above 10 value using if else function
  handleIncrese(){

    if(this.count === 10)
    {
      this.count=this.count;
    }
    else{
      this.count = this.count + 1;
    }
  
    //Just for Normal increase by 1 without if else
    // this.count = this.count + 1;
  }


//Handle  decrese not below 0 value using if else function 
  handleDecrese(){
    if(this.count==0)
    {
      this.count = this.count;
    }
    else
    {
      this.count = this.count - 1;
    }
   
    //Just for Normal Decrese by 1 without if else 
   // this.count = this.count - 1;

  }

  // Reset(){
  //   this.count = 0;
  // }

  //handleReset function reset the counter value to 0
    handleReset = () => {
      this.count = 0;
    }

}
