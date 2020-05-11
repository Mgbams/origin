import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShirtsComponent } from './shirts.component';

describe('ShirtsComponent', () => {
  let component: ShirtsComponent;
  let fixture: ComponentFixture<ShirtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
