import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GithubProfileService } from './github-profile.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [GithubProfileService]
})
export class AppComponent implements OnInit {

  constructor(private githubProfileService: GithubProfileService) { }

  title: string = 'github-profile-search';

  ngOnInit(): void {
    this.githubProfileService.getGithubProfileResults('github').subscribe({
      next: (response: any) => {
        console.log(response);
      }
    });
  }

}
