export default function Hero() {
  return (
    <section className="pt-20 pb-10 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Adho</h1>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/images/profile.jpg" 
              alt="Profile"
              className="w-full max-w-md mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
