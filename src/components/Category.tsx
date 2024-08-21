import CategoryCard from '@/components/CategoryCard'
import category1 from '@/assets/category/item-1.jpg'
import category2 from '@/assets/category/item-2.jpg'
import category3 from '@/assets/category/item-3.jpg'
import category4 from '@/assets/category/item-4.jpg'
import category5 from '@/assets/category/item-5.jpg'
import category6 from '@/assets/category/item-6.jpg'
import category7 from '@/assets/category/item-7.jpg'
import category8 from '@/assets/category/item-8.jpg'
import category9 from '@/assets/category/item-9.jpg'
import category10 from '@/assets/category/item-10.jpg'

const categoryCards = [
  {
    id: 0,
    title: 'Snowfall',
    price: 70,
    img: category1,
  },
  {
    id: 1,
    title: "Dawn's Delight",
    price: 70,
    img: category2,
  },
  {
    id: 2,
    title: 'Pink Elegance',
    price: 70,
    img: category3,
  },
  {
    id: 3,
    title: 'Rustic Charm',
    price: 70,
    img: category4,
  },
  {
    id: 4,
    title: 'Autumn Symphony',
    price: 70,
    img: category5,
  },
  {
    id: 5,
    title: 'Rosy Delight',
    price: 70,
    img: category6,
  },
  {
    id: 6,
    title: 'Serenity',
    price: 70,
    img: category7,
  },
  {
    id: 7,
    title: 'Blue Harmony',
    price: 70,
    img: category8,
  },
  {
    id: 8,
    title: 'Mystical Majesty',
    price: 70,
    img: category9,
  },
  {
    id: 9,
    title: 'Blazing Blossoms',
    price: 70,
    img: category10,
  },
]

export default function Category() {
  return (
    <div className="category">
      <div className="category__left">
        <h1 className="title-h1 category__title">Fresh Flowers</h1>
      </div>
      <div className="category__right">
        {categoryCards.map((card) => (
          <CategoryCard
            key={card.id}
            title={card.title}
            price={card.price}
            img={card.img}
          />
        ))}
      </div>
    </div>
  )
}
