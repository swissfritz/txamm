import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartmwPage } from './startmw.page';

describe('StartmwPage', () => {
  let component: StartmwPage;
  let fixture: ComponentFixture<StartmwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartmwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartmwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
