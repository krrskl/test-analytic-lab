import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { MapService } from '@core/services/map.service';
import { CommerceAppState } from '../../commerces-store/reducers/commerce.reducer';
import { CommerceActions } from '../../commerces-store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private map: MapService,
    private store$: Store<CommerceAppState>,
  ) {}

  ngOnInit() {
    this.map.buildMap();
    this.store$.select('commerces').subscribe(({ layers }) => {
      if (layers && layers.length !== 0) {
        console.log(layers);
        this.map.addPoints(layers);
      }
    });

    this.map.statusMap.subscribe(state => {
      if (state) {
        this.store$.dispatch(CommerceActions.getLayers());
      }
    });
  }
}
