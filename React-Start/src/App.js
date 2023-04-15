import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Car insurance", amount: 845.99, date: new Date(2021, 2, 28) },
    { title: "Wine", amount: 45.44, date: new Date(2022, 2, 28) },
    { title: "Beer", amount: 31.99, date: new Date(2023, 2, 28) },
  ];

  return (
    <div>
      <NewExpense/>
      <Expenses data = {expenses} />
    </div>
  );
}

export default App;
