import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"

import Landing from "./pages/Landing"
import Dashboard from "./pages/Dashboard"
import Chat from "./pages/Chat"
import Document from "./pages/Document"
import Notes from "./pages/Notes"
import Settings from "./pages/Settings"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/documents" element={<Document />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  )
}

