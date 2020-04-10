import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PannetxPage } from './pannetx.page';

describe('PannetxPage', () => {
  let component: PannetxPage;
  let fixture: ComponentFixture<PannetxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PannetxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PannetxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
