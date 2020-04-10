import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnfalltxPage } from './unfalltx.page';

describe('UnfalltxPage', () => {
  let component: UnfalltxPage;
  let fixture: ComponentFixture<UnfalltxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnfalltxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnfalltxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
