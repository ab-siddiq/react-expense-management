import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  console.log('new expense',props)
  const saveExpenseHandler= enteredExpenseData =>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random().toString()*10)
    }
    props.onAddExpense(expenseData)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler}></ExpenseForm>
    </div>
  );
}
export default NewExpense;
