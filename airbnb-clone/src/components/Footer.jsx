import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='mt-16 bg-gray-50 border-t'>
                <div className='max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8'>
                    <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
                        <div className='text-sm text-gray-700'>
                            © {new Date().getFullYear()} Airbnb clone — Built with React & Tailwind
                        </div>
                        <div className="flex gap-4 text-sm text-gray-600">
                            <a href="#" className="hover:underline">Privacy</a>
                            <a href="#" className="hover:underline">Terms</a>
                            <a href="#" className="hover:underline">Sitemap</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer