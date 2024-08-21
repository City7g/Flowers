import GoodCard from '/card/Good'
import image1 from '@/assets/goods/item-1.jpg'
import image2 from '@/assets/goods/item-2.jpg'
import image3 from '@/assets/goods/item-3.jpg'
import image4 from '@/assets/goods/item-4.jpg'
import image5 from '@/assets/goods/item-5.jpg'

const cards = [
  {
    title: 'Fresh Flowers',
    image: image1,
  },
  {
    title: 'Dried Flowers',
    image: image2,
  },
  {
    title: 'Live Plants',
    image: image3,
  },
  {
    title: 'Aroma Candels',
    image: image4,
  },
  {
    title: 'Fresheners',
    image: image5,
  },
]

const loadData = async () => {
  const data = await fetch('http://localhost:8000/number', {
    next: { revalidate: 0 },
  })
  return data.json()
}

export default function Some() {
  const data = loadData()

  return (
    <>
      <h1>{data}</h1>
      {cards.map((card, index) => (
        <GoodCard
          key={index}
          image={card.image}
          title={card.title}
          reverse={index % 2 === 1}
        />
      ))}
    </>
  )
}
