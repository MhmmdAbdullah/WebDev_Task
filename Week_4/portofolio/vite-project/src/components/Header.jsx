import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="text-xl font-bold">@Muhammad_Abdullah</a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {['About', 'Work', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-green-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white p-4 shadow-lg"
        >
          {/* ... */}
        </motion.div>
      )}
    </header>
  )
}
