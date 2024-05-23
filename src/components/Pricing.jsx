import React from 'react'
import "./Pricing.css"

const pricingPlans = [
    {
      title: "Basic",
      price: "$0",
      period: "Free for Life",
      features: [
        "1 GB OF SPACE",
        "10 GB OF BANDWIDTH",
        "3 WEBSITES",
        "BASIC CUSTOMIZATION",
        "WORDPRESS INTEGRATION",
        "EMAIL SUPPORT"
      ]
    },
    {
      title: "Professional",
      price: "$19",
      period: "Monthly Payment",
      badge: "OUR MOST POPULAR",
      features: [
        "5 GB OF SPACE",
        "50 GB OF BANDWIDTH",
        "12 WEBSITES",
        "ADVANCED CUSTOMIZATION",
        "WORDPRESS INTEGRATION",
        "EMAIL SUPPORT"
      ]
    },
    {
      title: "Enterprise",
      price: "$70",
      period: "Monthly Payment",
      features: [
        "UNLIMITED SPACE",
        "UNLIMITED BANDWIDTH",
        "100 WEBSITES",
        "ADVANCED CUSTOMIZATION",
        "WORDPRESS INTEGRATION",
        "24/7 CUSTOMER SUPPORT"
      ]
    }
  ];

const Pricing = () => {
  return (
    <div id='Pricing' className="pricing">
      <h2>PRICING OPTIONS</h2>
      <img src="./images/processDivider.png" alt="" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="pricing-container">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <div className="pricing-header">
              <h3>{plan.title}</h3>
              <div className="pricing-price">{plan.price}</div>
              <div className="pricing-period">{plan.period}</div>
              {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
            </div>
            <ul className="pricing-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing