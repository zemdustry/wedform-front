import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Guest } from './models/guest';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  readonly basePath: string = 'guests'

  constructor(private http: HttpClient) { }

  public addGuestCompletion(guest: Guest): Observable<Guest> {
    console.log(guest)
    return this.http.post<Guest>(`${environment.apiUrl}/${this.basePath}`, guest);
  }
}
