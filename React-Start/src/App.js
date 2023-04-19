import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const INITIAL_EXPENSES = [
  { id:"e1",title: "Car insurance", amount: 845.99, date: new Date(2021, 2, 28) },
  {  id:"e2",title: "Wine", amount: 45.44, date: new Date(2022, 2, 28) },
  {  id:"e3",title: "Beer", amount: 31.99, date: new Date(2023, 2, 28) },
];
const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const newExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
};

export default App;
