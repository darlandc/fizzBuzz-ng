import RuleInterface from '../interfaces/rule.interface';

export class VisualRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 3 === 0;
  }

  getReplacement(): string {
    return 'Visual';
  }
}
