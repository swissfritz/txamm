import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CallmwPage } from './callmw.page';

describe('CallmwPage', () => {
  let component: CallmwPage;
  let fixture: ComponentFixture<CallmwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallmwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CallmwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
