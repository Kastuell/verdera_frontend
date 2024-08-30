// import Plyr from "plyr-react";
import dynamic from "next/dynamic";
import "plyr-react/plyr.css";
const Plyr = dynamic(() => import("plyr-react"), { ssr: false });

export const VideoPlayer = ({ source }: { source: Plyr.SourceInfo | null }) => {
  return <Plyr source={source} />;
};
