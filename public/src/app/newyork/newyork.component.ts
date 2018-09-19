import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-newyork',
  templateUrl: './newyork.component.html',
  styleUrls: ['./newyork.component.css']
})
export class NewyorkComponent implements OnInit {

//Defines all the variable types. 
  city: String;
  humidity: Number;
  tempAvg: Number;
  tempMax: Number;
  tempMin: Number;
  status: String;
  
    constructor(private _httpService: HttpService){
    }
  
    ngOnInit() {
      //This funtion runs upon entry.
      this.findBurbank();
    }
  
    findBurbank(){
      let Observable = this._httpService.getBurbank()
      Observable.subscribe(data =>{
        console.log('Here is New York', data);
        this.city = data['name'];
        this.humidity = data['main']['humidity']
        //sets temp to farenheit and the temp data which returns the temp in farenheit rounded.
        this.tempAvg = this.Farenheit(data['main']['temp']);
        this.tempMax = this.Farenheit(data['main']['temp_max']);
        this.tempMin = this.Farenheit(data['main']['temp_min']);
        this.status = data['weather'][0]['description'];
      })
    }
  
    Farenheit(temp){
      var Farenheit = Math.floor((temp)* 9/5 - 459.67)
      return Math.round(Farenheit);
    }
  }