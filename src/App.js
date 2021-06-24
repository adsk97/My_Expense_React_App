import React,{useState,useContext} from 'react'
import Body from './Components/body';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login1 from './Components/login';

const App = () =>{
  const adminUser = {
    username : 'admin',
    password: 'admin'
  }
  const [users, setUsername] = useState({username:'',password:''});
  const [error, setError]= useState('')

  const Login= details =>{
    console.log(details)
    if(details.username== adminUser.username && details.password == adminUser.password){
    console.log(`logged in`);
    setUsername({
      username:details.username,
      password:details.password
    });
  }
    else {
      console.log(`NAhhhh`)
      setError('Username or password do not match')
    }
}
  const Logout=()=>{
    setUsername({username:'',password:''});
    
  }

  return (
    
    <div >
      
       
      {(users.username != '' || users.password!='')?(
        <div>
          <Body />
        <button class="btn btn-danger mt-4" 
        style={{position:'fixed',zIndex:'1',paddingBottom:'10px',bottom:'30px',left:'40px',overflowX:'hidden'}} 
        onClick={Logout}>LOGOUT</button>
        </div>
       ):
        (<div><Login1 Login={Login} error={error}/></div>) }
      
     
    </div>
  )

};
export default App;

