import { Component } from '@angular/core';

import { Button } from '../../../../components/button/button';
import { InputComponent } from '../../../../components/inputComponent/inputComponent';

@Component({
  selector: 'app-newsletter',
  imports: [Button, InputComponent],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.scss',
})
export class Newsletter {

}
