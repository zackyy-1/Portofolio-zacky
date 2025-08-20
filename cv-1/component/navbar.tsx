// components/Navbar.js
import Link from 'next/link';
// import Home from '../app/page';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
            
                    {/* Logo atau Nama */}
                    <div>
                        <Link href="/" className="flex items-center py-4">
                            <span className="font-bold text-blue-600 text-lg">
                                Zacky.
                            </span>
                        </Link>
                    </div>

                    {/* Menu Desktop */}
                    <div className="flex items-center space-x-3">
                        <Link href="/" className="font-semibold py-4 px-2 text-gray-700 hover:text-blue-500 transition duration-300">
                            Home
                        </Link>

                        <Link href="/about" className="font-semibold py-4 px-2 text-gray-700 hover:text-blue-500 transition duration-300">
                            About
                        </Link>

                        <Link href="/projek" className="font-semibold py-4 px-2 text-gray-700 hover:text-blue-500 transition duration-300">
                            Projects
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}