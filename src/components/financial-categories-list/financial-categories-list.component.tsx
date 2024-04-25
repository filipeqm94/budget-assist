import { useEffect, useState } from "react";
import FinancialCategory from "../financial-category/financial-category.component";
import FinancialCategoryInterface from "../../interfaces/financial-category.interface";

import "./financial-categories-list.style.scss";

const initialFinancialCategories: FinancialCategoryInterface[] = [
  {
    name: "Income",
    entries: [{ id: 1, name: "Salary / Wages", projected: 4000, actual: 4000 }]
  },
  {
    name: "Savings",
    entries: [
      {
        id: 2,
        name: "Retirement",
        projected: 123.87,
        actual: 321.58
      }
    ]
  },
  {
    name: "Expenses",
    entries: [
      {
        id: 3,
        name: "Rent",
        projected: 1850,
        actual: 1850
      }
    ]
  }
];

export default function FinancialCategoriesList() {
  const [financialCategories, setFinancialCategoty] =
    useState<FinancialCategoryInterface[]>();

  useEffect(() => {
    setFinancialCategoty(initialFinancialCategories);
  }, []);

  return (
    <div data-testid="container" className="list-container">
      {financialCategories?.map((financialCategory) => (
        <FinancialCategory
          key={financialCategory.name}
          {...financialCategory}
        />
      ))}
    </div>
  );
}
