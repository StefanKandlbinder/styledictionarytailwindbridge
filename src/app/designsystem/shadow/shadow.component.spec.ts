import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowComponent } from './shadow.component';

describe('ShadowComponent', () => {
  let component: ShadowComponent;
  let fixture: ComponentFixture<ShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
