import { Injectable } from '@angular/core';
import RuleInterface from '../interfaces/rule.interface';

@Injectable({
  providedIn: 'root'
})
export class RulesManagerService {
  rules: RuleInterface[] = [];

  addRule(rule: RuleInterface): void {
    this.rules.push(rule);
  }

  generate(currentNumber: number): Array<string> {
    const output: string[] = [];
    for (let i = 1; i <= currentNumber; i++) {
      output.push(this.getReplacement(i));
    }
    return output;
  }

  getReplacement(currentNumber: number): string {
    for (const rule of this.rules) {
      if (rule.matches(currentNumber)) {
        return rule.getReplacement();
      }
    }
    return String(currentNumber);
  }
}
