import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDialogAddTask } from './board-dialog-add-task';

describe('BoardDialogAddTask', () => {
  let component: BoardDialogAddTask;
  let fixture: ComponentFixture<BoardDialogAddTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardDialogAddTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardDialogAddTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
