'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Testimonial } from '@/types/sanity'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

interface TestimonialSectionProps {
    testimonials: Testimonial[]
}

const components = {
    block: {
        normal: ({ children }: any) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
        h1: ({ children }: any) => <h1 className="text-2xl font-bold mb-4">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-xl font-bold mb-3">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-lg font-bold mb-2">{children}</h3>,
        blockquote: ({ children }: any) => <blockquote className="border-l-4 border-primary pl-4 italic my-4">{children}</blockquote>,
    },
}

export default function TestimonialSection({ testimonials }: TestimonialSectionProps) {
    if (!testimonials || testimonials.length === 0) return null

    return (
        <section id="testimonials" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-heading text-primary text-center mb-16"
                >
                    Testimonials
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial._id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-[#FFFDE7] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full"
                        >
                            {/* Media: Video or Image */}
                            <div className="mb-6 rounded-xl overflow-hidden bg-gray-100">
                                {testimonial.video?.asset?._ref ? (
                                    <div className="relative aspect-video">
                                        <video
                                            controls
                                            className="w-full h-full object-cover"
                                        // You might need to resolve the file URL properly if not using a specific Sanity file hook
                                        // For now assuming standard file reference or simplified playback
                                        // In reality, you'd likely fetch the full URL in groq
                                        >
                                            {/* Note: The src needs to be the actual file URL. 
                                                The GROQ query in page.tsx needs to fetch `video.asset->url` 
                                            */}
                                            <source src={testimonial.video.asset.url} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                ) : testimonial.image ? (
                                    <div className="relative aspect-video w-full">
                                        <Image
                                            src={urlFor(testimonial.image).width(600).height(400).url()}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ) : null}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                {testimonial.text && (
                                    <div className="prose prose-sm max-w-none text-gray-700 mb-6">
                                        <PortableText value={testimonial.text} components={components} />
                                    </div>
                                )}
                            </div>

                            {/* Author */}
                            <div className="mt-auto pt-4 border-t border-primary/10">
                                <p className="font-heading text-lg font-bold text-primary">
                                    {testimonial.name}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
