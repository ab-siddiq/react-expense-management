import { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  let expenseContent = <p>No expense found!</p>;

  return (
    <div className="">
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>

        {filteredExpenses.length === 0
          ? expenseContent
          : filteredExpenses.map((item) => (
              <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            ))}
      </Card>
    </div>
  );
}
export default Expenses;
