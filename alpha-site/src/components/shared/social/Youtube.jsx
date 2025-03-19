import React from "react";
const SocialLink = ({ url, iconClass }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <i className={iconClass}></i>
    </a>
  );
};

const Youtube = () => {
  const youtubeLink = "https://www.youtube.com/";
  return <SocialLink url={youtubeLink} iconClass="fa fa-youtube" />;
};

export default Youtube;