import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SolicitudNuevaComponent } from './solicitud-nueva.component';

describe('PruebaNuevaComponent', () => {
  let component: SolicitudNuevaComponent;
  let fixture: ComponentFixture<SolicitudNuevaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
                ReactiveFormsModule,
                BrowserAnimationsModule
                ],
      declarations: [SolicitudNuevaComponent
                    ]
    });
    fixture = TestBed.createComponent(SolicitudNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
