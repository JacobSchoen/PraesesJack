import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { BlackjackGame } from '../models/blackjackGame.interface';

@Injectable({
    providedIn: 'root'
})
export class BlackjackService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:5274/api'

    private gameState = signal<BlackjackGame | null>(null);

    readonly game = this.gameState.asReadonly();

    createGame(): Observable<BlackjackGame> {
        return this.http.post<BlackjackGame>(
            `${this.apiUrl}/Game`,
            {}
        ).pipe(
            tap(game => this.gameState.set(game))
        );
    }

    getGame(gameId: number): Observable<BlackjackGame> {
        return this.http.get<BlackjackGame>(
            `${this.apiUrl}/game/${gameId}`
        ).pipe(
            tap(game => this.gameState.set(game))
        );
    }

    hit(gameId: number): Observable<BlackjackGame> {
        return this.http.get<BlackjackGame>(
            `${this.apiUrl}/game/${gameId}/hit`
        ).pipe(
            tap(game => this.gameState.set(game))
        );
    }

    stand(gameId: number): Observable<BlackjackGame> {
        return this.http.get<BlackjackGame>(
            `${this.apiUrl}/game/${gameId}/stand`
        ).pipe(
            tap(game => this.gameState.set(game))
        );
    }



}
