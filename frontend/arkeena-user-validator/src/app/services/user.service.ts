import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpRequestService {

  constructor(private _http: HttpClient) {}
  
   createUser(user : any) {
    return this._http.post('http://localhost:1234/user/createUser', user)
   }
}
