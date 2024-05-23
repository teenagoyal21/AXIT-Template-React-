import React from 'react'
import "./About.css"

const features = [
    {
      icon: "💡",  
      title: "Thoughtful Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra."
    },
    {
      icon: "⌨️",
      title: "Well Crafted",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra."
    },
    {
      icon: "⚡",
      title: "Easy to Customize",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra."
    }
  ];

const About = () => {
  return (
    <div id='About' className='About'>
        <div className='whyAwesome'>
            <h2>WHY THIS IS AWESOME</h2>
            <img src="./images/processDivider.png" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt non sequi natus.</p>
        </div>
        <div className="features-container">
            {features.map((feature, index) => (
            <div key={index} className="feature">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default About