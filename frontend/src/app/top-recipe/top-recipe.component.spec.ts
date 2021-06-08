import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRecipeComponent } from './top-recipe.component';

describe('TopRecipeComponent', () => {
  let component: TopRecipeComponent;
  let fixture: ComponentFixture<TopRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
