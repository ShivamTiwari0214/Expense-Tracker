import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart"; 
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2024");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses = {filteredExpenses}/>
      {filteredExpenses.length === 0 ? (
        <p>No Expense Found !</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        ))
      )}
    </Card>
  );
}

export default Expenses;
