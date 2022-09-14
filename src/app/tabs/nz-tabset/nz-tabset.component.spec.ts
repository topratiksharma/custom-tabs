import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzTabsetComponent } from './nz-tabset.component';

describe('NzTabsetComponent', () => {
  let component: NzTabsetComponent;
  let fixture: ComponentFixture<NzTabsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NzTabsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzTabsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
