import { Component, Input, HostBinding } from '@angular/core';
import { cn } from '../cn';

@Component({
  selector: 'input[appInput]',
  standalone: true,
  template: `
    <input
      [type]="type"
      [class]="hostClasses"
      [placeholder]="placeholder"
      [disabled]="disabled"
    />
  `,
})

export class InputComponent {
  @Input('class') customClass: String = '';
  @Input() type: String = '';
  @Input() placeholder: String = '';
  @Input() disabled = false;

  @HostBinding('class')
  get hostClasses() {
    return cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", this.customClass);
  }
}
