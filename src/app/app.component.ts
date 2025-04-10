import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { ResultComponent } from './components/result/result.component';

@Component({
  selector: 'app-root',
  imports: [ResultComponent, FormComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Age calculator';
  result: { years: number, months: number, days: number } = { years: -1, months: -1, days: -1 };

  handleFormSubmit(event: { years: number, months: number, days: number }) {
    const newResult = { years: event.years, months: event.months, days: event.days };
    this.result = newResult;
  }
}
