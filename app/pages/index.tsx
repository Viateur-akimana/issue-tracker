import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import google from '../../public/Google.png'
import image from '../../public/Image.png'
import hub from '../../public/Hub.png'

const sections = [
  { label: 'Company', links: [{ href: '/about', text: 'About' }, { href: '/careers', text: 'Careers' }, { href: '/newsroom', text: 'Newsroom' }] },
  { label: 'Functionalities', links: [{ href: '/quick-setup', text: 'Quick Setup' }, { href: '/issue-boards', text: 'Issue Boards' }, { href: '/updates-feed', text: 'Updates Feed' }] },
  { label: 'Social', links: [{ href: '/twitter', text: 'Twitter' }, { href: '/instagram', text: 'Instagram' }, { href: '/threads', text: 'Threads' }] },
  { label: 'Legal', links: [{ href: '/terms', text: 'Terms' }, { href: '/privacy', text: 'Privacy' }, { href: '/policy', text: 'policy' }] }
]

const Home: React.FC = () => (
  <div className=" bg-purple-900 flex flex-col items-center justify-center mt-6">


    <main className="max-w-md mx-auto ">
      <div className="bg-black text-white p-8 rounded-lg my-8">
        <div className="relative">
          <Image
            src={image}
            alt="Join Now"
            className="mx-auto mb-4 rounded-full"
          />
          <h2 className="text-2xl font-bold mb-6 text-center">Join Now</h2>
          <p className="text-gray-400 mb-6 text-center">Start Tracking Today!</p>
        </div>
        <button className="bg-white text-black py-2 px-4 rounded-md flex items-center w-full mb-4">
          <span className="mr-2">
            <Image src={google} alt="Google Icon" className="w-6 h-6" />

          </span>
          Sign in with Google
        </button>
        <p className="text-gray-400 mb-4 text-center">or</p>
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full mb-4 px-4 py-2 rounded-md bg-gray-700 text-white"
        />
        <input
          type="text"
          placeholder="Type Your Password"
          className="w-full mb-6 px-4 py-2 rounded-md bg-gray-700 text-white"
          autoComplete="off"
        />
        <button className="w-full bg-purple-600 text-white py-2 rounded-md mb-4">
          Register with Email
        </button>
        <p className="text-gray-400 text-sm text-center">
          Accept our Terms and Privacy Policy
        </p>
      </div>


    </main>
    <footer className="text-white bg-black min-w-full flex min-h-full text-sm text-center p-10 justify-between">
      <div className='space-y-4 ml-16'>
        <div className='flex'>
          <Image src={hub} alt="Join Now" />
          <p className="text-xs text-center m-2 justify-center">TrackerHub</p>
        </div>
        <div className="flex justify-center">
          <p className="text-blue-100 text-md hover:text-blue-200 transition-colors block">
            Efficiency in Management
          </p>
        </div>
      </div>
      <div className="flex flex-col space-x-4 sm:flex-row sm:space-x-4 justify-end mb-4 w-1/2">
        {sections.map(section => (
          <div key={section.label} className="flex flex-col justify-end w-1/2">
            <h3 className="font-bold mb-2 text-gray-400">{section.label}</h3>
            <div className="flex flex-col space-y-2">
              {section.links.map(link => (
                <Link key={link.href} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  {link.text}
                </Link>
              ))}
            </div>  
          </div>
        ))}
      </div>
    </footer>


  </div>
);

export default Home;