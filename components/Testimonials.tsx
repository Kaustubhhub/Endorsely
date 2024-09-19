import { COMPANIES_IMAGES_LIST } from '@/constants';
import React from 'react'

const Testimonials = () => {
    return (
        <div className="flex flex-col justify-center ">
            <div className="text-gray-400 text-2xl flex justify-center font-semibold mb-6">
                TRUSTED CUSTOMERS
            </div>
            <div className="grid grid-cols-5 gap-4 px-20">
                {COMPANIES_IMAGES_LIST.map(({ link }, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <img
                            height={150}
                            width={150}
                            src={link}
                            alt={`Company ${index + 1}`}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;