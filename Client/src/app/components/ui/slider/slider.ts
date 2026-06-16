import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

import { cn } from '../cn';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Slider),
      multi: true,
    },
  ],
  templateUrl: './slider.html',
})

export class Slider implements ControlValueAccessor {
  @Input() className: string = '';
  @Input() min: number = 0;
  @Input() max: number = 2000;
  @Input() step: number = 50;
  @Input() disabled: boolean = false;

  value: number = 0;

  get percentage(): number {
    const total = this.max - this.min;
    if (total === 0) return 0;
    return Math.min(Math.max(((this.value - this.min) / total) * 100, 0), 100);
  }

  get containerClasses() {
    return cn(
      "relative flex w-full touch-none select-none items-center h-5",
      this.className
    );
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(val: number): void {
    this.value = val !== undefined && val !== null ? val : this.min;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = Number(target.value);
    this.onChange(this.value);
  }
}
