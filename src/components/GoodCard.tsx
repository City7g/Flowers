import ShopNow from "@/app/ui/buttons/shop-now";
import Image from "next/image";
import './../styles/base/_good-card.scss';

export default function GoodCard({ imgSrc, title, reverse }) {
  return (
    <main>
      <div className={`good-card ${reverse ? "good-card--reverse" : ""}`}>
        <div className="good-card__text">
          <h3 className="good-card__title title-h3">{title}</h3>
          <ShopNow reverse={reverse} />
        </div>
        <div className="good-card__image">
          <Image
            src={imgSrc}
            alt="good-card"
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
      </div>
    </main>
  );
}
