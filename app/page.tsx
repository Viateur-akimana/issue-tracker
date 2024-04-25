import Image from 'next/image';
import groupImage from '../public/Device.png';
import EnhancedProductivity from './pages/index';

export default function Home() {
  return (
    <main >
      <div className='container mx-auto flex justify-center items-center h-screen'>
      <div className="text-center">
        <div>
          <h1 className="text-7xl font-italic my-6">Track Issues Seamlessly</h1>
          <p className=' my-6'>Manage development hurdles</p>
          <div className='space-x-4'>
            <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded w-48">
              Get started now
            </button>
            <button className="text-white font-bold py-2 px-4 border rounded w-48">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Image
          src={groupImage}
          alt="Device image"
          width={900}
          height={600}
          className="rounded-lg"
        />
      </div>
      </div>
      <EnhancedProductivity />
    </main>
  )
}
