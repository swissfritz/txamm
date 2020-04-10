import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WerprPage } from './werpr.page';

describe('WerprPage', () => {
  let component: WerprPage;
  let fixture: ComponentFixture<WerprPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerprPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WerprPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
