import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { DatePickerComponent } from './home.components/date-picker/date-picker.component';
import { IdPickerComponent } from './home.components/id-picker/id-picker.component';

describe('HomeComponent', () => {
 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
                HttpClientTestingModule,
                ReactiveFormsModule,
                FormsModule,
                RouterTestingModule
                ],
      declarations: [HomeComponent,
                    DatePickerComponent,
                    IdPickerComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
