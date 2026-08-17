import Logout from "./Logout"
import { Link } from "react-router-dom"
const Dashboard = () => {
  return (

   <header className="bg-white shadow-md px-8 py-4 flex items-center justify-between">

  <h1 className="text-2xl font-bold text-black-600">
    Telecom-shopify
  </h1>

  <nav className="flex items-center gap-8 font-medium">
    <Link to="/dashboard" className="hover:text-blue-600">
      Home
    </Link>

    <Link to="/plans" className="hover:text-blue-600">
      Mobile
    </Link>

    <Link to="/internet" className="hover:text-blue-600">
      Internet
    </Link>

    <Link to="/billing" className="hover:text-blue-600">
      Billing
    </Link>

    <Link to="/support" className="hover:text-blue-600">
      Support
    </Link>
  </nav>

 <Logout />

</header>
  )
}

export default Dashboard