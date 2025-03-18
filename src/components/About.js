  import React from 'react'
  import './About.css';

  export default function About(props) {

    const getBackgroundColor = () => {
      if (props.redmode === 'red') return '#212529'; // Red mode background
      if (props.mode === 'dark') return '#212529'; // Dark mode background
      return 'white'; // Default light mode background
    };
  
    const getTextColor = () => {
      return props.mode === 'dark' || props.redmode === 'red' ? 'white' : 'black';
    };
  
    const myStyle = {
      color: getTextColor(),
      backgroundColor: getBackgroundColor(),
      border: `1px solid ${getTextColor()}`, // Dynamic border color
    };
  
    return (
    
    <div className="container" style={{ color: getTextColor() }}>
    <h2><center>About Us</center></h2>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  style={{ ...myStyle, border: 'none' }} >
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
        <div className="accordion-body" style={myStyle}>
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin 
          adds the appropriate classes that we use to style each element. These classes control the overall appearance, 
          as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding
          our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, 
          though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div className="accordion-item"  style={myStyle} >
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={{ ...myStyle, border: 'none' }} >
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
        <div className="accordion-body" style={myStyle}>
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the
          appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing
          and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. 
          It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does 
          limit overflow.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={{ ...myStyle, border: 'none' }} >
          Accordion Item #3
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
        <div className="accordion-body" style={myStyle}>
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the 
          appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing 
          and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. 
          It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does 
          limit overflow.
        </div>
      </div>
    </div>
  </div>
  </div>

    )
  }
