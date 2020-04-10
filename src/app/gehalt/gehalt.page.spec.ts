import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GehaltPage } from './gehalt.page';

describe('GehaltPage', () => {
  let component: GehaltPage;
  let fixture: ComponentFixture<GehaltPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GehaltPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GehaltPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
