function About() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About This Template</h1>
          <p className="text-xl text-gray-600">
            A comprehensive full-stack web development template
          </p>
        </div>

        {/* Project Description */}
        <section className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This web template provides a solid foundation for building modern full-stack web applications.
            It combines the power of React for the frontend with Node.js and Express for the backend,
            using MySQL as the database and Knex for query building and migrations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The template is designed with best practices in mind, including proper error handling,
            validation, RESTful API design, and responsive UI components. It's perfect for kickstarting
            your next web project or learning full-stack development.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tech Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Backend */}
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">B</span>
                </span>
                Backend
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Node.js & Express:</strong> Fast and minimal web framework
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>MySQL:</strong> Reliable relational database
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Knex.js:</strong> SQL query builder and migration tool
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>CORS & Body Parser:</strong> Essential middleware
                  </span>
                </li>
              </ul>
            </div>

            {/* Frontend */}
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">F</span>
                </span>
                Frontend
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>React 19:</strong> Latest version with modern hooks and optimizations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Vite:</strong> Next-generation frontend tooling
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Tailwind CSS:</strong> Utility-first CSS framework
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>React Router:</strong> Client-side routing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Axios:</strong> HTTP client for API calls
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">RESTful API architecture</span>
            </div>
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">Database migrations & seeding</span>
            </div>
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">Error handling middleware</span>
            </div>
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">Input validation</span>
            </div>
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">Responsive design</span>
            </div>
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">Environment-based configuration</span>
            </div>
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">CORS configuration</span>
            </div>
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">Production-ready structure</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
