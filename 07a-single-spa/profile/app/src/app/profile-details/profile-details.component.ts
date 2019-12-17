import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: [ './profile-details.component.scss' ]
})
export class ProfileDetailsComponent implements OnInit {

  queryParams: Observable<Params>;

  constructor(private activatedRoute: ActivatedRoute, private location: Location) {
    this.queryParams = activatedRoute.queryParams;
  }


  ngOnInit() {
  }

  close() {
    this.location.back();
  }
}
