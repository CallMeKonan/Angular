import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEntradasComponent } from './form-entradas.component';

describe('FormEntradasComponent', () => {
  let component: FormEntradasComponent;
  let fixture: ComponentFixture<FormEntradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEntradasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
