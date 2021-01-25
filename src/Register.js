import React, { useEffect,useState } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
function Register(props) {

  useEffect(() => {
  
    
    
  }, []);
  const [value,setValue] = useState({
    username:"",
    password:"",
    re_password:"",
    email: ""
  })
  const handleChange = (e) => {
    console.log(e.target.value)
    setValue(
        {...value,
            [e.target.name]:e.target.value})
           
            console.log(value)
  }
  const handleSubmit = (e) => {
      e.preventDefault()
      value.re_password = value.password
    //   setValue(
    //     {...value,
    //         re_password:value.password})
            console.log(value)
  
   axios.post("http://127.0.0.1:8000/auth/users/",value).then(
       res => {
        console.log(res)
        props.changeComponent("Home")
       }
   )
  }
  
  const classes = useStyles();

  return (
    <div className={`form`}>
           <h2> Register </h2> 

    <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
      
      <TextField name="username" value={value.username} id="outlined-basic" label="User Name" variant="outlined" onChange={(e) => handleChange(e)}/>
      <TextField value={value.email} id="outlined-basic" label="Email" variant="outlined" onChange={(e) => handleChange(e)} name="email" />
      <TextField value={value.password} id="outlined-basic" label="Password" variant="outlined" onChange={(e) => handleChange(e)} name="password" />
      <button type="submit"> Register </button>
    </form>
    <button onClick={() => props.changeComponent("Login")}> Login </button>
    </div>
  )
}



export default Register
