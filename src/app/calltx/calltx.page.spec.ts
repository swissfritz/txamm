import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalltxPage } from './calltx.page';

describe('CalltxPage', () => {
  let component: CalltxPage;
  let fixture: ComponentFixture<CalltxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalltxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalltxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
