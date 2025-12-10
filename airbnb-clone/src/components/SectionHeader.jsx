import React from 'react'

const SectionHeader = ({ title, subtitle }) => {
    return (
        <>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12'>
                <div className='flex items-baseline justify-between'>
                    <h2 className='text-2xl font-semibold'>
                        {title}
                    </h2>
                    {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
                </div>
            </div>
        </>
    )
}

export default SectionHeader