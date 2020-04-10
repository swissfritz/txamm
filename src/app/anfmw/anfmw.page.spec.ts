import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnfmwPage } from './anfmw.page';

describe('AnfmwPage', () => {
  let component: AnfmwPage;
  let fixture: ComponentFixture<AnfmwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnfmwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnfmwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
