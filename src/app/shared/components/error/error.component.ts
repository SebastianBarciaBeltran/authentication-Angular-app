import { Component, Input } from '@angular/core';

@Component({
  selector: 'alicunde-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  @Input() message: string = '';
}
