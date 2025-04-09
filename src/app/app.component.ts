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
}
