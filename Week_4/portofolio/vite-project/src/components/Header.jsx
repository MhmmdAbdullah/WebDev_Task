export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-green-900 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-white font-poppins">@Muhammad_Abdullah</span>
        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="text-white hover:text-green-200">About</a>
          <a href="#work" className="text-white hover:text-green-200">Work</a>
          <a href="#contact" className="text-white hover:text-green-200">Contact</a>
        </nav>
        {/* Menu mobile */}
        <button className="md:hidden text-white">
          ☰
        </button>
      </div>
    </header>
  )
}
