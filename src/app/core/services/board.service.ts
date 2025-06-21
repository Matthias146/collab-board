import { inject, Injectable, signal } from '@angular/core';
import {
  collection,
  collectionData,
  doc,
  Firestore,
  setDoc,
  deleteDoc,
  docData,
} from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Board } from '../models/board.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BoardService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);

  private get userId(): string {
    const user = this.authService['userSubject'].getValue();
    if (!user) throw new Error('User not authenticated');
    return user.uid;
  }

  private boardCollection = () =>
    collection(this.firestore, `users/${this.userId}/boards`);

  getAllBoards() {
    return collectionData(this.boardCollection(), {
      idField: 'id',
    }) as any;
  }

  getBoardById(boardId: string): Observable<Board> {
    const ref = doc(this.firestore, `users/${this.userId}/boards/${boardId}`);
    return docData(ref, { idField: 'id' }) as any; // cast to Observable<Board>
  }

  createBoard(board: Board) {
    const ref = doc(this.firestore, `users/${this.userId}/boards/${board.id}`);
    return setDoc(ref, board);
  }

  deleteBoard(boardId: string) {
    const ref = doc(this.firestore, `users/${this.userId}/boards/${boardId}`);
    return deleteDoc(ref);
  }

  updateBoard(board: Board) {
    const ref = doc(this.firestore, `users/${this.userId}/boards/${board.id}`);
    return setDoc(ref, board, { merge: true });
  }
}
