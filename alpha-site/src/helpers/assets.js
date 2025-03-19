const BASEURL = ""; //import.meta.env.BASE_URL;
const getAsset = (path) => {
    return BASEURL + "assets/" + path;
  };
  
  export default getAsset;
  