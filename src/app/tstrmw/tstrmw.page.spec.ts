import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TstrmwPage } from './tstrmw.page';

describe('TstrmwPage', () => {
  let component: TstrmwPage;
  let fixture: ComponentFixture<TstrmwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TstrmwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TstrmwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
