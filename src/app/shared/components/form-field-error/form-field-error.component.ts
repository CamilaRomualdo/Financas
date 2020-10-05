import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-form-field-error',
  template: `
    <p class="text-danger">
      {{errorMessage}}
    </p>
  `,
  styleUrls: ['./form-field-error.component.scss']
})
export class FormFieldErrorComponent {

  @Input('form-control') formControl: FormControl;

  constructor() { }

  public get errorMessage(): string | null {
    if(this.mustShowErrorMessage())
      return this.getErrorMessage();
    else
      return null;
  }

  private mustShowErrorMessage(): boolean {
  return this.formControl.invalid && this.formControl.touched
  }

  private getErrorMessage(): string | null {
    if (this.formControl.errors.required)
      return "Dado obrigatório.";
    else if(this.formControl.errors.email)
      return "Formato de email inválido."
    else if (this.formControl.errors.minLength) {
      const requiredLength = this.formControl.errors.minLength.requiredLength;
      return `Deve ter no mínimo ${requiredLength} caracteres.`
    } else if (this.formControl.errors.maxLength) {
      const requiredLength = this.formControl.errors.maxLength.requiredLength;
      return `Deve ter no máximo ${requiredLength} caracteres.`
    }
  }

}
