'use client'
import { FormEvent } from 'react'
import Image from 'next/image'

import image from '../../public/Image.png'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
export default function Form() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false
    })
  }
  return (
    <div className=" bg-purple-900 flex flex-col items-center justify-center mt-6">
      <form onSubmit={handleSubmit} className="bg-black text-white p-8 rounded-lg my-8">
        <div className="relative">
          <Image
            src={image}
            alt="Join Now"
            className="mx-auto mb-4 rounded-full"
          />
          <h2 className="text-2xl font-bold mb-6 text-center">Join Now</h2>
          <p className="text-gray-400 mb-6 text-center">Start Tracking Today!</p>
        </div>
        <Link href='../register' className='flex mx-auto justify-center text-purple-900' >Register here</Link>
        <p className="text-gray-400 mb-4 text-center">or</p>
        <input
          type="email"
          name='email'
          placeholder="Enter Your Email"
          className="w-full mb-4 px-4 py-2 rounded-md bg-gray-700 text-white"
        />
        <input
          type="text"
          name='password'
          placeholder="Type Your Password"
          className="w-full mb-6 px-4 py-2 rounded-md bg-gray-700 text-white"
          autoComplete="off"
        />
        <button type='submit' className="w-1/2 mx-auto flex justify-center bg-purple-600 text-white py-2  rounded-md mb-4">
          Login with credentials
        </button>
      </form>
    </div>
  )
}