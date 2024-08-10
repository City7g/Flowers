import Image from 'next/image';
import GoodCard from './GoodCard';
import './../styles/base/_home-section.scss';
import './../styles/base/_fonts.scss';

export default function HomeSection() {
    const cards = [
      {
        imgSrc: "/HomeSection/good-card-1.png",
        title: "Fresh Flowers",
      },
      {
        imgSrc: "/HomeSection/good-card-2.png",
        title: "Dried Flowers",
      },
      {
        imgSrc: "/HomeSection/good-card-3.png",
        title: "Live Plants",
      },
      {
        imgSrc: "/HomeSection/good-card-4.png",
        title: "Aroma Candels",
      },
      {
        imgSrc: "/HomeSection/good-card-5.png",
        title: "Fresheners",
      },
    ];

    return (
      <main>
        <div className="home-section">
          <div className="home-section__main">
            <div className="home-section__header">
              <h1 className="home-section__title title-h1">
                Kyiv <br /> LuxeBouquets
              </h1>
              <p className="home-sectoin__text text-subtitle">
                Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
                Spread Joy with Our Online Flower Delivery Service
              </p>
            </div>
            <div className="home-section__footer">
              <div className="home-section__image">
                <Image
                  src="/HomeSection/img-hero.png"
                  alt="img-hero"
                  layout="responsive"
                  width={500}
                  height={300}
                />
              </div>
              <p className="text-caption home-section__footer-text">
                Experience the joy of giving with our modern floral studio.
                Order online and send fresh flowers, plants and gifts today.
              </p>
            </div>
          </div>
          <div className="home-section__goods">
            {cards.map((card, index) => (
              <GoodCard
                key={index}
                imgSrc={card.imgSrc}
                title={card.title}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </main>
    );
}