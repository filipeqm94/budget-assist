import { render, screen } from "@testing-library/react";
import FinancialCategory from "./financial-category.component";
import FinancialCategoryInterface from "../../interfaces/financial-category.interface";

describe("FinancialCategory Component", () => {
  const financialCategoryProp: FinancialCategoryInterface = {
    name: "Testing",
    entries: [
      {
        name: "Test",
        projected: 123,
        actual: 312
      }
    ]
  };
  test("should render", () => {
    render(<FinancialCategory {...financialCategoryProp} />);
    const financialCategoryTitle = screen.getByText(/testing/i);
    expect(financialCategoryTitle).toBeInTheDocument();
  });
});
