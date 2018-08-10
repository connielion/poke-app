import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  hi = 'Hi! I\'ve integrated the RESTful Pokemon API from:';

  ngOnInit() {
  }

}
