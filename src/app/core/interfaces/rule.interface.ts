export default interface RuleInterface {
  matches(currentNumber: number): boolean;
  getReplacement(): string;
}
