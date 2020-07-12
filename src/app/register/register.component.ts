import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';


import { LocalStorageService } from 'src/app/shared/services/local-storage.service';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  frmRegister: FormGroup;
  formData = new FormData();

  constructor(
    private fb: FormBuilder,
    private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    this.buildForm();
  }



  buildForm() {
    this.frmRegister = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: '',
      bio: '',
      occupation: '',
      portfolio: [''],      // There is a custom url validator using the url directive that injects NG_VALIDATORS
      isProfessional: false,
      fullRights: false,
      isGenuine: false,
      allPlatforms: false,
      musicFile: null
    });
  }

  register() {
    console.log(this.frmRegister.value);
    this.localStorage.setItem('registration', this.frmRegister.value);
    this.formData.append('frmData', JSON.stringify(this.frmRegister.value));
  }


  addMusicFile(e: Blob) {
    this.formData.append('musicSample', e);
    console.log(e);
  }


}
