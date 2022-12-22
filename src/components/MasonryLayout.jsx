import React from "react";
import Masonry from "react-masonry-css";
import Pin from "./Pin";

const breakpointObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonryLayout = ({ feeds }) => {
  return (
    <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointObj}>
      {feeds?.map((feed) => (
        <Pin key={feed.id} feed={feed} className="w-max" />
      ))}
    </Masonry>
  );
};

export default MasonryLayout;
