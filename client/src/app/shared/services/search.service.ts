import { Injectable } from '@angular/core';
import { HnPost } from '../models/hn-post.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  searchFor(term: string, sortBy: string): Observable<HnPost[]> {
    return this.http.get<HnPost[]>('');
  }
}
