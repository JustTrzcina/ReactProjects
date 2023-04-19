import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const[isShowing,setIsShowing]=useState(false);

  const saveExpenseDataHandler=(newExpenseData)=>{
    const expenseData = {
      ...newExpenseData,
      id:Math.random().toString()
    };
    props.onNewExpense(expenseData);
    setIsShowingHandler()
  }

  const setIsShowingHandler = ()=>{
    setIsShowing((prevState)=>{
      return !prevState
    })
  }

  return (
    <div className="new-expense">
      {!isShowing && <button onClick={setIsShowingHandler}>Add new expense</button>}
      {isShowing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {setIsShowingHandler} />}
    </div>
  );
};

export default NewExpense;
