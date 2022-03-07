import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CreatorService} from '../services/creator.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-creator-view',
  templateUrl: './creator-view.component.html',
  styleUrls: ['./creator-view.component.css']
})
export class CreatorViewComponent implements OnInit, OnDestroy {
  constructor(private creatorService: CreatorService , private router: Router) {
  setTimeout(
      () => {
      this.isAuth = true;
      }, 4000
);

}

@Input() id = 0;

title = 'creators';
creators = Array<any>();
isAuth = false;
creatorSubscription = new Subscription();
authStatus = false;

lastUpdate = new Promise<Date>((resolve , reject) => {
  const date = new Date();
  setTimeout(() => {
    resolve(date);
  }, 3000);
});

  ngOnInit() {
  this.creatorSubscription = this.creatorService.creatorsSubject.subscribe(
      (creators: any[]) => {
        this.creators = creators;
      }
  );
  this.creatorService.emitCreatorSubject();
  }
  allPresent() {
    alert('Ils sont tous là !');
    this.creatorService.switchOnAll();
  }
  allAbsent() {
    if (confirm('Etes-vous sûr qu\’ils sont tous absents ?')) {
      return this.creatorService.switchOffAll();
    } else { return null; }
  }
  ngOnDestroy() {
    this.creatorSubscription.unsubscribe();
  }

}
