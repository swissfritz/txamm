import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StarttxPage } from './starttx.page';

describe('StarttxPage', () => {
  let component: StarttxPage;
  let fixture: ComponentFixture<StarttxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarttxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StarttxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
