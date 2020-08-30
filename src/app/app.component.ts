import { Component } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'suresh';
  response:data={
    status:'',
    data:[]
  }
  employees=[];
  constructor(private service:HttpServiceService) {
    this.getDate();
  }
  getDate(){
    this.service.getApiIntegration().subscribe(res=>{
      console.log(res);
     this.response=<data>res;
     this.employees=this.response.data;
    })
  }
}

export class data{
  status:string;
  data:[];
}
