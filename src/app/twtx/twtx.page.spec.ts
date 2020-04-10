import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TwtxPage } from './twtx.page';

describe('TwtxPage', () => {
  let component: TwtxPage;
  let fixture: ComponentFixture<TwtxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwtxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TwtxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
