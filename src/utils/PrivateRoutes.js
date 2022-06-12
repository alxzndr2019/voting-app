import React,{useContext} from "react";
import { useSelector } from 'react-redux';
// import Loading from "../pages/Loading/Loading";
import {
    Route,
    Redirect,
} from "react-router-dom";
import AuthContext from '../context/AuthContext';
import UserContext from '../context/UserContext';
const PrivateRoute = ({ children,...rest }) => {
  const {loggedIn} = useContext(AuthContext);
  const {currentuser}= useContext(UserContext);

  

    return (
        <Route
          {...rest}
          render={({ location }) =>
            loggedIn ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/rolecheck",
                  state:{from:location}
                }}
              />
            )
          }
        />
      );
}

export default PrivateRoute;