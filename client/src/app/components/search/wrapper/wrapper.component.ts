import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { HnPost } from 'src/app/shared/models/hn-post.model';
import { SearchRequest } from 'src/app/shared/models/search-request';
import { SearchService } from 'src/app/shared/services/search.service';
import { environment } from 'src/environments/environment.prod';

/**
 * Wraps the search logic (input + search results).
 */
@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  loading = false;
  results$: BehaviorSubject<HnPost[]>;
  defaultSize = environment.defaultSize;
  defaultSorting = environment.defaultSorting;

  constructor(private searchService: SearchService, private errSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.results$ = new BehaviorSubject([]);

    this.loading = true;
    this.searchService.getLastItems(this.defaultSize, this.defaultSorting).subscribe(
      val => {
        this.loading = false;
        this.results$.next(val);
      },
      err => {
        this.loading = false;
        this.openErrSnackBar(err);
      });
  }

  onNewSearch($event: SearchRequest) {
    this.loading = true;
    this.searchService.searchFor($event).subscribe(
      val => {
        console.log(val);
        this.loading = false;
        this.results$.next(val);
      },
      err => {
        this.loading = false;
        this.openErrSnackBar(err);
      });
  }

  openErrSnackBar(err) {
    this.errSnackBar.open(err['message'], '', {
      duration: 3000,
    });
  }
}
