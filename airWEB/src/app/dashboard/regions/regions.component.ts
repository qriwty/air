import { Component, OnInit } from '@angular/core';
import { RegionsService } from '../../core/api/api-regions.service';
import { Region } from '../../shared/models/region.model';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
  regions: Region[] = [];

  constructor(private regionsService: RegionsService) {
  }

  ngOnInit() {
    this.regionsService.getAll()
      .subscribe(regions => {
        this.regions = regions;
      });
  }
}
