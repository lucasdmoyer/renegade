import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MortgageSecuritizationComponent } from './mortgage-securitization.component';

describe('MortgageSecuritizationComponent', () => {
  let component: MortgageSecuritizationComponent;
  let fixture: ComponentFixture<MortgageSecuritizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageSecuritizationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MortgageSecuritizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
