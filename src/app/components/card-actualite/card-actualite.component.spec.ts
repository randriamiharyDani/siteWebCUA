import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActualiteComponent } from './card-actualite.component';

describe('CardActualiteComponent', () => {
  let component: CardActualiteComponent;
  let fixture: ComponentFixture<CardActualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardActualiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
