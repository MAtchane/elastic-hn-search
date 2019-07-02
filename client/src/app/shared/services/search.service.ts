import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HnPost } from '../models/hn-post.model';
import { SearchRequest } from '../models/search-request';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiEndpoint = environment.apiEndpoint;
  searchEndpoint = this.apiEndpoint + environment.searchContext;
  getLastEndpoint = this.apiEndpoint + environment.getLastContext;


  constructor(
    private http: HttpClient
  ) { }

  searchFor(searchRequest: SearchRequest): Observable<HnPost[]> {
    let params = new HttpParams();

    params = params.append('term', searchRequest.term);
    params = params.append('sortBy', searchRequest.sortBy);

    return this.http.get<HnPost[]>(this.searchEndpoint, { params: params });
  }


  getLastItems(size: number, sortBy: string): Observable<HnPost[]> {
    let params = new HttpParams();

    params = params.append('size', String(size));
    params = params.append('sortBy', sortBy);

    return this.http.get<HnPost[]>(this.getLastEndpoint, { params: params });
  }
}
