import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Call0mwPage } from './call0mw.page';

describe('Call0mwPage', () => {
  let component: Call0mwPage;
  let fixture: ComponentFixture<Call0mwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Call0mwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Call0mwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
