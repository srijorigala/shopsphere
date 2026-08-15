import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")
    setSuccess("")

    // Required fields validation
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    // Password length validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    // Password match validation
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    try {
      setLoading(true)

      const response = await axios.post(
        "http://localhost:5001/api/auth/register",
        {
          name,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )

      console.log(response.data)

      setSuccess("Registration successful")
     
      // Clear form
      setName("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
    } catch (error) {
      console.error(error)

      setError(
        error.response?.data?.message ||
        "Registration failed. Please try again."
      )
    } finally {
      setLoading(false)
    }
     navigate("/login")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="flex flex-col gap-2 w-96 shadow-lg rounded-lg p-6 bg-orange-50"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center">
          Register
        </h1>

        <label htmlFor="name">
          Name:
        </label>

        <input
          id="name"
          name="name"
          className="border border-gray-300 p-2 rounded"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <label htmlFor="confirmPassword">
          Confirm Password:
        </label>

        <input
          id="confirmPassword"
          name="confirmPassword"
          className="border border-gray-300 p-2 rounded"
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-500 text-sm text-center">
            {error}
          </p>
        )}

        {success && (
          <p className="text-green-600 text-sm text-center">
            {success}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white p-2 w-full rounded mt-2 disabled:opacity-50"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  )
}

export default Register