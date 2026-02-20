'use client'

import { motion } from 'framer-motion'
import { Newsletter } from '@/types/sanity'

interface NewsletterSectionProps {
    data: Newsletter
}

export default function NewsletterSection({ data }: NewsletterSectionProps) {
    if (!data) return null

    return (
        <section id="newsletter" className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl font-heading text-primary text-center mb-16">
                        Newsletter
                    </h2>
                    <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
                        {data.description}
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder={data.emailPlaceholder}
                            className="flex-1 px-6 py-3 rounded-full border border-primary/20 focus:outline-none focus:border-primary bg-white/50 backdrop-blur-sm transition-colors"
                            required
                        />
                        <button
                            type="submit"
                            className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:scale-105"
                        >
                            {data.buttonText}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
