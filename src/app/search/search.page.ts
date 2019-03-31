import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchTerm: string = '';

  constructor() { }

  ngOnInit() {
  }

  searchChanged() {
    //console.log(this.searchTerm);
  }
}
