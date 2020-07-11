import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@core/components/components.module';

/* Components */
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';

/* Ngrx (Store, Effects) */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/* Reducer */
import {
  commerceFeatureKey,
  reducerCommerce,
} from './commerces-store/reducers/commerce.reducer';

/* Effects */
import { CommerceEffects } from './commerces-store/effects';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    StoreModule.forFeature(commerceFeatureKey, reducerCommerce),
    EffectsModule.forFeature([CommerceEffects]),
  ],
})
export class DashboardModule {}
