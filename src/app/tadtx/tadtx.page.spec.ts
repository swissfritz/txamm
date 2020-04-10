import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TadtxPage } from './tadtx.page';

describe('TadtxPage', () => {
  let component: TadtxPage;
  let fixture: ComponentFixture<TadtxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TadtxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TadtxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
