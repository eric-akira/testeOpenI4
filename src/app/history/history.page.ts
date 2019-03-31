import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  history = null;

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.historyService.loadLocations();
    //this.history = this.historyService.savedLocations;
  }

}
