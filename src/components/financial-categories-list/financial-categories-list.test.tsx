import { render, screen } from "@testing-library/react";
import FinancialCategoriesList from "./financial-categories-list.component";

describe("FinancialCategoryList Component", () => {
  test("should render", () => {
    render(<FinancialCategoriesList />);

    const financialCategoriesContainer = screen.getByTestId(
      "financialCategoriesContainer"
    );

    expect(financialCategoriesContainer).toBeInTheDocument();
  });
});
