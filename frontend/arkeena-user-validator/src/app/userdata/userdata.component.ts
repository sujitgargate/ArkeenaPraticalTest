
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpRequestService } from '../services/user.service'

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})

export class UserdataComponent implements OnInit {

  registerForm : FormGroup;

  constructor(private fb : FormBuilder, private service : HttpRequestService) {
   }

  ngOnInit(): void {
    this.registerForm= this.fb.group({
      name : ['', Validators.required],
      email : ['', Validators.required],
      message : ['', Validators.required]
    })
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }
  get message() {
    return this.registerForm.get('message');
  }
  
  createUser(){
    this.service.createUser(this.registerForm.value)
    .subscribe( res => {
      console.log(res);
    })
  }
}
