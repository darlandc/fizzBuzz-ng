import RuleInterface from '../interfaces/rule.interface';

export class NutsRule implements RuleInterface {
  matches(currentNumber: number): boolean {
    return currentNumber % 5 === 0;
  }

  getReplacement(): string {
    return 'Nuts';
  }
}
