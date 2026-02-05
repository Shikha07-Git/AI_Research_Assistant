import { useNavigate } from "react-router-dom"

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Header */}
      <div className="px-8 py-6">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Your research workspace at a glance
        </p>
      </div>

      {/* Cards */}
      <div className="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Ask AI */}
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2">Ask AI</h3>
          <p className="text-gray-600 mb-4">
            Ask questions, clarify concepts, or discuss research ideas.
          </p>
          <button
            onClick={() => navigate("/chat")}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700"
          >
            Go to Chat
          </button>
        </div>

        {/* Document Viewer */}
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2">Document Viewer</h3>
          <p className="text-gray-600 mb-4">
            Read research papers with highlights and annotations.
          </p>
          <button
            onClick={() => navigate("/documents")}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700"
          >
            Open Documents
          </button>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2">Notes & Knowledge Base</h3>
          <p className="text-gray-600 mb-4">
            Organize summaries, insights, and important references.
          </p>
          <button
            onClick={() => navigate("/notes")}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700"
          >
            View Notes
          </button>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2">Profile & Settings</h3>
          <p className="text-gray-600 mb-4">
            Customize preferences, themes, and assistant behavior.
          </p>
          <button
            onClick={() => navigate("/settings")}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700"
          >
            Open Settings
          </button>
        </div>

      </div>
    </div>
  )
}


