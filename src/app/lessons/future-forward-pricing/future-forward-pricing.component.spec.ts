import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FutureForwardPricingComponent } from './future-forward-pricing.component';

describe('FutureForwardPricingComponent', () => {
  let component: FutureForwardPricingComponent;
  let fixture: ComponentFixture<FutureForwardPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureForwardPricingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FutureForwardPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
