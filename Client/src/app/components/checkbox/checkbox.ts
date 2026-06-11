import { CommonModule } from '@angular/common';
import { Component, forwardRef, HostBinding, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LucideCheck } from '@lucide/angular';

import { cn } from '../cn';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, LucideCheck],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Checkbox),
      multi: true,
    },
  ],
  template: `
    <button
      type="button"
      role="checkbox"
      [attr.aria-checked]="checked"
      [disabled]="isDisabled"
      [class]="checkboxClasses"
      (click)="toggle()"
    >
      @if (checked){
        <span class="flex items-center justify-center text-current">
          <svg lucideCheck class="text-white h-4 w-4"></svg>
        </span>
      }
    </button>
  `,
})
export class Checkbox implements ControlValueAccessor {
  className = input<string>('');
  disabledInput = input<boolean>(false, { alias: 'disabled' });
  readonly checkIcon = LucideCheck;
  checked: boolean = false;
  private _disabled = false;

  get isDisabled(): boolean {
    return this.disabledInput() || this._disabled;
  }

  get checkboxClasses() {
    return cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      this.checked ? "bg-primary text-primary-foreground" : "",
      this.className
    );
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: boolean): void {
    this.checked = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }

  toggle() {
    if (!this.isDisabled) {
      this.checked = !this.checked;
      this.onChange(this.checked);
      this.onTouched();
    }
  }
}