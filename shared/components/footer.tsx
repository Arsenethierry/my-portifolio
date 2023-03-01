import React from 'react';

function Footer() {
    return (
        <>
            <div className="w-full mx-auto py-4 text-white h-auto bg-blue flex justify-center items-center">
                <hr className="w-1/5 sm:w-1/4 lg:w-96 border-violet" />
                <p className='mx-3 md:mx-6 text-sm sm:text-7xl font-light'>
                    Built by <span className='text-pink'>Arsene Thierry KOMEZUDUFASHE</span>
                </p>
                <hr className="w-1/5 sm:w-1/4 lg:w-96 border-violet" />
            </div>   
        </>
    );
}

export default Footer;