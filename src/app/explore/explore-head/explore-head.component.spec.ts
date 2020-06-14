import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreHeadComponent } from './explore-head.component';

describe('ExploreHeadComponent', () => {
  let component: ExploreHeadComponent;
  let fixture: ComponentFixture<ExploreHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
