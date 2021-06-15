import { VisualRule } from './rules/visual-rule';
import { VisualNutsRule } from './rules/visual-nuts-rule';
import { FizzBuzzComponent } from './fizzz-buzz.component';
import { TestBed } from '@angular/core/testing';
import { NutsRule } from './rules/nuts-rule';
import { RulesManagerService } from './services/rules-manager.service';

describe('FizzBuzzComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FizzBuzzComponent
      ],
      providers: [
        VisualNutsRule,
        NutsRule,
        VisualRule,
        RulesManagerService
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(FizzBuzzComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
