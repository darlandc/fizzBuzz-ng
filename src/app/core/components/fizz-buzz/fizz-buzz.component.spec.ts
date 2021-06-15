import { FizzBuzzComponent } from './fizzz-buzz.component';
import { TestBed } from '@angular/core/testing';

describe('FizzBuzzComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FizzBuzzComponent
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(FizzBuzzComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
