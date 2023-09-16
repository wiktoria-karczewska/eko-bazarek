import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api-eko-bazarek.azurewebsites.net';

  constructor(private http: HttpClient) {}

  subscribeToNewsletter(email: string): Observable<any> {
    const subscribeUrl = `${this.apiUrl}/ subscribe}`;
    return this.http.post(subscribeUrl, { email });
  }
}
