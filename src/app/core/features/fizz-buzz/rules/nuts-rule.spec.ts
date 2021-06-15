import { NutsRule } from './nuts-rule';

describe('NutsRule', () => {

  const component: NutsRule = new NutsRule();

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should test the matches', () => {
    component.matches(5);
    expect(component.getReplacement()).toBe('Nuts');
  });

});
