import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click on link1 should send 1', () => {
      const compiled = fixture.debugElement.nativeElement;
      const link1 = compiled.querySelector('p:nth-child(1)').querySelector("a");
      const numberOfClicks = compiled.querySelector('#clikid');
      
      link1.click();

      fixture.detectChanges();

      expect(component.clickedLink).toBe(1);
      expect(numberOfClicks.textContent).toBe('1');
  });

  it('click on link2 should send 2', () => {
      const compiled = fixture.debugElement.nativeElement;
      const link2 = compiled.querySelector('p:nth-child(2)').querySelector("a");
      const numberOfClicks = compiled.querySelector('#clikid');

      link2.click();

      fixture.detectChanges();
      
      expect(component.clickedLink).toBe(2);
      expect(component.numberOfClicks).toBe(1);
      expect(numberOfClicks.textContent).toBe('1');
  });

  it('click on link3 should send 3', () => {
      const compiled = fixture.debugElement.nativeElement;
      const link3 = compiled.querySelector('p:nth-child(3)').querySelector("a");
      const numberOfClicks = compiled.querySelector('#clikid');

      link3.click();

      fixture.detectChanges();

      expect(component.clickedLink).toBe(3);
      expect(numberOfClicks.textContent).toBe('1');
  });

});
