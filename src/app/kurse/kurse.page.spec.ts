import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KursePage } from './kurse.page';

describe('KursePage', () => {
  let component: KursePage;
  let fixture: ComponentFixture<KursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
