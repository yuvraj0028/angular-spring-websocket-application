import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit {
  userName!: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // assigning user name
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.userName = params.get('userName') || '';
    });
    // if no name is entered
    if (!this.userName) {
      this.router.navigate(['..']);
    }
  }
}
