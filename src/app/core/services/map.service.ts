import { Commerce } from './../models/Commerce.model';
import { Layer } from '@core/models/Layer.model';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import * as mapboxgl from 'mapbox-gl';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private mapbox = mapboxgl as typeof mapboxgl;
  private map: mapboxgl.Map;
  private style = `mapbox://styles/mapbox/light-v10`;
  private lat = 4.641445320914245;
  private lng = -74.12887573242188;
  private zoom = 11;

  private mapSubject = new BehaviorSubject<boolean>(false);
  public statusMap = this.mapSubject.asObservable();

  constructor() {
    this.mapbox.accessToken = environment.map_box_token;
  }

  /**
   * Function to build the map component.
   */
  public buildMap(): void {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.on('load', () => this.mapSubject.next(true));
  }

  /**
   * Function to draw the Geojson data in the map
   */
  public addPoints(data: Layer[]): void {
    const features: any[] = [
      ...data.map((layer: Layer) => {
        return {
          type: layer.type,
          geometry: layer.geometry,
          properties: {
            title: layer.properties.name,
            icon: 'monument',
          },
        };
      }),
    ];

    const options: mapboxgl.AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features,
      },
    };

    this.map.addSource('points', options);
    this.map.addLayer({
      id: 'points',
      type: 'symbol',
      source: 'points',
      layout: {
        'icon-image': ['concat', ['get', 'icon'], '-15'],
        'text-field': ['get', 'title'],
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, 0.6],
        'text-anchor': 'top',
      },
    });
  }
}
