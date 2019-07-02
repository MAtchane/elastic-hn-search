import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, tap, filter } from 'rxjs/operators';
import { SearchRequest } from '../../../shared/models/search-request';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() newSearch = new EventEmitter<SearchRequest>();
  searchValue = '';
  sortBy = 'desc';
  searchForm = new FormGroup({
    searchField: new FormControl(this.searchValue),
    sortField: new FormControl(this.sortBy),
  });

  constructor() { }

  ngOnInit() {
    let emitSearchEvent = () => {
      this.newSearch.emit(new SearchRequest(this.searchValue, this.sortBy));
    };

    this.searchForm.get('searchField').valueChanges.pipe(
      debounceTime(500),
      tap(val => { 
        this.searchValue = val;
      }),
      filter(val => val !== null && val !== '' && val.replace(/\s/g, '') !== '')
    ).subscribe(emitSearchEvent);

    this.searchForm.get('sortField').valueChanges.pipe(
      tap(val => this.sortBy = val),
      debounceTime(500)
    ).subscribe(emitSearchEvent);
  }

  clearSearchField() {
    this.searchForm.get('searchField').setValue('');
  }
}
