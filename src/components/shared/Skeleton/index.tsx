import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={464}
    viewBox="0 0 280 464"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="129" r="130" />
    <rect x="0" y="275" rx="10" ry="10" width="280" height="27" />
    <rect x="1" y="315" rx="10" ry="10" width="280" height="87" />
    <rect x="0" y="422" rx="10" ry="10" width="91" height="27" />
    <rect x="140" y="412" rx="10" ry="10" width="137" height="44" />
  </ContentLoader>
);

export default Skeleton;
