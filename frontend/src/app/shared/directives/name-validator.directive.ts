import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[nameValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true}
  ]
})
export class NameValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const result = /^[А-Я][а-я]+$/.test(control.value);
    return result ? null : {pattern: {value: control.value}}
  }
}
