import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LenmwPage } from './lenmw.page';

describe('LenmwPage', () => {
  let component: LenmwPage;
  let fixture: ComponentFixture<LenmwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenmwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LenmwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
