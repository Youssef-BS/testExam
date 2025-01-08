import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDetailsComponentComponent } from './menu-details-component.component';

describe('MenuDetailsComponentComponent', () => {
  let component: MenuDetailsComponentComponent;
  let fixture: ComponentFixture<MenuDetailsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuDetailsComponentComponent]
    });
    fixture = TestBed.createComponent(MenuDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
