import React from 'react';

function Tabs() {
    // define the active tab (default to teh first tab)
    const [activeTab, setActiveTab] = React.useState('home');

    const tabContent = {
        home: <div><h2>Home Content</h2><p>This is the content for the home tab.</p></div>,
        resources: <div><h2>Resources Content</h2><p>This is the content for the contact tab.</p></div>,
        data : <div><h2>Data Content</h2><p>This is the content for the resources tab.</p></div>,
    };

    const tabButtonStyles = {
        padding: '10px 20px',
        margin: '5px',
        cursor: 'pointer',
        backgroundColor: '#f7364a',
        color: '#f1e9dd',
        border: 'none',
        borderRadius: '10px',
    };

    const pageStyles = {
        backgroundColor: '#100f0eff',
        padding: '20px',
        borderRadius: '5px',
    };

    const activeTabButtonStyles = {
        ...tabButtonStyles,
        backgroundColor: '#f7364a',
    };

    return (
        <div style={pageStyles}> {/* Apply background and padding here */}
            <div className="tabs">
                {/* Tab buttons */}
                <button 
                    onClick={() => setActiveTab('home')}
                    style={activeTab === 'home' ? activeTabButtonStyles : tabButtonStyles}
                >
                    Home
                </button>
                <button 
                    onClick={() => setActiveTab('data')}
                    style={activeTab === 'data' ? activeTabButtonStyles : tabButtonStyles}
                >
                    About
                </button>
                <button
                    onClick={() => setActiveTab('resources')}
                    style={activeTab === 'resources' ? activeTabButtonStyles : tabButtonStyles}
                >
                    Resources
                </button>
            </div>
    
            <div className="tab-content">
                {tabContent[activeTab]}
            </div>
        </div>
    );
}

export default Tabs;