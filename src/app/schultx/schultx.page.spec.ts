import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchultxPage } from './schultx.page';

describe('SchultxPage', () => {
  let component: SchultxPage;
  let fixture: ComponentFixture<SchultxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchultxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchultxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
