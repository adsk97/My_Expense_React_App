import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
	const{expenses} = useContext(AppContext)
	const totalExpenses1= expenses.reduce((total,item)=>{
		return total+=item.cost
	},0);
	return (
		<div className='alert alert-primary'>
			<span> Total Spent: ${totalExpenses1} </span>
		</div>
	)
}

export default ExpenseTotal;
