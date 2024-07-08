import React, { useContext } from 'react'
import CheckTopbar from "./components/topbar/CheckTopbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Single from "../src/pages/singlepage/Single"
import Write from  "../src/pages/writepage/Write";
import Setting from  "../src/pages/settingpage/Setting";
import Home from  "../src/pages/homepage/Home";
import Login from  "../src/pages/loginpage/Login";
import Register from  "../src/pages/registerpage/Register";
import { context, ContextProvider } from './context/authContext/authContext';

const App = () => {
   const {user} = useContext(context);
   console.log(user);
  return (
    <div>
    <ContextProvider>
      <BrowserRouter>
        <CheckTopbar user={user} />
        {/* <Outlet /> */}
        <Routes>
            <Route path='/' element={ user ?   <Home /> : <Login />}/>
            <Route path='/:id/single' element={user ?  <Single /> : <Login />}/>
            <Route path='/writepost' element={user ? <Write /> : <Login />}/>
            <Route path='/setting' element={user ? <Setting /> : <Login />} /> 
            <Route path='/login' element={user ? < Home/>: <Login />}/>
            <Route path='/register' element={user ? < Home/>: <Register />} />
            <Route path='*' element={<Write />} />
       </Routes>
      </BrowserRouter>
    </ContextProvider>  
    </div>
  )
}

export default App
