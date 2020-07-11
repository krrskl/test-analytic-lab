import { environment } from './../../../environments/environment';

const COMMERCES_BASE = `${environment.api}/commerces`;

export const COMMERCES = {
  GET_LAYERS: `${COMMERCES_BASE}/layer`,
  GET_COMMERCES: `${COMMERCES_BASE}`,
  GET_COMMERCES_STATS: `${COMMERCES_BASE}/graph`,
};
