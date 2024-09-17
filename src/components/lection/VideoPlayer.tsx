// import Plyr from "plyr-react";
import dynamic from "next/dynamic";
import "plyr-react/plyr.css";
import React from "react";
const Plyr = dynamic(() => import("plyr-react"), { ssr: false });

const VideoPlayer = ({ source }: { source: Plyr.SourceInfo | null }) => {
  return <Plyr source={source} />;
};

export default React.memo(VideoPlayer
)