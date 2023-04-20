import React, { useState } from "react";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2023");

  const setFilterHandler = (filterData) => {
    setFilter(filterData)
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onSetFilter={setFilterHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
