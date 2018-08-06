import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentViewchildComponent } from './comment-viewchild.component';

describe('CommentViewchildComponent', () => {
  let component: CommentViewchildComponent;
  let fixture: ComponentFixture<CommentViewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentViewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
