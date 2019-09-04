import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReflectiveInjectorService {

  constructor(public injector:Injector) { }
  public getService(serviceName)
  {
    var service = this.injector.get(serviceName);
    return service;
  }
  invoke(serviceName,methodName):void{
   if(methodName.includes("(")){
   let methodname = methodName.split('(');
   methodName = methodname[0];
    if(serviceName != '' && methodName != ''){
      var service = this.injector.get(serviceName);
      let methodParam = methodname[1].split(')');
      service[methodName](methodParam[0]);
      
    }
   } else{
    if(serviceName != '' && methodName != ''){
      var service = this.injector.get(serviceName);
      service[methodName]();
    }

    }
  }
}
