import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() newSearch = new EventEmitter<string>();
  searchValue = '';
  sortBy = 'Newest';
  searchForm = new FormGroup({
    searchField: new FormControl(this.searchValue),
    sortField: new FormControl(this.sortBy),
  });

  constructor() { }

  ngOnInit() {
    let emitSearchEvent = () => {
      console.log(`searching for ${this.searchValue}, sorting by ${this.sortBy}`);
      this.newSearch.emit(this.searchValue + this.sortBy);
    };

    this.searchForm.get('searchField').valueChanges.pipe(
      tap(val => this.searchValue = val),
      debounceTime(500)
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
