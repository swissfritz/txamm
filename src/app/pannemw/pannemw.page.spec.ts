import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PannemwPage } from './pannemw.page';

describe('PannemwPage', () => {
  let component: PannemwPage;
  let fixture: ComponentFixture<PannemwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PannemwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PannemwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
