import { Service } from '@/types/sanity'
import ExpandableCard from './ExpandableCard'

interface ServicesGridProps {
  services: Service[]
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section id="modalities" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-heading text-primary text-center mb-16">
          Healing Modalities
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service._id} className="h-full">
              <ExpandableCard
                title={service.title}
                duration={service.duration}
                price={service.price}
                description={service.description}
                image={service.image}
                icon={service.icon}
                buttonText="Book Now"
                buttonLink="#contact"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
