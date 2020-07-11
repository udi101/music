import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  frmRegister: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }



  buildForm() {
    this.frmRegister = this.fb.group({
      fullName: '',
      email: '',
      country: '',
      bio: '',
      occupation: '',
      portfolio: ''
    });
  }
}
