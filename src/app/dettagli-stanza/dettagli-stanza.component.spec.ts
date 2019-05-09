import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliStanzaComponent } from './dettagli-stanza.component';

describe('DettagliStanzaComponent', () => {
  let component: DettagliStanzaComponent;
  let fixture: ComponentFixture<DettagliStanzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliStanzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliStanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
