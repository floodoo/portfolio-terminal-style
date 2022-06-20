import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalHomeComponent } from './terminal-home.component';

describe('TerminalHomeComponent', () => {
  let component: TerminalHomeComponent;
  let fixture: ComponentFixture<TerminalHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
