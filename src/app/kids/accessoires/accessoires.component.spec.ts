import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccessoiresComponent } from './accessoires.component';

describe('AccessoiresComponent', () => {
  let component: AccessoiresComponent;
  let fixture: ComponentFixture<AccessoiresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoiresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccessoiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
