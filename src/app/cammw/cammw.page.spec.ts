import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CammwPage } from './cammw.page';

describe('CammwPage', () => {
  let component: CammwPage;
  let fixture: ComponentFixture<CammwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CammwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CammwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
