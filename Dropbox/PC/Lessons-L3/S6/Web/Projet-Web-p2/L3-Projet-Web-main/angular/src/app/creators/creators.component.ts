import {Component, Input, OnInit, } from '@angular/core';
import {CreatorService} from '../services/creator.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {
  @Input() creatorName = 'Yohann';
  @Input() creatorStatus: string = 'present' || 'absent';
  @Input() index !: number ;
  @Input() id = 0;

  constructor(private creatorService: CreatorService) { }

  ngOnInit() {
  }
  getColor(): string {
    if (this.creatorStatus === 'present') {
      return 'green';
    } else { this.creatorStatus === 'absent' ; }
    return 'red';

  }



  getStatus(): string {
    return this.creatorStatus;
  }


  onSwitch() {
    if (this.creatorStatus === 'present') {
      this.creatorService.switchOffOne(this.index);
    } else if (this.creatorStatus === 'absent') {
      this.creatorService.switchOnOne(this.index);
    }
  }

}
