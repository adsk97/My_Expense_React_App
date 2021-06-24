import React,{useContext} from 'react'
import { AppContext } from '../context/AppContext'

const ExpenseItem = (props) => {
	const {dispatch,}= useContext(AppContext);

	const handleDeleteExpense=()=>{
		dispatch({
			type:'DELETE_EXPENSE',
			payload : props.id
		})
	}
	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div >
			<span style={{color:'black', padding:'20px'}}>
			${props.cost}
			</span>
			<button type="button"  class="btn btn-sm btn-danger"
			onClick={handleDeleteExpense}> Remove</button>
			</div>	
		</li>
	)
}

export default ExpenseItem
