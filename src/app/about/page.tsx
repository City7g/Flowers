import Link from 'next/link'
import IconFacebook from '@/components/Icon/Socials/Facebook'
import IconInstagram from '@/components/Icon/Socials/Instagram'
import IconPinterest from '@/components/Icon/Socials/Pinterest'
import IconTelegram from '@/components/Icon/Socials/Telegram'
import IconTwitter from '@/components/Icon/Socials/Twitter'

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

export default function About() {
  return (
    <main>
      <section className="about-first">
        <div className="about-first__content">
          <h1 className="title-h2 about-first__title">
            Our Story
            <br />
            About
            <br />
            Kyiv LuxeBouquets
          </h1>

          <p className="text-body about-first__text">
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
            Spread Joy with Our Online Flower Delivery Service
          </p>

          <div className="about-first__socials">
            <Link href="#" className="about-first__social">
              <IconInstagram />
            </Link>

            <Link href="#" className="about-first__social">
              <IconPinterest />
            </Link>

            <Link href="#" className="about-first__social">
              <IconFacebook />
            </Link>

            <Link href="#" className="about-first__social">
              <IconTwitter />
            </Link>

            <Link href="#" className="about-first__social">
              <IconTelegram />
            </Link>
          </div>
        </div>

        <div className="about-first__image">
          <img src="/about/first-bg.jpg" alt="" className="about-first__img" />
        </div>
      </section>

      <section className="text-section">
        <h3 className="tet-overline text-section__subtitle">OUR STORY</h3>
        <h2 className="title-h3 text-section__title">
          Our Founder&apos;s Passion
        </h2>
        <p className="text-subtitle text-section__text">
          Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska with the
          goal of bringing unique and exquisite bouquets to the people of Kyiv.
          Natalia has always had a passion for flowers and design, and his
          vision was to create a local floral studio that would specialize in
          the creation and delivery of fresh, beautiful, and distinctive
          bouquets.
        </p>
      </section>

      <section className="story-section">
        {stories.map((story) => (
          <div key={story.id} className="story">
            <div className="story__image">
              <img
                src={`/about/story-${story.id + 1}.jpg`}
                alt=""
                className="story__img"
              />
            </div>

            <div className="story__content">
              <h3 className="title-h3 story__title">{story.title}</h3>
              <p className="text-body story__text">{story.text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="text-section">
        <h2 className="title-h2 text-section__title">
          Discover Our Beautiful Bouquets
        </h2>
        <p className="text-subtitle text-section__text">
          Explore our collection of exquisite bouquets and surprise your loved
          ones with the perfect gift. Click the button below to start shopping
        </p>
        <button className="btn-primary text-section__btn">shop now</button>
      </section>
    </main>
  )
}
