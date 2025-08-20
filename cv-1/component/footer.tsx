// components/Navbar.js
import Link from 'next/link';
// import Home from '../app/page';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">M Ilham Zacky</h3>
              <p className="text-gray-400 mt-2">Backend Developer</p>
              <p className="text-gray-400 mt-2">+62 858 1065 5057</p>
              <p className="text-gray-400 mt-2">zackyilhamm12@gmail.com</p>
            </div>
            <div className="flex space-x-6">
              {['Instagram', 'LinkedIn', 'GitHub', 'Twitter'].map((social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Zacky. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}