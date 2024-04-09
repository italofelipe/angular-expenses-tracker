import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Expense} from "../models/Expenses";

@Injectable({
  providedIn: 'root',
})

export class ExpensesService {
  private _httpClient: HttpClient
  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient
  }
  getExpenses() {
    return this._httpClient.get<Expense[]>('/api/expenses')
  }
}
