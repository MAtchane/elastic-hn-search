import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  githubRepo: string;
  faqUrl: string;

  constructor() { }

  ngOnInit() {
    this.githubRepo = environment.githubRepo;
    this.faqUrl = environment.faqUrl;
  }

}
