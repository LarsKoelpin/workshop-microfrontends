import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileSubject = new Subject<Profile>();
  private profile: Profile;

  constructor(private httpClient: HttpClient) {
  }

  public subscribe(userName: string): Subject<Profile> {
    this.httpClient.get<Profile>(`http://localhost:4001/profile/?id=${userName}`).subscribe(profile => {
      this.profile = profile;
      this.profileSubject.next(this.profile);
    });

    window.addEventListener('tweet', () => {
      this.profile = {...this.profile, tweetCount: this.profile.tweetCount + 1};
      this.profileSubject.next(this.profile);
    });

    return this.profileSubject;
  }
}
