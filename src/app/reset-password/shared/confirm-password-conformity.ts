import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[appConfirmEqualityValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualityValidatorDirective,
        multi: true
    }],
})

export class ConfirmEqualityValidatorDirective implements Validator  {
    @Input() appConfirmEqualityValidator: string;
    validate(control: AbstractControl): {[key: string]: any} | null {
        const controlToCompare = control.parent.get(this.appConfirmEqualityValidator);
        if (controlToCompare) {
            const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
            control.updateValueAndValidity();
            subscription.unsubscribe();
            });
          }
           // return controlToCompare && controlToCompare.value !== control.value ? {'notEqual': true } : null;
        if (controlToCompare && controlToCompare.value !== control.value) {
            return {'notEqual': true};
        }
        return null;
    }
}