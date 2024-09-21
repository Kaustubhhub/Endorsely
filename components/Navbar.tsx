"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const session = useSession();
    const router = useRouter();
    return (
        <div className=' flex justify-between p-5 text-white items-center'>
            <div className='flex justify-center'>
                <img height={150} width={150} src="https://testimonial.to/static/media/logo.5ff3c18e.svg" alt="" />
            </div>
            <div className='flex gap-8 text-[#d9e3ea] font-bold'>
                <div className='flex align-center'>
                    <div>

                        Customers
                    </div>
                    <div>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>

                </div>
                <div className='cursor-pointer'>Features</div>
                <div className='cursor-pointer'>Integrations</div>
                <div className='cursor-pointer'>Pricing </div>
            </div>
            <div className='flex justify-between items-center'>
                {session.data?.user &&
                    <div className='flex justify-between items-center'>
                        <button onClick={() => signOut()} type="button" className="text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Log out</button>
                        <img src={session.data?.user?.image ?? ""} className='rounded-full' height={30} width={30} alt="" />
                    </div>
                }
                {!session.data?.user && <>

                    <button onClick={() => { console.log('hiii'); signIn() }} type="button" className="text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Sign in</button>
                    <button
                        onClick={() => { signIn() }}
                        type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</button>
                </>}
            </div>
        </div>
    )
}

export default Navbar
