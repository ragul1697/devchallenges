import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubProfileService {

  constructor(private http: HttpClient) { }

  public getGithubProfileResults(username: string) {
    const url = `https://api.github.com/users/${username}`;
    return this.http.get(url);
  }
}
