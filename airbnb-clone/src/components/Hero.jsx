import React from 'react'
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <>
    <header className='relative'>
        <div className="h-[420px] md:h-[520px] lg:h-[640px] hero-bg bg-[url('https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex-col justify-center'>
                <div className='w-full max-w-2xl'>
                    <h1 className='text-3xl md:text-5xl font-semibold text-black drop-shadow-lg'>
                        Find your next stay
                    </h1>
                    <p className='mt-3 text-white/90'>
                        Book unique places to stay and things to do.
                    </p>

                    <div className='mt-6'>
                        <SearchBar/>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Hero