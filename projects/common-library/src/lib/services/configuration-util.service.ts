import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationUtilService {

  constructor() { }
  
  public getProperty(propertyName: string): any {
    if( window.sessionStorage.getItem("config")!=null){
    let configStr =  window.sessionStorage.getItem("config");
    let config = JSON.parse(configStr);
    return config[propertyName];
    }
   else {
    let configStr =  window.localStorage.getItem("config");
    let config = JSON.parse(configStr);
    return config[propertyName];
   }
   
  }
}
