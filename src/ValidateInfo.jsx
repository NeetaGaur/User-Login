export default function ValidateInfo(data){
    let errors ={}

    if(!data.fname.trim()){
        errors.fname=" First Name required"
    }
// last name
if(!data.lname.trim()){
    errors.lname="Last Name required"
}
// User name
if(!data.username.trim()){
    errors.username="Username required"
}


// email required
if(!data.email){
    errors.email="Email required"
}else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email))
errors.email="Email is invalid"

if(!data.password){
    errors.password=" Confirm password is required"
}else if(data.password<6){
    errors.password="Password needs to be 6 character or me"  
}

//confirm Password
if(!data.cpassword){
    errors.cpassword=" Confirm password is required"
}else if(data.cpassword!==data.password){
    errors.cpassword="Passwords do not match"  
}
return errors;

}