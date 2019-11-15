import { AbstractControl } from '@angular/forms';

/*
We can only one argument to the validator function. But i this case we need 2 controls password nd confirm Passwords.
So the validation is done by passing the formGroup to the control
*/

export function passwordValidator(control: AbstractControl): {[key: string]: boolean} | null {
  const password = control.get('password');
  const confirm_pwd = control.get('confirm_pwd');
  if(password.pristine || confirm_pwd.pristine)
  return null;
  return password && confirm_pwd && password.value !== confirm_pwd.value ? {'misMatch': true} : null;
}
