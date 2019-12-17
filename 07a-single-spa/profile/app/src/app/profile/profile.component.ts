import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { singleSpaPropsSubject } from '../../single-spa/single-spa-props';
import { ProfileService } from './profile.service';
import { Profile } from './profile';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})
export class ProfileComponent implements OnInit, OnDestroy {
  public profile: Profile;

  private singleSpaSubscription: Subscription;
  private profileSubscription: Subscription;

  constructor(private profileService: ProfileService, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.singleSpaSubscription = singleSpaPropsSubject.asObservable().subscribe(({authToken}: any) => {
      this.profileSubscription = this.profileService.subscribe(authToken).asObservable().subscribe(profile => {
        this.profile = profile;
        this.changeDetectorRef.detectChanges();
      })
    });
  }

  ngOnDestroy(): void {
    this.profileSubscription.unsubscribe();
    this.singleSpaSubscription.unsubscribe();
  }

}
