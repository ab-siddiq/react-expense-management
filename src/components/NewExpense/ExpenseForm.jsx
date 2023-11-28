import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  //   const [userInput,setUserInput] = useState({
  //     inputTitle: '',
  //     inputAmount: '',
  //     inputDate: ''
  //   })
  //   const titleChangeHandler = event =>{
  //     //below state has the possibility to work with old state
  //     setUserInput({
  //       ...userInput,
  //       inputTitle: event.target.value,
  //     })
  // // this state garunted that there is always the current/new state state
  //     setUserInput(prevState =>{
  //       return {...prevState,inputTitle: event.target.value}
  //     })
  //   }
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  const titleChangeHandler = (e) => {
    setInputTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setInputAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();
    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate)
    }
    props.onSaveExpense(expenseData)
    setInputAmount('')
    setInputDate('')
    setInputTitle('')
  }
  return (
    <form action="" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" name="" id="" value={inputTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input type="number" min="0.01" step="0.5" name="" id="" value={inputAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input type="date" min="2015-01-01" max="2040-01-01" name="" id="" value={inputDate} onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}
export default ExpenseForm;
