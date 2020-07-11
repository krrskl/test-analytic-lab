/* Ngrx */
import { props, createAction } from '@ngrx/store';
/* Models */
import { Commerce } from '@core/models/Commerce.model';
import { Layer } from '@core/models/Layer.model';
import { Statistic } from '@core/models/Stats.model';

const CommerceActionsTypes = {
  GET_COMMERCES: '[COMMERCE] Get commerces',
  GET_COMMERCES_SUCCESS: '[COMMERCE] Get commerces success',

  GET_LAYERS: '[COMMERCE] Get layers',
  GET_LAYERS_SUCCESS: '[COMMERCE] Get layers success',

  GET_STATS: '[COMMERCE] Get stats',
  GET_STATS_SUCCESS: '[COMMERCE] Get stats success',

  COMMERCE_FAILURE: '[COMMERCE] Failure',
};

export const getCommerces = createAction(CommerceActionsTypes.GET_COMMERCES);

export const getCommercesSuccess = createAction(
  CommerceActionsTypes.GET_COMMERCES_SUCCESS,
  props<{ commerces: Commerce[] }>(),
);

export const getLayers = createAction(CommerceActionsTypes.GET_LAYERS);

export const getLayersSuccess = createAction(
  CommerceActionsTypes.GET_LAYERS_SUCCESS,
  props<{ layers: Layer[] }>(),
);

export const getStats = createAction(CommerceActionsTypes.GET_STATS);

export const getStatsSuccess = createAction(
  CommerceActionsTypes.GET_STATS_SUCCESS,
  props<{ stats: Statistic[] }>(),
);

export const commerceFailure = createAction(
  CommerceActionsTypes.COMMERCE_FAILURE,
);
