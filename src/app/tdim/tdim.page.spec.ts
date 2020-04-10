import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TdimPage } from './tdim.page';

describe('TdimPage', () => {
  let component: TdimPage;
  let fixture: ComponentFixture<TdimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TdimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
