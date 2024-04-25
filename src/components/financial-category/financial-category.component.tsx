import FinancialCategoryInterface from "../../interfaces/financial-category.interface";
import BudgetItem from "../budget-item/budget-item.component";

import "./financial-category.style.scss";

export default function FinancialCategory(props: FinancialCategoryInterface) {
  const { name, entries } = props;
  return (
    <div className="item-container">
      <h1>{name}</h1>
      {entries.map((entry) => (
        <BudgetItem key={entry.name} {...entry} />
      ))}
    </div>
  );
}
