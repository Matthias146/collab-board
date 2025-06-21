import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDialogEditTask } from './board-dialog-edit-task';

describe('BoardDialogEditTask', () => {
  let component: BoardDialogEditTask;
  let fixture: ComponentFixture<BoardDialogEditTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardDialogEditTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardDialogEditTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
