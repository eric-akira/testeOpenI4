import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  url = 'http://api.geonames.org';
  username = 'ericakira';

  constructor(private http: HttpClient) { }

  searchData(term: string): Observable<any> {
    return this.http.get(`${this.url}/searchJSON?q=${encodeURI(term)}&username=${this.username}`).pipe(
      map(results => results['geonames'])
    );
  }

  getLocationDetails(geonameId) {
    return this.http.get(`${this.url}/getJSON?geonameId=${geonameId}&username=${this.username}`);
  }
}
