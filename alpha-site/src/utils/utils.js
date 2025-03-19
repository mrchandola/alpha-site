export const formatUrlSegment = (name) => {
  return name.toLowerCase().replace(/\s+/g, '-');
};