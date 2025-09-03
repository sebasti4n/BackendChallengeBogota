import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HistoryComponent } from './history.component';


describe('HomeComponent', () => {
 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
                HttpClientTestingModule,
                ReactiveFormsModule,
                FormsModule,
                RouterTestingModule
                ],
      declarations: [HistoryComponent,
        
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HistoryComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HistoryComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
