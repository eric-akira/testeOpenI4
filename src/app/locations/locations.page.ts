import { LocationService } from '../location.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  searchResults = null;
  term = null;

  constructor(private activatedRoute: ActivatedRoute, private locationService: LocationService) { }

  ngOnInit() {
    this.term = this.activatedRoute.snapshot.paramMap.get('term');
    this.searchResults = this.locationService.searchData(this.term);
  }

}
