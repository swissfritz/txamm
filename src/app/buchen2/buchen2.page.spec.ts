import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Buchen2Page } from './buchen2.page';

describe('Buchen2Page', () => {
  let component: Buchen2Page;
  let fixture: ComponentFixture<Buchen2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buchen2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Buchen2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
