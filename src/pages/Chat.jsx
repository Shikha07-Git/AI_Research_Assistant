export default function Chat() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Ask AI</h2>

      <div className="space-y-4 mb-6">
        <div className="bg-gray-100 p-3 rounded">
          <strong>You:</strong> Summarize this paper
        </div>
        <div className="bg-indigo-100 p-3 rounded">
          <strong>AI:</strong> This paper discusses core ideas of neural networks...
        </div>
      </div>

      <input
        className="w-full border p-3 rounded"
        placeholder="Ask something..."
      />
    </div>
  )
}
