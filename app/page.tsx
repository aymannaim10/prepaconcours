import dynamic from 'next/dynamic'
import HeroSection from '@/components/ui/HeroSection'

const FeaturesSection = dynamic(() => import('@/components/ui/FeaturesSection'))
const TestimonialsSection = dynamic(() => import('@/components/ui/TestimonialsSection'))

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
    </>
  )
}
