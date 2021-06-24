import React,{useContext, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Login1 ({Login,error}){
   
    const[details,setDetails]=useState({username:'',password:''});
   
    const handleForSubmit = event => {
        event.preventDefault();
        Login(details);
    };
    
    return (
        <div className='container mt-4'>
            <div style={{
  width:'300px',
  fontSize: '30px',
  paddingTop:'50px',
  margin: 'auto',
  border: '0px solid white',
  display:'flex'
  
}}>LOGIN TO CONTINUE</div>
            <ul className='list-group mt-3'>
            
                
                <form style={{margin:'50px', padding:'20px',marginLeft:'28%',width:'550px',}}onSubmit={handleForSubmit} className="form-horizontal" >
                <li className='row mt-3' >
                    
                    <div className='form-outline mb-4'>
                    Username:<input placeholder='Username...' className="form-control"type='Username' value={details.username} id='name' onChange={event => 
                    setDetails({...details, username: event.target.value})}  ></input>
                    
                    </div>
				
				</li>
                <li className='row mt-3'>
               <div className='form-outline mb-4">'>
               Password:<input placeholder='Password...' className="form-control" type='Password' vlaue={details.password} id='password' onChange={event => 
                    setDetails({...details, password: event.target.value})}  ></input>
                   
               </div></li><br/>
				<button className='btn btn-primary btn-block' type='Submit'>Submit</button>
                {(error != "")? (<div>{error}</div>): ""}
			</form>
                
            
            </ul>
        </div>
    )
}
