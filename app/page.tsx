import { client } from '@/lib/sanity'
import {
  Settings,
  About,
  Approach,
  WhyChoose,
  Service,
  MythFact,
  Package,
  ContactInfo,
} from '@/types/sanity'
import WelcomePopup from '@/components/WelcomePopup'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ApproachSection from '@/components/ApproachSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import ServicesGrid from '@/components/ServicesGrid'
import MythsFactsSection from '@/components/MythsFactsSection'
import PackagesSection from '@/components/PackagesSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

async function getPageData() {
  const [
    settings,
    about,
    approach,
    whyChoose,
    services,
    mythsFacts,
    packages,
    contactInfo,
  ] = await Promise.all([
    client.fetch<Settings>(`*[_type == "settings"][0]`),
    client.fetch<About>(`*[_type == "about"][0]`),
    client.fetch<Approach>(`*[_type == "approach"][0]`),
    client.fetch<WhyChoose>(`*[_type == "whyChoose"][0]`),
    client.fetch<Service[]>(`*[_type == "service"] | order(_createdAt asc)`),
    client.fetch<MythFact[]>(`*[_type == "mythFact"] | order(_createdAt asc)`),
    client.fetch<Package[]>(`*[_type == "package"] | order(_createdAt asc)`),
    client.fetch<ContactInfo>(`*[_type == "contactInfo"][0]`),
  ])

  return {
    settings,
    about,
    approach,
    whyChoose,
    services,
    mythsFacts,
    packages,
    contactInfo,
  }
}

export default async function Home() {
  const data = await getPageData()

  // Handle missing data gracefully
  if (!data.settings) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading text-primary mb-4">
            Welcome to Your Therapy Website
          </h1>
          <p className="text-lg text-primary mb-4">
            Please configure your settings in Sanity Studio first.
          </p>
          <p className="text-sm text-gray-600">
            Run: <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code> and
            visit <code className="bg-gray-100 px-2 py-1 rounded">/studio</code>
          </p>
        </div>
      </div>
    )
  }

  return (
    <main className="overflow-x-hidden">
      {data.settings && <Navbar settings={data.settings} />}

      {data.settings && (
        <WelcomePopup
          title={data.settings.welcomeTitle}
          content={data.settings.welcomeContent}
        />
      )}

      {data.settings && <HeroSection settings={data.settings} />}

      {data.about && <AboutSection about={data.about} />}

      {data.approach && <ApproachSection approach={data.approach} />}

      {data.whyChoose && <WhyChooseSection whyChoose={data.whyChoose} />}

      {data.services && data.services.length > 0 && (
        <ServicesGrid services={data.services} />
      )}

      {data.mythsFacts && data.mythsFacts.length > 0 && (
        <MythsFactsSection mythsFacts={data.mythsFacts} />
      )}

      {data.packages && data.packages.length > 0 && (
        <PackagesSection packages={data.packages} />
      )}

      {data.contactInfo && <ContactSection contactInfo={data.contactInfo} />}

      {data.settings && <Footer settings={data.settings} />}
    </main>
  )
}

// Enable static generation

