import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-databinding',
  templateUrl: './twoway-databinding.component.html',
  styleUrls: ['./twoway-databinding.component.css']
})
export class TwowayDatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public userText:string="User Default value";
  public address:string="201 ABC Aparatments";
 
  sendData(event:any){
    // console.log(event.target.value);
    this.userText=event.target.value;
    
  }
}
