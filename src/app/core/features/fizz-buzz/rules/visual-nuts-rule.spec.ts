import { VisualNutsRule } from './visual-nuts-rule';

describe('VisualNutsRule', () => {

  const component: VisualNutsRule = new VisualNutsRule();

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should test the matches', () => {
    component.matches(5);
    expect(component.getReplacement()).toBeTruthy();
  });

});
