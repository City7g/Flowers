import CategoryCard from '@/components/CategoryCard'

const categoryCards = [
  {
    imgSrc: '/CategorySection/card-item-1.jpg',
    price: 70,
    title: 'Snowfall',
  },
  {
    imgSrc: '/CategorySection/card-item-2.jpg',
    price: 70,
    title: "Dawn's Delight",
  },
  {
    imgSrc: '/CategorySection/card-item-3.jpg',
    price: 70,
    title: 'Pink Elegance',
  },
  {
    imgSrc: '/CategorySection/card-item-4.jpg',
    price: 70,
    title: 'Rustic Charm',
  },
  {
    imgSrc: '/CategorySection/card-item-5.jpg',
    price: 70,
    title: 'Autumn Symphony',
  },
  {
    imgSrc: '/CategorySection/card-item-6.jpg',
    price: 70,
    title: 'Rosy Delight',
  },
  {
    imgSrc: '/CategorySection/card-item-7.jpg',
    price: 70,
    title: 'Serenity',
  },
  {
    imgSrc: '/CategorySection/card-item-8.jpg',
    price: 70,
    title: 'Blue Harmony',
  },
  {
    imgSrc: '/CategorySection/card-item-9.jpg',
    price: 70,
    title: 'Mystical Majesty',
  },
  {
    imgSrc: '/CategorySection/card-item-10.jpg',
    price: 70,
    title: 'Blazing Blossoms',
  },
]

export default function Category() {
  return (
    <div className="category">
      <div className="category__left">
        <h1 className="title-h1 category__title">Fresh Flowers</h1>
      </div>
      <div className="category__right">
        {categoryCards.map(card => (
          <CategoryCard
            key={card.imgSrc}
            imgSrc={card.imgSrc}
            title={card.title}
            price={card.price}
          />
        ))}
      </div>
    </div>
  )
}
