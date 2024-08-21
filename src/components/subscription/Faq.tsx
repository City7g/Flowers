import Accordion from '@/components/Accordion'

const faq = [
  'How often will I get a new bouquet?',
  'Can i send subscription like as a gift?',
  'Can I choose which bouquet I get?',
  'Can I change the shipping address?',
  'What day will the subscription bouquet come?',
  'Can I suspend my subscription to flowers?',
]

export default function FAQ() {
  return (
    <section className="faq">
      <div className="faq__block">
        <h3 className="title-h2 faq__block-title">Subscription FAQ</h3>

        <Accordion content={faq} />
      </div>
    </section>
  )
}
