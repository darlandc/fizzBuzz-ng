export default interface RuleInterface {
  matches(number: number): boolean;
  getReplacement(): string;
}
