import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BIndexComponent } from './b-index.component';

describe('BIndexComponent', () => {
  let component: BIndexComponent;
  let fixture: ComponentFixture<BIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
