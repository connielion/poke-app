import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  hi = 'Hi! I\'ve integrated the RESTful Pokemon API from:';
  ps = 'This was a great opportunity to experiment with Bootstrap 4 since I was taught Bootstrap 3, so I did. :P';

  ngOnInit() {
  }

}
