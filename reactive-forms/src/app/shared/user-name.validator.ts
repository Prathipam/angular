import { AbstractControl,ValidatorFn } from '@angular/forms';


// export function forbiddenNameValidator(control: AbstractControl): {[key: string]: any} | null  {
//     const forbidden = /admin/.test(control.value);
//     return forbidden ? {'forbiddenName': {value: control.value}} : null;
// };

/*
1. Create validator function by accepting the forbiddenName of type Regular Expression and it returns the function of type ValidatorFn
2. ValidatorFn is called by passing the control and return key:value object or null

*/
export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn{
  return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = forbiddenName.test(control.value);
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}
