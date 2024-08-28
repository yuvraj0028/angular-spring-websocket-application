import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    NgxSpinnerModule,
    MatLabel,
    MatFormField,
    MatIcon,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit {
  userName!: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    // assigning user name
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.userName = params.get('userName') || '';
    });
    // if no name is entered
    if (!this.userName) {
      this.router.navigate(['..']);
    }

    // showing spinner while registering user to websocket
    this.spinner.show();

    // testing spinner
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}
