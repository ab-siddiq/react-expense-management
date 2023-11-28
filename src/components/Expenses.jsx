import { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter"
import "./Expenses.css";

function Expenses(props) {
  const [filterYear,setFilterYear] = useState('2020')
  
  const filterChangeHandler = selectedYear=>{
    setFilterYear(selectedYear)
  }
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
      {props.items.map((item) => (
        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
}
export default Expenses;
