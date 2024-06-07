import React from 'react';
import Recipes1 from './Recipes1';
import Recipes2 from './Recipes2';
import Recipes3 from './Recipes3';

function Recipes() {
    return (
        <div id='recipes' className='relative' >
            <h1 className="font-lora text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-keppel" data-aos="fade-down">Pasos para un correcto Skincare</h1>
            <div className="flex flex-wrap justify-center space-x-2 lg:space-x-6 mt-20" >
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 sm:mt-0 sm:mb-0" data-aos="fade-up">
                    <Recipes1 />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 sm:mt-0 sm:mb-0" data-aos="fade-up">
                    <Recipes2 />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-2 sm:mt-0 sm:mb-0" data-aos="fade-up">
                    <Recipes3 />
                </div>
            </div>
        </div>
    )
}

export default Recipes;
