import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from './Budget'
import Remaining from './Remaining';
import ExpenseTotal from './ExpenseTotal';
import ExpenseList1 from './ExpenseList1'
import AddExpenseForm from './AddExpenseForm';
import { AppProvider } from '../context/AppContext';
import FrontPage from './FrontPage';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './header';
import './header.css'
const Body = (props) =>{
  return (
      
      <AppProvider>
          <Router>
          <div> <Header/></div>
    <div className='container' class='main'>
      <Route exactpath="/" component={FrontPage} />
      <div className='row mt-3'>
      <div className='col-sm'>
      <Route path="/" component={ExpenseTotal}/>
      </div>
      <div className='col-sm'>
      <Route path="/Budget/:id" component={Budget}/>
      </div>
      <div className='col-sm'>
      <Route path="/Budget/:id" component={Remaining}/>
      </div>
      </div>
      
      <div className='row mt-3'>
          <div className='col-sm'>
               <Route path={"/ExpenseList1/:id"} component={ExpenseList1}/></div>
              </div>
          
          <div className=' mt-3'>
              <div className='col-sm'>
                   <Route path="/AddExpenseForm/:id" component={AddExpenseForm}/>
              </div>
          </div>
    </div>
    </Router>
      </AppProvider>
      
  )

};
export default Body;
