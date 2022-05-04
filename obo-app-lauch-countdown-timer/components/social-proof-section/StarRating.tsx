import React from 'react'
import { Star } from './Star'

interface Prop {
    text: string,
}

export const StarRating = ({ text }: Prop) => {
    return (
        <div className="w-[260px] md:w-[350px] group flex flex-col space-y-2 py-2 md:flex-row items-center md:justify-start md:space-y-0 md:space-x-4 my-4 px-4  md:py-3 bg-fuchsia-300 rounded-md cursor-pointer  hover:bg-fuchsia-500 transition duration-300 ease-in shadow-md hover:shadow-xl md:even:ml-16 md:last:ml-32">
            <div className="flex space-x-1">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
            <p className="text-sm flex justify-start items-center md:text-md font-semibold text-fuchsia-700 group-hover:text-fuchsia-200 ">{text}</p>
        </div>
    )
}