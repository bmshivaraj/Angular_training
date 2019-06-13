import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponentComponent } from './counter-component.component';

describe('CounterComponentComponent', () => {

  let fixture;
  let cmp;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CounterComponentComponent
      ],
    }).compileComponents();
  }));

 beforeEach(async () => {
  fixture = TestBed.createComponent(CounterComponentComponent);
  cmp = fixture.debugElement.componentInstance;
  fixture.detectChanges();
 });

  it("should pass", () => {

    // one or more assertions
    expect(100).toBe(100);

  });
 
it("should get current value of count", () => {
  expect(cmp.count).toEqual(1);
});

it("should get increment value of count", () => {
  const value1 = cmp.count;
  cmp.incrementCount();
  const value2 = cmp.count;
  expect(value2).toBeGreaterThan(value1);
  expect(value2).toEqual(value1+1);

  fixture.detectChanges();

  const compiled = fixture.debugElement.nativeElement;
  expect(compiled.querySelector('h3').textContent).toContain(`value of count is ${value2}`);


});

it("should get decrement value of count", () => {

});


});
