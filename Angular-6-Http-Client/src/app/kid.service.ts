import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kid } from './kids';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class KidService {
  private kidsUrl = 'http://localhost:8088/api/kids';  // URL to web api
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

  addKid (kid: Kid): Observable<Kid> {
    return this.http.post<Kid>(this.kidsUrl, kid, httpOptions);
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