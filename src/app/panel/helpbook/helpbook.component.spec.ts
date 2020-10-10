import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpbookComponent } from './helpbook.component';

describe('HelpbookComponent', () => {
  let component: HelpbookComponent;
  let fixture: ComponentFixture<HelpbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
