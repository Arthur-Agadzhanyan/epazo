import React from 'react'
import {useRoutes} from './routes'
import { AuthContext } from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom'
import { useAuth } from './hooks/auth.hook';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Loader from './components/Loader/Loader';
import { Navigation } from './components/NavBar/Navigation'
import 'materialize-css'
import Footer from './components/Footer/Footer';


function App() {
  const {login,logout,token,userId, ready} = useAuth()
  const isAuth = !!token
  const router = useRoutes(isAuth)

  if(!ready){
    return <Loader/>
  }

  return (
    <AuthContext.Provider value={{
      login,logout,isAuth,userId,token
    }}>
      
        <Router>
          {isAuth && <AdminPanel/>}
          <Navigation/>
          
          <div className='wrapper'>
            <div className='content'>
              {router}  
            </div>
            
            <Footer/>
          </div>
          
          </Router>  
   </AuthContext.Provider>

  );
}

export default App;
