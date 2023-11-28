import ExpenseDate from "./ExpenseDate"
import Card from './Card'
import "./ExpenseItem.css"
function ExpenseItem(props) {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price ">$ {props.amount}</p>
        <button type="button">Change Title</button>
      </div>
    </Card>
  )
}

export default ExpenseItem
