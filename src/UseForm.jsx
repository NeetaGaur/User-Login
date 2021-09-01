import React, { useState, useEffect} from 'react';
import  './Userlogin.css';
import Signup from './Signup';

const UseForm = Validate => {
const [data,setData] =useState({
        fname:"",
        lname:"",
        username:'',
        email:'',
        password:'',
        cpassword:'',
        gender:'',
   });

const [errors, setErrors]=useState({});
//const [isSubmitting, setIsSubmitting]=useState(false);

const[records, setRecords]=useState([]);

 
const InputEvent =e=>{
const{name,value} =e.target;
 
 setData(
    {
        ...data,
        [name]:value,
    });
 };
 
 const handleSubmit=(e)=>{
    e.preventDefault();
   setErrors(Validate(data));
//    const newRecord={...data, id:new Date().getTime().toString()}
//  setRecords(records,newRecord);

  // setIsSubmitting(true);
 }
   return{ InputEvent, data , handleSubmit, errors ,records};
}

export default UseForm
