import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Call0txPage } from './call0tx.page';

describe('Call0txPage', () => {
  let component: Call0txPage;
  let fixture: ComponentFixture<Call0txPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Call0txPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Call0txPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
