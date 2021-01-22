import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedPageComponent } from './reserved-page.component';

describe('ReservedPageComponent', () => {
  let component: ReservedPageComponent;
  let fixture: ComponentFixture<ReservedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
