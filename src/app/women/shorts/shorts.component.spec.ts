import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShortsComponent } from './shorts.component';

describe('ShortsComponent', () => {
  let component: ShortsComponent;
  let fixture: ComponentFixture<ShortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
