import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CessationviewComponent } from './cessationview.component';

describe('CessationviewComponent', () => {
  let component: CessationviewComponent;
  let fixture: ComponentFixture<CessationviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CessationviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CessationviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
