import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

class Location {
  geonameId: any;
  countryCode: any;
  name: any;
}

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  public savedLocations: Location[] = [];

  constructor(private storage: Storage) { }

  saveLocation(item) {
    this.savedLocations.unshift({
      geonameId: item.geonameId,
      countryCode: item.countryCode,
      name: item.name
    });
    console.log(this.savedLocations);
    this.storage.set('savedLocations', this.savedLocations);
  }

  loadLocations() {
    this.storage.get('savedLocations').then((locations) => {
      this.savedLocations = locations || [];
    });
    console.log(this.savedLocations);
    return this.savedLocations;
  }
}
