import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TxfahrPage } from './txfahr.page';

describe('TxfahrPage', () => {
  let component: TxfahrPage;
  let fixture: ComponentFixture<TxfahrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxfahrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TxfahrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
