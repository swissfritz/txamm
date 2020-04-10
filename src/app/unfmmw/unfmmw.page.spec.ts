import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnfmmwPage } from './unfmmw.page';

describe('UnfmmwPage', () => {
  let component: UnfmmwPage;
  let fixture: ComponentFixture<UnfmmwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnfmmwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnfmmwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
