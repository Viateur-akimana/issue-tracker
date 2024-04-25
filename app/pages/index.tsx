import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import google from '../../public/Google.png'
import image from '../../public/Image.png'
// import LoginForm from '../components/LoginForm';

const Home: React.FC = () => (
  <div className="min-h-screen bg-purple-900 flex flex-col items-center justify-center">
    <Head>
      <title>TrackerHub</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="max-w-md mx-auto">
      <div className="bg-black text-white p-8 rounded-lg mb-8">
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
          type="password"
          placeholder="Type Your Password"
          className="w-full mb-6 px-4 py-2 rounded-md bg-gray-700 text-white"
        />
        <button className="w-full bg-purple-600 text-white py-2 rounded-md mb-4">
          Register with Email
        </button>
        <p className="text-gray-400 text-sm text-center">
          Accept our Terms and Privacy Policy
        </p>
      </div>

      <footer className="text-white text-sm text-center mt-8">
        <p className="mb-2">TrackerHub</p>
        <div className="flex justify-center space-x-4">
          <Link href="/" className="text-blue-500 hover:text-blue-700 transition-colors mb-4 block">
            Efficiency in Management
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 justify-center mb-4">
          {[
            { label: 'Company', links: [{ href: '/about', text: 'About' }, { href: '/careers', text: 'Careers' }, { href: '/newsroom', text: 'Newsroom' }] },
            { label: 'Functionalities', links: [{ href: '/quick-setup', text: 'Quick Setup' }, { href: '/issue-boards', text: 'Issue Boards' }, { href: '/updates-feed', text: 'Updates Feed' }] },
            { label: 'Social', links: [{ href: '/twitter', text: 'Twitter' }, { href: '/instagram', text: 'Instagram' }, { href: '/threads', text: 'Threads' }] },
            { label: 'Legal', links: [{ href: '/terms', text: 'Terms' }, { href: '/privacy', text: 'Privacy' }]}
          ].map(section => (
            <div key={section.label}>
              <h3 className="font-bold mb-2 text-gray-400">{section.label}</h3>
              <div className="flex flex-col space-y-1">
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

    </main>
  </div>
);

export default Home;