import { useNavigate } from "react-router-dom"
export default function Landing() {
    const navigate = useNavigate()

    return (
        <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 px-6">
            <div className="bg-white shadow-2xl rounded-2xl p-12 max-w-4xl text-center">

                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
                    AI Research Assistant 
                </h2>

        
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Understand complex papers, ask better questions, and organize your
                research insights — all in one intelligent workspace.
                </p>


                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-bold mb-6">
                        Who is this for?
                    </h3>

                <div className="flex flex-wrap justify-center gap-4">

                <div className="bg-white p-4 rounded-lg shadow w-48">
                    <p className="font-semibold"> Students</p>
                    <p className="text-sm text-gray-600">
                        Learn faster from research papers
                    </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow w-48">
                    <p className="font-semibold"> Researchers</p>
                    <p className="text-sm text-gray-600">
                        Analyze and summarize papers
                    </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow w-48">
                    <p className="font-semibold"> Engineers</p>
                    <p className="text-sm text-gray-600">
                        Organize notes and references
                    </p>
                </div>

  </div>
</div>


        


        

        

            </div>
        </div>
    )
}
