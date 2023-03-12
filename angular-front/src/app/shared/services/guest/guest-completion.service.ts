import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GuestCompletion } from './models/guest-completion';

@Injectable({
  providedIn: 'root'
})
export class GuestCompletionService {

  private apiUrl = 'https://example.com/api/guests';

  constructor(private http: HttpClient
    // private logger: NGXLogger
    ) { }

  public addGuestCompletion(guest: GuestCompletion): Observable<GuestCompletion> {
    // this.logger.info("POST");
    return this.http.post<GuestCompletion>(this.apiUrl, guest);
  }
}
