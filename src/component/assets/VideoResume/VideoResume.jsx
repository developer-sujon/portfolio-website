import React from "react";
import FancyBox from "../FancyBox/FancyBox";
import TitleDivider from "../TitleDivider/TitleDivider";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const VideoResume = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <TitleDivider
          DividerTitle={"Video resume"}
          TitleNumber={"02"}
          className={"trm-mt-40"}
        />
      </div>
      <div className="col-lg-12">
        <div
          className="trm-video"
        >
          <div className="trm-video-content trm-overlay">
            <img src="img/video.jpg" alt="video-cover" />
            <div className="trm-button-puls" />
            <FancyBox options={{ infinite: false }}>
              <button
                data-fancybox="gallery"
                data-src="https://www.youtube.com/watch?v=Mo_vRjtkgSI"
                className="trm-play-button"
              >
                <PlayArrowIcon />
              </button>
            </FancyBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoResume;
