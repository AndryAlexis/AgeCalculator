import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, Form, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  imports: [ReactiveFormsModule, CommonModule]
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string = 'Title';
  @Input() placeholder: string = 'Enter text';
  @Input() control!: FormControl;
  @Input() messageError: string = 'This field is required';

  value: string = '';

  // Callbacks for ControlValueAccessor
  onChange = (value: string) => {};
  onTouched = () => {};

  // Write a new value to the element
  writeValue(value: string): void {
    this.value = value || '';
  }

  // Register a callback function for changes
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Register a callback function for touch events
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Handle input changes
  handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
    this.onTouched();
  }

}
