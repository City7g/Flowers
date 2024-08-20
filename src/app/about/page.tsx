import AboutDiscover from '@/components/About/Discover'
import AboutFirst from '@/components/About/First'
import AboutStory from '@/components/About/Story'
import AboutText from '@/components/About/Text'

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
