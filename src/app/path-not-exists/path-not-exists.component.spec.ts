import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathNotExistsComponent } from './path-not-exists.component';

describe('PathNotExistsComponent', () => {
  let component: PathNotExistsComponent;
  let fixture: ComponentFixture<PathNotExistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathNotExistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathNotExistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
