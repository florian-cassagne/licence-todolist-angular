import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorViewComponent } from './creator-view.component';

describe('CreatorViewComponent', () => {
  let component: CreatorViewComponent;
  let fixture: ComponentFixture<CreatorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
