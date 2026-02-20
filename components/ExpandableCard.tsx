'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { urlFor } from '@/lib/sanity'
import RichText from './RichText'

interface ExpandableCardProps {
    title: string
    duration?: string
    price?: string
    description?: any[]
    image?: any
    icon?: string
    buttonText?: string
    buttonLink?: string
}

export default function ExpandableCard({
    title,
    duration,
    price,
    description,
    image,
    icon,
    buttonText = 'Book Now',
    buttonLink = '#contact',
}: ExpandableCardProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-primary flex flex-col h-full">
            {/* Image if available */}
            {image && (
                <div className="mb-6 relative h-48 w-full shrink-0">
                    <Image
                        src={urlFor(image).width(600).height(400).url()}
                        alt={title}
                        fill
                        className="object-cover rounded-md"
                    />
                </div>
            )}

            {/* Icon if available */}
            {icon && <div className="text-5xl mb-4 text-center shrink-0">{icon}</div>}

            <h3 className="text-3xl font-heading text-primary mb-2 text-center shrink-0">
                {title}
            </h3>

            {duration && (
                <p className="text-center text-gray-600 mb-4 shrink-0">{duration}</p>
            )}

            {price && (
                <div className="text-4xl font-bold text-primary text-center mb-6 shrink-0">
                    {price}
                </div>
            )}

            {/* Description Area */}
            {description && description.length > 0 && (
                <div className="mb-6 text-primary flex-grow relative">
                    <motion.div
                        initial={false}
                        animate={{ height: isExpanded ? 'auto' : '5rem' }} // Approx 3 lines of text
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden relative"
                    >
                        <RichText content={description} />

                        {!isExpanded && (
                            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                        )}
                    </motion.div>

                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-4 mb-2 mx-auto block w-fit border border-primary text-primary px-4 py-1 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-colors duration-300 focus:outline-none"
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            )}
            {(!description || description.length === 0) && <div className="flex-grow" />}

            <div className="text-center mt-auto shrink-0">
                <Link
                    href={buttonLink}
                    className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
                >
                    {buttonText}
                </Link>
            </div>
        </div>
    )
}
