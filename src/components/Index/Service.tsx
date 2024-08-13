import ServiceContent from '../Service-content'

export default function Service() {
  return (
    <div className="service">
      <div className="text-section">
        <h2 className="title-h2">Our Service</h2>
      </div>
      <div className="service__flower-block">
        <img
          className="service__flower-img"
          src="/ServiceSection/service.png"
          alt="flower-img"
        />
        <ServiceContent modificator={null} />
      </div>
      <div className="service__wedding-block">
        <ServiceContent modificator='white' />
      </div>
    </div>
  )
}
