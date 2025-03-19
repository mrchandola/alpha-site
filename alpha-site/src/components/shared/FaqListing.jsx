import React, { useState } from "react";

const FaqListing = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default to the first item open

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    { title: "Details option", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar..." },
    { title: "Details option 2", content: "Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat..." },
    { title: "Details option 3", content: "Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra..." }
  ];

  return (
    <div className="box-widget opening-hours">
      <div className="box-widget-content">
      <h2>Frequently Asked Questions</h2><br></br>
        <div className="accordion">
          {accordionData.map((item, index) => (
            
            <div key={index} className="">
              <a className={`text-white toggle ${activeIndex === index ? "act-accordion" : "bg-danger "}`}  
                onClick={() => toggleAccordion(index)} >
                {item.title} 
                <i className={`fa ${activeIndex === index ? "fa-minus" : "fa-plus"}`}></i>
              </a>
              <div className={`accordion-inner ${activeIndex === index ? "visible" : "hidden"}`}>
                <p>{item.content}</p>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqListing;
