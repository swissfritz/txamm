import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfotxPage } from './infotx.page';

describe('InfotxPage', () => {
  let component: InfotxPage;
  let fixture: ComponentFixture<InfotxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfotxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfotxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
