import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JeansComponent } from './jeans.component';

describe('JeansComponent', () => {
  let component: JeansComponent;
  let fixture: ComponentFixture<JeansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeansComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
