import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KidsComponent } from './kids.component';

describe('KidsComponent', () => {
  let component: KidsComponent;
  let fixture: ComponentFixture<KidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
