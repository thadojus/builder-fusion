import Image from 'next/image';

const AstroHeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/05a2191ac432f6cc3323ca8da7328a8213133067?width=3456"
          alt="Astronaut practicing snowboarding on moon"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute bottom-0 left-20 w-14 h-32 bg-gradient-to-t from-pink-500 to-transparent"></div>
      
      {/* Glass morphism overlays */}
      <div className="absolute top-0 left-0 w-96 h-24 bg-white/15 backdrop-blur-md">
        <div className="absolute right-16 top-6 w-28 h-20 bg-gray-300 transform -rotate-45"></div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-24 bg-white/15 backdrop-blur-md">
        <div className="absolute left-[-4.5rem] top-6 w-28 h-20 bg-gray-300"></div>
      </div>

      {/* Header Navigation */}
      <header className="relative z-20 flex items-center justify-between p-8">
        {/* Left Menu */}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-white font-bold text-lg">Menu</span>
        </div>

        {/* Center Navigation */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <span className="text-white/75 font-bold text-xl">Institute</span>
            <svg className="w-2 h-3 text-white transform rotate-90" fill="currentColor" viewBox="0 0 8 12">
              <path d="M0 0L8 6L0 12V0Z"/>
            </svg>
          </div>
          <h1 className="text-white font-bold text-3xl tracking-wide">ASTRO.</h1>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center space-x-8">
          <span className="text-white font-bold text-xl">Home</span>
          <div className="flex items-center space-x-2">
            <span className="text-white/75 font-bold text-xl">Achievement</span>
            <svg className="w-2 h-3 text-white transform rotate-90" fill="currentColor" viewBox="0 0 8 12">
              <path d="M0 0L8 6L0 12V0Z"/>
            </svg>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/89d741517e0390fde6438e2f55334a1fcb396bcc?width=76"
              alt="User avatar"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between p-8 pt-32">
        {/* Left Content */}
        <div className="flex-1 max-w-md">
          <h2 className="text-white font-bold text-4xl lg:text-5xl leading-tight mb-8">
            Where Knowledge Meets the Stars
          </h2>
          
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold text-xl px-8 py-4 shadow-lg shadow-pink-500/50 transition-all duration-300 mb-8">
            Enroll Now
          </button>

          <div className="w-full h-px bg-white/25 mb-8"></div>

          {/* Search Bar */}
          <div className="relative w-44 h-12 mb-8">
            <div className="absolute inset-0 border border-white/15 bg-white/10 backdrop-blur-md"></div>
            <input 
              type="text" 
              placeholder="Find..." 
              className="absolute inset-0 bg-transparent text-white/75 placeholder-white/75 px-4 font-bold text-sm outline-none"
            />
            <svg className="absolute right-4 top-3 w-5 h-5 text-white/75" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14A6 6 0 108 2a6 6 0 000 12z" clipRule="evenodd"/>
            </svg>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4 mb-8">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/4741a12d45145e5d1b94ef722b1f4e9e14becbca?width=52"
              alt="Twitter"
              width={26}
              height={26}
            />
            <div className="w-4 h-px bg-white"></div>
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/e8fdb4c28fb348cc529cc4b22e3c6c6072f389da?width=52"
              alt="LinkedIn"
              width={26}
              height={26}
            />
          </div>

          <p className="text-white/75 text-lg leading-relaxed tracking-wide max-w-sm">
            The universe is a canvas of endless possibilities, painted with galaxies, stars, and planets beyond our wildest imagination.
          </p>

          {/* Scroll Arrow */}
          <div className="absolute bottom-24 left-8">
            <svg className="w-18 h-18 text-white" fill="none" viewBox="0 0 16 73">
              <path d="M7.29289 72.7071C7.68341 73.0976 8.31658 73.0976 8.7071 72.7071L15.0711 66.3431C15.4616 65.9526 15.4616 65.3195 15.0711 64.9289C14.6805 64.5384 14.0474 64.5384 13.6569 64.9289L8 70.5858L2.34314 64.9289C1.95262 64.5384 1.31945 64.5384 0.928929 64.9289C0.538405 65.3195 0.538405 65.9526 0.928929 66.3431L7.29289 72.7071ZM7 -4.37114e-08L7 72L9 72L9 4.37114e-08L7 -4.37114e-08Z" fill="url(#paint0_linear)" stroke="white" strokeWidth="2"/>
              <defs>
                <linearGradient id="paint0_linear" x1="7.5" y1="72" x2="7.5" y2="-2.18557e-08" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Right Testimonial Card */}
        <div className="flex-shrink-0 w-80 bg-white/10 backdrop-blur-md p-6 rounded-lg">
          <div className="flex items-start space-x-4 mb-4">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/ab26c75402fbfd0c2a526492612102f2e34756b3?width=90"
              alt="Ava Oatl"
              width={45}
              height={45}
              className="rounded-full"
            />
            <div>
              <h3 className="text-white font-bold text-xl">Ava Oatl</h3>
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 fill-yellow-400" viewBox="0 0 14 13">
                      <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"/>
                    </svg>
                  ))}
                </div>
                <div className="w-px h-4 bg-white/75"></div>
                <span className="text-white font-bold text-lg">4.5</span>
              </div>
            </div>
          </div>
          <p className="text-white text-sm leading-relaxed mb-4">
            Ensure that the UI is clean and intuitive, guiding users effortlessly through the various categories.
          </p>
          <a href="#" className="text-white/75 text-sm underline">More</a>
        </div>
      </div>

      {/* Bottom Trusted By Section */}
      <div className="absolute bottom-8 right-8 z-10">
        <div className="bg-black/25 backdrop-blur-md p-6 rounded-lg">
          <div className="flex items-center space-x-6">
            <span className="text-white font-bold text-xl">Trusted By:</span>
            <div className="flex items-center space-x-4">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/d6a2aae06cd686bdcb4ee7dbe5ec7655e7a7099a?width=226"
                alt="AMD"
                width={56}
                height={56}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/081c5fb0d653252a51ff8c4a44c6c7f1274cbce3?width=224"
                alt="Microsoft"
                width={56}
                height={56}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/388a87554ef11bb92eb6904ba11d6e9cf8b8c17b?width=224"
                alt="Google"
                width={56}
                height={56}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/a9a09e9a887769bfa18f9e496dfc502f5b81d9a9?width=224"
                alt="LinkedIn"
                width={56}
                height={56}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/72e618c4270f29f34f7e016d4c852b8201ffc8fa?width=224"
                alt="PayPal"
                width={56}
                height={56}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 34 34">
          <circle cx="17" cy="17" r="16.5" stroke="currentColor"/>
        </svg>
        <svg className="absolute top-2 left-2 w-4 h-4 text-white" fill="currentColor" viewBox="0 0 18 18">
          <circle cx="9" cy="9" r="9"/>
        </svg>
      </div>

      <div className="absolute top-1/3 right-1/3">
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 34 34">
          <circle cx="17" cy="17" r="16.5" stroke="currentColor"/>
        </svg>
        <svg className="absolute top-2 left-2 w-4 h-4 text-white" fill="currentColor" viewBox="0 0 18 18">
          <circle cx="9" cy="9" r="9"/>
        </svg>
      </div>

      {/* Connecting Lines */}
      <svg className="absolute top-1/2 right-1/4 w-52 h-14 text-white" fill="none" viewBox="0 0 211 59">
        <path d="M0 1H153L209.5 57.5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    </section>
  );
};

export default AstroHeroSection;
