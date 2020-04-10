import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PpauPage } from './ppau.page';

describe('PpauPage', () => {
  let component: PpauPage;
  let fixture: ComponentFixture<PpauPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpauPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PpauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
