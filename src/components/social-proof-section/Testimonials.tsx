import React from 'react'
import { TestimonialCard } from './TestimonialCard'

const TESTIMONIAL_DATA = [

    {
        customerName: "Colton Smith",
        imageURL: "/htmlcssjs-templateengine/avataaars.svg",
        imageAlt: "https://getavataaars.com/?avatarStyle=Transparent&clotheType=ShirtVNeck&facialHairType=Blank&hairColor=Black&mouthType=Smile&skinColor=Light&topType=LongHairBob",
        testimonialText: "We needed the same printed design as the one we had ordered a week prior.Not only did they find the original order, but we also received it in time.Excellent!",
    },

    {
        customerName: "Irene Roberts",
        imageURL: "/htmlcssjs-templateengine/avataaars.svg",
        imageAlt: "https://getavataaars.com/?avatarStyle=Transparent&clotheType=ShirtVNeck&facialHairType=Blank&hairColor=Black&mouthType=Smile&skinColor=Light&topType=LongHairBob",
        testimonialText: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
    },

    {
        customerName: "Anne Wallace",
        imageURL: "/htmlcssjs-templateengine/avataaars.svg",
        imageAlt: "https://getavataaars.com/?avatarStyle=Transparent&clotheType=ShirtVNeck&facialHairType=Blank&hairColor=Black&mouthType=Smile&skinColor=Light&topType=LongHairBob",
        testimonialText: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
    },

];

export const Testimonials = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            {
                TESTIMONIAL_DATA.map((item, index) => {
                    return <TestimonialCard key={index} customerName={item.customerName} imageURL={item.imageURL} imageAlt={item.imageAlt} testimonialText={item.testimonialText} />
                })
            }
        </div>
    )
}