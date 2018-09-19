import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient){}

    getChicago(){
  	//Returning the observables to be used in the Chicago.component.
  	console.log("Finding Chicago")
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=2e578c56098d546b27aa3f53d8857cc5`)
  }

  	getSeattle(){
  	console.log("Finding Seattle")
  	//Returning the observables to be used in the Seattle.component.
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=2e578c56098d546b27aa3f53d8857cc5`)
  }

  	getWashington(){
  	console.log("Finding Washington")
  	//Returning the observables to be used in the Losangeles.component.
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=washington&appid=2e578c56098d546b27aa3f53d8857cc5`)
  }

  	getBurbank(){
  	console.log("Finding Burbank")
  	//Returning the observables to be used in the Newyork.component.
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=burbank&appid=2e578c56098d546b27aa3f53d8857cc5`)
  }
}//End of export.

 