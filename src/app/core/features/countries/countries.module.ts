import { CountriesManagerService } from './services/countries-manager.service';
import { CountriesComponent } from './countries.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CountriesComponent],
  imports: [CommonModule],
  exports: [CountriesComponent],
  providers: [CountriesManagerService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CountriesModule {}
