import { Component, OnInit } from '@angular/core';
import { Kid } from '../kids';
import { KidService } from '../kid.service';


@Component({
  selector: 'app-kid',
  templateUrl: './kid.component.html',
  styleUrls: ['./kid.component.css']
})

export class KidComponent  implements OnInit {
  
  kids: Kid[];

  constructor(private kidService: KidService) {}
    
  ngOnInit(): void {
     this.getKids();
  }

  getKids() {
    return this.kidService.getkids()
               .subscribe(
                 kids => {
                  console.log(kids);
                  this.kids = kids
                 }
                );
 }
}
