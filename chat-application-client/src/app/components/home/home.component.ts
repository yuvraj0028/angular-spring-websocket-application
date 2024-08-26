import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf,
    RouterOutlet,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  userName!: string;
  private _snackBar = inject(MatSnackBar);

  constructor(private route: ActivatedRoute, private router: Router) {}

  // if no name is entered
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
  // routing to chat window
  joinChat() {
    if (!this.userName || this.userName.trim() === '') {
      this.openSnackBar('Enter Your Name To Continue', 'Close');
      return;
    }
    // sending username with username
    this.router.navigate(['chat'], {
      queryParams: { userName: this.userName },
    });
  }
}
