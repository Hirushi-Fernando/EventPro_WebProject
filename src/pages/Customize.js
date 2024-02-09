import React, { useState } from 'react';
import './Customize.css';
import contentData from './content.json';
import categoriesData from './categories.json'; // Import categories JSON

const Customize = () => {
    const [theme, setTheme] = useState('');
    const [currentTopic, setCurrentTopic] = useState('weddings'); // Default topic
    const [isMenu, setIsMenu] = useState(true); // Default to show menu content

    const handleMenuClick = () => {
        setIsMenu(true); // Set to show menu content
    };

    const handleThemeClick = () => {
        setIsMenu(false); // Set to show theme content
    };

    const getContent = () => {
        if (isMenu) {
            return contentData[currentTopic]['menu'];
        } else {
            return contentData[currentTopic]['theme'];
        }
    };

    const topics = Object.keys(contentData); // Get all available topics

    const handleTopicChange = (topic) => {
        setCurrentTopic(topic);
    };

    // Function to handle click on category images
    const handleCategoryClick = (topic) => {
        setCurrentTopic(topic);
    };

    return (
        <div className={`app-container customize-page ${theme}`}>
            <div className="header">
                <h4 style={{ position: 'absolute', bottom: '640px', left: '280px', color: '#000000' }}>Welcome, John.L!</h4>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button type="button" style={{ position: 'absolute', bottom: '630px', left: '1040px', color: '#000000' }}>🔍︎</button>
                </div>
                <h5>Here is your agenda for today</h5>
            </div>
            <div className="nav-link">
                <ul>
                    <li>
                        <button className="nav" onClick={handleMenuClick}>
                            Menu
                        </button>
                    </li>
                    <li>
                        <button className="nav" onClick={handleThemeClick}>
                            Theme
                        </button>
                    </li>
                </ul>
            </div>

            {/* Render category images */}
            <div className="categories">
                {categoriesData.map(category => (
                    <img
                        key={category.id}
                        src={category.urlImage}
                        alt={category.label}
                        onClick={() => handleCategoryClick(category.label.toLowerCase())}
                    />
                ))}
            </div>

            <div className="content">
                <h1>{currentTopic.charAt(0).toUpperCase() + currentTopic.slice(1)}</h1>
                <p>{getContent()}</p>
            </div>
            <div className="sidebar">
                <h2>EventPro</h2>
                <ul>
                    <li><a href="/">🏠︎ Home</a></li>
                    <li><a href="#search">🔍︎ Search</a></li>
                    <li><a href="#requirements">📋 Requirements</a></li>
                    <li><a href="#premade">☑ Premade</a></li>
                    <li><a href="#directory">⛓ Directory</a></li>
                    <li style={{ marginBottom: '80px' }}><a href="#customize">☰ Customize</a></li>
                    <li><a href="#settings">⚙️ Settings</a></li>
                    <li><a href="login">✦ Log in</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Customize;

