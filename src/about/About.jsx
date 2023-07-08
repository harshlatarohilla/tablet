import React, { useState } from "react"
import "./about.css"

function About() {
  const [tabs, setTabs] = useState([])
  const [activeTab, setActiveTab] = useState(new Date())
  const [theme, setTheme] = useState("light")

  function addTab() {
    const id = Date.now()
    const newTab = {
      id: id,
      content: `Tab ${tabs.length + 1}`,
    }

    setTabs([...tabs, newTab])
    setActiveTab(id)
    // console.log(tabs.length)
  }




  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light")
  }


  return (
    <div className={`tab-container ${theme}`}>
      <div className="tab-buttons">
        {tabs.map(({ id, content }, index) => (
          <div
            key={id}
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(id)}
          >
            {content}
          </div>
        ))}
        <button className="add-button" onClick={addTab}>
          +
        </button>
      </div>
      <button className="theme-button" onClick={toggleTheme}>Theme</button>

      <div className="tab-content">
        {tabs.map(({ content, id }, index) => (
          id === activeTab &&
          <div
            key={id}
            className='tab-container'
          >

            <h1 >  {content}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
