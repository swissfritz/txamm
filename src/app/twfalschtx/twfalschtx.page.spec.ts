import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TwfalschtxPage } from './twfalschtx.page';

describe('TwfalschtxPage', () => {
  let component: TwfalschtxPage;
  let fixture: ComponentFixture<TwfalschtxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwfalschtxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TwfalschtxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
