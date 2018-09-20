import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsDetailsComponent } from './kids-details.component';

describe('CustomerDetailsComponent', () => {
  let component: KidsDetailsComponent;
  let fixture: ComponentFixture<KidsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
