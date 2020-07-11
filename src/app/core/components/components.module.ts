import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [CommonModule],
  exports: [MapComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MapComponent],
})
export class ComponentsModule {}
