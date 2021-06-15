import { RulesManagerService } from './rules-manager.service';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('RulesManagerService', () => {
  let service: RulesManagerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      providers: [RulesManagerService]
    }).compileComponents();

    service = TestBed.get(RulesManagerService);
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });


  it('should test generate', () => {
    const response = service.generate(34);
    expect(response).toBeTruthy();
  });

  it('should test getReplacement', () => {
    const response = service.getReplacement(65);
    expect(response).toBeTruthy();
  });

});
