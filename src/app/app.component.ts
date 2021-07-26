import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Ecommerce Wonder App';
  price:number=37383.39;
  isMarried:boolean=true;

  user={
    id:1001,
    name:"John",
    age:29,
    gender:'male'
  }
  private family:string[]=["John","david","Miller","Marie"];
  imgPath="assets/img/devloper.png";

  color={
    first:'Red',
    second:'Green',
    third:'blue'
  };

  isError:boolean=false;

  public showUserInfo(){
    return "Id : "+this.user.id+" Name : "+this.user.name;
  }

  hasError(status:string){
    return status ? true: false;
  }

  public changeStatus(){
    console.log("event ",this.isMarried);
    return this.isMarried=!(this.isMarried);
    
  }
}
