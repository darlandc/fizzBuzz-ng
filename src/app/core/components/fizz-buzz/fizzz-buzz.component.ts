import { Component, OnInit, Input } from '@angular/core';
import { RulesManagerService } from '../../services/rules-manager.service';
import { CountriesManagerService } from '../../services/countries-manager.service';
import { VisualNutsRule } from '../../rules/visual-nuts-rule';
import { VisualRule } from '../../rules/visual-rule';
import { NutsRule } from '../../rules/nuts-rule';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html'
})
export class FizzBuzzComponent implements OnInit {

  visualNutsRule = new VisualNutsRule();
  visualRule = new VisualRule();
  nutsRule = new NutsRule();

  result = '';

  @Input() firstNumbers: number;

  constructor(
    private manager: RulesManagerService,
  ) {
    this.manager.addRule(this.visualNutsRule);
    this.manager.addRule(this.visualRule);
    this.manager.addRule(this.visualRule);
  }

  ngOnInit(): void {
    const output = this.manager.generate(this.firstNumbers);
    this.result = output.join(', ');
   }

}
