import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProzPage } from './proz.page';

describe('ProzPage', () => {
  let component: ProzPage;
  let fixture: ComponentFixture<ProzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProzPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
