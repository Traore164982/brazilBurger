import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDetails2Component } from './cards-details2.component';

describe('CardsDetails2Component', () => {
  let component: CardsDetails2Component;
  let fixture: ComponentFixture<CardsDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsDetails2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
