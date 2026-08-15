import axios from "axios"
import { useNavigate } from "react-router-dom"

const Logout = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
    const response= await api.post("/api/auth/logout")

      navigate("/login")
    } catch (error) {
      console.error("Logout failed", error)
    }
  }

  return (
    <div>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Logout