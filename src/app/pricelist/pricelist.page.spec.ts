import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { PricelistPage } from './pricelist.page';

describe('PricelistPage', () => {
  let component: PricelistPage;
  let fixture: ComponentFixture<PricelistPage>;
  let pricelistPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricelistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(PricelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    pricelistPage = fixture.nativeElement;
    const items = pricelistPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
