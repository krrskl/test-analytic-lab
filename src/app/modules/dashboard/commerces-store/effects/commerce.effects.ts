import { Injectable } from '@angular/core';
/* Ngrx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
/* Services  */
import { CommercesService } from 'src/app/core/services/commerces.service';
/* Rxjs */
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
/* Actions */
import { CommerceActions } from '../actions';

@Injectable()
export class CommerceEffects {
  constructor(
    private actions$: Actions,
    private commercesService: CommercesService,
  ) {}

  getCommerces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommerceActions.getCommerces),
      mergeMap(() =>
        this.commercesService.getCommerces().pipe(
          map(data => CommerceActions.getCommercesSuccess({ commerces: data })),
          catchError(this.handleError),
        ),
      ),
    ),
  );

  getLayers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommerceActions.getLayers),
      mergeMap(() =>
        this.commercesService.getLayers().pipe(
          map(data =>
            CommerceActions.getLayersSuccess({ layers: data.features }),
          ),
          catchError(this.handleError),
        ),
      ),
    ),
  );

  getStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommerceActions.getStats),
      mergeMap(() =>
        this.commercesService.getStats().pipe(
          map(data => CommerceActions.getStatsSuccess({ stats: data })),
          catchError(this.handleError),
        ),
      ),
    ),
  );

  private handleError(error) {
    return of(CommerceActions.commerceFailure());
  }
}
