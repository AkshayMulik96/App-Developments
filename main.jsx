import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import Services from './pages/Services.jsx'
import Blog from './pages/Blog.jsx'
import Shop from './pages/Shop.jsx'
import Change from './pages/change.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { Counter } from './pages/Counter.jsx'
import { Arithmetic } from './pages/Arithmetic.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import { Dashboard } from './pages/Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgot' element={<ForgotPassword/>}/>
      <Route path='/change' element={<Change/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/arithmetic' element={<Arithmetic/>}/>
      <Route path='/admin' element={<AdminLogin/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
  </Routes>  
  </BrowserRouter>
  </Provider>,
)
