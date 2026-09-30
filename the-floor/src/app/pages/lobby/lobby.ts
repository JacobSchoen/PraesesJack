import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-lobby',
  styleUrl: './lobby.css',
  templateUrl: './lobby.html',
})
export class Lobby {
  formBuilder = inject(FormBuilder);
  router = inject(Router);

  createTable = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(1)]]
  })

  onCreateRoom(): void {
    this.router.navigate(['gameTable'])
  }
}
