import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacingComponent } from './spacing.component';

describe('SpacingComponent', () => {
  let component: SpacingComponent;
  let fixture: ComponentFixture<SpacingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
