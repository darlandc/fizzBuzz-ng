import RuleInterface from '../interfaces/rule.interface';

export class VisualRule implements RuleInterface {
  matches(currentNumber: number): boolean {
    return currentNumber % 3 === 0;
  }

  getReplacement(): string {
    return 'Visual';
  }
}
