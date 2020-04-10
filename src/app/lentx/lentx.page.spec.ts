import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LentxPage } from './lentx.page';

describe('LentxPage', () => {
  let component: LentxPage;
  let fixture: ComponentFixture<LentxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LentxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LentxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
