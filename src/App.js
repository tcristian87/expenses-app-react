import React, { useState } from "react"
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: 94.12,
    date: new Date(2020, 2, 28)
  },
  {
    id: "e2",
    title: "New Tv",
    amount: 799.49,
    date: new Date(2021, 1, 2)
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 2947.67,
    date: new Date(2021, 3, 8)
  },
  {
    id: "e4",
    title: "New Desk(Wooden)",
    amount: 450,
    date: new Date(2020, 5, 18)
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses)

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
