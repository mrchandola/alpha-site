import React from "react";
const SocialLink = ({ url, iconClass }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <i className={iconClass}></i>
    </a>
  );
};

const Twitter = () => {
  const twitterLink = "https://x.com/?lang=en";
  return <SocialLink url={twitterLink} iconClass="fa fa-twitter" />;
};

export default Twitter;