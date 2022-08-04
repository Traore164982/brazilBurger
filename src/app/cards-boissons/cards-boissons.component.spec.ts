import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsBoissonsComponent } from './cards-boissons.component';

describe('CardsBoissonsComponent', () => {
  let component: CardsBoissonsComponent;
  let fixture: ComponentFixture<CardsBoissonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsBoissonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsBoissonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
