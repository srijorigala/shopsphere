import api from "../api/api"
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
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Logout