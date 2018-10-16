import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kid } from './kids';
import {Pickup} from './pickup'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class KidService {
  //private kidsUrl = 'http://localhost:8088/api/kids'; URL to web api
  private kidsUrl = 'https://107.170.198.167:8088/api/kids';  
  constructor( 
    private http: HttpClient
  ) { }

  getkids (): Observable<Kid[]> {
    return this.http.get<Kid[]>(this.kidsUrl)
  }

  getkid(id: number): Observable<Kid> {
    const url = `${this.kidsUrl}/${id}`;
    return this.http.get<Kid>(url);
  }

  signOutKid (kid: Kid, pickup: Pickup): Observable<Pickup> {
    return this.http.post<Pickup>(this.kidsUrl, JSON.stringify({
      kid_id: kid.id,
      pickup_flag: "true"
    }), httpOptions);
  }

  deleteKid (kid: Kid | number): Observable<Kid> {
    const id = typeof kid === 'number' ? kid : kid.id;
    const url = `${this.kidsUrl}/${id}`;

    return this.http.delete<Kid>(url, httpOptions);
  }

  updateKid (kid: Kid): Observable<any> {
    return this.http.put(this.kidsUrl, kid, httpOptions);
  }
}