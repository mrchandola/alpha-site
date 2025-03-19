import React from "react";
const SocialLink = ({ url, iconClass }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <i className={iconClass}></i>
    </a>
  );
};

const FacebookLink = () => {
  const facebookLink = "https://www.facebook.com/yourpage";
  return <SocialLink url={facebookLink} iconClass="fa fa-facebook" />;
};

export default FacebookLink;