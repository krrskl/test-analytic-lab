import { Layer } from '@core/models/Layer.model';
import { Commerce } from '@core/models/Commerce.model';
import { Statistic } from '@core/models/Stats.model';
import { Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { MapService } from '@core/services/map.service';
import { CommerceAppState } from '../../commerces-store/reducers/commerce.reducer';
import { CommerceActions } from '../../commerces-store/actions';
import {
  selectCommercesPending,
  selectCommerces,
} from '../../commerces-store/selectors/commerce.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public loading$: Observable<boolean> = this.store$.pipe(
    select(selectCommercesPending),
  );

  public commerces$: Observable<Commerce[]> = this.store$.pipe(
    select(selectCommerces),
  );

  chartData: ChartDataSets[];
  chartLabels: Label[] = [];
  private stats: Statistic[] = [];
  private layers: Layer[] = [];

  constructor(
    private map: MapService,
    private store$: Store<CommerceAppState>,
  ) {}

  ngOnInit() {
    this.map.buildMap();

    this.store$.select('commerces').subscribe(({ layers, stats }) => {
      if (layers && layers.length !== 0 && this.layers !== layers) {
        this.map.addPoints(layers);
        this.layers = layers;
      }

      if (stats && stats.length !== 0 && this.stats !== stats) {
        let labels: Label[] = [];
        const data = stats.map(commerce => {
          labels = [...labels, commerce.name];
          return parseInt(commerce.sales, 10);
        });

        this.chartData = [{ data, label: 'Comercios' }];
        this.chartLabels = [...labels];
        this.stats = stats;
      }
    });

    this.map.statusMap.subscribe(state => {
      if (state) {
        this.store$.dispatch(CommerceActions.getCommerces());
        this.store$.dispatch(CommerceActions.getLayers());
        this.store$.dispatch(CommerceActions.getStats());
      }
    });
  }
}
