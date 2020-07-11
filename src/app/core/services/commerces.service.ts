import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';
import { Observable } from 'rxjs';
import { COMMERCES } from '../constants';

@Injectable({
  providedIn: 'root',
})

/**
 * Service for the commerces
 */
export class CommercesService extends ApiService {
  /**
   * Get list of all layers
   */
  public getLayers(): Observable<any> {
    return super.get(`${COMMERCES.GET_LAYERS}`);
  }

  /**
   * Get list of all commerces
   */
  public getCommerces(): Observable<any> {
    return super.get(`${COMMERCES.GET_COMMERCES}`);
  }

  /**
   * Get stats of all commerces
   */
  public getStats(): Observable<any> {
    return super.get(`${COMMERCES.GET_COMMERCES_STATS}`);
  }
}
