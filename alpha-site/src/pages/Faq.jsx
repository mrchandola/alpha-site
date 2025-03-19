import React, { useState } from "react";
import Layout from "../layouts/Layout";
import "./Pages.css";
const aboutUsImg = "/assets/images/pages/about.jpg";

const Faq = () => {
  
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
    <Layout>
        <div className="content">
          <section className="parallax-section" data-scrollax-parent="true">
            <div class="bg par-elem " style={{ backgroundImage: `url(${aboutUsImg})` }}  data-bg={aboutUsImg} data-scrollax="properties: { translateY: '30%' }"></div>

            <div className="overlay"></div>
            <div className="bubble-bg"></div>
              <div className="container">
                  <div className="section-title center-align">
                      <h2><span>Faq</span></h2>
                      {/* <div className="breadcrumbs fl-wrap"><a href="/home">Home</a> <span>About Us </span></div>
                      <span className="section-separator"></span> */}
                  </div>
              </div>
              {/* <div className="header-sec-link">
                  <div className="container"><a href="#sec1" className="custom-scroll-link">Let's Start</a></div>
              </div> */}
          </section>

          <section id="sec1">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="list-single-main-item fl-wrap">
                  <div className="list-single-main-item-title fl-wrap" style={{ textAlign: "justify" }}>
                        
                    <div class="entry-content clearfix">
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
                  </div>
                </div>
              </div>
            </div>
         </section>
        <div className="limit-box fl-wrap"></div>
      </div>
    </Layout>
  );
};

export default Faq;
