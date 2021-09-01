import React, { useState , useEffect } from 'react';
import  './Userlogin.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import UseForm from './UseForm';
import { NavLink } from 'react-router-dom';
import Validate from './ValidateInfo';

//to get data to local storage
var getLocalItems=()=>{
    let list=localStorage.getItem('values');
    console.log(list);
    if(list){
      return JSON.parse(localStorage.getItem('values'));
    }else{
      return [];
    }
};

const Signup = () => {
const [data,setData] =useState({
    fname:"",
    lname:"",
    username:'',
    email:'',
    password:'',
    cpassword:'',
    gender:'',
    hobbies:'',
});
const[records, setRecords]=useState(getLocalItems());

const [errors, setErrors]=useState({});

const [isChecked, setIsChecked]=useState([]);
const [allChecked, setAllChecked]=useState([]);



const InputEvent =e=>{
    const{ name, value,type,checked}=e.target;
    setData((preValue)=>
    {return{
           ...preValue,
           [name]: value,
           
       }
     });
};

const handleSubmit=(e)=>{
                     e.preventDefault();
                     //setRecords([...records, data]);
                     const newRecord= {...data, id:new Date().getTime().toString()}   
                     
                     setRecords([ ...records , newRecord]);
                     //setRecords([ ...records , newRecord ,isChecked]);
                     //console.log(records);

                     setErrors(Validate(data));
                     
                    //  setIsChecked({...isChecked,[e.target.name]:e.target.id});
                     setAllChecked([...allChecked, isChecked]);
                     
                     setData({fname:"",lname:"", username:'',email:'',password:'',
                     cpassword:'',gender:'',hobbies:''});
                     //const newRecord={...data, id:new Date().getTime().toString()}
                  
//setRecords(records,newRecord);
//setRecords([...records])
                     // return{ InputEvent, data , handleSubmit, errors ,records};
                    
}

//add data to lacal storage
useEffect(()=>{
                  localStorage.setItem('values',JSON.stringify(records))
               },[records],[isChecked]);


//for checkbox
// const isChecked=(e)=>{
//     const setIsChecked=(e.target.value);
    
  // }
//  //setIsChecked([isChecked]);
// const CheckBox=(e)=>{
// setIsChecked({[e.target.name] : e.target.checked})
//     // const{name,value}=e.target;
//     // setIsChecked((preval)=>{
//     //     return{
//     //         ...preval,
//     //         name
//     //     }
//     // });
//     console.log(isChecked,setIsChecked);
// }

console.log(isChecked);
 

    return (
      <>
      <div>
        <div className="main_div"  id="createAccount">
          <h1 className="form__login">Create Account</h1>
             <form className="form" method="post" id='register' action="" onSubmit={handleSubmit} >
               <div> <label htmlFor='fname'>First Name</label>
                <input type="text" autoComplete="off"
                  name="fname"
                  value={data.fname}
                  onChange={InputEvent}
                  id="fname"  
                   className="form__input" autoFocus autoComplete="off"
                   placeholder="Enter First Name*"></input>
                  {errors.fname && <p>{errors.fname}</p>}</div>
                 
               <div> <label htmlFor='lname'>Last Name</label>
                <input type="text"  autoComplete="off" 
                  name="lname"
                  value={data.lname}
                  onChange={InputEvent}
                  id="lname" className="form__input" autoComplete="off"
                  placeholder="Enter last Name*"></input>
                 {errors.lname && <p>{errors.lname}</p>}</div>

               <div> <label htmlFor='username'>Username</label>
                <input type="text" autoComplete="off" 
                  name="username" 
                  value={data.username}
                  onChange={InputEvent}
                  id="uname" className="form__input" autoComplete="off"
                  placeholder="Enter Username*"></input>
                  {errors.username && <p>{errors.username}</p>}</div>

               <div><label htmlFor='email'>Email</label>
                <input type="text" autoComplete="off" 
                  name="email" 
                  value={data.email}
                  onChange={InputEvent}
                  id="email" className="form__input" autoComplete="off"
                  placeholder="Enter Your EmailId*"></input>
                  {errors.email && <p>{errors.email}</p>}</div>


               <div><label htmlFor='password'>Password</label>
                <input type="password" autoComplete="off" 
                  name="password" 
                  value={data.password}
                  onChange={InputEvent}
                  id="pwd"  className="form__input" autoComplete="off"
                  placeholder="Enter Password*"></input>
                  {errors.password && <p>{errors.password}</p>}</div>

               <div><label htmlFor='cpassword'>Confirm Password</label>
                <input type="password" autoComplete="off" 
                   name="cpassword"
                   value={data.cpassword}
                   onChange={InputEvent}
                   id="cpassword" className="form__input" autoComplete="off"
                   placeholder="Enter Confirm Password*"></input>
                   {errors.cpassword && <p>{errors.cpassword}</p>}</div>
                

              <div ><label>Gender: </label>
                <input type="radio" 
                   value="Male"
                    // checked={radio==="Male"} 
                     onChange={InputEvent}
                    name="gender" /> Male
                    
                 <input type="radio" value="Female"
                     //checked={radio==="Female"} 
                      onChange={InputEvent}
                     name="gender" /> Female
        
               </div>

                <div><label>Language:</label>
                    <input type='checkbox'
                        name='language'
                        value='English'
                        onChange={InputEvent}
                       ></input>
                       <label htmlFor='reading'>English</label>
                       
                    <input type='checkbox'
                        name='language'
                        value='Hindi'
                        onChange={InputEvent}
                   ></input>
                    <label htmlFor='reading'>Hindi</label>
                      
                    <input type='checkbox'
                       name='language'
                       value='German'
                       onChange={InputEvent}
                        ></input>
                       <label htmlFor='reading'>German</label>
                </div>

              <div >
                   <label>Hobbies:</label>
                    <input type='checkbox'
                    name='hobbies'
                    value='Reading'
                      // value={isChecked.reading}
                      //checked={isChecked.reading}
                       onChange={InputEvent}
                        id='reading'></input>
                       <label htmlFor='reading'>Reading</label>

                       <input type='checkbox'
                       name='hobbies'
                    value='Reading'
                      // value={isChecked.football}
                        //checked={isChecked.football}
                        onChange={InputEvent}
                        id='football'></input>
                       <label htmlFor='football'>Football</label>

                       <input type='checkbox'
                       name='hobbies'
                    value='Reading'
                       //value={isChecked.cricket}
                     //checked={isChecked.cricket}
                     onChange={InputEvent}
                        id='cricket'></input>
                       <label htmlFor='cricket'>Cricket</label>
              </div> 

            
            <div><button className="form__button" type="submit">Register</button></div>
            <NavLink to="/login">I'am already Registerd</NavLink>
            
         
                
          </form> 
        </div>
      </div></>
    )}
export default Signup