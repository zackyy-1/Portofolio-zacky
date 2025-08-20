import Link from 'next/link';

export default function About() {
  return (
    <main className="bg-white min-h-screen pt-10">
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Profile Image */}
            <div className="md:w-1/3 flex flex-col items-center text-center md:text-left">
              <div className="h-64 w-64 bg-blue-200 flex items-center justify-center rounded-full text-7xl text-blue-600">
                <img src="image/pp.jpg" alt="photo profile" className='h-64 w-64 rounded-full object-cover' />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mt-6">M Ilham Zacky</h2>
              <p className="text-gray-600">Backend Developer</p>
              <div className="mt-4 space-y-1 text-sm text-gray-700 text-center">
                <p>zackyilhamm12@gmail.com</p>
                <p>+62 858 1065 5057</p>
                <p>Depok, Indonesia</p>
              </div>
            </div>

            {/* About Content */}
            <div className="md:w-2/3">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">About Me</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    I'm a vocational high school student focusing on backend development and a strong interest in cybersecurity, particularly penetration testing and ethical hacking. Over the past year, I've been actively developing several simple web projects that have helped me gain a deeper understanding of backend workflows, from database structures and API management to user authentication.
                  </p>
                  <p>
                    Beyond the technical aspects, I'm also accustomed to working collaboratively in teams, solving problems independently, and quickly adapting to new tools. The world of technology is constantly evolving, and I believe in the importance of continuous learning to stay relevant.
                  </p>
                  <p>
                    Currently, I'm exploring aspects of system security, from the basics of SQL injection to data security practices like hashing and the use of prepared statements.
                    In the future, I aspire to become a penetration tester and ethical hacker capable of testing and strengthening system security across the board. I want to contribute to maintaining digital security while continuing to learn and develop in a dynamic and flexible work environment.
                  </p>
                </div>
              </div>

              {/* Education & Experience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Education</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-800">Junior High School</h3>
                      <p className="text-gray-600">SMP Negeri 12 Depok</p>
                      <p className="text-sm text-gray-500">2020 - 2023</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">High School</h3>
                      <p className="text-gray-600">SMK Negeri 1 Depok</p>
                      <p className="text-sm text-gray-500">2023 - Now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Technical Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Hard Skills</h3>
              <div className="space-y-4">
                {[
                  { name: 'HTML/CSS', level: 70 },
                  { name: 'JavaScript', level: 40 },
                  { name: 'PHP OOP', level: 85 },
                  { name: 'Mysql', level: 90 },
                  { name: 'Python', level: 25 }, 
                  { name: 'Laravel', level: 20 }, 
                  { name: '3D', level: 80 }
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Soft Skills</h3>
              <div className="space-y-4">
                {[
                  { name: 'Comunication', level: 70 },
                  { name: 'Problem Solving', level: 70 },
                  { name: 'Teamwork', level: 85 },
                  { name: 'Time Management', level: 75 },
                  { name: 'Kreativity', level: 80 }
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-green-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
