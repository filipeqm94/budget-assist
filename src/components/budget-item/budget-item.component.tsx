import { useState } from "react";
import BudgetItemInterface from "../../interfaces/budget-item.interface";

import "./budget-item.style.scss";

export default function BudgetItem({
  name,
  projected,
  actual
}: BudgetItemInterface) {
  const [editMode, setEditMode] = useState(false);
  let difference = (actual - projected).toFixed(2);

  const editFinanceEntry = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="budgetItemContainer">
      <div className="budgetItemHeader">
        <h3>{name}</h3>
        <button onClick={editFinanceEntry}>Edit</button>
      </div>
      <div className="financeEntryContainer">
        <div className="financeEntryItem">
          <label htmlFor="projected">Projected</label>
          <input
            id="projected"
            type="number"
            value={projected}
            // user can not edit on page load
            readOnly={!editMode}
          />
        </div>
        <div className="financeEntryItem">
          <label htmlFor="actual">Actual</label>
          <input
            id="actual"
            type="number"
            value={actual}
            // user can not edit on page load
            readOnly={!editMode}
          />
        </div>
        <div className="financeEntryItem">
          <label htmlFor="difference">Difference</label>
          <input id="difference" type="number" value={difference} readOnly />
        </div>
      </div>
      {editMode ? <div>Can edit</div> : null}
    </div>
  );
}
