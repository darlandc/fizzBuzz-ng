import RuleInterface from '../interfaces/rule.interface';

export class VisualNutsRule implements RuleInterface {
  matches(currentNumber: number): boolean {
    return currentNumber % 3 === 0 && currentNumber % 5 === 0;
  }

  getReplacement(): string {
    return 'VisualNuts';
  }
}
