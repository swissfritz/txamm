import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CamconPage } from './camcon.page';

describe('CamconPage', () => {
  let component: CamconPage;
  let fixture: ComponentFixture<CamconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamconPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CamconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
