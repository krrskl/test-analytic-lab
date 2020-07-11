/* Ngrx */
import { createReducer, on, Action } from '@ngrx/store';
/* Models */
import { Commerce } from '@core/models/Commerce.model';
import { Layer } from '@core/models/Layer.model';
import { Statistic } from '@core/models/Stats.model';
/* Actions */
import { CommerceActions } from '../actions';
/* Reducers */
import { AppState } from '@core/store/reducers/app.reducers';

export const commerceFeatureKey = 'commerces';

export interface CommerceState {
  commerces: Commerce[];
  layers: Layer[];
  stats: Statistic[];
  pending: boolean;
}

export interface CommerceAppState extends AppState {
  [commerceFeatureKey]: CommerceState;
}

export const initialState: CommerceState = {
  commerces: [],
  layers: [],
  stats: [],
  pending: false,
};

const commerceReducer = createReducer(
  initialState,
  on(CommerceActions.getCommerces, state => ({
    ...state,
    pending: true,
  })),
  on(CommerceActions.getCommercesSuccess, (state, { commerces }) => ({
    ...state,
    commerces,
    pending: false,
  })),
  on(CommerceActions.getLayers, state => ({
    ...state,
    pending: true,
  })),
  on(CommerceActions.getLayersSuccess, (state, { layers }) => ({
    ...state,
    layers,
    pending: false,
  })),
  on(CommerceActions.getStats, state => ({
    ...state,
    pending: true,
  })),
  on(CommerceActions.getStatsSuccess, (state, { stats }) => ({
    ...state,
    stats,
    pending: false,
  })),
);

export function reducerCommerce(state: CommerceState, action: Action) {
  return commerceReducer(state, action);
}
