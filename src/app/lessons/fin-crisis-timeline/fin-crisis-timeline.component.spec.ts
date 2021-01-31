import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinCrisisTimelineComponent } from './fin-crisis-timeline.component';

describe('FinCrisisTimelineComponent', () => {
  let component: FinCrisisTimelineComponent;
  let fixture: ComponentFixture<FinCrisisTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinCrisisTimelineComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinCrisisTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
