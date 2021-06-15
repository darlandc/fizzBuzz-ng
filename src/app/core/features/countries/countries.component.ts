import { Component, OnInit } from '@angular/core';
import { CountriesManagerService } from './services/countries-manager.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html'
})
export class CountriesComponent implements OnInit {
  updatedData = [];
  highestNumberOfLanguages = 0;
  mostCommonLanguage: any;
  numberOfCountries: number;
  modeMap = {};
  mostFreq = 0;
  which = [];
  count: any[];
  mostFrequent: any[];
  value: any;
  country: any;

  constructor(private manager: CountriesManagerService) {}

  ngOnInit(): void {
    this.numberOfCountries = this.manager.data.length;
    this.getHighestNumberOfLanguages(this.manager.data);
    this.whoSpeaksGerman(this.manager.data);
    this.getMostCommonLanguage(this.manager.data);
  }

  getHighestNumberOfLanguages(data): void {
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      for (const key in obj) {
        const value = obj[key];
        if (value.length >= this.highestNumberOfLanguages) {
          this.highestNumberOfLanguages = value.length;
          this.country = obj.country;
        }
      }
    }
  }

  whoSpeaksGerman(data): void {
    data.map(item => {
      if (item.languages.includes('de')) {
        this.updatedData.push(item);
      }
    });
  }

  getMostCommonLanguage(data): void {
    this.count = [];
    this.mostFrequent = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < data.length; i++) {
      const language = data[i].languages;
      console.log(language);
      // tslint:disable-next-line: forin
      for (const item in language) {
        this.value = { lang: language[item], times: 0 };
        if (this.count.includes(this.value.lang)) {
          this.value.times++;
          this.mostFrequent.push({
            value: this.value
          });
        }
        this.count.push(this.value.lang);
      }
    }
  }
}
