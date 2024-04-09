import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-expense-card',
  standalone: true,
  imports: [],
  templateUrl: './expense-card.component.html',
  styleUrl: './expense-card.component.css'
})
export class ExpenseCardComponent {
 @Input() title = '';
 @Input() value = 0;
 @Input() created_at = Date;
 @Input() expires_at = Date;
 @Input() description = '';

}
