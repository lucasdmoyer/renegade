import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorporationComponent } from './corporation.component';

describe('CorporationComponent', () => {
  let component: CorporationComponent;
  let fixture: ComponentFixture<CorporationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorporationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
