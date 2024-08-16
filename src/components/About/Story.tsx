import StoryCard from '../Card/Story'

const stories = [
  {
    id: 0,
    title: 'Expertly Crafted Bouquets',
    text: 'At Kyiv LuxeBouquets, we take pride in our team of talented and experienced florists who carefully select each bloom, ensuring that only the freshest and most stunning flowers make it into our bouquets. We work directly with farms to source the highest quality flowers, and our skilled florists expertly craft each bouquet to perfection.',
  },
  {
    id: 1,
    title: 'Bouquets, Gifts & Ambiance',
    text: 'In addition to our stunning bouquets, we also offer a collection of dried bouquets, house plants, and fragrant candles from luxury brands to create the perfect ambiance. We believe that sending flowers, plants, and gifts should be easy and stress-free, which is why we offer same or next-day delivery throughout Kyiv.',
  },
  {
    id: 2,
    title: 'Making Every Day Special',
    text: 'Our mission is simple: to make every day special and memorable for our customers. We are dedicated to providing the highest quality flowers, exceptional customer service, and a seamless online experience that will make you feel confident and satisfied with your purchase.Thank you for choosing Kyiv LuxeBouquets. We look forward to bringing joy and happiness to your life with our beautiful bouquets and gifts.',
  },
]

export default function AboutStory() {
  return (
    <section className="story-section">
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </section>
  )
}
