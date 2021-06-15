import { CountriesModule } from './features/countries/countries.module';
import { FizzBuzzModule } from './features/fizz-buzz/fizz-buzz.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, FizzBuzzModule, CountriesModule],
  exports: [FizzBuzzModule, CountriesModule],
  providers: []
})
export class CoreModule {}
