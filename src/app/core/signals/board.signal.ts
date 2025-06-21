import { inject, signal, effect } from '@angular/core';
import { BoardService } from '../services/board.service';
import { Board } from '../models/board.model';

const boardService = inject(BoardService);

export const boardListSignal = signal<Board[]>([]);

export const activeBoardIdSignal = signal<string | null>(null);
export const activeBoardSignal = signal<Board | null>(null);

effect(() => {
  const boardId = activeBoardIdSignal();
  if (!boardId) {
    activeBoardSignal.set(null);
    return;
  }

  boardService.getBoardById(boardId).subscribe((board) => {
    activeBoardSignal.set(board);
  });
});
