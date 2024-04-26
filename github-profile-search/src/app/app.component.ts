import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GithubProfileService } from './github-profile.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [GithubProfileService]
})
export class AppComponent implements OnInit {

  constructor(private githubProfileService: GithubProfileService) { }

  public title: string = 'github-profile-search';

  public usernameControl: FormControl = new FormControl<string | null>(null);

  public githubRepoDetails: any[] = [];

  ngOnInit(): void {
    if (false) {
      this.fetchGithubDetails('github');
    }
  }

  public onUserSearchClick() {
    const username = this.usernameControl.value;
    if (username !== null) {
      this.fetchGithubDetails(username);
    }
  }

  private fetchGithubDetails(inputName: string) {
    this.githubProfileService.getGithubProfileResults(inputName).subscribe({
      next: (response: any) => {
        console.log(response);
        this.githubRepoDetails = response;
      }
    });
  }

}
