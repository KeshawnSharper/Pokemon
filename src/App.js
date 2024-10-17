import React, { useEffect,useState } from "react";
import Protected from './Protected'
import axios from "axios";
import "./styles.css";
import Characters from "./Characters/Characters";
import { Amplify } from 'aws-amplify';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { getCharacters,getLiked } from "./Redux/actions";
import { connect } from "react-redux";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login/Login";
import Register from "./Register";

function App({ signOut, user,getCharacters,getLiked }) {
  useEffect(() => {
    getCharacters();
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
    <BrowserRouter>
      <Routes>
      <Route path="/" element={
           
             <Login user={user} signOut={signOut} />
         } />
        <Route path="/home" element={
            <Protected>
             <Home user={user} signOut={signOut}/>
            </Protected>
         } />

      </Routes>
      </BrowserRouter>
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
