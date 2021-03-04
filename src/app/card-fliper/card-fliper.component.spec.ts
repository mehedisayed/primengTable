import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFliperComponent } from './card-fliper.component';

describe('CardFliperComponent', () => {
  let component: CardFliperComponent;
  let fixture: ComponentFixture<CardFliperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFliperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFliperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
