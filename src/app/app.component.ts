import { Component } from '@angular/core';
import { PersonaService } from './services/persona.service'
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  //public miarreglo = '{"status":"success","data":[{"id":"1","employee_name":"Tiger Nixon","employee_salary":"320800","employee_age":"61","profile_image":""},{"id":"2","employee_name":"Garrett Winters","employee_salary":"170750","employee_age":"63","profile_image":""},{"id":"3","employee_name":"Ashton Cox","employee_salary":"86000","employee_age":"66","profile_image":""}]}' ;

  public personas:Array<any>=[]

  constructor(
    private personaService:PersonaService
  ) {

this.personaService.getPersonas().subscribe((resp:any)=>{

  this.personas= resp.data

})

  }
}
