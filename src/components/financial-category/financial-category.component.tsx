import FinancialCategoryInterface from "../../interfaces/financial-category.interface";
import BudgetItem from "../budget-item/budget-item.component";

export default function FinancialCategory(props: FinancialCategoryInterface) {
  const { name, entries } = props;
  return (
    <>
      <h1>{name}</h1>
      {entries.map((entry) => (
        <BudgetItem {...entry} />
      ))}
    </>
  );
}
