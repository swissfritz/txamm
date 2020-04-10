import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TstrtxPage } from './tstrtx.page';

describe('TstrtxPage', () => {
  let component: TstrtxPage;
  let fixture: ComponentFixture<TstrtxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TstrtxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TstrtxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
