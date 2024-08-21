import Image from 'next/image'
import image from '@/assets/subscription-first.jpg'

export default function Subscription() {
  return (
    <section className="subscription">
      <div className="subscription__image">
        <Image src={image} alt="" className="subscription__img" />
      </div>

      <div className="subscription__content">
        <h1 className="title-h2 subscription__title">Flower Subscription</h1>

        <p className="title-h6 subscription__text">For Yourself</p>
        <ul className="text-body subscription__list">
          <li>
            The perfect way to keep your home fresh and beautiful. Get a regular
            delivery of stunning bouquets straight to your doorstep without
            lifting a finger. Enjoy the beauty and fragrance of fresh flowers
            hassle-free!
          </li>
        </ul>

        <p className="title-h6 subscription__text">As a Gift</p>
        <ul className="text-body subscription__list">
          <li>
            Simply provide us with their address and let us take care of the
            rest, delivering beautiful blooms straight to their doorstep at the
            frequency and duration of your choosing.
          </li>
        </ul>

        <p className="title-h6 subscription__text">For Business</p>
        <ul className="text-body subscription__list">
          <li>
            Is a great way to create a pleasant atmosphere and leave a good
            impression on your guests and customers. Fresh floral arrangements
            will improve the aesthetic image of your business, and our service
            guarantees timely replacement without extra care or effort on your
            part.
          </li>
        </ul>

        <button className="btn-secondary subscription__btn">
          Explore Plans
        </button>
      </div>
    </section>
  )
}
