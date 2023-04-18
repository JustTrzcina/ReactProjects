import React, {useState} from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filter,setFilter] = useState();

  const setFilterHandler=(filterData)=>{
    setFilter(filterData);
    console.log(filter);
    console.log("It was here");
  }

  const expenses = props.data;
  return (
    <div>
      <ExpenseFilter onSetFilter ={setFilterHandler}/>
      <Card className="expenses">
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
