import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SneakersComponent } from './sneakers.component';

describe('SneakersComponent', () => {
  let component: SneakersComponent;
  let fixture: ComponentFixture<SneakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakersComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SneakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
