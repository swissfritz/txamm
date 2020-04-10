import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CallwstxPage } from './callwstx.page';

describe('CallwstxPage', () => {
  let component: CallwstxPage;
  let fixture: ComponentFixture<CallwstxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallwstxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CallwstxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
