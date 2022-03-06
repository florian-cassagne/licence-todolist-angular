import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CreatorService } from '../services/creator.service';

@Component({
  selector: 'app-edit-creator',
  templateUrl: './edit-creator.component.html',
  styleUrls: ['./edit-creator.component.css']
})




export class EditCreatorComponent implements OnInit {

  constructor(private creatorServive: CreatorService , private  route: Router) { }
  defaultStatus = 'absent';
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const status = form.value['status'];
    this.creatorServive.addCreator(name, status);
    this.route.navigate(['/students']);
  }
}
