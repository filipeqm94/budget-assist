import BudgetItemInterface from "./budget-item.interface";

export default interface FinancialCategoryInterface {
  name: string;
  entries: BudgetItemInterface[];
}
