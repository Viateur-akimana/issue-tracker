'use client'
import { FormEvent } from 'react'
import {signIn} from 'next-auth/react'
import Image from 'next/image'
import google from '../../public/Google.png'
import image from '../../public/Image.png'
export default function Form(){
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

      try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
              email: formData.get('email'),
              password: formData.get('password'),
            }),
          });
          console.log(response);
          
      } catch (error) {
        
      }
            }
return(
    <div>
        <form onSubmit={handleSubmit} className="bg-black text-white p-8 rounded-lg my-8">
          <div className="relative">
            <Image
              src={ image } 
              alt="Join Now"
              className="mx-auto mb-4 rounded-full"
            />
            <h2 className="text-2xl font-bold mb-6 text-center">Join Now</h2>
            <p className="text-gray-400 mb-6 text-center">Start Tracking Today!</p>
          </div>
          <button className="bg-white text-black py-2 px-4 rounded-md flex items-center w-full mb-4" onClick={() => signIn('google')}>
            Login
          </button>
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
          <button type='submit' className="w-full bg-purple-600 text-white py-2 rounded-md mb-4">
            Register with Email
          </button>
          <p className="text-gray-400 text-sm text-center">
            Accept our Terms and Privacy Policy
          </p>
        </form>
    </div>
)
}