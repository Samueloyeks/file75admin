import React from 'react';
import './index.css';

function Dashboard(props) {
    return (
        <div style={{ height: '100vh' }}>
            <h4 className='dashboard-welcome'>Welcome to
            <span className='file-primary file-text-bold spaced'> File </span>
            administrator panel.
            </h4>
        </div>
    );
}

export default Dashboard; 