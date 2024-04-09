export interface Expense {
  title: string;
  value: number;
  created_at: DateConstructor;
  expires_at: DateConstructor;
  description: string;
}
