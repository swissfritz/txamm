import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnfallmwPage } from './unfallmw.page';

describe('UnfallmwPage', () => {
  let component: UnfallmwPage;
  let fixture: ComponentFixture<UnfallmwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnfallmwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnfallmwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
