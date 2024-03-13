import React, { useEffect,useState } from "react";
import axios from "axios";
import "./styles.css";
import Characters from "./Characters/Characters";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getCharacters,getLiked } from "./Redux/actions";
import { connect } from "react-redux";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login/Login";
import Register from "./Register";
function App(props) {
  useEffect(() => {
    props.getCharacters();
    props.getLiked();
    // axios
    // // .get(`http://127.0.0.1:8000/`)
    // .then((res) => {
    //   console.log(res)
    // })
    
  }, []);
  const [component,setComponent] = useState("Login")
  const changeComponent = e => {
    setComponent(e)
  }
  console.log(component)
  return (
    <>
      {!props.loading && props.characters.length > 0 ? (
        
       <>
       {
        //  component === "Login" && !localStorage.getItem("username") 
        //  ?
        //  <Login changeComponent={changeComponent}/>
        //  :
        //  component === "Register" && !localStorage.getItem("username")
        //  ?
        //  <Register changeComponent={changeComponent}/>
        //  :
         <Home />

       }
        </>
      ) : 
      
      (
        <></>
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    characters: state.characters
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: () => {
      dispatch(getCharacters());
    },
    getLiked: () => {
      dispatch(getLiked());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
