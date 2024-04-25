import { useEffect, useState } from "react";
import FinancialCategory from "../financial-category/financial-category.component";
import FinancialCategoryInterface from "../../interfaces/financial-category.interface";

const initialFinancialCategories: FinancialCategoryInterface[] = [
  {
    name: "Income",
    entries: [
      {
        name: "Salary / Wages",
        projected: 4000,
        actual: 4000
      }
    ]
  },
  {
    name: "Savings",
    entries: [
      {
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
    <div data-testid="financialCategoriesContainer">
      {financialCategories?.map((financialCategory) => (
        <FinancialCategory {...financialCategory} />
      ))}
    </div>
  );
}
