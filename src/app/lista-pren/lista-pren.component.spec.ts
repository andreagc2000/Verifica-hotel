import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPrenComponent } from './lista-pren.component';

describe('ListaPrenComponent', () => {
  let component: ListaPrenComponent;
  let fixture: ComponentFixture<ListaPrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
