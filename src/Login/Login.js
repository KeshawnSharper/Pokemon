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
function Login(props) {

  useEffect(() => {
  
    
    
  }, []);
  const [value,setValue] = useState({
    username:"",
    password:""
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
   axios.post("http://127.0.0.1:8000/api/token/",value).then(
       res => {
        localStorage.setItem("token",res.data.access)
        localStorage.setItem("username",value.username)
        props.changeComponent("Home")
       }
   )
  }
  
  const classes = useStyles();

  return (
    <div className={`form`}>
     <h2> Login </h2> 
    <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
      
      <TextField name="username" value={value.username} id="outlined-basic" label="User Name" variant="outlined" onChange={(e) => handleChange(e)}/>
      <TextField value={value.password} id="outlined-basic" label="Password" variant="outlined" onChange={(e) => handleChange(e)} name="password" />
      <button type="submit"> Login </button>
    </form>
    <button onClick={() => props.changeComponent("Register")}> Register Here</button>
    </div>
  )
}



export default Login
