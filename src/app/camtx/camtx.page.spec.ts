import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CamtxPage } from './camtx.page';

describe('CamtxPage', () => {
  let component: CamtxPage;
  let fixture: ComponentFixture<CamtxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamtxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CamtxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
