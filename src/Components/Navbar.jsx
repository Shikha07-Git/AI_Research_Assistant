import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">
        Research Assistant
      </h1>

      <div className="space-x-4 text-sm font-medium">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <Link to="/dashboard" className="hover:text-indigo-600">Dashboard</Link>
        <Link to="/chat" className="hover:text-indigo-600">Ask AI</Link>
        <Link to="/documents" className="hover:text-indigo-600">Documents</Link>
        <Link to="/notes" className="hover:text-indigo-600">Notes</Link>
        <Link to="/settings" className="hover:text-indigo-600">Settings</Link>
      </div>
    </nav>
  )
}
