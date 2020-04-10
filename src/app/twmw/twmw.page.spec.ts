import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TwmwPage } from './twmw.page';

describe('TwmwPage', () => {
  let component: TwmwPage;
  let fixture: ComponentFixture<TwmwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwmwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TwmwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
