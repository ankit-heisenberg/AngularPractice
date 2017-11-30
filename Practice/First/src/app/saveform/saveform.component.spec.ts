import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveformComponent } from './saveform.component';

describe('SaveformComponent', () => {
  let component: SaveformComponent;
  let fixture: ComponentFixture<SaveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
