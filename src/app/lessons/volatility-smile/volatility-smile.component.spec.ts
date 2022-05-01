import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VolatilitySmileComponent } from './volatility-smile.component';

describe('VolatilitySmileComponent', () => {
  let component: VolatilitySmileComponent;
  let fixture: ComponentFixture<VolatilitySmileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolatilitySmileComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VolatilitySmileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
