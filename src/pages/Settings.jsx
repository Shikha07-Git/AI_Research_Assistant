export default function Settings() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      <div className="space-y-6">

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4">Profile</h3>

          <input
            type="text"
            placeholder="Name"
            className="w-full border p-2 rounded mb-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4">Preferences</h3>

          <label className="flex items-center gap-2 mb-2">
            <input type="checkbox" />
            Simple AI explanations
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Auto-save notes
          </label>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4">Theme</h3>

          <select className="border p-2 rounded w-full">
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4">Assistant Mode</h3>

          <select className="border p-2 rounded w-full">
            <option>Short answers</option>
            <option>Detailed answers</option>
          </select>
        </div>

        <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
          Save
        </button>

      </div>
    </div>
  )
}
