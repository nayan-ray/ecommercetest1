import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Home from './pages/homepage/Home.jsx'
// import Single from './pages/singlepage/Single.jsx'
// import Write from './pages/writepage/Write.jsx'
// import Setting from './pages/settingpage/Setting.jsx'
// import Accountlayout from './components/pagelayout/Accountlayout.jsx'
// import Login from "./pages/loginpage/Login.jsx"
// import Register from "./pages/registerpage/Register.jsx"
// import FramerMotion from './pages/framer/FramerMotion.jsx'
import { ContextProvider}  from './context/authContext/authContext.jsx'
// const {user} = useContext(context)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
       <ContextProvider>
            <App />
       </ContextProvider>
    
    {/* <ContextProvider>
       <BrowserRouter>
       
        <Routes>
            {/*  */}
            {/* <Route path='/'  element={ user? <App user={user} /> : <Login />}> */}
              {/* inside app component they will be displayed but one according to url
                important part is routing
              */}
              {/* Here app is parent section. these four routes are child of app.
              One of them will be displayed according to url inside app section
              . On the whole, app section will be displayed with one of them all time
              . */}
                {/* <Route index element={<Home />}/> 
                <Route path=':id' element={<Single />}/>
                <Route path='writepost' element={<Write />}/>
                <Route path='setting' element={<Setting />} />
            </Route> */}
          
                  {/* inside accountlayout one of these routes will be displayed
                  according to url .On the whole, accountlayout section will be displayed
                  with one of two routes all the time*/}
               {/* {<Route path='/login' element={user ? < Home/>: <Login />}/>}
                <Route path='register' element={user ? < Home/>: <Register />}/> 
            
            <Route path='/test' element={<FramerMotion />} />
        </Routes> */}
        {/* we can go to any page from one page using "/" in the link*/}
        {/* we have to decide routes according to idea of grouping
        .in one group can have multiple child route related that group
        .we can go to child page from parent page without using "/" 
        in the link.*/}
       {/* </BrowserRouter>
    </ContextProvider> */}
  </React.StrictMode>,
)
