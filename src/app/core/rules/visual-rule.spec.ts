import { VisualRule } from './visual-rule';

describe('VisualsRule', () => {

  const component: VisualRule = new VisualRule();

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should test the matches', () => {
    component.matches(5);
    expect(component.getReplacement()).toBeTruthy();
  });

});
