import { Settings } from '@/types/sanity'

interface HeroSectionProps {
  settings: Settings
  mission?: string
}

export default function HeroSection({ settings, mission }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-heading text-primary mb-6">
          {settings.websiteName}
        </h1>
        <p className="text-2xl md:text-3xl text-primary mb-8 font-light">
          {settings.tagline}
        </p>

        {mission && (
          <div id="mission" className="mb-10 bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl max-w-2xl mx-auto border border-white/50 scroll-mt-28">
            <h2 className="text-4xl md:text-5xl font-heading text-primary mb-4">
              My Mission
            </h2>
            <p className="text-xl md:text-2xl text-primary leading-relaxed">
              {mission}
            </p>
          </div>
        )}

        <div className="flex flex-col items-center gap-6">
          {settings.consultationPrice && settings.consultationPaymentUrl ? (
            <a
              href={settings.consultationPaymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-primary bg-white/70 inline-block px-8 py-4 rounded-full shadow-md hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Consultation: {settings.consultationPrice}
            </a>
          ) : (
            <div className="text-xl text-primary bg-white bg-opacity-70 inline-block px-8 py-4 rounded-full shadow-md">
              Consultation: {settings.consultationCharge || 'USD 50'}
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
