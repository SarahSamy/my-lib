import { NgModule } from '@angular/core';
import { CommonLibraryComponent } from './common-library.component';
import {ConfigurationUtilService} from './services/configuration-util.service';
import{ReflectiveInjectorService} from './services/reflective-injector.service';
import{MessageUtil}from './services/message-util';




@NgModule({
  declarations: [CommonLibraryComponent,ConfigurationUtilService,ReflectiveInjectorService,MessageUtil],
  imports: [
  ],
  exports: [CommonLibraryComponent,ConfigurationUtilService,ReflectiveInjectorService,MessageUtil]
})
export class CommonLibraryModule { }
