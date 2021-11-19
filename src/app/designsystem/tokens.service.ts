import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokensService {
  tokens = './assets/styles/tokens.json';

  constructor(private http: HttpClient) {}

  getTokens():Observable<Object> {
    return this.http.get(this.tokens)
      .pipe(
        retry(3), // retry a failed request up to 3 times
      );
  }
}
