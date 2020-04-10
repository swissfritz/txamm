import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnftxPage } from './anftx.page';

describe('AnftxPage', () => {
  let component: AnftxPage;
  let fixture: ComponentFixture<AnftxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnftxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnftxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
