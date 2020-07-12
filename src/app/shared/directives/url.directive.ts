import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[url]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: UrlDirective,
    multi: true
  }
  ]
})
export class UrlDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const regExp = "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?";
    if ((control.value).match(regExp)) {
      return null;
    }
    return ({ urlError: true });
  }


}
