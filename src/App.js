import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "New Year",
    date: new Date(2024, 0, 1),
    price:1000,
  },
  {
    title: "My Birthday",
    date: new Date(2024, 0, 11),
    price:400,
  },
  {
    title: "Mom's Birthday",
    date: new Date(2024, 0, 24),
    price:700,
  },
  {
    title: "Ayodhya Temple's Inaugration",
    date: new Date(2024, 0, 22),
    price:1500,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES) ;
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
