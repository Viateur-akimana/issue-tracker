import React from 'react'
import Image from 'next/image'
import Icon from '../../../public/Icon.png'
import Group from '../../../public/Group.png'

const IssuesPage = () => {
    return (
        <main className='container mx-auto flex justify-center items-center h-screen'>
            <h1>Streamlined Workflow</h1>
            <p>Effortless issue management.</p>
            <div className=''>
                <div>
                    <div className='item-center'>
                        <Image src={Icon} alt={'Issues'} />
                        <div>
                            <h1>Create Issues</h1>
                            <p>Report new issues with ease using our intuitive interface.</p>
                        </div>

                    </div>
                    <div>
                        <Image src={Icon} alt={'Issues'} />
                        <div>
                            <h1>Create Issues</h1>
                            <p>Report new issues with ease using our intuitive interface.</p>
                        </div>
                    </div>
                    <div>
                        <Image src={Icon} alt={'Issues'} />
                        <div>
                            <h1>Create Issues</h1>
                            <p>Report new issues with ease using our intuitive interface.</p>
                        </div>
                    </div>
                </div>
                <Image src={Group} alt={'Phone'}
                />
            </div>

        </main>
    )
}

export default IssuesPage