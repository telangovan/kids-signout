import { Component, OnInit } from '@angular/core';
import { KidService } from '../kid.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Kid } from '../kids';
import {Pickup} from '../pickup'


@Component({
  selector: 'app-kids-details',
  templateUrl: './kid-details.component.html',
  styleUrls: ['./kid-details.component.css']
})

export class KidsDetailsComponent implements OnInit {

  kid = new Kid() ;
  pickup = new Pickup();
  submitted = false;
  message: string;
  pflag: boolean;
  todayDate = new Date();

  constructor(
    private kidService: KidService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.kidService.getkid(id)
      .subscribe(kid => this.kid = kid);
  }

  update(): void {
    this.submitted = true;
    this.kidService.updateKid(this.kid)
        .subscribe(result => this.message = "Information Updated Successfully!");
  }

  signOut() {
    this.submitted = true;
    this.save();
  }

  delete(): void {
    this.submitted = true;
    this.kidService.deleteKid(this.kid.id)
        .subscribe(result => this.message = "Information Deleted Successfully!");
  }

  goBack(): void {
    this.location.back();
  }
  private save(): void {
    this.kidService.signOutKid(this.kid,this.pickup)
        .subscribe();
  }
  
}