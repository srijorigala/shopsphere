import { useState } from "react"
import api from "../api/api"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate= useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Clear previous error
    setError("")

    // Required fields validation
    if (!email || !password) {
      setError("Email and password are required")
      return
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    console.log("Login form is valid")
    const response=  await api.post("/api/auth/login", {
        email,
        password,
      })
        navigate("/Dashboard")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="shadow-lg py-7 px-10 flex flex-col gap-2 bg-orange-50 rounded-lg w-96"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center">
          Login
        </h1>

        <label htmlFor="email">
          Email:
        </label>

        <input
          id="email"
          name="email"
          className="border border-gray-300 p-2 rounded"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">
          Password:
        </label>

        <input
          id="password"
          name="password"
          className="border border-gray-300 p-2 rounded"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-500 text-sm text-center">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-2 w-full"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login