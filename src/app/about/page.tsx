import AboutDiscover from '@/components/About/Discover'
import AboutFirst from '@/components/About/First'
import AboutStory from '@/components/About/Story'
import AboutText from '@/components/About/Text'

export default function About() {
  return (
    <main>
      <AboutFirst />
      <AboutText />
      <AboutStory />
      <AboutDiscover />
    </main>
  )
}
