import { Component,OnInit } from '@angular/core';
//import { FormGroup,FormControl } from '@angular/forms';
import { FormBuilder,Validators,FormGroup,FormArray } from '@angular/forms';

import { forbiddenNameValidator } from './shared/user-name.validator';
import { passwordValidator } from './shared/password.validator';
import { RegsiterService } from './regsiter.service';


//We can do either through fromgroup and Form control or by using FormBuilder service
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  registerFormGroup: FormGroup;
  constructor(private fb: FormBuilder, private _registrationService: RegsiterService){}

  ngOnInit(){
    this.registerFormGroup = this.fb.group({
      userName:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)]],
      email:[''],
      subscribe:[false],
      password:[''],
      confirm_pwd:[''],
      address: this.fb.group({
        city:[''],
        state:[''],
        postalCode:['']
      }),
      alternateEmails: this.fb.array([])
    },{validator: passwordValidator});

    this.registerFormGroup.get('subscribe').valueChanges
        .subscribe(checkedValue => {
          const email =   this.registerFormGroup.get('email');
          if(checkedValue){
            email.setValidators(Validators.required);
          }
          else{
            email.clearValidators();
          }
          email.updateValueAndValidity();
        });
  }

  get userName(){
    return this.registerFormGroup.get('userName');
  }
  get email(){
    return this.registerFormGroup.get('email');
  }
  get alternateEmails(){
    return this.registerFormGroup.get('alternateEmails') as FormArray;
  }
  addAlternateEmails(){
    this.alternateEmails.push(this.fb.control(''));
  }

  // registerFormGroup = new FormGroup({
  //   userName: new FormControl('Prathipa'),
  //   password: new FormControl(''),
  //   confirm_pwd: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  loadApiData(){
    //Set value - sets value of all controls. cannot neglect any value
    /*this.registerFormGroup.setValue({
      userName:'Prathipa',
      password:'test',
      confirm_pwd:'test',
      address:{
        city:'Singapore',
        state:'singapore',
        postalCode:350119
      }
    });*/
    //patchValue - can be used to set few control values
    this.registerFormGroup.patchValue({
      userName:'Prathipa',
      password:'test',
      confirm_pwd:'test',
    });
  }

  onSubmit() {
   console.log(this.registerFormGroup.value);
   this._registrationService.register(this.registerFormGroup.value).subscribe(
       response => console.log(data => 'Success!',response),
       error => console.error(error => 'Error!', error)
     );
 }
}
