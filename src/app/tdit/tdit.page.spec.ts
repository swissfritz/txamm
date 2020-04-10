import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TditPage } from './tdit.page';

describe('TditPage', () => {
  let component: TditPage;
  let fixture: ComponentFixture<TditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
