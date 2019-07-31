import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, tap, filter } from 'rxjs/operators';
import { SearchRequest } from '../../../shared/models/search-request.model';
import { environment } from 'src/environments/environment.prod';
import { MatDialog } from '@angular/material/dialog';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() newSearch = new EventEmitter<SearchRequest>();
  hideAdvancedTip = false;
  debounceTime = environment.debounceTime;
  searchTerm = '';
  lastSearchTerm: string = '';
  sortBy = 'desc';
  advancedSearch = false;
  searchForm = new FormGroup({
    searchField: new FormControl(this.searchTerm),
    sortField: new FormControl(this.sortBy),
    advancedField: new FormControl(this.advancedSearch)
  });

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    let emitSearchEvent = () => this.search();

    this.searchForm.get('searchField').valueChanges.pipe(
      tap(val => {
        this.searchTerm = val;
      }),
      debounceTime(this.advancedSearch ? this.debounceTime : this.debounceTime * 3),
      filter(val => val !== null && val !== '' && val.replace(/\s/g, '') !== '' && val !== this.lastSearchTerm)
    ).subscribe(emitSearchEvent);

    this.searchForm.get('sortField').valueChanges.pipe(
      tap(val => this.sortBy = val),
      debounceTime(this.debounceTime)
    ).subscribe(emitSearchEvent);

    this.searchForm.get('advancedField').valueChanges.subscribe(val => {
      if (val) {
        this.openAdvancedTip();
      }
      this.advancedSearch = val;
    });
  }

  clearSearchField() {
    this.searchForm.get('searchField').setValue('');
  }

  search() {
    this.lastSearchTerm = this.searchTerm;
    console.log(this.searchTerm);
    this.newSearch.emit(new SearchRequest(this.searchTerm, this.sortBy, 0, 10, this.advancedSearch));
  }

  openAdvancedTip(): void {
    if (!this.hideAdvancedTip) {
      const dialogRef = this.dialog.open(NotificationDialogComponent, {
        width: '600px',
        data: {
          title: 'Tip',
          text: 'Advanced search activates support for Elastic\'s "Query String Query", to test it try: "jav*".',
          linkTitle: 'Official documentation',
          link: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html'
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        this.hideAdvancedTip = result;
      });
    }
  }
}
