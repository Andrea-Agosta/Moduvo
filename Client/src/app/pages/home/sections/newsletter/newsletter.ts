import { Component } from '@angular/core';

import { Button } from '../../../../components/ui/button/button';
import { InputComponent } from '../../../../components/ui/inputComponent/inputComponent';

@Component({
  selector: 'app-newsletter',
  imports: [Button, InputComponent],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.scss',
})
export class Newsletter {

}
