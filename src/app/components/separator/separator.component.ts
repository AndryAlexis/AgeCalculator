import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-separator',
  imports: [],
  templateUrl: './separator.component.html',
  styleUrl: './separator.component.scss'
})
export class SeparatorComponent {
  @Output() onSubmit = new EventEmitter<void>();

}
