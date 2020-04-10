import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AusttmwPage } from './austtmw.page';

describe('AusttmwPage', () => {
  let component: AusttmwPage;
  let fixture: ComponentFixture<AusttmwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AusttmwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AusttmwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
