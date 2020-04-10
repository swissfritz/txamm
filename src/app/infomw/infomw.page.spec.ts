import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfomwPage } from './infomw.page';

describe('InfomwPage', () => {
  let component: InfomwPage;
  let fixture: ComponentFixture<InfomwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfomwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfomwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
