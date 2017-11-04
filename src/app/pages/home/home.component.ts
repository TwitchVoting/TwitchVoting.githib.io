import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public channel: string;

  constructor(
    private router: Router,
  ) {}

  public createPoll(): void {
    this.router.navigate(['/poll', this.channel]);
  }
}
