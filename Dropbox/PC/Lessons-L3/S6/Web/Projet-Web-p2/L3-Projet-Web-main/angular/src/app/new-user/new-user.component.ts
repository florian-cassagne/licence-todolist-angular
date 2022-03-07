import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder , private userService: UserService , private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      diploma: ['', Validators.required],
      options: this.formBuilder.array([])
    });
  }
  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
        formValue['firstName'],
        formValue['lastName'],
        formValue['email'],
        formValue['diploma'],
        formValue['options'] ? formValue['options'] : []
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

  getOptions(): FormArray {
    return this.userForm.get('options') as FormArray;
  }


  onAddOption() {
    const newOptionControl = this.formBuilder.control(null, Validators.required);
    this.getOptions().push(newOptionControl);
  }


}
