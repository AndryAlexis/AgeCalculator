import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { SeparatorComponent } from '../separator/separator.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [InputComponent, SeparatorComponent, ReactiveFormsModule],
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  form;

  constructor() {
    this.form = new FormGroup({
      days: new FormControl('', [Validators.pattern(/^[0-9]*$/), Validators.required, Validators.min(1), Validators.max(31)]),
      months: new FormControl('', [Validators.pattern(/^[0-9]*$/), Validators.required, Validators.min(1), Validators.max(12)]),
      years: new FormControl('', [Validators.pattern(/^[0-9]*$/), Validators.required, Validators.min(1), Validators.max(2025)]),
    });
  }

  submitForm() {
    console.log('Form submitted!');

    console.log(this.form.value);
    const { days, months, years } = this.form.value;
    
  }
}
