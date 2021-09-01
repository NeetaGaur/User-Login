import React,{useState} from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Grid , Avatar} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './index.css';
import Checkbox from '@material-ui/core/Checkbox';
import {NavLink, Route, Switch} from 'react-router-dom';
import Signup from './Signup';



const Userlogin = () => {
     
    const [userRegisteration,setUserRegisteration] = useState(
        {
             username:"",
             password:"",

        });

const [records, setRecords] = useState([]);

 const handleInput =(e)=>{
             console.log(e.target.value);   
             console.log(e.target.name);
              
              const{ name, value}=e.target;
             setUserRegisteration((preValue)=>
             {return{
                    ...preValue,
                    [name]:value,
                }
              });
             };

// if(window.localStorage){
 
//   localStorage.setItem("uname","admin");
//   localStorage.setItem("pwd","1234");

//   var user=localStorage.getItem("user");
//   var pwd=localStorage.getItem("pwd");


// }else{
//    console.log("not supported");
// }

 const handleSubmit =(e)=>{
                e.preventDefault();
                const newRecord= { ...userRegisteration, id:new Date().getTime().toString()}   
                //console.log(records);  
                setRecords([ ...records , newRecord ]);
                //console.log(records);

            
                // Name and Password from the register-form
                var name1 = document.getElementById('uname').value;
                var pw = document.getElementById('pwd').value;
                
                
                // storing input from register-form
                function store() {
                    localStorage.setItem('uname', name1.value);
                    localStorage.setItem('pwd', pw.value);
//document.getElementById('welcomeMessage').innerHTML = "Welcome " +
                    //localStorage.getItem('uname') + "!";
                }
                // check if stored data from signup-form is equal to entered data in t login-form
                function check() {
                    // stored data from the register-form
                    var storedName = localStorage.getItem('uname');
                    var storedPw = localStorage.getItem('pwd');
                
                    // entered data from the login-form
                    var userName = document.getElementById('username');
                    var userPw = document.getElementById('password');
                
                    // check if stored data from register-form is equal to data from login form
                    if(userName.value == storedName && userPw.value == storedPw) {
                        alert('You are loged in.');
                    }else {
                        alert('Error');
                    }
                }            
check();
                

      // if(user === userRegisteration.username && pwd === userRegisteration.password)
      // {
      //   alert("login successfully!") ;
      
      // }else if(user === "" && pwd === "   ")
      // {
      //   alert("Please fill the data");
      // } 
      // else{
      //   alert("Invalid Username and Password");
      // }

      setUserRegisteration({username:"",password:""});
                       }             
                                            
const avatarStyle= {backgroundColor:"#009579"}
   return (
     <>
     
        <div className="main_div"  id="createAccount" >
        <Grid align='center' >
        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
        </Grid>
        
            <h1 className="form__login">Login</h1>
            
            <form className="form" method="post" action="" id='login'  onSubmit={handleSubmit} >
               

                <div> <label htmlFor='username'>Username</label>
                <input type="text"  id="username" className="form__input"
                autoComplete="off"
                name="username"
                autoFocus=""
                   value={userRegisteration.username} 
                   onChange={handleInput}
                 placeholder="Enter Username*"></input></div><br></br>

                

                <div><label htmlFor='password'>Password</label>
                <input type="password"  id="passwordpassword" 
                name="password"
                  value={userRegisteration.password} 
                   onChange={handleInput} autoComplete="off"autoComplete="off"
                   className="form__input" placeholder="Enter Password*"></input></div>
                    
                    <FormControlLabel
        control={
          <Checkbox
            
            name="checkedB"
            color="primary"
          />
        }
             label="Remember Me"
         />
            
            <div><button id="submitbtn" className="form__button" type="submit"  >Submit</button></div>

            <div><p className="form__text">
                  <NavLink to="/forgotpwd" className="form__link">Forgot password ?</NavLink>
              </p>
              <p className="form__text">
                <NavLink  className="form__link" to="/signup" id="linklogin">Do you have an acount ? Sign Up </NavLink>
            </p></div>
            
                
            </form>
             
    </div>

    </>    
    )
            }

export default Userlogin;


//if ((username == localStorage.getItem('username')) && (password == localStorage.getItem('password'))) {
  //     document.getElementById('welcomeMessage').innerHTML = "Welcome " + localStorage.getItem('username') + "!";
  //      } else {
  //     document.getElementById('welcomeMessage').innerHTML = "Invalid Log-in!";} return false;
  