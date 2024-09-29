// import Plyr from "plyr-react";
import dynamic from "next/dynamic";
// import "plyr-react/plyr.css";
import React from "react";
import { ReactPlayerProps } from "react-player";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoPlayer = (props: React.ComponentType<ReactPlayerProps>) => {
  return <ReactPlayer {...props} />;
};

export default React.memo(VideoPlayer);
