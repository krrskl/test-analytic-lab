/* Ngrx */
import { createSelector, createFeatureSelector } from '@ngrx/store';
/* Reducers */
import {
  CommerceAppState,
  CommerceState,
  commerceFeatureKey,
} from '../reducers/commerce.reducer';

export const selectCommercesState = createFeatureSelector<
  CommerceAppState,
  CommerceState
>(commerceFeatureKey);

export const selectCommercesPending = createSelector(
  selectCommercesState,
  (state: CommerceState) => state.pending,
);

export const selectCommerces = createSelector(
  selectCommercesState,
  (state: CommerceState) => state.commerces,
);
