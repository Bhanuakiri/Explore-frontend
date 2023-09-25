import React,{useState,useCallback} from 'react';
import {Navigate } from 'react-router-dom';
import Users from './user/pages/users';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/userPlaces';
import Auth from './user/pages/Auth';
import UpdatePlace from './places/pages/UpdatePage';
import { AuthContext } from './shared/context/auth-context';
import MainNavigation from './shared/Navigation/mainnavigation';

 const App =()=> {
   const [isLoggedIn,setisLoggedIn]=useState(false);
   const login = useCallback(()=>{
      setisLoggedIn(true);
   },[]);

   const logout = useCallback(()=>{
      setisLoggedIn(false);
   },[]);
   let routes;
  if(isLoggedIn){
   routes=(
      <React.Fragment>
      <Route path="/" exact element={<Users/>}/>
     <Route path="/:userid/places" exact element={<UserPlaces/>}/>
     <Route path="/places/new" exact element={<NewPlace/>}/>
     <Route path="/places/:placeId" exact element={<UpdatePlace/>}/>
     <Route path="/" element={<Navigate to="/" />} />
     </React.Fragment>
   );
  }
  else
  {
   routes=(
      <React.Fragment>
      <Route path="/" exact element={<Users/>}/>
     <Route path="/:userid/places" exact element={<UserPlaces/>}/>
     <Route path="/auth" exact element={<Auth/>}/>  
     <Route path="/" element={<Navigate to="/auth" />} />
     </React.Fragment>
   );
  }
  return (
   <AuthContext.Provider value={{isLoggedIn:isLoggedIn,login:login,logout:logout}}>
  <Router>
  <MainNavigation/>
  <main>
  <Routes>
   {routes}
     {/* </Route> */}
  </Routes> 
  </main>
     
     {/* <Redirect to="/"/> */}
     </Router>
     </AuthContext.Provider>);
}

export default App;
