import { Component, EventEmitter, Output } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { SeparatorComponent } from '../separator/separator.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { isExists as isValidDate } from 'date-fns';

@Component({
  selector: 'app-form',
  imports: [InputComponent, SeparatorComponent, ReactiveFormsModule],
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  @Output() submitFormEvent = new EventEmitter<{ years: number, months: number, days: number }>();

  form;

  constructor() {
    const currentYear = new Date().getFullYear();
    this.form = new FormGroup({
      days: new FormControl('', [Validators.pattern(/^[0-9]*$/), Validators.required, Validators.min(1), Validators.max(31)]),
      months: new FormControl('', [Validators.pattern(/^[0-9]*$/), Validators.required, Validators.min(1), Validators.max(12)]),
      years: new FormControl('', [Validators.pattern(/^[0-9]*$/), Validators.required, Validators.min(1), Validators.max(currentYear)]),
    });
  }

  submitForm()  {
    if (this.form.invalid) return;

    let { days, months, years } = this.form.value;

    const parsedDays = Number(days);
    const parsedMonths = Number(months) - 1 // Months are 0-indexed in JavaScript Date;
    const parsedYears = Number(years);


    if (!isValidDate(parsedYears, parsedMonths, parsedDays))
      return;

    const dateDiff = this.calculateDifferenceDates(new Date(parsedYears, parsedMonths, parsedDays));
    this.submitFormEvent.emit(dateDiff);
  }

  calculateDifferenceDates(userDate: Date): { years: number; months: number; days: number } {
    const currentDate = new Date();

    let yearsDiff = currentDate.getFullYear() - userDate.getFullYear();
    let monthsDiff = currentDate.getMonth() - userDate.getMonth();
    let daysDiff = currentDate.getDate() - userDate.getDate();

    // Adjust for negative days
    if (daysDiff < 0) {
      monthsDiff -= 1; // Borrow a month
      const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0); // Last day of the previous month
      daysDiff += previousMonth.getDate(); // Add the number of days in the previous month
    }

    // Adjust for negative months
    if (monthsDiff < 0) {
      yearsDiff -= 1; // Borrow a year
      monthsDiff += 12; // Add 12 months
    }

    return {
      years: yearsDiff,
      months: monthsDiff,
      days: daysDiff,
    };
  }

  getMessageErrorDays() : string {
    const formControl = this.form.get('days');

    if (formControl?.hasError('required')) {
      return 'This field is required';
    }
    if (formControl?.hasError('pattern')) {
      return 'Only numbers';
    } 
    if (formControl?.hasError('min') || formControl?.hasError('max')) {
      return 'Must be a valid day';
    }

    return '';
  }

  getMessageErrorMonths() : string {
    const formControl = this.form.get('months');

    if (formControl?.hasError('required')) {
      return 'This field is required';
    }
    if (formControl?.hasError('pattern')) {
      return 'Only numbers';
    } 
    if (formControl?.hasError('min') || formControl?.hasError('max')) {
      return 'Must be a valid month';
    }

    return '';
  }

  getMessageErrorYears() : string {
    const formControl = this.form.get('years');

    if (formControl?.hasError('required')) {
      return 'This field is required';
    } 
    if (formControl?.hasError('pattern')) {
      return 'Only numbers';
    } 
    if (formControl?.hasError('min') || formControl?.hasError('max')) {
      return 'Must be in the past';
    }

    return '';
  }
}
