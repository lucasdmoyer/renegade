import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MacroEconomicsComponent } from './macro-economics.component';

describe('MacroEconomicsComponent', () => {
  let component: MacroEconomicsComponent;
  let fixture: ComponentFixture<MacroEconomicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacroEconomicsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MacroEconomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
