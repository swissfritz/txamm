import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AustttxPage } from './austttx.page';

describe('AustttxPage', () => {
  let component: AustttxPage;
  let fixture: ComponentFixture<AustttxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AustttxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AustttxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
