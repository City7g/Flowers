import AboutDiscover from '@/components/about/Discover'
import AboutFirst from '@/components/about/First'
import AboutStory from '@/components/about/Story'
import AboutText from '@/components/about/Text'

export default function AboutPage() {
  return (
    <main>
      <AboutFirst />
      <AboutText />
      <AboutStory />
      <AboutDiscover />
    </main>
  )
}
