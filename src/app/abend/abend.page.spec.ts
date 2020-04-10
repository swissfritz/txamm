import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbendPage } from './abend.page';

describe('AbendPage', () => {
  let component: AbendPage;
  let fixture: ComponentFixture<AbendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
