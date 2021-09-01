import React, {useState, useEffect } from 'react';
import Signup from './Signup';



function display(){
    let {fname,lname}= localStorage.getItem('values');
 var output=document.getElementById('showProfile');
  output.innerHTML=
   <table>
    <tbody>
      <tr><td>First Name:</td>
        <td>{fname}</td>
      </tr>
     </tbody>
   </table>
  
}

function getInfo(){
    var getValues=localStorage.getItem('values');
    console.log(getValues);
    
    if(getValues){
       return JSON.parse(localStorage.getItem('values'));
     }else{
       return [];
     }
   };


const Profile = () => {

  const [profile, setProfile]=useState(getInfo()); 
 const [updateData,setUpdateData] =useState([]);



// const[records, setRecords]=useState();

const[toggleSubmit, setToggleSubmit]=useState(true);
const [isEditItem, setIsEditItem]=useState(null);



const InputEvent =e=>{
  const{ name, value,type,checked}=e.target;
  setUpdateData((preValue)=>
  {return{
         ...preValue,
         [name]: value,
         
     }
   });
};


//Edit Items
const editItem=(id)=>{
  console.log(id);
  let newEditItem= profile.find((elem)=>{
     return elem.id === id;
  }); 
 console.log(newEditItem);
 //setToggleSubmit(false);
 setUpdateData(newEditItem.name);
 //setIsEditItem(id);
}

//Submit form
const handleSubmit=(e)=>{

       e.preventDefault();
       const allInputData= {id:new Date().getTime().toString(), name:updateData}   
       setProfile([ ...profile , allInputData]);
      
    
     }

//delete the items
const deleteItems=(index)=>{
  const updatedItem= profile.filter((elem)=>{
  return index !== elem.id;
  });
// setRecords(updatedItem);
}


    return (
        <>
        
         <div className="main_div"  id="createAccount">
         <h1 className="form__login">User Profile</h1>
         <form className="form" method="get" id='edit' action="" >

         <div> <label htmlFor='fname'>First Name:</label></div>
         <input type="text" className="form__input"
                  name="fname"
                  
                   
                  value={profile.map((curVal,index) =>
                    { return(curVal.fname)

                    })}
                  onChange={InputEvent}/> 
                  <button className="edit_form" onClick={editItem}>Edit</button>

             <div className="form__input" >
             {
                  profile.map((curVal,index) =>
                    { return(<>
                         <div className="each_item" key={curVal.id}>
                          {curVal.fname}
                          <button className="edit_form" onClick={()=>editItem(curVal.id)}>Edit</button>
                          </div>
                          
                          </> )

                    })
            }
         </div>
         
         <div> <label htmlFor='fname'>Last Name:</label></div>
             <div className="form__input" >
             {
                  profile.map((curVal,index) =>
                    { return(
                         <div className="each_item" key={index}>
                          {curVal.lname}
                          <button className="edit_form" onClick={()=>editItem(curVal.id)}>Edit</button>
                          </div>
                           )

                    })
            }
         </div>

         <div> <label htmlFor='fname'>Username:</label></div>
             <div className="form__input" >
             {
                  profile.map((curVal,index) =>
                    { return(
                         <div className="each_item" key={index}>
                          {curVal.username}
                          <button className="edit_form" onClick={()=>editItem(curVal.id)}>Edit</button>
                          </div>
                           )

                    })
            }
         </div>

          <div> <label htmlFor='fname'>Email:</label></div>
             <div className="form__input" >
             {
                  profile.map((curVal,index) =>
                    { return(
                         <div className="each_item" key={index}>
                          {curVal.email}
                          <button className="edit_form" onClick={()=>editItem(curVal.id)}>Edit</button>
                          </div>
                           )

                    })
            }
         </div>

           <div> <label htmlFor='fname'>Password:</label></div>
             <div className="form__input" >
             {
                  profile.map((curVal,index) =>
                    { return(
                         <div className="each_item" key={index}>
                          {curVal.password}
                          <button className="edit_form" onClick={()=>editItem(curVal.id)}>Edit</button>
                          </div>
                           )

                    })
            }
         </div>  

         <div> <label htmlFor='fname'>Confirm Password:</label></div>
             <div className="form__input" >
             {
                  profile.map((curVal,index) =>
                    { return(
                         <div className="each_item" key={index}>
                          {curVal.cpassword}
                          <button className="edit_form" onClick={()=>editItem(curVal.id)}>Edit</button>
                          </div>
                           )

                    })
            }
         </div>    
              
         <div> <label htmlFor='fname'>Gender:</label></div>
             <div className="form__input" >
             {
                  profile.map((curVal,index) =>
                    { return(
                         <div className="each_item" key={index}>
                          {curVal.gender}
                          <button className="edit_form">Edit</button>
                          </div>
                           )

                    })
            }
         </div>

         <div> <label htmlFor='fname'>Language:</label></div>
             <div className="form__input" >
             {
                  profile.map((curVal,index) =>
                    { return(
                         <div className="each_item" key={index}>
                          {curVal.language}
                          <button className="edit_form">Edit</button>
                          </div>
                           )

                    })
            }
         </div>     

         <div> <label htmlFor='fname'>Hobbies:</label></div>
             <div className="form__input" >
             {
                  profile.map((curVal,index) =>
                    { return(
                         <div className="each_item" key={index}>
                          {curVal.hobbies}
                          <button className="edit_form">Edit</button>
                          </div>
                           )

                    })
            }
         </div>      
          {
            toggleSubmit ? <button className="form__button" type="submit" onClick={InputEvent}>Edit</button>
             :<button className="form__button" type="submit"  onSubmit={handleSubmit}>Submit</button>
          }
           {/* <div><button className="form__button" type="submit">Submit</button></div>
           <div><button className="form__button" type="submit" onClick={InputEvent}>Edit</button></div> */}
            
            
         
                
          </form> 

          
            
        </div>
          
        </>
    )
}

export default Profile
