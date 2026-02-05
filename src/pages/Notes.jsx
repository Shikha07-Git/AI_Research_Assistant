export default function Notes() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">My Notes</h2>

      <div className="space-y-4">
        <div className="border p-4 rounded">
          <h3 className="font-semibold">Neural Networks Summary</h3>
          <p className="text-gray-600">Key ideas and insights...</p>
        </div>

        <div className="border p-4 rounded">
          <h3 className="font-semibold">Research Questions</h3>
          <p className="text-gray-600">Open problems to explore</p>
        </div>
      </div>
    </div>
  )
}
