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
export class PostComponent implements OnInit {
  @Input() data: HnPost;

  ngOnInit() {
  }

}
