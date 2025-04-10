import { Component, Input } from '@angular/core';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-result',
  imports: [LabelComponent],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  years: number = -1;
  months: number = -1;
  days: number = -1;

  @Input() set result(value: { years: number, months: number, days: number }) {
    if (value) {
      this.years = value.years;
      this.months = value.months;
      this.days = value.days;
    }
  }
}
