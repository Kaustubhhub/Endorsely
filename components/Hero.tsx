import React from 'react'

const Hero = () => {
    return (
        <div className='max-w-4xl mx-auto text-center pb-12 md:pb-16 mt-16'>
            <div>
                <p className='text-[#EBF1F5] text-[52px] font-[700] h1 mb-4'>Get testimonials from your customers with ease</p>
            </div>
            <div>
                <p className='text-xl text-gray-600 dark:text-gray-400 mb-8'>Collecting testimonials is hard, we get it! So we built Testimonial. In minutes, you can collect text and video testimonials from your customers with no need for a developer or website hosting.</p>
            </div>

            <div className='flex justify-center gap-2'>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Try FREE now</button>
                <button type="button" className="text-white border border-blue-600 font-medium rounded-lg text-sm px-8 py-3.5 me-2 mb-2 ">
                    <div className='flex justify-between items-center gap-2'>

                        <p className='text-normal'> Talk to us </p>
                        <div className="flex -space-x-1">
                            <img
                                className="w-6 h-6 rounded-full"
                                src="https://static.intercomassets.com/avatars/4996770/square_128/damonchen-1682480142.png"
                                alt=""
                            />
                            <img
                                className="w-6 h-6  rounded-full"
                                src="https://static.intercomassets.com/avatars/6509827/square_128/341944231_244267294764026_7612519450811596779_n-1682481732.jpg"
                                alt=""
                            />
                            <img
                                className="w-6 h-6  rounded-full"
                                src="https://static.intercomassets.com/assets/default-avatars/fin/128-c20968b22ed168a498a4bf28ebadc7e883bd4b8c2dba719cb4c661a2c15147f5.png"
                                alt=""
                            />
                            <img
                                className="w-6 h-6 rounded-full"
                                src="https://static.intercomassets.com/avatars/6562134/square_128/Untitled_design_%2839%29-1685076923.png"
                                alt=""
                            />
                        </div>


                    </div>
                </button>

            </div>
            <div className='text-gray-400 flex justify-center items-center gap-2'>
               <p>Get started with free credits on us.</p> <p className='underline'> See our pricing →</p>
            </div>
        </div>
    )
}

export default Hero
