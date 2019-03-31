import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LocationService } from '../location.service';
import { HistoryService } from '../history.service';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  searchResults = null;
  term = null;

  constructor(private activatedRoute: ActivatedRoute, private locationService: LocationService, private historyService: HistoryService, private navCtrl: NavController) { }

  ngOnInit() {
    this.term = this.activatedRoute.snapshot.paramMap.get('term');
    this.searchResults = this.locationService.searchData(this.term);
  }

  saveAndGo(item) {
    this.historyService.saveLocation(item);
    this.navCtrl.navigateForward('/location/' + item.geonameId);
  }

  saveToHistory(item) {
    this.historyService.saveLocation(item)
  }
}
