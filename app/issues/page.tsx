import React from 'react'
import { Button } from '@radix-ui/themes';
import Link from 'next/link';

const IssuePage = () => {
  return (
    <div><Button><Link href={'/api/issues/new'} className='bg-purple-500 text-white font-bold py-2 px-4 rounded w-48' >New issue</Link> </Button></div>
  )
}

export default IssuePage