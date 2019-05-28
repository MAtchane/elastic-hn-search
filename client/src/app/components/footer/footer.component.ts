import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  github: string;
  personalWebsite: string;  
  myEmail: string;  

  constructor() { }

  ngOnInit() {
    this.github = environment.github;
    this.personalWebsite = environment.personalWebsite;
    this.myEmail = environment.myEmail;
  }

}
