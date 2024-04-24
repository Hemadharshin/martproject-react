import React, { useState } from "react";
import { SliderData } from "../../assets/products"
import { Carousel } from 'react-bootstrap'

function SliderDataHome() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="backgroundSliderData" >
        {SliderData.map((slide, index) => (
          <Carousel.Item key={index}>

            <div  className='firstdiv' style={{ display: "flex", justifyContent: "center", gap: 10, width: "100%" }}>
              <div  className='seconddiv' style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", padding: "0 5rem" }}>
                <div>
                  <h3>{slide.title}</h3>
                  <p style={{padding:'60px'}}>{slide.desc}</p>
                  <button className="sliderbtn" >Visit Collection</button>
                </div>
              </div>
              <div>
                <img src={slide.cover} alt="First slide" />
              </div>
            </div>
            
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
export default SliderDataHome 











