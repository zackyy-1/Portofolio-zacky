import Image from "next/image";
import Navbar from '../component/navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <div>
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-20 pt-10">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <p className="text-gray-800 mb-2">
            Hi, my name is
          </p>
          <h1 className="text-6xl font-bold text-blue-600">
            M ILHAM ZACKY
          </h1>
          <h1 className="text-5xl font-bold text-gray-600">
            BACKEND DEVELOPER
          </h1>
          <p className="text-gray-800 mb-2 pt-8">
            I am a developer with a primary focus on backend, with experience in managing databases and building system logic. I also have some experience in frontend development, which helps me understand the overall application workflow. In addition, I have worked on 3D projects using Blender, which enhanced my creativity and attention to detail.  
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="#drive" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
            >
              View My CV
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-blue-600 py-16">
        <div className=" text-center container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center text-white">
            Powering your ideas from behind the scenes!
          </h1>
          <p className="text-white mb-2 pt-8">I like analyzing a database or system, and creating a system from your ideas.</p>
        </div>
      </section>
    </main>
  );
}