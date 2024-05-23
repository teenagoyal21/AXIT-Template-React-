import React, { useState } from 'react'
import "./Features.css";

const Features = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div id='Features' className='Features'>
      <div className='tabs'>
        <div id='tab1' className={activeTab === 'tab1' ? 'active' : ''} onClick={() => handleTabClick('tab1')}>TAB 1</div>
        <div id='tab2' className={activeTab === 'tab2' ? 'active' : ''} onClick={() => handleTabClick('tab2')}>TAB 2</div>
        <div id='tab3' className={activeTab === 'tab3' ? 'active' : ''} onClick={() => handleTabClick('tab3')}>TAB 3</div>
      </div>
      <div className='content'>
        <h5>Tabs with soft transitioning effect.</h5>
        {activeTab === 'tab1' && (
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatibus dicta delectus libero mollitia. Facere veniam officia corporis! Soluta aspernatur nihil voluptatum 
              suscipit repellat maiores at perspiciatis numquam distinctio iusto, voluptatem corrupti repudiandae dolorum in corporis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ab praesentium porro.</p>
            <button>Download</button>
          </div>
        )}
        {activeTab === 'tab2' && (
          <div>
            <p>Content for Tab 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ab praesentium porro.</p>
          </div>
        )}
        {activeTab === 'tab3' && (
          <div>
            <p>Content for Tab 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ab praesentium porro.</p>
          </div>
        )}
      </div>
      <div>
        <img src="./images/features.png" alt="Features" />
      </div>
    </div>
  )
}

export default Features
