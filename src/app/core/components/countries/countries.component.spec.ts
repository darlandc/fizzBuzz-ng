import { CountriesManagerService } from './../../services/countries-manager.service';
import { CountriesComponent } from './countries.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('CountriesComponent', () => {

  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;

  let manager: CountriesManagerService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CountriesComponent
      ],
      providers: [
        CountriesManagerService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    manager = TestBed.get(CountriesManagerService) as jasmine.SpyObj<CountriesManagerService>;
    manager.data = [{
      country: 'DE',
      languages: ['de']
    }]
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    expect(manager.data).toBeDefined();
  });

});
