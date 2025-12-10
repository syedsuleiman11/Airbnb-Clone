import React from 'react'
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import SectionHeader from './components/SectionHeader';
import Footer from './components/Footer';
import Card from './components/Card';
import stays from './data/stays';

const App = () => {
  return (
  <>
  <div className="min-h-screen bg-gray-50 text-gray-900">
    <Navbar/>
    <main>
      <Hero/>

       <SectionHeader title="Explore stays" subtitle={`${stays.length} stays`} />
       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stays.map((s) => (
              <Card key={s.id} stay={s} />
            ))}
          </div>

          <SectionHeader title="Live anywhere" />
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='rounded-xl overflow-hidden bg-white shadow'>
                <img className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop" alt="entire homes" />
                <div className='p-4'>
                  <h3 className='font-semibold'>Entire homes</h3>
                  <p className='text-sm text-gray-500 mt-1'>Treehouses, boats, and more.</p>
                </div>
              </div>
              <div className='rounded-xl overflow-hidden bg-white shadow'>
                <img className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop" alt="rooms" />
                <div className='p-4'>
                  <h3 className='font-semibold'>Rooms</h3>
                  <p className='text-sm text-gray-500 mt-1'>Budget friendly options.</p>
                </div>
              </div>
            </div>
          </div>
       </div>
    </main>

    <Footer/>
  </div>
  </>
  )
}

export default App