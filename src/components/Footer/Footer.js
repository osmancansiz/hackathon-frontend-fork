import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const footerStyle = {
      textAlign: 'center',
      backgroundColor: 'rgb(79, 82, 88)',
      color: 'white',
      padding: '24px',
    };
    return <div style={footerStyle}>©JUG_Istanbul Greenfield:Hackathon Second-Opinion</div>;
  }
}

export default Footer;
