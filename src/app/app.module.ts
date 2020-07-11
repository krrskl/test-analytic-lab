/* Others Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Ngrx (Store, Devtools, Effects) */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

/* Environments */
import { environment } from 'src/environments/environment';

/* Reducers */
import { appReducers, metaReducers } from './core/store/reducers/app.reducers';

/* Effects */
import { appEffects } from './core/store/effects/app.effects';

/* Components */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      name: 'Ngrx Analytic Lab',
    }),
    EffectsModule.forRoot(appEffects),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
