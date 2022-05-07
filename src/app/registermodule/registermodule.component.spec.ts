import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermoduleComponent } from './registermodule.component';

describe('RegistermoduleComponent', () => {
  let component: RegistermoduleComponent;
  let fixture: ComponentFixture<RegistermoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistermoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistermoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
