import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchulPage } from './schul.page';

describe('SchulPage', () => {
  let component: SchulPage;
  let fixture: ComponentFixture<SchulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchulPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
