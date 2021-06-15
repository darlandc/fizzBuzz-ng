import { NutsRule } from './rules/nuts-rule';
import { Component, OnInit, Input } from '@angular/core';
import { RulesManagerService } from './services/rules-manager.service';
import { VisualNutsRule } from './rules/visual-nuts-rule';
import { VisualRule } from './rules/visual-rule';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html'
})
export class FizzBuzzComponent implements OnInit {

  result = '';

  @Input() firstNumbers: number;

  constructor(
    private manager: RulesManagerService,
    private visualNutsRule: VisualNutsRule,
    private nutsRule: NutsRule,
    private visualRule: VisualRule
  ) {
    this.manager.addRule(this.visualNutsRule);
    this.manager.addRule(this.nutsRule);
    this.manager.addRule(this.visualRule);
  }

  ngOnInit(): void {
    const output = this.manager.generate(this.firstNumbers);
    this.result = output.join(', ');
   }

}
