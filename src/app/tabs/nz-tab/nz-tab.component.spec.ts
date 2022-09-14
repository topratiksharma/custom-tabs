import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzTabComponent } from './nz-tab.component';

describe('NzTabComponent', () => {
  let component: NzTabComponent;
  let fixture: ComponentFixture<NzTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NzTabComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NzTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
