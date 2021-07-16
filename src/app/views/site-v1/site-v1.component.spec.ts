import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteV1Component } from './site-v1.component';

describe('SiteV1Component', () => {
  let component: SiteV1Component;
  let fixture: ComponentFixture<SiteV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
