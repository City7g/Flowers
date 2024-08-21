import IndexFirst from '@/components/index/First'
import IndexAbout from '@/components/index/About'
import IndexContactUs from '@/components/index/ContactUs'
import IndexService from '@/components/index/Service'
import IndexSlider from '@/components/index/Slider'
import IndexText from '@/components/index/Text'
import IndexWedding from '@/components/index/Wedding'
import IndexWhy from '@/components/index/Why'

export default function HomePage() {
  return (
    <main>
      <IndexFirst />
      <IndexAbout />
      <IndexWhy />
      <IndexContactUs />
      <IndexText />
      <IndexService />
      <IndexWedding />
      <IndexSlider />
    </main>
  )
}
