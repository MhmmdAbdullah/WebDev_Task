import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Hi, I'm <span className="text-green-600">Muhammad Abdullah</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
            Data Science Student | Freelancer
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <img 
            src="/images/profile.webp" 
            alt="Profile" 
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}
