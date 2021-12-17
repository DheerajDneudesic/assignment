import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import {userDetails} from '../models/userDetails'


@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  apiUrl = environment.apiURL

  constructor( private http : HttpClient) { }

  getAllProducts():Observable<userDetails[]>{
    return this.http.get<userDetails[]>(`${this.apiUrl}products`)
  }
}
