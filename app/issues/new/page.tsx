import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import CreateIcon from '../../../public/Icon.png'
import PhoneImage from '../../../public/Group.png'

 
const IssuesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Streamlined Workflow</h1>
      <p className="mb-8">Effortless issue management.</p>
      <div className="flex items-center justify-center">
        <div className="mr-8">
          <Link href="/issues/issueList/new" className="flex items-center mb-4 text-purple-500 hover:text-purple-700">
            <Image src={CreateIcon} alt="Create Issues" width={24} height={24} className="mr-2" />
            Create Issues
          </Link>
          <p className="mb-6">Report new issues with ease using our intuitive interface.</p>
          <Link href="" className="flex items-center mb-4 text-purple-500 hover:text-purple-700">
            <Image src={CreateIcon} alt="Video Issues" width={24} height={24} className="mr-2" />
            View Issues
          </Link>
          <p className="mb-6">Browse all reported issues with a user-friendly dashboard.</p>
          <Link href="#" className="flex items-center mb-4 text-purple-500 hover:text-purple-700">
            <Image src={CreateIcon} alt="Update Issues" width={24} height={24} className="mr-2" />
            Update Issues
          </Link>
          <p className="mb-6">Keep issues up-to-date with the latest status changes.</p>
        </div>
        <Image src={PhoneImage} alt="Phone Image" width={300} height={600} />
      </div>
    </div>
  )
}

export default IssuesPage;