import {useEffect,useState} from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const [isAuthenticated,setisAuthenticated]=useState(null)
     useEffect(()=>{
        
            const checkAuth=async ()=>{
                try {
        const response= await axios.get("http://localhost:5001/api/auth/profile",{
            withCredentials:true

        })
    setisAuthenticated(true)
    }
         catch (error) {
            setisAuthenticated(false)
        }
    }
      
     checkAuth()   
    },[])
    if (isAuthenticated === null) {
  return <div>Loading...</div>
}

if (!isAuthenticated) {
  return <Navigate to="/login" replace />
}

return children
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute