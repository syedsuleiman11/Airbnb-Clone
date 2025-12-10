import React from 'react'

const MenuIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
const SearchIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="6" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);
const UserCircleIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8a3 3 0 100 6 3 3 0 000-6z" />
    <path d="M6.5 18.5a7 7 0 0111 0" />
  </svg>
);


const Navbar = () => {
    return (
        <>
            <nav className='sticky top-0 z-30 bg-white/90 backdrop-blur-md shadow-sm'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between h-16'>
                        <div className='flex items-center'>
                            <a href="/" className='text-2xl font-bold text-airbnb'>airbnb</a>
                        </div>

                        <div className='hidden md:flex md:flex-1 md:justify-center'>
                            <div className='w-full max-w-2xl'>
                                <div className='flex items-center rounded-full border px-3 py-2 shadow-sm bg-white'>
                                    <input
                                    className='flex-1 outline-none px-3 text-sm'
                                    type='search'
                                    placeholder='Where are you going?'
                                    aria-lable='Search'>
                                    </input>
                                    <button className='ml-2 rounded-full bg-airbnb p-2 text-white'>
                                        <SearchIcon className='h-4 w-4'/>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <a className='hidden sm:inline-block text-sm hover:underline' href='#'>Become a host</a>
                            <button className='hidden sm:flex items-center gap-2 border rounded-full px-3 py-1'>
                                <MenuIcon className="h-5 w-5" />
                                <UserCircleIcon className="h-6 w-6" />
                            </button>
                            <button className='md:hidden p-2 rounded-full hover:bg-gray-100'>
                                <SearchIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar