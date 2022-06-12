import React,{useContext} from "react";
import { useSelector } from 'react-redux';

// import Loading from "../pages/Loading/Loading";
import {
    Route,
    Redirect,
} from "react-router-dom";
import AuthContext from '../context/AuthContext';
import UserContext from '../context/UserContext';
const PostAuthRoute = ({ children,...rest }) => {
  const {loggedIn} = useContext(AuthContext);
      const {currentuser}= useContext(UserContext);
    

   
    return (
        <Route
          {...rest}
          render={({ location }) =>
            !loggedIn ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: {from:location}
                }}
              />
            )
          }
        />
      );
}

export default PostAuthRoute;