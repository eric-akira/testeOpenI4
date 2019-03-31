import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {
  details = null;

  constructor(private activatedRoute: ActivatedRoute, private locationService: LocationService) { }

  ngOnInit() {
    let geonameId = this.activatedRoute.snapshot.paramMap.get('id');

    this.locationService.getLocationDetails(geonameId).subscribe(result => {
      this.details = result;
    });
  }

  openWiki() {
    window.open('https://' + this.details.wikipediaURL, '_blank');
  }
}
