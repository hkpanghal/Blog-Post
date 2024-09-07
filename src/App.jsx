import { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import authService from "./appwrite/Auth"
import { login,logout } from './store/AuthSlice'
import './App.css'
import { Footer, Header, Signup } from './components/index'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))

  },[])

  // console.log(import.meta.env.VITE_APPWRITE_URL)
 
  return !loading ? (
    <div className='h-screen w-full bg-zinc-600  text-center'>
      <div>
        <Header/>
        <main>
         Todo: <Outlet/>
         <Signup/>
        </main>
        <Footer/>
      </div>
    </div>
  ): null;
}

export default App
