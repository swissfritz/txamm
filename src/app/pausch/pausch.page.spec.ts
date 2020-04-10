import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PauschPage } from './pausch.page';

describe('PauschPage', () => {
  let component: PauschPage;
  let fixture: ComponentFixture<PauschPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PauschPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PauschPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
