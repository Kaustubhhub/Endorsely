import React from 'react'

const Navbar = () => {
    return (
        <div className=' flex justify-between p-5 text-white items-center'>
            <div className='flex justify-center'>
                <img height={150} width={150} src="https://testimonial.to/static/media/logo.5ff3c18e.svg" alt="" />
            </div>
            <div>

            </div>
            <div className='flex justify-between items-center'>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign in</button>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</button>
            </div>
        </div>
    )
}

export default Navbar
