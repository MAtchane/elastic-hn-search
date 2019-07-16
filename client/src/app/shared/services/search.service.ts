import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HnPost } from '../models/hn-post.model';
import { SearchRequest } from '../models/search-request.model';
import { PageData } from '../models/page-data.model';

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

  searchFor(request: SearchRequest): Observable<HnPost[]> {
    let params = new HttpParams();

    params = params.append('page', String(request.page));
    params = params.append('size', String(request.size));
    params = params.append('term', request.term);
    params = params.append('sortBy', request.sortBy);
    
    return this.http.get<HnPost[]>(this.searchEndpoint, { params: params });
  }
  
  
  getLastItems(request: SearchRequest): Observable<HnPost[]> {
    let params = new HttpParams();
    
    params = params.append('page', String(request.page));
    params = params.append('size', String(request.size));
    params = params.append('sortBy', request.sortBy);

    return this.http.get<HnPost[]>(this.getLastEndpoint, { params: params });
  }

  extractResults(rawResponse: object): HnPost[] {
    return rawResponse['_embedded']['hnItemList'];
  }

  extractPageData(rawResponse: object): PageData {
    return rawResponse['page'];
  }
}
