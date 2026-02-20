import { IndividualHealing } from '@/types/sanity'
import ExpandableCard from './ExpandableCard'

interface IndividualHealingSectionProps {
    packages: IndividualHealing[]
}

export default function IndividualHealingSection({ packages }: IndividualHealingSectionProps) {
    return (
        <section id="individual-healing" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-heading text-primary text-center mb-16">
                    Individual Healing Packages
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg) => (
                        <div key={pkg._id} className="h-full">
                            <ExpandableCard
                                title={pkg.name}
                                duration={pkg.duration}
                                price={pkg.price}
                                description={pkg.description}
                                buttonText="Book Session"
                                buttonLink="#contact"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
