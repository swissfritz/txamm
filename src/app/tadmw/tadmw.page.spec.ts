import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TadmwPage } from './tadmw.page';

describe('TadmwPage', () => {
  let component: TadmwPage;
  let fixture: ComponentFixture<TadmwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TadmwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TadmwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
