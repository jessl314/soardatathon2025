import React from 'react';

function Navbar() {
    const [activeRegion, setActiveRegion] = React.useState('navbar')

    const regionContent = {
        home: <div><h2>Home Content</h2><p>This is the content for the home tab.</p></div>,
        resources: <div><h2>Resources Content</h2><p>This is the content for the contact tab.</p></div>,
        data : <div><h2>Data Content</h2><p>This is the content for the resources tab.</p></div>,
    };
    const mapNavStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px 40px',
        backgroundColor: '#01184f',
        color: '#bf5f5b',
        fontFamily: 'Arial, sans-serif',
        
    };
    const regionStyle = {
        padding: '10px 20px',
        cursor: 'pointer',
        backgroundColor: '#01184f',
        color: '#bf5f5b',
        borderRadius: '10px',
        fontSize: '16px',
        textAlign: 'center',
        margin: '0 10px',
        transition: 'background-color 0.3s ease, color 0.3s ease',
    };

    const activeRegionStyle = {
        ...regionStyle,
        backgroundColor: '#01184f',
        color: '#bf5f5b', // Highlight active region
    };

    return (
        <div>
            <div style={mapNavStyles}>
                {/* These are clickable regions that behave like map links */}
                <div
                    onClick={() => setActiveRegion('home')}
                    style={activeRegion === 'home' ? activeRegionStyle : regionStyle}
                >
                    Home
                </div>
                <div
                    onClick={() => setActiveRegion('data')}
                    style={activeRegion === 'data' ? activeRegionStyle : regionStyle}
                >
                    Data
                </div>
                <div
                    onClick={() => setActiveRegion('resources')}
                    style={activeRegion === 'resources' ? activeRegionStyle : regionStyle}
                >
                    Resources
                </div>
            </div>

            {/* Display content based on the active region */}
            <div style={{ backgroundColor: '#01184f', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
                {regionContent[activeRegion]}
            </div>
        </div>
    
}

export default Navbar;
