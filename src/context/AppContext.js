import { createContext , useReducer} from "react"
import axios from "axios";

const AppReducer=(state,action)=>{
switch (action.type){
	case 'ADD_EXPENSE':
		return{
			...state,
			expenses: [...state.expenses, action.payload]
		}
	case 'DELETE_EXPENSE':
		return{
			...state,
			expenses:state.expenses.filter((expense)=>
			expense.id!==action.payload)
		}
		case 'CLEAR_ALL':
			return{
				...state,
				expenses: [
				]
			}
			
	default:
		return state;
}

};

const initialState={
	budget: 5000,
	expenses :[
		{ id: 1121, name: 'Transportation', cost: 70 },
		{ id: 1131, name: 'Fuel', cost: 40 },
		{ id: 1141, name: 'Food', cost: 80 },
		{ id: 1151, name: 'Vacation', cost: 200 },
		
	],
};

export const AppContext = createContext();

export const AppProvider =(props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	return(
	<AppContext.Provider value={{
		budget:state.budget,
		expenses: state.expenses,
  	    dispatch,
	}}>
		{props.children}
	</AppContext.Provider>
	)
}