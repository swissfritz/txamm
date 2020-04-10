import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CallwsmwPage } from './callwsmw.page';

describe('CallwsmwPage', () => {
  let component: CallwsmwPage;
  let fixture: ComponentFixture<CallwsmwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallwsmwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CallwsmwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
