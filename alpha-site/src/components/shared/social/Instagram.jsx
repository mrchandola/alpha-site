import React from "react";
const SocialLink = ({ url, iconClass }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <i className={iconClass}></i>
    </a>
  );
};

const Instagram = () => {
  const instagramLink = "https://www.instagram.com/accounts/login/?hl=en";
  return <SocialLink url={instagramLink} iconClass="fa fa-instagram" />;
};

export default Instagram;