import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  _url = 'http://dummy.restapiexample.com/api/v1/employees'

  constructor(
    private http: HttpClient

  ) {
    console.log('service List Employees')
   }
getPersonas(){
  let header = new HttpHeaders()
  .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, success')
  .set('Content-Type','aplication/json')

  return this.http.get( this._url,{
    headers: header
  });

  }
}
