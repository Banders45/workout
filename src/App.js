import React, { useState, useEffect } from 'react';
import Sitebar from './home/Navbar';
import Auth from './auth/Auth';
import WorkoutIndex from './workouts/WorkoutIndex'


function App() {
const [SessionToken, setSessionToken] = useState(''); //1
useEffect(() => { //2
if (localStorage.getItem('token')){
setSessionToken(localStorage.getItem('token'));
  }
},[])

const updateToken = (newToken) => { //3
localStorage.setItem('token', newToken);
setSessionToken(newToken);
console.log(SessionToken);
}

const clearToken = () => {
  localStorage.clear();
  setSessionToken('');
}

const protectedViews = () => {
  return (SessionToken === localStorage.getItem('token') ? <WorkoutIndex roken={SessionToken}/>
  : <Auth updateToken={updateToken}/>)
}


return (
  <div >
    <Sitebar clickLogout={clearToken}/>
    {protectedViews()}
  </div>
);
}

export default App;
