import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 px-6">
      
      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white shadow-2xl rounded-2xl p-12 max-w-4xl text-center"
      >

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900"
        >
          AI Research Assistant
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Understand complex papers, ask better questions, and organize your
          research insights — all in one intelligent workspace.
        </motion.p>

        {/* Audience section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">
            Who is this for?
          </h3>

          <div className="flex flex-wrap justify-center gap-4">

            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-lg shadow w-48"
            >
              <p className="font-semibold">Students</p>
              <p className="text-sm text-gray-600">
                Learn faster from research papers
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-lg shadow w-48"
            >
              <p className="font-semibold">Researchers</p>
              <p className="text-sm text-gray-600">
                Analyze and summarize papers
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-lg shadow w-48"
            >
              <p className="font-semibold">Engineers</p>
              <p className="text-sm text-gray-600">
                Organize notes and references
              </p>
            </motion.div>

          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
