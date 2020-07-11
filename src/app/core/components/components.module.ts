import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';

/* Chart Js */
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { CommerceAccordionComponent } from './commerce-accordion/commerce-accordion.component';

@NgModule({
  imports: [CommonModule, ChartsModule],
  exports: [MapComponent, ChartComponent, CommerceAccordionComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MapComponent, ChartComponent, CommerceAccordionComponent],
})
export class ComponentsModule {}
