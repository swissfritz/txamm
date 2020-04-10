import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AktmwPage } from './aktmw.page';

describe('AktmwPage', () => {
  let component: AktmwPage;
  let fixture: ComponentFixture<AktmwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AktmwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AktmwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
