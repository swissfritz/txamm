import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TwfalschmwPage } from './twfalschmw.page';

describe('TwfalschmwPage', () => {
  let component: TwfalschmwPage;
  let fixture: ComponentFixture<TwfalschmwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwfalschmwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TwfalschmwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
