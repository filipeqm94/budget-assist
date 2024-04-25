import BudgetItem from "../budget-item/budget-item.component";

export default function FinancialCategory() {
  return (
    <>
      <h1>Income</h1>
      <BudgetItem name="Salary / Wages" projected={1950.87} actual={1897.98} />
    </>
  );
}
