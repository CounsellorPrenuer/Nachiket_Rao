import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { About } from '@/types/sanity'
import RichText from './RichText'

interface AboutSectionProps {
  about: About
}

export default function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-heading text-primary text-center mb-16">
          {about.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-primary space-y-6">
            <RichText content={about.content} />

          </div>
          <div className="flex justify-center">
            {about.profileImage && (
              <Image
                src={urlFor(about.profileImage).width(800).url()}
                alt={about.title}
                width={800}
                height={1000}
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
