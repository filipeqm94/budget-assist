import { render, screen } from "@testing-library/react";
import FinancialCategory from "./financial-category.component";

describe("FinancialCategory Component", () => {
  test("should render", () => {
    render(<FinancialCategory />);
    const financialCategoryTitle = screen.getByText("Income");
    expect(financialCategoryTitle).toBeInTheDocument();
  });
});
