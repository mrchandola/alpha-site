import React from "react";

const SocialLink = ({ url, iconClass }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <i className={iconClass}></i>
    </a>
  );
};

const WhatsAppLink = () => {
  const whatsappLink = "https://wa.me/9555104210"; // Replace with your actual WhatsApp number
  return <SocialLink url={whatsappLink} iconClass="fa fa-whatsapp" />;
};

export default WhatsAppLink;