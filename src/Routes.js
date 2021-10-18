import React,{useContext} from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './auth/Register'
import Login from './auth/Login'
import Header from './Header/Header'
import AdminHeader from './Header/AdminHeader'
import VoterHeader from './Header/VoterHeader'
import Landing from './pages/Landing'
import Rolecheck from "./auth/Rolecheck";
import AdminVoteTracker from "./pages/admin/AdminVoteTracker";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateVoteSession from "./pages/admin/CreateVoteSession";
import VoterDashboard from "./pages/voter/VoterDashboard";
import VotesTracker from "./pages/voter/VotesTracker";
import VoteSession from "./pages/voter/VoteSession";
import AuthContext from './context/AuthContext';
import UserContext from './context/UserContext';
import ViewUsers from "./pages/admin/ViewUsers";
import ViewSessions from "./pages/admin/ViewSessions";
function Routes(){
      const {loggedIn} = useContext(AuthContext);
      const {currentuser}= useContext(UserContext);
    return(
        <BrowserRouter>
        <Header />
        <Switch>
        <Route exact path="/">
        
                   <Landing />
             </Route>

             {
                   !loggedIn &&(
                        <>

 <Route exact path="/register">
 
                   <Register />
             </Route>
             <Route exact path="/login">
                   <Login />
             </Route>

                         </>
                )
             }

{
           loggedIn &&(
               <>

                <Route  path="/rolecheck">
                   <Rolecheck />
             </Route>
             <Route  path="/votestracker">
             
                   <VotesTracker />
             </Route>
             <Route  path="/createvotesession">
                   <CreateVoteSession />
             </Route>
             <Route  path="/voterdashboard">
             
                   <VoterDashboard />
             </Route>
             <Route  path="/votesession">
             
                   <VoteSession />
             </Route>
             <Route  path="/admindashboard">
                   <AdminDashboard />
             </Route>
             <Route  path="/adminvotetracker">
             
                   <AdminVoteTracker />
             </Route>
             <Route  path="/allusers">
             <ViewUsers />
       </Route>
       <Route  path="/allsessions">
             <ViewSessions />
       </Route>
                </>
         )
       }
            
        </Switch>
           </BrowserRouter>
    )
}
export default Routes;