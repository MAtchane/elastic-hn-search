import { Component, OnInit, Input } from '@angular/core';
import { HnPost } from 'src/app/shared/models/hn-post.model';
import { fadeAnimation } from 'src/app/shared/animations/fade.animation';

/**
 * A representation of a hn post.
 */
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  animations: [fadeAnimation]
})
export class PostComponent {
  @Input() data: HnPost;
  hnItemLink = 'https://news.ycombinator.com/item?id=';
  NO_TITLE = 'Undefined title by the poster.';

  getUrl(item) {
    return item.url !== null ? item.url : this.getHnUrl(item);
  }

  getHnUrl(item) {
    return this.hnItemLink + item.id;
  }

  getTitle(title) {
    return title === null ? this.NO_TITLE : title;
  }
}
