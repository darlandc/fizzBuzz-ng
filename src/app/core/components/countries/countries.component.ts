import { Component, OnInit } from '@angular/core';
import { CountriesManagerService } from '../../services/countries-manager.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html'
})
export class CountriesComponent implements OnInit {

  updatedData = [];
  highestNumberOfLanguages = 0;
  mostCommonLanguage = '';
  numberOfCountries: number;

  constructor(private countries: CountriesManagerService) { }

  ngOnInit(): void {
    this.doSecondExercise(this.countries.data);
  }

  doSecondExercise(data): void {
    this.numberOfCountries = data.length;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      // tslint:disable-next-line:forin
      for (const key in obj) {
        const value = obj[key];
        if (value.length >= this.highestNumberOfLanguages){
            this.highestNumberOfLanguages = value.length;
        }
      }
    }
    data.map(item => {
      if (item.languages.includes('de')) {
        this.updatedData.push(item);
      }
    });
    console.log(data.length, '#1');
    console.log(this.updatedData, '#2');
    console.log(this.highestNumberOfLanguages, '#3');
  }

}
