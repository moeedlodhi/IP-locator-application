import { AbstractControl } from '@angular/forms';


function hasNumbers(t)
{
var regex = /\d/g;
return regex.test(t);
}  


export function ValidateUsername(control: AbstractControl) {
  if (!hasNumbers(control.value)) {
    return { invalidUrl: true };
  }
  return null;
}