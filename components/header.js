import Link from 'next/link'
import { PartyPopper, Music, Mic2, User } from 'lucide-react'
import ThemeSwitcher from './ThemeSwitcher'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-party-purple to-party-pink text-white dark:from-blue-200 dark:to-blue-600 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <PartyPopper className="h-8 w-8" />
          <span className="text-2xl font-display font-bold tracking-wide">Artistly</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/artists" className="flex items-center space-x-1 hover:text-party-yellow dark:hover:text-party-teal transition-colors">
            <Music className="h-5 w-5" />
            <span>Artists</span>
          </Link>
          <Link href="/onboarding" className="flex items-center space-x-1 hover:text-party-yellow dark:hover:text-party-teal transition-colors">
            <Mic2 className="h-5 w-5" />
            <span>Join Us</span>
          </Link>
          <Link href="/dashboard" className="flex items-center space-x-1 hover:text-party-yellow dark:hover:text-party-teal transition-colors">
            <User className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          <button className="bg-party-yellow text-party-purple dark:bg-party-teal dark:text-white px-6 py-2 rounded-full font-bold hover:bg-white dark:hover:bg-gray-100 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </header>
  )
}