import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList1 = () => {
	const { expenses,dispatch } = useContext(AppContext);

	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};
	const onClear=()=>{
		dispatch({
			type: 'CLEAR_ALL',
			payload:expenses
		})
	}

	return (
		<>
		<h3 className='mt-3'>Expenses</h3> 
			<input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<ul class='list-group mt-3 mb-3'>
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))}
				<button style={{width:'150px'}}className="btn btn-danger mt-3 mr-1 " onClick={onClear}>CLEAR ALL</button>
			</ul>
		</>
	);
};

export default ExpenseList1;