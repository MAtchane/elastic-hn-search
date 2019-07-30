import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, tap, filter } from 'rxjs/operators';
import { SearchRequest } from '../../../shared/models/search-request.model';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() newSearch = new EventEmitter<SearchRequest>();
  debounceTime = environment.debounceTime;
  searchValue = '';
  sortBy = 'desc';
  advancedSearch = false;
  searchForm = new FormGroup({
    searchField: new FormControl(this.searchValue),
    sortField: new FormControl(this.sortBy),
    advancedField: new FormControl(this.advancedSearch)
  });

  constructor() { }

  ngOnInit() {
    let emitSearchEvent = () => this.search();

    this.searchForm.get('searchField').valueChanges.pipe(
      debounceTime(this.advancedSearch? this.debounceTime : this.debounceTime*3),
      tap(val => { 
        this.searchValue = val;
      }),
      filter(val => val !== null && val !== '' && val.replace(/\s/g, '') !== '')
    ).subscribe(emitSearchEvent);

    this.searchForm.get('sortField').valueChanges.pipe(
      tap(val => this.sortBy = val),
      debounceTime(this.debounceTime)
    ).subscribe(emitSearchEvent);

    this.searchForm.get('advancedField').valueChanges.pipe(
      tap(val => this.advancedSearch = val),
      debounceTime(this.debounceTime)
    ).subscribe(emitSearchEvent);
  }

  clearSearchField() {
    this.searchForm.get('searchField').setValue('');
  }

  search() {
    this.newSearch.emit(new SearchRequest(this.searchValue, this.sortBy, 0, 10, this.advancedSearch));
  }
}
