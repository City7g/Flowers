import HomeSection from '@/components/HomeSection'
import IndexAbout from '@/components/Index/About'
import IndexContactUs from '@/components/Index/ContactUs'
import IndexService from '@/components/Index/Service'
import IndexSlider from '@/components/Index/Slider'
import IndexWhy from '@/components/Index/Why'

export default function Home() {
  return (
    <main>
      <HomeSection />
      <IndexAbout />
      <IndexWhy />
      <IndexContactUs />
      <IndexService />
      <IndexSlider />
    </main>
  )
}
