import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = environment.apiURL

  constructor( private http : HttpClient) { }

  loginUser(userData: FormData){
    return this.http.post(this.apiUrl + 'users/login', userData)
  }
}
