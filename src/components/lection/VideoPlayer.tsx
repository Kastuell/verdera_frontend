import Plyr from "plyr-react";
import "plyr-react/plyr.css";

export const VideoPlayer = ({ source }: { source: any }) => {
  return (
    <Plyr
      source={source}
    />
  );
};
