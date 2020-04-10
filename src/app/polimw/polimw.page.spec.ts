import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolimwPage } from './polimw.page';

describe('PolimwPage', () => {
  let component: PolimwPage;
  let fixture: ComponentFixture<PolimwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolimwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolimwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
