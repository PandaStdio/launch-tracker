import React from 'react'

const Banner1 = ({ subHeading, heading, description })=> {
    return (
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">{ subHeading }</h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{ heading }</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{ description }</p>
        </div>
    )
}
export default Banner1;
