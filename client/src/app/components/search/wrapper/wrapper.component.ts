import { Component, OnInit } from '@angular/core';
import { HnPost } from 'src/app/shared/models/hn-post.model';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

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
  results$: Observable<HnPost[]>;
  private POST_EXAMPLE = new HnPost().deserialize({
    "by": "gdeglin",
    "id": 19813756,
    "score": 1,
    "time": 1556837803,
    "title": "OneSignal Is Hiring Ruby on Rails and DevOps Engineers in San Mateo",
    "type": "job",
    "url": "https://onesignal.com/careers"
  });

  ngOnInit() {
    this.results$ = of([
      this.POST_EXAMPLE, this.POST_EXAMPLE
    ]);
  }

  onNewSearch($event) {
    this.loading = true;
    of([
      this.POST_EXAMPLE, this.POST_EXAMPLE
    ]).pipe(delay(500)).subscribe(val => this.loading = false);
  }
}
