import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { ReflectiveInjectorService } from 'projects/common-library/src/lib/services/reflective-injector.service';
import { MessageUtil } from 'projects/common-library/src/lib/services/message-util';
import { ConfigurationUtilService } from 'projects/common-library/src/lib/services/configuration-util.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  oldPassword:String;
  newPassword:String;
  disabled :boolean = true;
  confirmPassword:String;
  passwordExpired:boolean ;
  popupHeader:string;

  constructor(public messages : MessageUtil,public reflectiveInjector:ReflectiveInjectorService,
    public messageService:MessageService, public configUtil : ConfigurationUtilService) { 
       // public userService=this.reflectiveInjector.getService("UserService");
    }

  ngOnInit() {
  }
  changePassword(){

    // this.userService.changePassword(this.oldPassword,this.newPassword);
   }
   display: boolean = false;
 
   showDialog(passwordExpire:boolean) {
     this.passwordExpired = passwordExpire;
     if(passwordExpire == true){
      this.popupHeader = "Password is Expired"
     }else{
       this.popupHeader = "Change Password"
     }
       this.display = true;
        setTimeout(() =>{
         this.display = true;
         },10);
   }
   hideDialog(){
     this.display = false;
   }
 
   exitDialog(){
     this.display = false;
   }
}
