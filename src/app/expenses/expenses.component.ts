import {Component, Injectable} from '@angular/core';
import {ExpenseCardComponent} from "../expense-card/expense-card.component";
import {HttpClient} from "@angular/common/http";
import {Expense} from "../models/Expenses";
import {ExpensesService} from "../service/expenses.service";

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [
    ExpenseCardComponent
  ],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',

})
export class ExpensesComponent {
  expenses: Expense[] = [];
  constructor(private expensesService: ExpensesService) {
    console.log('Injeção funcionou??', expensesService)
    this.getExpensesList()
  }
  getExpensesList() {
    return this.expensesService.getExpenses()
      .subscribe(returnedExpenses => this.expenses = returnedExpenses)
  }

}
