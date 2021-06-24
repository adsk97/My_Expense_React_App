import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import Budget from './Budget'
import ExpenseList1 from './ExpenseList1'
import AddExpenseForm from './AddExpenseForm'

export default function Header() {
    
    return (
        <div>
           <div className="sidenav">
  <a ><Link to={`/Budget/${Budget.id}`}>Total Expenditure</Link></a>
  <a ><Link to={`/ExpenseList1/${ExpenseList1.id}`}>Expense List</Link></a>
  <a ><Link to={`/AddExpenseForm/${AddExpenseForm.id}`}>Add Expense</Link></a>
</div>

        </div>
    )
}
