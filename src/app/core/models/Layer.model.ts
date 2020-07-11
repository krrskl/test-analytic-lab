import { Commerce } from './Commerce.model';

export interface Layer {
  type: string;
  properties: Commerce;
  geometry: Geometry;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}
