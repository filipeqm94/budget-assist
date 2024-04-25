import { useState } from "react";
import BudgetItemInterface from "../../interfaces/budget-item.interface";

import "./budget-item.style.scss";

export default function BudgetItem(props: BudgetItemInterface) {
  const { id, name, actual, projected } = props;
  const [editMode, setEditMode] = useState(false);
  let difference = (actual - projected).toFixed(2);

  const editFinanceEntry = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="budget-item-container">
      <div className="budget-item-header">
        <h3>{name}</h3>
        <button onClick={editFinanceEntry}>Edit</button>
      </div>
      <div className="finance-entry-container">
        <div className="finance-entry-item">
          <label htmlFor="projected">
            Projected
            <input
              id="projected"
              type="number"
              value={projected}
              // user can not edit on page load
              readOnly={!editMode}
            />
          </label>
        </div>
        <div className="finance-entry-item">
          <label htmlFor="actual">
            Actual
            <input
              id="actual"
              type="number"
              value={actual}
              // user can not edit on page load
              readOnly={!editMode}
            />
          </label>
        </div>
        <div className="finance-entry-item">
          <label htmlFor="difference">
            Difference
            <input id="difference" type="number" value={difference} readOnly />
          </label>
        </div>
      </div>
      {editMode ? <div>Can edit</div> : null}
    </div>
  );
}
