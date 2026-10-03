import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BlackjackService } from '../../services/blackjack-service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-lobby',
  styleUrl: './lobby.css',
  templateUrl: './lobby.html',
})
export class Lobby {
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  private blackjackService = inject(BlackjackService);
  game: any;

  createTable = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(1)]]
  })

  onCreateRoom(): void {
    this.blackjackService.createGame().subscribe({
      next: (data) => {
        this.game = data;
        this.router.navigate(
          ['/gameTable', this.game.gameId],
        );
      },
      error: (error) => {
        console.log(error);
      }
    });

  }
}
