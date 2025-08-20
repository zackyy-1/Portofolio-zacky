import Link from 'next/link';

export default function Projects() {
  // Data proyek contoh
  const projects = [
    {
      id: 1,
      title: 'Membership Gym Website',
      description: 'Full-featured gym membership platform.',
      technologies: ['HTML/CSS', 'JavaScript', 'PHP'], 
      img: '/image/gym.png'
    },
    {
      id: 2,
      title: 'Job Vacancy Website',
      description: 'Website to search for job vacancies nearby.',
      technologies: ['HTML/CSS', 'JavaScript', 'PHP'],
      img: '/image/job.png'
    },
    {
      id: 3,
      title: 'Depok Inside Application',
      description: 'Information application about Depok city.',
      technologies: ['Figma'],
      img: '/image/depok.png'
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">My Project</h1>
          <p className="text-gray-600">
           Various projects I have worked on
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
                <div className="h-40 bg-blue-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                        src={project.img} 
                        alt={project.title} 
                        className="h-full w-full object-contain rounded-lg" 
                    />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-5 pb-10">
            <Link 
              href="#drive" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
            >
              See More Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}