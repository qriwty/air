import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Region } from '../../shared/models/region.model';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {
  private readonly apiHost = 'http://localhost:8000/';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Region[]> {
    return this.httpClient.get<any>(`${this.apiHost}`)
      .pipe(
        map(response => {
          const regions: Region[] = [];
          for (const region in response) {
            if (response.hasOwnProperty(region)) {
              const regionData = response[region];
              const regionObject: Region = {
                name: regionData.region,
                alert: regionData.alert,
                changed: regionData.changed
              };
              regions.push(regionObject);
            }
          }
          return regions;
        }
      )
    )
  }
}
