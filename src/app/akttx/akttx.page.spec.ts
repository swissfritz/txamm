import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AkttxPage } from './akttx.page';

describe('AkttxPage', () => {
  let component: AkttxPage;
  let fixture: ComponentFixture<AkttxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkttxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AkttxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
