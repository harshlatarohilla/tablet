import React, { useState } from "react";
import "./about.css";

function About({}) {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [theme, setTheme] = useState("light");

  function addTab() {
    const newTab = {
      id: Date.now(),
      content: `Tab ${tabs.length + 1}`,
      isActive: false,
    };

    setTabs([...tabs, newTab]);
    setActiveTab(tabs.length);
  }

  function handleTabClick(index) {
    setActiveTab(index);
  }

  
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  
  return (
    <div className={`tab-container ${theme}`}>
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index, tab.id)}
          >
            {tab.content}
          </div>
        ))}
        <button className="add-button" onClick={addTab}>
          +
        </button>
      </div>
            <button className="theme-button" onClick={toggleTheme}>Theme</button>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`tab-container ${
              activeTab === index ? "active-content" : "inactive-content"
            }`}
          >
            {/* Render the content for each tab */}
           <h1 > {`Tab ${index + 1}`}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
