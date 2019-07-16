import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { HnPost } from 'src/app/shared/models/hn-post.model';
import { SearchRequest } from 'src/app/shared/models/search-request.model';
import { SearchService } from 'src/app/shared/services/search.service';
import { environment } from 'src/environments/environment.prod';
import { PageEvent } from '@angular/material/paginator';
import { PageData } from 'src/app/shared/models/page-data.model';

/**
 * Wraps the search logic (input + search results).
 */
@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  enableInput = false;
  loading = false;
  pagination = false;
  results$: BehaviorSubject<HnPost[]>;
  pageData = new PageData(environment.defaultSize, 0, 0, 0);
  defaultSorting = environment.defaultSorting;
  fullResultsSize: number;
  lastSearchRequest: SearchRequest; // Successful or not
  paginationRequest: SearchRequest; // Sould always have the last successful search data

  onSearchSuccuss = val => {
    this.loading = false;
    this.enableInput = true;

    this.results$.next(this.searchService.extractResults(val));
    this.pageData = this.searchService.extractPageData(val);

    this.paginationRequest = this.lastSearchRequest;
    this.pagination = true;
  };

  onSearchFailure = err => {
    this.loading = false;
    this.enableInput = true;
    this.openErrSnackBar(err);
  };

  constructor(private searchService: SearchService, private errSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.results$ = new BehaviorSubject([]);
    this.lastSearchRequest = new SearchRequest(null, this.defaultSorting, this.pageData.number, this.pageData.size);
    this.loading = true;

    this.searchService.getLastItems(this.lastSearchRequest)
      .subscribe(this.onSearchSuccuss, this.onSearchFailure);
  }

  onSearchInput(request: SearchRequest) {
    this.lastSearchRequest = request;

    this.search(request);
  }

  search(request: SearchRequest) {
    this.loading = true;

    this.searchService.searchFor(request).subscribe(this.onSearchSuccuss, this.onSearchFailure);
  }

  paginate($event: PageEvent) {
    this.paginationRequest.size = $event.pageSize;
    this.paginationRequest.page = $event.pageIndex;

    if (this.paginationRequest.term === null) {
      this.loading = true;
      this.enableInput = true;

      this.searchService.getLastItems(this.lastSearchRequest)
        .subscribe(this.onSearchSuccuss, this.onSearchFailure);
    } else {
      this.search(this.paginationRequest);
    }
  }

  openErrSnackBar(err) {
    this.errSnackBar.open(err['message'], '', {
      duration: 1000,
    });
  }
}
