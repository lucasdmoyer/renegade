import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrganizationBuyingBehaviorComponent } from './organization-buying-behavior.component';

describe('OrganizationBuyingBehaviorComponent', () => {
  let component: OrganizationBuyingBehaviorComponent;
  let fixture: ComponentFixture<OrganizationBuyingBehaviorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationBuyingBehaviorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationBuyingBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
