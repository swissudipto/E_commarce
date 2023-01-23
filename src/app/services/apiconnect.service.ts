import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';

@Injectable({
  providedIn: 'root'
})
export class ApiconnectService {

  pdata:string=''
  constructor(private http:HttpClient) { }

  signup(data:object):Observable<any>
  {
    this.pdata=JSON.stringify(data); 
    console.warn(typeof(this.pdata));
    
    
    
    return this.http.post('https://localhost:7238/Seller?psignupstring='+this.pdata,"");
  }


}

