import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BudgetItem from "./budget-item.component";
import BudgetItemInterface from "../../interfaces/budget-item.interface";

describe("BudgetItem Component", () => {
  const budgetItemProps: BudgetItemInterface = {
    id: 1,
    name: "Testing",
    projected: 123,
    actual: 321
  };

  test("should render", () => {
    render(<BudgetItem {...budgetItemProps} />);
    const budgetItemName = screen.getByText(budgetItemProps.name);
    expect(budgetItemName).toBeInTheDocument();
  });

  test("properly set edit state", async () => {
    render(<BudgetItem {...budgetItemProps} />);

    // Act
    const editButton = screen.getByRole("button", { name: /edit/i });
    fireEvent.click(editButton);

    // Assert
    await waitFor(() => {
      const editMode = screen.getByText(/can edit/i);
      expect(editMode).toBeInTheDocument();
    });
  });
});
