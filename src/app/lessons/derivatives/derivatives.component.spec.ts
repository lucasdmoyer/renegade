import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DerivativesComponent } from './derivatives.component';

describe('DerivativesComponent', () => {
  let component: DerivativesComponent;
  let fixture: ComponentFixture<DerivativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerivativesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DerivativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
