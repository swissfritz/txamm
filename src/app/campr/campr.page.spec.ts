import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CamprPage } from './campr.page';

describe('CamprPage', () => {
  let component: CamprPage;
  let fixture: ComponentFixture<CamprPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamprPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CamprPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
