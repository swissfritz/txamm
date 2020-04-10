import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnfmtxPage } from './unfmtx.page';

describe('UnfmtxPage', () => {
  let component: UnfmtxPage;
  let fixture: ComponentFixture<UnfmtxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnfmtxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnfmtxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
