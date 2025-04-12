import React from 'react';

function Navbar() {
    const navbarStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20x',
        backgroundColor: '#f7364a',
        color: '#f1e9dd',
        fontFamily: 'Arial, sans-serif',
    };

    const navLinksStyle = {
        display: 'flex',
        gap: '50px',
        alignItems: 'center',
        fontSize: '16px',
    };

    const logoStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
    };

    const searchIconStyle = {
        fontSize: '20px',
        marginLeft: 'auto',
    };

    return (
        <div style={navbarStyle}>
            <div style={logoStyle}>
                🌐 <span style={{ marginLeft: '0 20px' }}>Crime Website</span>
            </div>
            <div style={navLinksStyle}>
                <span>Home Page</span>
                <span>Data</span>
                <span>Resources</span>
                <span style={searchIconStyle}>🔍</span>
            </div>
        </div>
    );
}

export default Navbar;