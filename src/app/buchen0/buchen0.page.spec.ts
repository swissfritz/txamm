import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Buchen0Page } from './buchen0.page';

describe('Buchen0Page', () => {
  let component: Buchen0Page;
  let fixture: ComponentFixture<Buchen0Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buchen0Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Buchen0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
